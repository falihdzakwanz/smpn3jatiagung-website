import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

interface AdminPageContainerProps {
    title: string;
    children: React.ReactNode;
}

const AdminPageContainer = ({ title, children }: AdminPageContainerProps) => {
    return (
        <AdminLayout>
            <Head title={title} />
            <div className="p-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h1 className="text-2xl font-bold border-b pb-3 mb-6">
                        {title.toUpperCase()}
                    </h1>
                    {children}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminPageContainer;