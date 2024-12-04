import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import Toaster from '@/Components/Toaster';
import AddButton from '@/Components/ui/AddButton';
import { Column, FormField } from '@/types/admin';
import { Extracurricular } from '@/types/extracurricular';
import { router } from '@inertiajs/react';
import { useState } from 'react';

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

    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

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
            router.delete(`/admin/ekstrakurikuler/${id}`, {
                onSuccess: () => {
                    setToast({
                        message: 'Ekstrakurikuler berhasil dihapus!',
                        type: 'success',
                    });
                },
                onError: () => {
                    setToast({
                        message:
                            'Terjadi kesalahan saat menghapus ekstrakurikuler.',
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

        const options = {
            onSuccess: () => {
                setToast({
                    message: editingData
                        ? 'Ekstrakurikuler berhasil disimpan!'
                        : 'Ekstrakurikuler berhasil ditambahkan!',
                    type: 'success',
                });
                setEditingData(null);
                setFormData({
                    nama: '',
                    deskripsi: '',
                    foto_judul: null,
                    foto_kegiatan_1: null,
                    foto_kegiatan_2: null,
                    foto_kegiatan_3: null,
                });
                setIsAdding(false);
            },
            onError: () => {
                setToast({
                    message: editingData
                        ? 'Terjadi kesalahan saat menyimpan ekstrakurikuler.'
                        : 'Terjadi kesalahan saat menambahkan ekstrakurikuler.',
                    type: 'error',
                });
            },
            preserveScroll: true,
        };

        if (editingData) {
            router.post(
                `/admin/ekstrakurikuler/${editingData.id}`,
                form,
                options,
            );
        } else {
            router.post('/admin/ekstrakurikuler', form, options);
        }
    };

    return (
        <AdminPageContainer
            title="Daftar Ekstrakurikuler"
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Ekstrakurikuler' },
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
                    <AddButton handleAdd={handleAdd} title="Ekstrakurikuler" />
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
