import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import Toaster from '@/Components/Toaster';
import AddButton from '@/Components/ui/AddButton';
import { Column, FormField } from '@/types/admin';
import { Staff } from '@/types/staff';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface Props {
    staffs: Staff[];
}

interface FormData {
    nama: string;
    posisi: string;
}

export default function StaffIndex({ staffs: initialStaffs }: Props) {
    const [editingData, setEditingData] = useState<Staff | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        nama: '',
        posisi: '',
    });

    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    const columns: Column[] = [
        { key: 'nama', label: 'Nama Staff', type: 'text' },
        { key: 'posisi', label: 'Jabatan', type: 'text' },
        { key: 'actions', label: 'Aksi', width: 'w-48' },
    ];

    const formFields: FormField[] = [
        {
            key: 'nama',
            label: 'Nama',
            type: 'text',
            placeholder: 'Masukkan nama staff',
        },
        {
            key: 'posisi',
            label: 'Jabatan',
            type: 'text',
            placeholder: 'Masukkan jabatan staff',
        },
    ];

    const handleEdit = (item: Staff) => {
        setEditingData(item);
        setIsAdding(false);
        setFormData({
            nama: item.nama,
            posisi: item.posisi,
        });
    };

    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setFormData({ nama: '', posisi: '' });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus staff ini?')) {
            router.delete(`/admin/staff/${id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setToast({
                        message: 'Staff berhasil dihapus!',
                        type: 'success',
                    });
                },
                onError: () => {
                    setToast({
                        message: 'Terjadi kesalahan saat menghapus staff.',
                        type: 'error',
                    });
                },
            });
        }
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setFormData({
            nama: '',
            posisi: '',
        });
    };

    const handleSubmit = () => {
        const form = new FormData();

        form.append('name', formData.nama);
        form.append('position', formData.posisi);

        const options = {
            preserveScroll: true,
            onSuccess: () => {
                setToast({
                    message: editingData
                        ? 'Staff berhasil disimpan!'
                        : 'Staff berhasil ditambahkan!',
                    type: 'success',
                });
                setEditingData(null);
                setFormData({
                    nama: '',
                    posisi: '',
                });
                setIsAdding(false);
            },
            onError: () => {
                setToast({
                    message: editingData
                        ? 'Terjadi kesalahan saat menyimpan staff.'
                        : 'Terjadi kesalahan saat menambahkan staff.',
                    type: 'error',
                });
            },
        };

        if (editingData) {
            router.post(`/admin/staff/${editingData.id}`, form, options);
        } else {
            router.post('/admin/staff', form, options);
        }
    };

    return (
        <AdminPageContainer
            title="Manajemen Staff"
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Staff' },
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
                    <AddButton handleAdd={handleAdd} title="Staff" />
                </div>
            )}

            {isAdding || editingData ? (
                <AdminForm
                    fields={formFields}
                    values={formData}
                    onChange={(key, value) =>
                        setFormData((prev) => ({ ...prev, [key]: value }))
                    }
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            ) : (
                <AdminTable
                    items={initialStaffs}
                    columns={columns}
                    uploadPath="staff"
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
        </AdminPageContainer>
    );
}
