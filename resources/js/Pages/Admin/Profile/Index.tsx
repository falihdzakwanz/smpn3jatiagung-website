import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';

export default function ProfileIndex() {
    const user = usePage().props.auth.user;
    console.log(user);

    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/' },
                { text: 'Dashboard', href: '/admin' },
                { text: 'Profile' },
            ]}
        >
            <Head title="Profile" />

            <div className="p-6">
                <div className="bg-color-white rounded-lg p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between border-b pb-3">
                        <h1 className="text-2xl font-bold">Profile</h1>
                    </div>

                    <div className="max-w-2xl space-y-6">
                        <div>
                            <label className="text-gray-700 mb-2 block text-sm font-medium">
                                Name
                            </label>

                            <p className="text-gray-900">{user.name}</p>
                        </div>

                        <div>
                            <label className="text-gray-700 mb-2 block text-sm font-medium">
                                Email
                            </label>
                            <p className="text-gray-900">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
