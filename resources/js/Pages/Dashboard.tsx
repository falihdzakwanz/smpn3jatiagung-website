// File: resources/js/Pages/Admin/Dashboard.tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout
            breadcrumbs={[
                { text: 'Home', href: '/admin' },
                { text: 'Dashboard' }
            ]}
        >
            <Head title="Dashboard" />

            <div className="flex items-center justify-center min-h-[calc(100vh-144px)]">
                <h1 className="text-4xl font-medium text-[#2B2E3C]">
                    Selamat Datang di Dashboard Admin
                </h1>
            </div>
        </AdminLayout>
    );
}