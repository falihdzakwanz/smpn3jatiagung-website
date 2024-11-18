// resources/js/Components/admin/AdminTable.tsx
import { FiEdit2, FiTrash2, FiImage, FiFile } from 'react-icons/fi';

interface BaseItem {
    id: number;
}

interface Column {
    key: string;
    label: string;
    type?: 'text' | 'image' | 'file' | 'textarea';
    width?: string;
}

interface AdminTableProps {
    items: any[];
    columns: Column[];
    onEdit: (item: any) => void;
    onDelete: (id: number) => void;
    uploadPath: string;
    hasImage?: boolean;
    hasFile?: boolean;
}

const AdminTable = ({
    items,
    columns,
    onEdit,
    onDelete,
    uploadPath,
    hasImage = false,
    hasFile = false,
}: AdminTableProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="border p-3 text-left">NO</th>
                        {columns.map((column) => (
                            <th 
                                key={column.key} 
                                className={`border p-3 ${column.key === 'actions' ? 'text-center' : 'text-left'} ${column.width || ''}`}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="border p-3">{index + 1}</td>
                            {columns.map((column) => (
                                <td key={column.key} className="border p-3">
                                    {column.key === 'actions' ? (
                                        <div className="flex justify-center gap-2">
                                            <button 
                                                onClick={() => onEdit(item)}
                                                className="bg-[#7166BA] hover:bg-[#6357AB] text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300"
                                            >
                                                <FiEdit2 size={16} />
                                                <span>Edit</span>
                                            </button>
                                            <button 
                                                onClick={() => onDelete(item.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded flex items-center gap-1 transition duration-300"
                                            >
                                                <FiTrash2 size={16} />
                                                <span>Hapus</span>
                                            </button>
                                        </div>
                                    ) : hasImage && column.type === 'image' ? (
                                        item[column.key] ? (
                                            <img 
                                                src={`/storage/${item[column.key]}`}
                                                alt="Preview"
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                        ) : (
                                            <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                                <FiImage className="w-8 h-8 text-gray-400" />
                                            </div>
                                        )
                                    ) : hasFile && column.type === 'file' ? (
                                        <div className="flex items-center gap-2">
                                            <FiFile className="text-gray-600" />
                                            <span className="text-sm truncate max-w-[150px]">
                                                {item[column.key] || 'No file'}
                                            </span>
                                        </div>
                                    ) : column.type === 'textarea' ? (
                                        <div className="max-h-32 overflow-y-auto">
                                            {item[column.key]}
                                        </div>
                                    ) : (
                                        item[column.key]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;