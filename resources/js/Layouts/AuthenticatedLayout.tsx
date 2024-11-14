import Sidebar from '@/Components/fragments/Sidebar';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

const AuthenticatedLayout = ({children}: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} />
            <main className={`${isSidebarOpen && "ml-96"} px-8 py-4`}>{children}</main>
        </div>
    );
}

export default AuthenticatedLayout;
