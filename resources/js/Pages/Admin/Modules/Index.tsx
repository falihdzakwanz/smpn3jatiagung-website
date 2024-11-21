import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { Module } from '@/types/module';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Column {
    key: string;
    label: string;
    type?: 'text' | 'textarea' | 'image' | 'file';
    width?: string;
}

interface FormField {
    key: string;
    label: string;
    type: 'text' | 'textarea' | 'image' | 'file';
    placeholder?: string;
}

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

    const columns: Column[] = [
        { key: 'nama', label: 'Nama', type: 'text' },
        { key: 'penerbit', label: 'Penerbit', type: 'text' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
        { key: 'file', label: 'File', type: 'file' },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        { key: 'nama', label: 'Nama', type: 'text', placeholder: 'Masukkan nama modul' },
        { key: 'penerbit', label: 'Penerbit', type: 'text', placeholder: 'Masukkan penerbit' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', placeholder: 'Masukkan deskripsi' },
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
            router.delete(`/admin/modul/${id}`);
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

        if (editingData) {
            router.post(`/admin/modul/${editingData.id}`, form, {
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        nama: '',
                        penerbit: '',
                        deskripsi: '',
                        file: '',
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/modul', form, {
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        nama: '',
                        penerbit: '',
                        deskripsi: '',
                        file: '',
                    });
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminPageContainer title="Daftar Modul">
            {!isAdding && !editingData && (
                <div className="mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 rounded px-6 py-2.5 font-medium"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Modul</span>
                    </button>
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
