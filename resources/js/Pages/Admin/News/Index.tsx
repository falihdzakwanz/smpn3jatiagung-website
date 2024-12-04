import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import Toaster from '@/Components/Toaster';
import AddButton from '@/Components/ui/AddButton';
import { Column, FormField } from '@/types/admin';
import { News } from '@/types/news';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Props {
    news: News[];
}

interface FormData {
    judul: string;
    deskripsi: string;
    gambar?: File | string | null;
}

export default function NewsIndex({ news }: Props) {
    const [editingData, setEditingData] = useState<News | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        judul: '',
        deskripsi: '',
        gambar: undefined,
    });

    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const columns: Column[] = [
        { key: 'gambar', label: 'Gambar', type: 'image', width: 'w-24' },
        { key: 'judul', label: 'Judul', type: 'text' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        {
            key: 'judul',
            label: 'Judul',
            type: 'text',
            placeholder: 'Masukkan judul',
        },
        {
            key: 'deskripsi',
            label: 'Deskripsi',
            type: 'textarea',
            placeholder: 'Masukkan deskripsi',
        },
        {
            key: 'gambar',
            label: 'Gambar',
            type: 'image',
        },
    ];

    const handleEdit = (item: News) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            judul: item.judul,
            deskripsi: item.deskripsi,
            gambar: item.gambar,
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            judul: '',
            deskripsi: '',
            gambar: undefined,
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            judul: '',
            deskripsi: '',
            gambar: undefined,
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            router.delete(`/admin/berita/${id}`, {
                onSuccess: () => {
                    setToast({
                        message: 'Berita berhasil dihapus!',
                        type: 'success',
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menghapus berita.',
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
        form.append('description', formData.deskripsi);

        if (formData.gambar instanceof File) {
            form.append('image', formData.gambar);
        }

        const options = {
            onSuccess: () => {
                setToast({
                    message: 'Berita berhasil disimpan!',
                    type: 'success',
                });
                if (editingData) {
                    setEditingData(null);
                } else {
                    setIsAdding(false);
                }
                setFormData({
                    judul: '',
                    deskripsi: '',
                    gambar: undefined,
                });
            },
            onError: () => {
                setToast({
                    message: 'Terjadi kesalahan saat menyimpan berita.',
                    type: 'error',
                });
            },
            preserveScroll: true,
        };

        if (editingData) {
            router.post(`/admin/berita/${editingData.id}`, form, options);
        } else {
            router.post('/admin/berita', form, options);
        }
    };

    return (
        <AdminPageContainer
            title="Daftar Berita"
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Berita' },
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
                    <AddButton handleAdd={handleAdd} title={'Berita'} />
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
                    items={news}
                    columns={columns}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    uploadPath="news"
                    hasImage
                />
            )}
        </AdminPageContainer>
    );
}
