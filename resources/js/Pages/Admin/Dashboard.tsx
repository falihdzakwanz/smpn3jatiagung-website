import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout
            breadcrumbs={[{ text: 'Home', href: '/' }, { text: 'Dashboard' }]}
        >
            <Head title="Dashboard" />

            <div className="flex min-h-[calc(100vh-144px)] items-center justify-center">
                <h1 className="text-4xl font-medium text-[#2B2E3C]">
                    Selamat Datang di Dashboard Admin
                </h1>
            </div>
        </AdminLayout>
    );
}
