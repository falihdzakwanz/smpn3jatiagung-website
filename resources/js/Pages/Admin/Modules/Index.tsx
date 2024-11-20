import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useRef } from 'react';
import { FiEdit2, FiTrash2, FiFile, FiDownload } from 'react-icons/fi';

interface Module {
    id: number;
    title: string;
    penerbit: string;
    description: string;
    file_path?: string;
    file_name?: string;
}

export default function ModulesIndex() {
    const [modules, setModules] = useState<Module[]>([
        {
            id: 1,
            title: "Modul Matematika Kelas 7",
            penerbit: "PT Jaya Abadi",
            description: "Materi pembelajaran matematika untuk kelas 7 semester 1",
            file_name: "matematika_7.pdf"
        },
        {
            id: 2,
            title: "Modul Bahasa Indonesia Kelas 7",
            penerbit: "PT Jaya Abadi",
            description: "Materi pembelajaran bahasa indonesia untuk kelas 7 semester 1",
            file_name: "bahasa_7.pdf"
        }
    ]);

    const [editingData, setEditingData] = useState<Module | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [newData, setNewData] = useState<Omit<Module, 'id'>>({
        title: '',
        description: '',
        penerbit: '',
        file_path: '',
        file_name: ''
    });

    // Refs for file inputs
    const fileInputRef = useRef<HTMLInputElement>(null);
    const editFileInputRef = useRef<HTMLInputElement>(null);

    // Handler untuk upload file
    const handleFileSelect = (file: File, isEdit: boolean = false) => {
        // Validasi tipe file
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            alert('Hanya file PDF dan Word (doc/docx) yang diperbolehkan');
            return;
        }

        // Validasi ukuran file (maksimal 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran file maksimal 5MB');
            return;
        }

        if (isEdit && editingData) {
            setEditingData({
                ...editingData,
                file_path: URL.createObjectURL(file),
                file_name: file.name
            });
        } else {
            setNewData({
                ...newData,
                file_path: URL.createObjectURL(file),
                file_name: file.name
            });
        }
    };

    // Handler untuk mulai edit
    const handleEdit = (module: Module) => {
        setEditingData(module);
        setIsAdding(false);
    };

    // Handler untuk save perubahan edit
    const handleSave = () => {
        if (editingData) {
            // Di sini implementasi update ke backend
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('title', editingData.title);
            formData.append('description', editingData.description);
            
            if (editFileInputRef.current?.files?.[0]) {
                formData.append('file', editFileInputRef.current.files[0]);
            }

            router.post(`/admin/modules/${editingData.id}`, formData, {
                onSuccess: () => {
                    setModules(current =>
                        current.map(item =>
                            item.id === editingData.id ? editingData : item
                        )
                    );
                    setEditingData(null);
                }
            });
        }
    };

    // Handler untuk batalkan edit/tambah
    const handleCancel = () => {
        setEditingData(null);
        setIsAdding(false);
        setNewData({ title: '', penerbit: '', description: '', file_path: '', file_name: '' });
    };

    // Handler untuk delete modul
    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus modul ini?')) {
            router.delete(`/admin/modules/${id}`, {
                onSuccess: () => {
                    setModules(current => current.filter(item => item.id !== id));
                }
            });
        }
    };

    // Handler untuk tambah modul
    const handleAdd = () => {
        setIsAdding(true);
        setEditingData(null);
        setNewData({
            title: '',
            penerbit: '',
            description: '',
            file_path: '',
            file_name: '',
        });
    };

    // Handler untuk save data baru
    const handleSaveNew = () => {
        if (newData.title && newData.description && fileInputRef.current?.files?.[0]) {
            const formData = new FormData();
            formData.append('title', newData.title);
            formData.append('penerbit', newData.penerbit);
            formData.append('description', newData.description);
            formData.append('file', fileInputRef.current.files[0]);

            router.post('/admin/modul', formData, {
                onSuccess: () => {
                    const newId = Math.max(0, ...modules.map(item => item.id)) + 1;
                    setModules(current => [...current, { id: newId, ...newData }]);
                    setIsAdding(false);
                    setNewData({ title: '',  penerbit: '', description: '', file_path: '', file_name: '' });
                }
            });
        } else {
            alert('Harap isi semua field dan upload file modul');
        }
    };

    // Handler untuk download file
    const handleDownload = (filePath: string, fileName: string) => {
        window.open(`/storage/${filePath}`, '_blank');
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Modul' }
            ]}
        >
            <Head title="Manajemen Modul" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">DAFTAR MODUL</h1>
                    
                    <div className="mb-6">
                        <button 
                            onClick={handleAdd}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded font-medium flex items-center gap-2 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            <span className="text-xl leading-none">+</span> 
                            <span>Tambah Modul</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border p-3 text-left">NO</th>
                                    <th className="border p-3 text-left">Judul Modul</th>
                                    <th className="border p-3 text-left">Penerbit Modul</th>
                                    <th className="border p-3 text-left">Deskripsi</th>
                                    <th className="border p-3 text-left">File</th>
                                    <th className="border p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modules.map((module, index) => (
                                    <tr key={module.id} className="hover:bg-gray-50">
                                        <td className="border p-3">{index + 1}</td>
                                        <td className="border p-3">
                                            {editingData?.id === module.id ? (
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
                                                module.title
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === module.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.penerbit}
                                                    onChange={(e) => setEditingData({
                                                        ...editingData,
                                                        penerbit: e.target.value
                                                    })}
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                                />
                                            ) : (
                                                module.penerbit
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === module.id ? (
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
                                                module.description
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            {editingData?.id === module.id ? (
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <FiFile className="text-gray-600" />
                                                        <span className="text-sm truncate max-w-[200px]">
                                                            {editingData.file_name || 'Pilih file...'}
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        ref={editFileInputRef}
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            if (e.target.files?.[0]) {
                                                                handleFileSelect(e.target.files[0], true);
                                                            }
                                                        }}
                                                    />
                                                    <button
                                                        onClick={() => editFileInputRef.current?.click()}
                                                        className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm transition duration-300"
                                                    >
                                                        <FiFile className="w-4 h-4" />
                                                        Ganti File
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <FiFile className="text-gray-600" />
                                                    <span className="text-sm truncate max-w-[200px]">
                                                        {module.file_name}
                                                    </span>
                                                    {module.file_path && (
                                                        <button
                                                            onClick={() => handleDownload(module.file_path!, module.file_name!)}
                                                            className="text-[#7166BA] hover:text-[#6357AB] transition-colors"
                                                            title="Download"
                                                        >
                                                            <FiDownload />
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                {editingData?.id === module.id ? (
                                                    <>
                                                        <button 
                                                            onClick={handleSave}
                                                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded transition duration-300"
                                                        >
                                                            Save
                                                        </button>
                                                        <button 
                                                            onClick={handleCancel}
                                                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded transition duration-300"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button 
                                                            onClick={() => handleEdit(module)}
                                                            className="bg-[#7166BA] hover:bg-[#6357AB] text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300"
                                                        >
                                                            <FiEdit2 size={16} />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button 
                                                            onClick={() => handleDelete(module.id)}
                                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300"
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
                                        <td className="border p-3">{modules.length + 1}</td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.title}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    title: e.target.value
                                                })}
                                                placeholder="Masukkan judul modul"
                                                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                                            />
                                        </td>
                                        <td className="border p-3">
                                            <input
                                                type="text"
                                                value={newData.penerbit}
                                                onChange={(e) => setNewData({
                                                    ...newData,
                                                    penerbit: e.target.value
                                                })}
                                                placeholder="Masukkan judul modul"
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
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <FiFile className="text-gray-600" />
                                                    <span className="text-sm truncate max-w-[200px]">
                                                        {newData.file_name || 'Pilih file...'}
                                                    </span>
                                                </div>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    ref={fileInputRef}
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        if (e.target.files?.[0]) {
                                                            handleFileSelect(e.target.files[0]);
                                                        }
                                                    }}
                                                />
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm transition duration-300"
                                                >
                                                    <FiFile className="w-4 h-4" />
                                                    Upload File
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border p-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    onClick={handleSaveNew}
                                                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded transition duration-300"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    onClick={handleCancel}
                                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded transition duration-300"
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