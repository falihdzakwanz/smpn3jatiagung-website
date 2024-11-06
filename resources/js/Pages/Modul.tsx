import Card from '@/Components/modul/Card';
import GuestLayout from '@/Layouts/GuestLayout';

const Modul = () => {
        const modules = [
        {
            id: 1,
            nama: 'Pengantar Pemrograman',
            penulis: 'John Doe',
            tahun: 2023,
            penerbit: 'Tech Books Publishing',
            deskripsi:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, leo at mollis commodo, dolor libero facilisis ipsum, at ultrices quam leo et risus.',
        },
        {
            id: 2,
            nama: 'Dasar-Dasar Jaringan Komputer',
            penulis: 'Jane Smith',
            tahun: 2022,
            penerbit: 'Network Publishers',
            deskripsi:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, leo at mollis commodo, dolor libero facilisis ipsum, at ultrices quam leo et risus.',
        },
        {
            id: 3,
            nama: 'Algoritma dan Struktur Data',
            penulis: 'Michael Brown',
            tahun: 2021,
            penerbit: 'Algo Publishers',
            deskripsi:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, leo at mollis commodo, dolor libero facilisis ipsum, at ultrices quam leo et risus.',
        },
        {
            id: 4,
            nama: 'Pengembangan Web Modern',
            penulis: 'Emily Johnson',
            tahun: 2023,
            penerbit: 'Web Dev Books',
            deskripsi:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, leo at mollis commodo, dolor libero facilisis ipsum, at ultrices quam leo et risus.',
        },
        {
            id: 5,
            nama: 'Manajemen Basis Data',
            penulis: 'Sarah Davis',
            tahun: 2020,
            penerbit: 'DB Management Press',
            deskripsi:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, leo at mollis commodo, dolor libero facilisis ipsum, at ultrices quam leo et risus.',
        },
    ];

    return (
        <GuestLayout>
            <div className="flex w-screen flex-col items-center justify-center bg-color-secondary py-8">
                <h1 className="mb-4 text-2xl font-bold md:mb-8 md:text-4xl text-color-primary">
                    Modul Pembelajaran
                </h1>
                <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8">
                    {modules.map((module) => (
                        <Card 
                            id={module.id}
                            name={module.nama}
                            publisher={module.penerbit}
                            description={module.deskripsi}
                            file={"text"}
                        />                   
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Modul;
