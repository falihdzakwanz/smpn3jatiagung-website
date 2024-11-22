import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { News } from '@/types/news';
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
        { key: 'gambar', label: 'Gambar', type: 'image' },
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
            router.delete(`/admin/berita/${id}`);
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

        if (editingData) {
            router.post(`/admin/berita/${editingData.id}`, form, {
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        judul: '',
                        deskripsi: '',
                        gambar: undefined,
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/berita', form, {
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        judul: '',
                        deskripsi: '',
                        gambar: undefined,
                    });
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminPageContainer title="Daftar Berita">
            {!isAdding && !editingData && (
                <div className="mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 rounded px-6 py-2.5 font-medium"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Berita</span>
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
