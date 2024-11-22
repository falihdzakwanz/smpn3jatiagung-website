import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { Extracurricular } from '@/types/extracurricular';
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
    ekstrakurikuler: Extracurricular[];
}

interface FormData {
    nama: string;
    deskripsi: string;
    foto_judul: string | File | null;
    foto_kegiatan_1: string | File | null;
    foto_kegiatan_2: string | File | null;
    foto_kegiatan_3: string | File | null;
}

export default function ExtracurricularIndex({ ekstrakurikuler }: Props) {
    const [editingData, setEditingData] = useState<Extracurricular | null>(
        null,
    );
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nama: '',
        deskripsi: '',
        foto_judul: null,
        foto_kegiatan_1: null,
        foto_kegiatan_2: null,
        foto_kegiatan_3: null,
    });

    const columns: Column[] = [
        {
            key: 'foto_judul',
            label: 'Gambar Judul',
            type: 'image',
            width: 'w-24',
        },
        { key: 'nama', label: 'Nama', type: 'text' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea' },
        {
            key: 'foto_kegiatan_1',
            label: 'Foto Kegiatan 1',
            type: 'image',
            width: 'w-24',
        },
        {
            key: 'foto_kegiatan_2',
            label: 'Foto Kegiatan 2',
            type: 'image',
            width: 'w-24',
        },
        {
            key: 'foto_kegiatan_3',
            label: 'Foto Kegiatan 3',
            type: 'image',
            width: 'w-24',
        },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        {
            key: 'nama',
            label: 'Nama',
            type: 'text',
            placeholder: 'Masukkan nama',
        },
        {
            key: 'deskripsi',
            label: 'Deskripsi',
            type: 'textarea',
            placeholder: 'Masukkan deskripsi',
        },
        { key: 'foto_judul', label: 'Gambar Judul', type: 'image' },
        { key: 'foto_kegiatan_1', label: 'Foto Kegiatan 1', type: 'image' },
        { key: 'foto_kegiatan_2', label: 'Foto Kegiatan 2', type: 'image' },
        { key: 'foto_kegiatan_3', label: 'Foto Kegiatan 3', type: 'image' },
    ];

    const handleEdit = (item: Extracurricular) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            nama: item.nama,
            deskripsi: item.deskripsi,
            foto_judul: item.foto_judul,
            foto_kegiatan_1: item.foto_kegiatan_1,
            foto_kegiatan_2: item.foto_kegiatan_2,
            foto_kegiatan_3: item.foto_kegiatan_3,
        });
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            nama: '',
            deskripsi: '',
            foto_judul: null,
            foto_kegiatan_1: null,
            foto_kegiatan_2: null,
            foto_kegiatan_3: null,
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({
            nama: '',
            deskripsi: '',
            foto_judul: null,
            foto_kegiatan_1: null,
            foto_kegiatan_2: null,
            foto_kegiatan_3: null,
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus ekstrakurikuler ini?')) {
            router.delete(`/admin/ekstrakurikuler/${id}`);
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
        form.append('deskripsi', formData.deskripsi);

        if (formData.foto_judul instanceof File) {
            form.append('foto_judul', formData.foto_judul);
        }

        if (formData.foto_kegiatan_1 instanceof File) {
            form.append('foto_kegiatan_1', formData.foto_kegiatan_1);
        }

        if (formData.foto_kegiatan_2 instanceof File) {
            form.append('foto_kegiatan_2', formData.foto_kegiatan_2);
        }

        if (formData.foto_kegiatan_3 instanceof File) {
            form.append('foto_kegiatan_3', formData.foto_kegiatan_3);
        }

        if (editingData) {
            router.post(`/admin/ekstrakurikuler/${editingData.id}`, form, {
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        nama: '',
                        deskripsi: '',
                        foto_judul: null,
                        foto_kegiatan_1: null,
                        foto_kegiatan_2: null,
                        foto_kegiatan_3: null,
                    });
                },
                preserveScroll: true,
            });
        } else {
            router.post('/admin/ekstrakurikuler', form, {
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        nama: '',
                        deskripsi: '',
                        foto_judul: null,
                        foto_kegiatan_1: null,
                        foto_kegiatan_2: null,
                        foto_kegiatan_3: null,
                    });
                },
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminPageContainer title="Daftar Ekstrakurikuler">
            {!isAdding && !editingData && (
                <div className="mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 rounded px-6 py-2.5 font-medium"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Ekstrakurikuler</span>
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
                    items={ekstrakurikuler}
                    columns={columns}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    uploadPath="ekstrakurikuler"
                    hasImage
                />
            )}
        </AdminPageContainer>
    );
}

