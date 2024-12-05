import { Column } from '@/types/admin';
import { FiFile, FiImage } from 'react-icons/fi';
import DeleteButton from '../ui/DeleteButton';
import EditButton from '../ui/EditButton';

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
    items = [],
    columns = [],
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
                    <tr className="bg-color-gray">
                        <th className="border p-1 text-center">NO</th>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={`border p-3 text-center ${column.width || ''}`}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border p-1 text-center">
                                {index + 1}
                            </td>
                            {columns.map((column) => (
                                <td key={column.key} className="border p-3">
                                    {column.key === 'actions' ? (
                                        <div className="flex justify-center gap-2">
                                            <EditButton
                                                onEdit={onEdit}
                                                item={item}
                                            />
                                            <DeleteButton
                                                onDelete={onDelete}
                                                item={item.id}
                                            />
                                        </div>
                                    ) : hasImage && column.type === 'image' ? (
                                        item[column.key] ? (
                                            <img
                                                src={`/storage/${item[column.key]}`}
                                                alt="Preview"
                                                className="h-40 min-h-40 w-60 min-w-60 rounded object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-40 w-40 items-center justify-center rounded bg-color-gray">
                                                <FiImage className="text-gray-400 h-8 w-8" />
                                            </div>
                                        )
                                    ) : hasFile && column.type === 'file' ? (
                                        item[column.key] ? (
                                            <a
                                                href={`/storage/${item[column.key]}`}
                                                className="flex items-center justify-center gap-2"
                                                download
                                            >
                                                <FiFile size={24} />
                                            </a>
                                        ) : (
                                            <div className="flex h-40 w-40 items-center justify-center">
                                                <FiFile className="h-8 w-8 text-color-gray" />
                                            </div>
                                        )
                                    ) : column.type === 'textarea' ? (
                                        <div className="min-w-32 overflow-y-auto text-justify">
                                            {item[column.key]}
                                        </div>
                                    ) : column.type === 'text' ? (
                                        <div className="max-w-max overflow-y-auto text-justify">
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
