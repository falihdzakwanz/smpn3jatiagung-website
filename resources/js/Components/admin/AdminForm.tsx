// resources/js/Components/admin/AdminForm.tsx
import { useRef } from 'react';
import { FiImage, FiFile } from 'react-icons/fi';

type FieldType = 'text' | 'textarea' | 'image' | 'file';

interface FormField {
    key: string;
    label: string;
    type: FieldType;
    placeholder?: string;
}

interface AdminFormProps {
    fields: FormField[];
    values: Record<string, any>;
    onChange: (key: string, value: any) => void;
    onSubmit: () => void;
    onCancel: () => void;
    hasImage?: boolean;
    hasFile?: boolean;
}

const AdminForm = ({
    fields,
    values,
    onChange,
    onSubmit,
    onCancel,
    hasImage = false,
    hasFile = false,
}: AdminFormProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="space-y-4">
            {fields.map((field) => (
                <div key={field.key} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        {field.label}
                    </label>
                    
                    {field.type === 'textarea' ? (
                        <textarea
                            value={values[field.key] || ''}
                            onChange={(e) => onChange(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            rows={3}
                            className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                        />
                    ) : field.type === 'image' && hasImage ? (
                        <div className="flex items-center gap-4">
                            {values[field.key] && (
                                <img
                                    src={typeof values[field.key] === 'string' ? values[field.key] : URL.createObjectURL(values[field.key])}
                                    alt="Preview"
                                    className="w-20 h-20 object-cover rounded"
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) onChange(field.key, file);
                                }}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm"
                            >
                                <FiImage className="w-4 h-4" />
                                {values[field.key] ? 'Ganti Gambar' : 'Upload Gambar'}
                            </button>
                        </div>
                    ) : field.type === 'file' && hasFile ? (
                        <div className="flex items-center gap-4">
                            {values[field.key] && (
                                <div className="flex items-center gap-2">
                                    <FiFile className="text-gray-600" />
                                    <span className="text-sm">
                                        {typeof values[field.key] === 'string' 
                                            ? values[field.key] 
                                            : values[field.key].name}
                                    </span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                ref={fileInputRef}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) onChange(field.key, file);
                                }}
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="px-3 py-1 bg-[#7166BA] hover:bg-[#6357AB] text-white rounded-md flex items-center gap-1 text-sm"
                            >
                                <FiFile className="w-4 h-4" />
                                {values[field.key] ? 'Ganti File' : 'Upload File'}
                            </button>
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={values[field.key] || ''}
                            onChange={(e) => onChange(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                        />
                    )}
                </div>
            ))}
            
            <div className="flex justify-end gap-2">
                <button
                    onClick={onSubmit}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded"
                >
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AdminForm;