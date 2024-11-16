// File: resources/js/Pages/Admin/Achievements/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Achievement {
    id: number;
    name: string;
    image: string;
    status: boolean;
}

export default function AchievementsIndex() {
    const [achievements, setAchievements] = useState<Achievement[]>([
        {
            id: 1,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 2,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: true
        },
        {
            id: 3,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 4,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: true
        },
        {
            id: 5,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 6,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: true
        },
        {
            id: 7,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 8,
            name: "Lorem Ipsum dolor sit amet",
            image: "/dummy-image.jpg",
            status: true
        }
    ]);

    // Handler untuk toggle status
    const handleStatusChange = (id: number) => {
        setAchievements(current => 
            current.map(item => 
                item.id === id 
                    ? { ...item, status: !item.status }
                    : item
            )
        );
        console.log(`Status changed for achievement ID: ${id}`);
    };

    // Handler untuk edit achievement
    const handleEdit = (achievement: Achievement) => {
        console.log('Editing achievement:', achievement);
        alert(`Editing achievement: ${achievement.name}`);
    };

    // Handler untuk delete achievement
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this achievement?')) {
            setAchievements(current => 
                current.filter(item => item.id !== id)
            );
            console.log(`Deleted achievement ID: ${id}`);
        }
    };

    // Handler untuk tambah achievement
    const handleAddPrestasi = () => {
        alert('Opening add achievement form...');
        console.log('Add achievement button clicked');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Prestasi' }
            ]}
        >
            <Head title="Manajemen Prestasi" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR PRESTASI</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAddPrestasi}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Prestasi
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Nama Prestasi</th>
                                    <th className="border p-3 text-center">Gambar</th>
                                    <th className="border p-3 text-center">Status</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {achievements.map((prestasi, index) => (
                                    <tr key={prestasi.id}>
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">{prestasi.name}</td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <img 
                                                    src={prestasi.image} 
                                                    alt={prestasi.name} 
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <Switch
                                                    checked={prestasi.status}
                                                    onChange={() => handleStatusChange(prestasi.id)}
                                                    className={`${
                                                        prestasi.status ? 'bg-blue-600' : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                                                >
                                                    <span className="sr-only">Enable Status</span>
                                                    <span
                                                        className={`${
                                                            prestasi.status ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEdit(prestasi)}
                                                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiEdit2 size={18} />
                                                    <span>Edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(prestasi.id)}
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