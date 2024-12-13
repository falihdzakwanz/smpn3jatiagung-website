import { Link } from '@inertiajs/react';

const GreetingSection = () => {
    const imageUrl = `${import.meta.env.VITE_API_URL}/images/foto-kepala-sekolah.jpg`;

    return (
        <div className="relative w-full bg-color-primary">
            <div className="container relative mx-auto px-4 py-24">
                <div className="flex flex-col items-center">
                    <h2 className="mb-12 text-2xl font-bold text-color-secondary md:text-4xl">
                        Sambutan Kepala Sekolah
                    </h2>
                    <div className="flex max-w-5xl flex-col items-center gap-12 md:flex-row">
                        <div className="group h-56 w-56 transform overflow-hidden rounded-full shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <img
                                src={imageUrl}
                                alt="Kepala Sekolah"
                                className="h-full w-full transform object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="flex-1 text-base md:text-lg">
                            <blockquote className="space-y-6 text-color-secondary md:text-lg">
                                <p className="text-lg font-bold md:text-xl">
                                    Assalamualaikum Wr. Wb.
                                </p>
                                <p className="md:text-lg">Tabik Pun</p>
                                <p className="text-justify md:text-lg">
                                    Selamat datang di website kami SMPN 3 Jati
                                    Agung Kabupaten Lampung Selatan. Website ini
                                    hadir sebagai media informasi dan komunikasi
                                    serta layanan kami bagi peserta didik,
                                    Tenaga Pendidik, Tenaga Kependidikan, Wali
                                    murid, steak holder dan masyarakat.
                                </p>
                            </blockquote>

                            <div className="mt-4">
                                <Link
                                    href="/sambutan"
                                    className="hover:text-white text-color-secondary transition-colors duration-300 hover:font-bold hover:underline hover:shadow-lg hover:shadow-color-danger/80"
                                >
                                    Baca selengkapnya...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreetingSection;
