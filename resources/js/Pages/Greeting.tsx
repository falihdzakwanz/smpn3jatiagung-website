import ProfileImage from '@/Components/greeting/ProfileImage';
import Quote from '@/Components/greeting/Quote';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const Greeting = () => {
    return (
        <GuestLayout>
            <Head title="Sambutan" />
            <div className="flex flex-col items-center justify-center gap-8 bg-color-secondary px-8 py-4">
                <h1 className="text-2xl font-bold text-color-primary md:text-4xl">
                    Sambutan Kepala Sekolah
                </h1>
                <ProfileImage />
                <Quote />
            </div>
        </GuestLayout>
    );
};

export default Greeting;
