import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Sejarah() {
    const visiList = [
        'CERDAS - Memiliki ilmu pengetahuan dan teknolgi yang dapat digunakan untuk dijadikan bekal dalam menghadapi berbagai tantangan kehidupan.',
        'EKSPLORATIF - Mampu memanfaatkan dan memberdayakan sumber daya yang ada untuk kemaslahatan diri sendiri, orang lain dan lingkungan sekitar.',
        'RELIGIUS - Memiliki keimanan dan ketaqwaan yang diwujudkan dengan menjalankan segala perintah Allah dan menghindari segala yang dilarang Allah',
        'INOVATIF - Memiliki ide dan gagasan yang dapat diterapkan sebagai solusi dalam mengatasi berbagai permasalahan.',
        'AKHLAK MULIA - Memiliki prilaku yang baik terhadap diri sendiri, orang lain dan lingkungan sekitar, sehingga menjadi anak yang sholeh individu dan sholeh sosial.'
    ];

    const misiList = [
        'Membina kesadaran peserta didik akan pentingnya ilmu pengetahuan dan teknologi bagi kehidupan di era global',
        'Membina kesadaran peserta didik agar dapat menemukan dan memanfaatkan segala sumber daya yang ada, untuk dijadikan aset yang dapat diberdayakan',
        'Menanamkan nilai-nilai agama kepada peserta didik agar mampu membentengi diri dari berbagai gangguan dan godaan dalam kehidupan',
        'Membimbing murid agar selalu berinovasi dalam melakukan kegiatan belajar mengajar',
        'Membina karakter dan budi pekerti peserta didik menjadi manusia yang berakhlak mulia di masyarakat'
    ];

    const sejarahMilestones = [
        {
            title: 'Pendirian Sekolah',
            year: '2007',
            image: '/images/sejarahpendirian.jpg',
            content: 'SMPN 3 Jati Agung Lampung Selatan didirikan dengan SK Pendirian Direktur Pembinaan Sekolah Menengah Pertama Direktorat Jenderal Manajemen Pendidikan Dasar dan Menengah Departemen Pendidikan Nasional No. 1068/C3/KEP/2007.'
        },
        {
            title: 'Penegerian Sekolah',
            year: '2007',
            image: '/images/sejarahpenegerian.jpg',
            content: 'Penegerian sekolah disahkan sesuai dengan SK Bupati Lampung Selatan No. 405.A/DIKNAS/HK-LS/2007.'
        },
        {
            title: 'Pengembangan Fasilitas',
            year: '2007-sekarang',
            image: '/images/background-sekolah-2.jpg',
            content: 'Sekolah dibangun di atas tanah berukuran ± 1.113 m² dan telah memiliki Nomor Induk Sekolah: 202020 dan NPSN: 10810771.'
        },
        {
            title: 'Kepemimpinan',
            year: '2007-sekarang',
            image: '/images/sejarahpimpinan.jpg',
            content: 'Di bawah kepemimpinan Bapak Zulpikar, M.Pd sebagai kepala sekolah, sekolah telah mengalami berbagai kemajuan dan perkembangan dari segi tenaga pendidik, jumlah siswa, gedung maupun prasarana lainnya.'
        }
    ];

    return (
        <GuestLayout>
            <Head title="Sejarah" />

            <div className="container mx-auto max-w-[1440px]">
                <div className="mb-20 flex justify-center px-4 md:px-8 lg:px-20">
                    <img
                        src="images/sejarah.jpg"
                        alt="SMPN 3 Jati Agung"
                        className="mt-12 w-full max-w-[700px] rounded-[25px] shadow-2xl md:mt-16 lg:mt-20"
                    />
                </div>

                <div className="relative mb-24 flex flex-col justify-center gap-8 px-4 md:flex-row md:gap-16 md:px-8 lg:gap-32 lg:px-20">
                    <div className="flex-1">
                        <h2 className="font-libre mb-4 text-3xl text-color-primary md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
                            Visi
                        </h2>
                        <p className="mb-4 text-lg text-color-primary">
                            Terwujudnya Peserta didik yang "CERIA", yaitu:
                            "CERDAS, EKSPLORATIF, RELIGIUS, INOVATIF, AKHLAK MULIA"
                        </p>
                        <ol className="ml-5 list-decimal space-y-2 md:space-y-3 lg:space-y-4">
                            {visiList.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-base text-color-primary md:text-lg lg:text-xl"
                                >
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="hidden w-[1px] bg-color-primary md:block"></div>

                    <div className="flex-1">
                        <h2 className="font-libre mb-4 text-3xl text-color-primary md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
                            Misi
                        </h2>
                        <ol className="ml-5 list-decimal space-y-2 md:space-y-3 lg:space-y-4">
                            {misiList.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-base text-color-primary md:text-lg lg:text-xl"
                                >
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="mb-24 px-4 md:px-8 lg:px-20">
                    <h2 className="font-libre mb-16 text-center text-3xl text-color-primary md:text-4xl lg:text-5xl">
                        Sejarah Sekolah
                    </h2>

                    <div className="space-y-16 md:space-y-16">
                        {sejarahMilestones.map((milestone, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-stretch justify-between">
                                {index % 2 === 0 ? (
                                    // Left side (even indices)
                                    <>
                                        <div className="w-full md:w-[45%] flex flex-col gap-4 z-10">
                                            <h3 className="font-libre text-left text-2xl md:text-[32px] text-color-primary">
                                                {milestone.title} ({milestone.year})
                                            </h3>
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full rounded-xl shadow-xl"
                                            />
                                            <p className="text-justify text-base md:text-lg text-color-primary">
                                                {milestone.content}
                                            </p>
                                        </div>
                                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-color-primary"></div>
                                    </>
                                ) : (
                                    // Right side (odd indices)
                                    <>
                                        <div className="hidden md:block w-[45%]"></div>
                                        <div className="w-full md:w-[45%] flex flex-col gap-4 z-10 md:ml-auto">
                                            <h3 className="font-libre text-left text-2xl md:text-[32px] text-color-primary">
                                                {milestone.title} ({milestone.year})
                                            </h3>
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full rounded-xl shadow-xl"
                                            />
                                            <p className="text-justify text-base md:text-lg text-color-primary">
                                                {milestone.content}
                                            </p>
                                        </div>
                                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-color-primary"></div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                </div>

                <div className="mb-24 px-4 md:px-8 lg:px-20">
                    <h2 className="font-libre mb-8 text-center text-3xl text-color-primary md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl">
                        Sekarang
                    </h2>
                    <div className="mb-8 flex justify-center">
                        <img
                            src="/images/sejarahsekarang.jpg"
                            alt="Current Status"
                            className="w-full max-w-[600px] rounded-[25px] shadow-2xl"
                        />
                    </div>
                    <p className="mx-auto max-w-3xl text-center text-base text-color-primary md:text-lg lg:text-xl">
                        Berkat kerjasama yang baik antara kepala sekolah, dewan guru, wali murid, komite dan masyarakat,
                        SMPN 3 Jati Agung terus berkembang menjadi sekolah yang berkualitas dan berprestasi.
                    </p>
                </div>
        </GuestLayout>
    );
}