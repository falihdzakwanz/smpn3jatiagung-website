import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface AdminPageContainerProps {
    title: string;
    breadcrumbs?: { text: string; href?: string }[];
    children: React.ReactNode;
}

const AdminPageContainer = ({
    title,
    breadcrumbs,
    children,
}: AdminPageContainerProps) => {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="p-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h1 className="mb-6 border-b pb-3 text-2xl font-bold">
                        {title.toUpperCase()}
                    </h1>
                    {children}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminPageContainer;
