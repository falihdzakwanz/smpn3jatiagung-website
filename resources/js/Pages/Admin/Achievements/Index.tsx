import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import Toaster from '@/Components/Toaster';
import AddButton from '@/Components/ui/AddButton';
import { Achievement } from '@/types/achievement';
import { Column, FormField } from '@/types/admin';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Props {
    prestasi: Achievement[];
}

interface FormData {
    judul: string;
    gambar?: File | string;
}

export default function NewsIndex({ prestasi }: Props) {
    const [editingData, setEditingData] = useState<Achievement | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        judul: '',
        gambar: undefined,
    });

    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const columns: Column[] = [
        { key: 'gambar', label: 'Gambar', type: 'image', width: 'w-24' },
        { key: 'judul', label: 'Judul', type: 'text' },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        {
            key: 'judul',
            label: 'Judul',
            type: 'text',
            placeholder: 'Masukkan judul',
        },
        { key: 'gambar', label: 'Gambar', type: 'image' },
    ];

    const handleEdit = (item: Achievement) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            judul: item.judul,
            gambar: item.gambar,
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            judul: '',
            gambar: undefined,
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            judul: '',
            gambar: undefined,
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus prestasi ini?')) {
            router.delete(`/admin/prestasi/${id}`, {
                onSuccess: () => {
                    setToast({
                        message: 'Prestasi berhasil dihapus!',
                        type: 'success',
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menghapus prestasi.',
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

        form.append('title', formData.judul);

        if (formData.gambar instanceof File) {
            form.append('image', formData.gambar);
        }

        if (editingData) {
            router.post(`/admin/prestasi/${editingData.id}`, form, {
                onSuccess: () => {
                    setToast({
                        message: 'Prestasi berhasil disimpan!',
                        type: 'success',
                    });
                    setEditingData(null);
                    setFormData({
                        judul: '',
                        gambar: undefined,
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menyimpan prestasi.',
                        type: 'error',
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/prestasi', form, {
                onSuccess: () => {
                    setToast({
                        message: 'Prestasi berhasil ditambahkan!',
                        type: 'success',
                    });
                    setIsAdding(false);
                    setFormData({
                        judul: '',
                        gambar: undefined,
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menambahkan prestasi.',
                        type: 'error',
                    });
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminPageContainer
            title="Daftar Prestasi"
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Prestasi' },
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
                    <AddButton handleAdd={handleAdd} title='Prestasi'/>
                </div>
            )}

            {isAdding || editingData ? (
                <AdminForm
                    fields={formFields}
                    values={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    hasImage
                />
            ) : (
                <AdminTable
                    items={prestasi}
                    columns={columns}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    uploadPath="prestasi"
                    hasImage
                />
            )}
        </AdminPageContainer>
    );
}
