// File: resources/js/Pages/Admin/Staff/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Staff {
    id: number;
    name: string;
    position: string;
    status: boolean;
}

export default function StaffIndex() {
    // State untuk data staff dengan setter
    const [staffs, setStaffs] = useState<Staff[]>([
        {
            id: 1,
            name: "Lorem Ipsum dolor sit amet",
            position: "Kepala Sekolah",
            status: false
        },
        {
            id: 2,
            name: "Lorem Ipsum dolor sit amet",
            position: "Kepala Sekolah",
            status: true
        },
        // ... data lainnya
    ]);

    // Handler untuk toggle status
    const handleStatusChange = (staffId: number) => {
        setStaffs(currentStaffs => 
            currentStaffs.map(staff => 
                staff.id === staffId 
                    ? { ...staff, status: !staff.status }
                    : staff
            )
        );
        // Di sini nanti bisa ditambahkan API call untuk update status ke backend
        console.log(`Status changed for staff ID: ${staffId}`);
    };

    // Handler untuk edit staff
    const handleEdit = (staff: Staff) => {
        // Nanti di sini bisa ditambahkan logic untuk membuka modal edit atau redirect ke halaman edit
        console.log('Editing staff:', staff);
        alert(`Editing staff: ${staff.name}`);
    };

    // Handler untuk delete staff
    const handleDelete = (staffId: number) => {
        if (confirm('Are you sure you want to delete this staff member?')) {
            setStaffs(currentStaffs => 
                currentStaffs.filter(staff => staff.id !== staffId)
            );
            // Di sini nanti bisa ditambahkan API call untuk delete ke backend
            console.log(`Deleted staff ID: ${staffId}`);
        }
    };

    // Handler untuk tambah staff
    const handleAddStaff = () => {
        // Nanti di sini bisa ditambahkan logic untuk membuka modal tambah staff
        alert('Opening add staff form...');
        console.log('Add staff button clicked');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Profil Staff' }
            ]}
        >
            <Head title="Manajemen Staff" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR STAFF</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAddStaff}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Staff
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Nama Staff</th>
                                    <th className="border p-3 text-left">Jabatan</th>
                                    <th className="border p-3 text-center">Status</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffs.map((staff, index) => (
                                    <tr key={staff.id}>
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">{staff.name}</td>
                                        <td className="border p-3">{staff.position}</td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <Switch
                                                    checked={staff.status}
                                                    onChange={() => handleStatusChange(staff.id)}
                                                    className={`${
                                                        staff.status ? 'bg-blue-600' : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                                                >
                                                    <span className="sr-only">Enable Status</span>
                                                    <span
                                                        className={`${
                                                            staff.status ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEdit(staff)}
                                                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiEdit2 size={18} />
                                                    <span>Edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(staff.id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiTrash2 size={18} />
                                                    <span>Delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}