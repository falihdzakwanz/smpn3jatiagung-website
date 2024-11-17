// File: resources/js/Pages/Admin/News/Index.tsx
import { useState } from 'react';
import { router } from '@inertiajs/react';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import AdminForm from '@/Components/admin/AdminForm';

interface News {
    id: number;
    judul: string;
    deskripsi: string;
    foto?: string;
}

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
    foto?: File | string;
}

export default function NewsIndex({ news }: Props) {
    const [editingData, setEditingData] = useState<News | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        judul: '',
        deskripsi: '',
        foto: undefined
    });

    const columns: Column[] = [
        { key: 'foto', label: 'Gambar', type: 'image', width: 'w-24' },
        { key: 'judul', label: 'Judul', type: 'text' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
        { key: 'actions', label: 'Aksi', width: 'w-48' }
    ];

    const formFields: FormField[] = [
        { key: 'judul', label: 'Judul', type: 'text', placeholder: 'Masukkan judul' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', placeholder: 'Masukkan deskripsi' },
        { key: 'foto', label: 'Gambar', type: 'image' }
    ];

    const handleEdit = (item: News) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            judul: item.judul,
            deskripsi: item.deskripsi,
            foto: item.foto
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            judul: '',
            deskripsi: '',
            foto: undefined
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            judul: '',
            deskripsi: '',
            foto: undefined
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            router.delete(`/admin/news/${id}`);
        }
    };

    const handleChange = (key: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = () => {
        const form = new FormData();
        
        form.append('title', formData.judul);
        form.append('description', formData.deskripsi);
        
        if (formData.foto instanceof File) {
            form.append('image', formData.foto);
        }

        if (editingData) {
            router.post(`/admin/news/${editingData.id}`, form, {
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        judul: '',
                        deskripsi: '',
                        foto: undefined
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/news', form, {
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        judul: '',
                        deskripsi: '',
                        foto: undefined
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
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded font-medium flex items-center gap-2"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Berita</span>
                    </button>
                </div>
            )}

            {(isAdding || editingData) ? (
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