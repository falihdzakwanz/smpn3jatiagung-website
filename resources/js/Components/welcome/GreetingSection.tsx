import { Link } from '@inertiajs/react';

const GreetingSection = () => {
    return (
        <div className="relative w-full bg-color-primary">
            <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/9f/61/e5/9f61e508bf9354865d217db723240fe8.jpg')] bg-cover bg-center opacity-10" />
            <div className="container relative mx-auto px-4 py-24">
                <div className="flex flex-col items-center">
                    <h2 className="mb-12 text-2xl font-bold text-color-secondary md:text-4xl">
                        Sambutan Kepala Sekolah
                    </h2>
                    <div className="flex max-w-5xl flex-col items-center gap-12 md:flex-row">
                        <div className="group h-56 w-56 transform overflow-hidden rounded-full shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <div className="relative h-full w-full transform transition-all duration-700 ease-in-out group-hover:rotate-6">
                                <img
                                    src="https://i.pinimg.com/736x/eb/6b/55/eb6b555d44788feb0cb944d110aa8c17.jpg"
                                    alt="Kepala Sekolah"
                                    className="absolute inset-0 h-full w-full scale-100 transform object-cover opacity-100 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-0"
                                />
                                <img
                                    src="https://i.pinimg.com/236x/a2/47/40/a24740387be0e6dbedc0c68eabdebd26.jpg"
                                    alt="Kepala Sekolah"
                                    className="absolute inset-0 h-full w-full scale-110 transform object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100"
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-base md:text-lg">
                            <blockquote className="space-y-6 text-color-secondary md:text-lg">
                                <p className="font-bold">Assalamualaikum Wr. Wb.</p>
                                <p>Tabik Pun</p>
                                <p className="text-justify">
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
                                    className="hover:text-white hover:shadow-red-500/80 text-color-secondary transition-colors duration-300 hover:font-bold hover:underline hover:shadow-lg"
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
