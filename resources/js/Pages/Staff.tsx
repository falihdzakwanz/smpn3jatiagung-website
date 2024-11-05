import GuestLayout from '@/Layouts/GuestLayout';

const Staff = () => {
    const employees = [
        { id: 1, name: 'John Doe', jabatan: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', jabatan: 'Product Manager' },
        { id: 3, name: 'Emily Johnson', jabatan: 'UI/UX Designer' },
        { id: 4, name: 'Michael Brown', jabatan: 'DevOps Engineer' },
        { id: 5, name: 'Sarah Davis', jabatan: 'Data Scientist' },
    ];

    return (
        <GuestLayout>
            <div className="flex w-screen flex-col items-center justify-center gap-8 bg-color-secondary">
                <h1 className="mt-8 text-2xl font-bold text-color-primary md:text-4xl">
                    Struktur Sekolah
                </h1>
                <div className="w-full overflow-x-auto px-4 md:px-12">
                    <table className="bg-white min-w-full border border-color-primary text-sm md:text-base">
                        <thead className="bg-color-accent text-color-secondary">
                            <tr>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">Jabatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id} className="text-center">
                                    <td className="border px-4 py-2 text-sm text-color-primary md:text-base bg-color-white">
                                        {employee.name}
                                    </td>
                                    <td className="border px-4 py-2 text-sm text-color-primary md:text-base bg-color-white">
                                        {employee.jabatan}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Staff;
