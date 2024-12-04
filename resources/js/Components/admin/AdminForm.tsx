import { useState } from 'react';
import { FiFile, FiImage } from 'react-icons/fi';
import Tooltip from '../ToolTip';
import { FieldType } from '@/types/admin';

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
    const [filePreviews, setFilePreviews] = useState<Record<string, string>>(
        {},
    );

    const handleFileChange = (key: string, file: File | null) => {
        if (file) {
            onChange(key, file);
            setFilePreviews((prev) => ({
                ...prev,
                [key]: URL.createObjectURL(file),
            }));
        }
    };

    return (
        <div className="space-y-4">
            {fields.map((field) => (
                <div key={field.key} className="space-y-2">
                    <label className="text-gray-700 block text-base font-medium">
                        {field.label}
                    </label>

                    {field.type === 'textarea' ? (
                        <textarea
                            value={values[field.key] || ''}
                            onChange={(e) =>
                                onChange(field.key, e.target.value)
                            }
                            placeholder={field.placeholder}
                            rows={3}
                            className="w-full rounded border px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                        />
                    ) : field.type === 'image' && hasImage ? (
                        <div className="flex items-center gap-4">
                            {(filePreviews[field.key] ||
                                typeof values[field.key] === 'string') && (
                                <img
                                    src={
                                        filePreviews[field.key] ||
                                        `/storage/${values[field.key]}`
                                    }
                                    alt="Preview"
                                    className="h-40 min-h-40 w-60 min-w-60 rounded object-cover"
                                />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    handleFileChange(
                                        field.key,
                                        e.target.files?.[0] || null,
                                    )
                                }
                                className="hidden"
                                id={field.key}
                            />
                            <Tooltip text="max 2MB: jpeg, png, jpg">
                                <label
                                    htmlFor={field.key}
                                    className="bg-color-purple hover:text-color-darker-purple flex cursor-pointer items-center gap-1 rounded-md px-4 py-2 text-base text-color-white transition-all duration-300"
                                >
                                    <FiImage className="h-4 w-4" />
                                    {values[field.key]
                                        ? 'Ganti Gambar'
                                        : 'Upload Gambar'}
                                </label>
                            </Tooltip>
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
                                onChange={(e) =>
                                    handleFileChange(
                                        field.key,
                                        e.target.files?.[0] || null,
                                    )
                                }
                                className="hidden"
                                id={field.key}
                            />
                            <Tooltip text="pdf, doc, docx">
                                <label
                                    htmlFor={field.key}
                                    className="text-color-white bg-color-purple hover:text-color-darker-purple flex cursor-pointer items-center gap-1 rounded-md px-4 py-2 text-base transition-all duration-300"
                                >
                                    <FiFile className="h-4 w-4" />
                                    {values[field.key]
                                        ? 'Ganti File'
                                        : 'Upload File'}
                                </label>
                            </Tooltip>
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={values[field.key] || ''}
                            onChange={(e) =>
                                onChange(field.key, e.target.value)
                            }
                            placeholder={field.placeholder}
                            className="w-full rounded border px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#7166BA]"
                        />
                    )}
                </div>
            ))}

            <div className="flex justify-end gap-2">
                <button
                    onClick={onSubmit}
                    className="hover:text-color-darker-purple rounded bg-color-succes px-4 py-2 text-color-white transition-all duration-300"
                >
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="bg-color-gray hover:text-color-darker-purple rounded px-4 py-2 text-color-white transition-all duration-300"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AdminForm;
