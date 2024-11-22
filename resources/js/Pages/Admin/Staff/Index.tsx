import AdminForm from '@/Components/admin/AdminForm';
import AdminPageContainer from '@/Components/admin/AdminPageContainer';
import AdminTable from '@/Components/admin/AdminTable';
import { Staff } from '@/types/staff';
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

        if (editingData) {
            router.post(`/admin/staff/${editingData.id}`, form, {
                preserveScroll: true,
                onSuccess: () => {
                    setEditingData(null);
                    setFormData({
                        nama: '',
                        posisi: '',
                    });
                },
            });
        } else {
            router.post('/admin/staff', form, {
                preserveScroll: true,
                onSuccess: () => {
                    setIsAdding(false);
                    setFormData({
                        nama: '',
                        posisi: '',
                    });
                },
            });
        }
    };

    return (
        <AdminPageContainer title="Manajemen Staff">
            {!isAdding && !editingData && (
                <div className="mb-6">
                    <button
                        onClick={handleAdd}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 rounded px-6 py-2.5 font-medium"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span>Tambah Staff</span>
                    </button>
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
