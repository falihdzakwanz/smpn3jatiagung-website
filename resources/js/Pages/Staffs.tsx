import GuestLayout from '@/Layouts/GuestLayout';
import { Staff } from '@/types/staff';

type Proptypes = {
    staffs: Staff[];
}

const Staffs = (props: Proptypes) => {
    const { staffs } = props;

    return (
        <GuestLayout>
            <div className="flex w-screen flex-col items-center justify-center gap-4 bg-color-secondary md:gap-8">
                <h1 className="mt-4 font-libre-bold text-2xl text-color-primary md:mt-8 md:text-4xl">
                    Struktur Sekolah
                </h1>
                <div className="w-full overflow-x-auto px-4 md:px-12">
                    <table className="bg-white mb-8 min-w-full border border-color-primary text-sm md:text-base">
                        <thead className="bg-color-accent text-color-secondary">
                            <tr>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">Jabatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff: Staff) => (
                                <tr key={staff.id} className="text-center">
                                    <td className="border bg-color-white px-4 py-2 text-sm text-color-primary md:text-base">
                                        {staff.nama}
                                    </td>
                                    <td className="border bg-color-white px-4 py-2 text-sm text-color-primary md:text-base">
                                        {staff.posisi}
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

export default Staffs;
