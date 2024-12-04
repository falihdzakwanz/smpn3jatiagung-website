import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import Toaster from '@/Components/Toaster';
import AddButton from '@/Components/ui/AddButton';
import { Column, FormField } from '@/types/admin';
import { Module } from '@/types/module';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Props {
    modules: Module[];
}

interface FormData {
    nama: string;
    penerbit: string;
    deskripsi: string;
    file: File | string;
}

export default function ModulesIndex({ modules }: Props) {
    const [editingData, setEditingData] = useState<Module | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nama: '',
        penerbit: '',
        deskripsi: '',
        file: '',
    });

    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const columns: Column[] = [
        { key: 'nama', label: 'Nama', type: 'text' },
        { key: 'penerbit', label: 'Penerbit', type: 'text' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
        { key: 'file', label: 'File', type: 'file' },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        {
            key: 'nama',
            label: 'Nama',
            type: 'text',
            placeholder: 'Masukkan nama modul',
        },
        {
            key: 'penerbit',
            label: 'Penerbit',
            type: 'text',
            placeholder: 'Masukkan penerbit',
        },
        {
            key: 'deskripsi',
            label: 'Deskripsi',
            type: 'textarea',
            placeholder: 'Masukkan deskripsi',
        },
        { key: 'file', label: 'File', type: 'file' },
    ];

    const handleEdit = (item: Module) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            nama: item.nama,
            penerbit: item.penerbit,
            deskripsi: item.deskripsi,
            file: item.file,
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            nama: '',
            penerbit: '',
            deskripsi: '',
            file: '',
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            nama: '',
            penerbit: '',
            deskripsi: '',
            file: '',
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus modul ini?')) {
            router.delete(`/admin/modul/${id}`, {
                onSuccess: () => {
                    setToast({
                        message: 'Modul berhasil dihapus!',
                        type: 'success',
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menghapus modul.',
                        type: 'error',
                    });
                },
                preserveScroll: true,
            });
        }
    };

    const handleChange = (key: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        const form = new FormData();

        form.append('nama', formData.nama);
        form.append('penerbit', formData.penerbit);
        form.append('deskripsi', formData.deskripsi);

        if (formData.file instanceof File) {
            form.append('file', formData.file);
        }

        const options = {
            onSuccess: () => {
                setToast({
                    message: editingData
                        ? 'Modul berhasil disimpan!'
                        : 'Modul berhasil ditambahkan!',
                    type: 'success',
                });
                setEditingData(null);
                setFormData({
                    nama: '',
                    penerbit: '',
                    deskripsi: '',
                    file: '',
                });
                setIsAdding(false);
            },
            onError: () => {
                setToast({
                    message: editingData
                        ? 'Terjadi kesalahan saat menyimpan modul.'
                        : 'Terjadi kesalahan saat menambahkan modul.',
                    type: 'error',
                });
            },
            preserveScroll: true,
        };

        if (editingData) {
            router.post(`/admin/modul/${editingData.id}`, form, options);
        } else {
            router.post('/admin/modul', form, options);
        }
    };

    return (
        <AdminPageContainer
            title="Daftar Modul"
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Modul' },
            ]}
        >
            {toast && (
                <Toaster
                    message={toast.message}
                    type={toast.type}
                    duration={3000}
                    onClose={() => setToast(null)}
                />
            )}

            {!isAdding && !editingData && (
                <div className="mb-6">
                    <AddButton handleAdd={handleAdd} title="Modul" />
                </div>
            )}

            {isAdding || editingData ? (
                <AdminForm
                    fields={formFields}
                    values={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    hasFile
                />
            ) : (
                <AdminTable
                    items={modules}
                    columns={columns}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    uploadPath="modul"
                    hasImage
                    hasFile
                />
            )}
        </AdminPageContainer>
    );
}
