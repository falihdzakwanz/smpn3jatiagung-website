// File: resources/js/Pages/Admin/News/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { FiEdit2, FiTrash2, FiImage } from 'react-icons/fi';

interface News {
    id: number;
    title: string;
    description: string;
    image?: string;
}

export default function NewsIndex() {
    const [newsItems, setNewsItems] = useState<News[]>([
        {
            id: 1,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "https://www.dummyimage.com/80x80/000/fff&text=LOGO"
        },
        {
            id: 2,
            title: "Lorem Ipsum dolor sit amet",
            description: "WAN TU TRI APT APT APT",
            image: "https://www.dummyimage.com/80x80/000/fff&text=LOGO"
        }
    ]);

    const [editingData, setEditingData] = useState<News | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [newData, setNewData] = useState<Omit<News, 'id'>>({
        title: '',
        description: '',
        image: ''
    });

    // Refs for file inputs
    const fileInputRef = useRef<HTMLInputElement>(null);
    const editFileInputRef = useRef<HTMLInputElement>(null);

    // Handler untuk upload gambar
    const handleImageUpload = (file: File, isEdit: boolean = false) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (isEdit && editingData) {
                setEditingData({
                    ...editingData,
                    image: reader.result as string
                });
            } else {
                setNewData({
                    ...newData,
                    image: reader.result as string
                });
            }
        };
        reader.readAsDataURL(file);
    };

    // Handler untuk mulai edit
    const handleEdit = (news: News) => {
        setEditingData(news);
        setIsAdding(false);
    };

    // Handler untuk save perubahan edit
    const handleSave = () => {
        if (editingData) {
            setNewsItems(current =>
                current.map(item =>
                    item.id === editingData.id ? editingData : item
                )
            );
            setEditingData(null);
        }
    };

    // Handler untuk batalkan edit/tambah
    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setNewData({ title: '', description: '', image: '' });
    };

    // Handler untuk delete berita
    const handleDelete = (newsId: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            setNewsItems(current => current.filter(item => item.id !== newsId));
        }
    };

    // Handler untuk tambah berita
    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setNewData({ title: '', description: '', image: '' });
    };

    // Handler untuk save data baru
    const handleSaveNew = () => {
        if (newData.title && newData.description) {
            const newId = Math.max(0, ...newsItems.map(item => item.id)) + 1;
            const newItem = {
                id: newId,
                title: newData.title,
                description: newData.description,
                image: newData.image || 'https://www.dummyimage.com/80x80/000/fff&text=LOGO'
            };
            setNewsItems(current => [...current, newItem]);
            setIsAdding(false);
            setNewData({ title: '', description: '', image: '' });
        } else {
            alert('Harap isi judul dan deskripsi');
        }
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Berita' }
            ]}
        >
            <Head title="Manajemen Berita" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR BERITA</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAdd}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded font-medium flex items-center gap-2 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            <span className="text-xl leading-none">+</span> 
                            <span>Tambah Berita</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Gambar</th>
                                    <th className="border p-3 text-left">Nama Berita</th>
                                    <th className="border p-3 text-left">Deskripsi</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newsItems.map((news, index) => (
                                    <tr key={news.id} className="hover:bg-gray-50">
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3 w-24">
                                            {editingData?.id === news.id ? (
                                                <div className="flex flex-col items-center gap-2">
                                                    {editingData.image ? (
                                                        <img 
                                                            src={editingData.image} 
                                                            alt="Preview" 
                                                            className="w-20 h-20 object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded">
                                                            <FiImage className="w-8 h-8 text-gray-400" />
                                                        </div>
                                                    )}
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        ref={editFileInputRef}
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            if (e.target.files?.[0]) {
                                                                handleImageUpload(e.target.files[0], true);
                                                            }
                                                        }}
                                                    />
                                                    <button
                                                        onClick={() => editFileInputRef.current?.click()}
                                                        className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                    >
                                                        <FiImage className="w-4 h-4" />
                                                        Ubah Gambar
                                                    </button>
                                                </div>
                                            ) : (
                                                <img 
                                                    src={news.image} 
                                                    alt={news.title} 
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === news.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.title}
                                                    onChange={(e) => setEditingData({
                                                        ...editingData,
                                                        title: e.target.value
                                                    })}
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                                />
                                            ) : (
                                                news.title
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === news.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.description}
                                                    onChange={(e) => setEditingData({
                                                        ...editingData,
                                                        description: e.target.value
                                                    })}
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                                />
                                            ) : (
                                                news.description
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                {editingData?.id === news.id ? (
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
                                                            onClick={() => handleEdit(news)}
                                                            className="bg-[#7166BA] hover:bg-[#6357AB] text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                        >
                                                            <FiEdit2 size={16} />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(news.id)}
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
                                        <td className="border p-3">{newsItems.length + 1}</td>
                                        <td className="border p-3">
                                            <div className="flex flex-col items-center gap-2">
                                                {newData.image ? (
                                                    <img 
                                                        src={newData.image} 
                                                        alt="Preview" 
                                                        className="w-20 h-20 object-cover rounded"
                                                    />
                                                ) : (
                                                    <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded">
                                                        <FiImage className="w-8 h-8 text-gray-400" />
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    ref={fileInputRef}
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        if (e.target.files?.[0]) {
                                                            handleImageUpload(e.target.files[0]);
                                                        }
                                                    }}
                                                />
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                >
                                                    <FiImage className="w-4 h-4" />
                                                    Upload Gambar
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.title}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    title: e.target.value
                                                })}
                                                placeholder="Masukkan judul berita"
                                                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                            />
                                        </td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.description}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    description: e.target.value
                                                })}
                                                placeholder="Masukkan deskripsi"
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