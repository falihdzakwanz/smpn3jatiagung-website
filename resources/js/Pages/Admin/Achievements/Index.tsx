import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { Achievement } from '@/types/achievement';
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
            router.delete(`/admin/prestasi/${id}`);
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
                    setEditingData(null);
                    setFormData({
                        judul: '',
                        gambar: undefined,
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/prestasi', form, {
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        judul: '',
                        gambar: undefined,
                    });
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminPageContainer title="Daftar Prestasi">
            {!isAdding && !editingData && (
                <div className="mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 rounded px-6 py-2.5 font-medium"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Prestasi</span>
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
