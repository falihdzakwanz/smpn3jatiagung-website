// File: resources/js/Pages/Admin/Settings/Index.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState, ChangeEvent } from 'react';

interface WebsiteSettings {
    siteName: string;
    siteDescription: string;
    email: string;
    phone: string;
    address: string;
    logoUrl: string;
}

export default function SettingsIndex() {
    const [isEditing, setIsEditing] = useState(false);
    const [settings, setSettings] = useState<WebsiteSettings>({
        siteName: 'SMPN 3 Jatiagung',
        siteDescription: 'Website Resmi SMPN 3 Jatiagung',
        email: 'admin@smpn3jatiagung.sch.id',
        phone: '021-1234567',
        address: 'Jl. Example No. 123',
        logoUrl: '/logo.png'
    });

    const [tempSettings, setTempSettings] = useState(settings);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
            setTempSettings({
                ...tempSettings,
                logoUrl: URL.createObjectURL(event.target.files[0])
            });
        }
    };

    const handleSave = () => {
        // Here you would typically make an API call to save the settings and upload the image
        setSettings(tempSettings);
        setIsEditing(false);
        alert('Settings saved successfully!');

        // Reset selected image
        setSelectedImage(null);
    };

    const handleCancel = () => {
        setTempSettings(settings);
        setIsEditing(false);
        setSelectedImage(null);
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Settings' }
            ]}
        >
            <Head title="Website Settings" />

            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center border-b pb-3 mb-6">
                        <h1 className="text-2xl font-bold">Website Settings</h1>
                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Edit Settings  
                            </button>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Logo Upload Section */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Website Logo
                            </label>
                            <div className="flex items-center gap-4">
                                <img
                                    src={tempSettings.logoUrl}
                                    alt="Website Logo"
                                    className="h-20 w-20 object-contain bg-gray-100 rounded"
                                />
                                {isEditing && (
                                    <div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                            id="logo-upload"
                                        />
                                        <label
                                            htmlFor="logo-upload"
                                            className="text-blue-500 hover:text-blue-600 cursor-pointer"
                                        >
                                            Change Logo
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Website Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Site Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Site Name
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={tempSettings.siteName}
                                        onChange={(e) => setTempSettings({
                                            ...tempSettings,
                                            siteName: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900">{settings.siteName}</p>
                                )}
                            </div>

                            {/* Site Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Site Description
                                </label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={tempSettings.siteDescription}
                                        onChange={(e) => setTempSettings({
                                            ...tempSettings,
                                            siteDescription: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900">{settings.siteDescription}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={tempSettings.email}
                                        onChange={(e) => setTempSettings({
                                            ...tempSettings,
                                            email: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900">{settings.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={tempSettings.phone}
                                        onChange={(e) => setTempSettings({
                                            ...tempSettings,
                                            phone: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900">{settings.phone}</p>
                                )}
                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                {isEditing ? (
                                    <textarea
                                        value={tempSettings.address}
                                        onChange={(e) => setTempSettings({
                                            ...tempSettings,
                                            address: e.target.value
                                        })}
                                        rows={3}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-900">{settings.address}</p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {isEditing && (
                            <div className="flex justify-end gap-4 pt-4">
                                <button
                                    onClick={handleCancel}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}