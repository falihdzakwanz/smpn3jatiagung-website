// File: resources/js/Pages/Admin/Staff/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Staff {
    id: number;
    nama: string;
    posisi: string;
}

interface Props {
    staffs: Staff[];
}

export default function StaffIndex({ staffs: initialStaffs }: Props) {
    const [editingData, setEditingData] = useState<Staff | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [newData, setNewData] = useState<Omit<Staff, 'id'>>({
        nama: '',
        posisi: ''
    });

    // Handler untuk mulai edit
    const handleEdit = (staff: Staff) => {
        setEditingData(staff);
        setIsAdding(false);
    };

    // Handler untuk save perubahan edit
    const handleSave = () => {
        if (editingData) {
            router.put(`/admin/staff/${editingData.id}`, {
                name: editingData.nama,
                position: editingData.posisi
            }, {
                preserveScroll: true,
                onSuccess: () => {
                    setEditingData(null);
                }
            });
        }
    };

    // Handler untuk batalkan edit/tambah
    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setNewData({ nama: '', posisi: '' });
    };

    // Handler untuk delete staff
    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus staff ini?')) {
            router.delete(`/admin/staff/${id}`, {
                preserveScroll: true
            });
        }
    };

    // Handler untuk tambah staff
    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setNewData({ nama: '', posisi: '' });
    };

    // Handler untuk save data baru
    const handleSaveNew = () => {
        if (newData.nama && newData.posisi) {
            router.post('/admin/staff', {
                name: newData.nama,
                position: newData.posisi
            }, {
                preserveScroll: true,
                onSuccess: () => {
                    setIsAdding(false);
                    setNewData({ nama: '', posisi: '' });
                }
            });
        } else {
            alert('Harap isi semua field yang diperlukan');
        }
    };

    return (
        <AdminLayout>
            <Head title="Manajemen Staff" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center border-b pb-3 mb-6">
                        <h1 className="text-2xl font-semibold">Daftar Staff</h1>
                        
                        <button 
                            onClick={handleAdd}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            <span className="text-xl leading-none">+</span> 
                            <span>Tambah Staff</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Nama Staff</th>
                                    <th className="border p-3 text-left">Jabatan</th>
                                    <th className="border p-3 text-center w-48">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialStaffs.map((staff, index) => (
                                    <tr key={staff.id} className="hover:bg-gray-50">
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">
                                            {editingData?.id === staff.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.nama}
                                                    onChange={(e) => setEditingData({
                                                        ...editingData,
                                                        nama: e.target.value
                                                    })}
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                                />
                                            ) : (
                                                staff.nama
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === staff.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.posisi}
                                                    onChange={(e) => setEditingData({
                                                        ...editingData,
                                                        posisi: e.target.value
                                                    })}
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                                />
                                            ) : (
                                                staff.posisi
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                {editingData?.id === staff.id ? (
                                                    <>
                                                        <button 
                                                            onClick={handleSave}
                                                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                        >
                                                            Save
                                                        </button>
                                                        <button 
                                                            onClick={handleCancel}
                                                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button 
                                                            onClick={() => handleEdit(staff)}
                                                            className="bg-[#7166BA] hover:bg-[#6357AB] text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                        >
                                                            <FiEdit2 size={16} />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(staff.id)}
                                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                                                        >
                                                            <FiTrash2 size={16} />
                                                            <span>Hapus</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {isAdding && (
                                    <tr>
                                        <td className="border p-3">{initialStaffs.length + 1}</td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.nama}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    nama: e.target.value
                                                })}
                                                placeholder="Masukkan nama staff"
                                                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                            />
                                        </td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.posisi}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    posisi: e.target.value
                                                })}
                                                placeholder="Masukkan jabatan"
                                                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                            />
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={handleSaveNew}
                                                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={handleCancel}
                                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}