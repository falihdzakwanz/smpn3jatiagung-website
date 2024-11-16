// File: resources/js/Pages/Admin/History/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface History {
    id: number;
    title: string;
    description: string;
    image: string;
    status: boolean;
}

export default function HistoryIndex() {
    const [histories, setHistories] = useState<History[]>([
        {
            id: 1,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 2,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "/dummy-image.jpg",
            status: true
        },
        {
            id: 3,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "/dummy-image.jpg",
            status: false
        },
        {
            id: 4,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "/dummy-image.jpg",
            status: true
        }
    ]);

    // Handler untuk toggle status
    const handleStatusChange = (historyId: number) => {
        setHistories(currentHistories => 
            currentHistories.map(history => 
                history.id === historyId 
                    ? { ...history, status: !history.status }
                    : history
            )
        );
        console.log(`Status changed for history ID: ${historyId}`);
    };

    // Handler untuk edit history
    const handleEdit = (history: History) => {
        console.log('Editing history:', history);
        alert(`Editing history: ${history.title}`);
    };

    // Handler untuk delete history
    const handleDelete = (historyId: number) => {
        if (confirm('Are you sure you want to delete this history?')) {
            setHistories(currentHistories => 
                currentHistories.filter(history => history.id !== historyId)
            );
            console.log(`Deleted history ID: ${historyId}`);
        }
    };

    // Handler untuk tambah history
    const handleAddHistory = () => {
        alert('Opening add history form...');
        console.log('Add history button clicked');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Sejarah' }
            ]}
        >
            <Head title="Manajemen Sejarah" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR SEJARAH</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAddHistory}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Sejarah
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Sejarah</th>
                                    <th className="border p-3 text-left">Deskripsi</th>
                                    <th className="border p-3 text-center">Gambar</th>
                                    <th className="border p-3 text-center">Status</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {histories.map((history, index) => (
                                    <tr key={history.id}>
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">{history.title}</td>
                                        <td className="border p-3">{history.description}</td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <img 
                                                    src={history.image} 
                                                    alt={history.title} 
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <Switch
                                                    checked={history.status}
                                                    onChange={() => handleStatusChange(history.id)}
                                                    className={`${
                                                        history.status ? 'bg-blue-600' : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                                                >
                                                    <span className="sr-only">Enable Status</span>
                                                    <span
                                                        className={`${
                                                            history.status ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEdit(history)}
                                                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiEdit2 size={18} />
                                                    <span>Edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(history.id)}
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