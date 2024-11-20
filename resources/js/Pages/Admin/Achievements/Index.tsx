import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Prestasi {
    id: number;
    judul: string;
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
    prestasi: Prestasi[];
}

interface FormData {
    judul: string;
    foto?: File | string;
}

export default function NewsIndex({ prestasi }: Props) {
    const [editingData, setEditingData] = useState<Prestasi | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        judul: '',
        foto: undefined,
    });

    const columns: Column[] = [
        { key: 'foto', label: 'Gambar', type: 'image', width: 'w-24' },
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
        { key: 'foto', label: 'Gambar', type: 'image' },
    ];

    const handleEdit = (item: Prestasi) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            judul: item.judul,
            foto: item.foto,
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            judul: '',
            foto: undefined,
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            judul: '',
            foto: undefined,
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

        if (formData.foto instanceof File) {
            form.append('image', formData.foto);
        }

        if (editingData) {
            router.post(`/admin/prestasi/${editingData.id}`, form, {
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        judul: '',
                        foto: undefined,
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
                        foto: undefined,
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
