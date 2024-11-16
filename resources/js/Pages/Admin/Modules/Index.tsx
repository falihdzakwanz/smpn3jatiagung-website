// File: resources/js/Pages/Admin/Modules/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Module {
    id: number;
    name: string;
    description: string;
    link: string;
    status: boolean;
}

export default function ModuleIndex() {
    const [modules, setModules] = useState<Module[]>([
        {
            id: 1,
            name: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            link: "https://kaderisasi.com",
            status: false
        },
        {
            id: 2,
            name: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            link: "https://kaderisasi.com",
            status: true
        },
        {
            id: 3,
            name: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            link: "https://kaderisasi.com",
            status: false
        },
        {
            id: 4,
            name: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            link: "https://kaderisasi.com",
            status: true
        },
        {
            id: 5,
            name: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            link: "https://kaderisasi.com",
            status: false
        }
    ]);

    // Handler untuk toggle status
    const handleStatusChange = (moduleId: number) => {
        setModules(currentModules => 
            currentModules.map(module => 
                module.id === moduleId 
                    ? { ...module, status: !module.status }
                    : module
            )
        );
        console.log(`Status changed for module ID: ${moduleId}`);
    };

    // Handler untuk edit module
    const handleEdit = (module: Module) => {
        console.log('Editing module:', module);
        alert(`Editing module: ${module.name}`);
    };

    // Handler untuk delete module
    const handleDelete = (moduleId: number) => {
        if (confirm('Are you sure you want to delete this module?')) {
            setModules(currentModules => 
                currentModules.filter(module => module.id !== moduleId)
            );
            console.log(`Deleted module ID: ${moduleId}`);
        }
    };

    // Handler untuk tambah module
    const handleAddModule = () => {
        alert('Opening add module form...');
        console.log('Add module button clicked');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Module' }
            ]}
        >
            <Head title="Manajemen Module" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR MODULE</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAddModule}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Module
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Nama Module</th>
                                    <th className="border p-3 text-left">Deskripsi</th>
                                    <th className="border p-3 text-left">Link</th>
                                    <th className="border p-3 text-center">Status</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modules.map((module, index) => (
                                    <tr key={module.id}>
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">{module.name}</td>
                                        <td className="border p-3">{module.description}</td>
                                        <td className="border p-3">
                                            <a 
                                                href={module.link} 
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {module.link}
                                            </a>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <Switch
                                                    checked={module.status}
                                                    onChange={() => handleStatusChange(module.id)}
                                                    className={`${
                                                        module.status ? 'bg-blue-600' : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                                                >
                                                    <span className="sr-only">Enable Status</span>
                                                    <span
                                                        className={`${
                                                            module.status ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEdit(module)}
                                                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiEdit2 size={18} />
                                                    <span>Edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(module.id)}
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