// File: resources/js/Pages/Admin/Contact/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Contact {
    id: number;
    element: string;
    description: string;
    image?: string;
    status: boolean;
}

export default function ContactIndex() {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1,
            element: "EMAIL",
            description: "WAN TU TRI APT APT APT",
            status: false
        },
        {
            id: 2,
            element: "ALAMAT",
            description: "WAN TU TRI APT APT APT",
            status: true
        },
        {
            id: 3,
            element: "TELEPON",
            description: "WAN TU TRI APT APT APT",
            status: false
        },
        {
            id: 4,
            element: "FAX",
            description: "WAN TU TRI APT APT APT",
            status: true
        },
        {
            id: 5,
            element: "DENAH",
            description: "WAN TU TRI APT APT APT",
            image: "/dummy-image.jpg",
            status: false
        }
    ]);

    // Handler untuk toggle status
    const handleStatusChange = (contactId: number) => {
        setContacts(currentContacts => 
            currentContacts.map(contact => 
                contact.id === contactId 
                    ? { ...contact, status: !contact.status }
                    : contact
            )
        );
        console.log(`Status changed for contact ID: ${contactId}`);
    };

    // Handler untuk edit contact
    const handleEdit = (contact: Contact) => {
        console.log('Editing contact:', contact);
        alert(`Editing contact: ${contact.element}`);
    };

    // Handler untuk delete contact
    const handleDelete = (contactId: number) => {
        if (confirm('Are you sure you want to delete this contact?')) {
            setContacts(currentContacts => 
                currentContacts.filter(contact => contact.id !== contactId)
            );
            console.log(`Deleted contact ID: ${contactId}`);
        }
    };

    // Handler untuk tambah contact
    const handleAddContact = () => {
        alert('Opening add contact form...');
        console.log('Add contact button clicked');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Kontak' }
            ]}
        >
            <Head title="Manajemen Kontak" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR KONTAK</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAddContact}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Kontak
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Elemen</th>
                                    <th className="border p-3 text-left">Deskripsi</th>
                                    <th className="border p-3 text-center">Gambar</th>
                                    <th className="border p-3 text-center">Status</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact.id}>
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">{contact.element}</td>
                                        <td className="border p-3">{contact.description}</td>
                                        <td className="border p-3">
                                            {contact.image && (
                                                <div className="flex justify-center">
                                                    <img 
                                                        src={contact.image} 
                                                        alt={contact.element} 
                                                        className="w-10 h-10 object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center">
                                                <Switch
                                                    checked={contact.status}
                                                    onChange={() => handleStatusChange(contact.id)}
                                                    className={`${
                                                        contact.status ? 'bg-blue-600' : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
                                                >
                                                    <span className="sr-only">Enable Status</span>
                                                    <span
                                                        className={`${
                                                            contact.status ? 'translate-x-6' : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
                                                    />
                                                </Switch>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={() => handleEdit(contact)}
                                                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center gap-1"
                                                >
                                                    <FiEdit2 size={18} />
                                                    <span>Edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(contact.id)}
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