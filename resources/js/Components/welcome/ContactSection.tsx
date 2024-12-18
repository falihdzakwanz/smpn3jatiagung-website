const ContactSection = () => {
    return (
        <div
            id="kontak"
            className="relative w-full scroll-mt-24 bg-color-secondary"
        >
            <div className="container relative mx-auto px-4 py-24">
                <h2 className="mb-16 text-center text-3xl font-bold text-color-primary md:text-5xl">
                    Hubungi Kami
                </h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="rounded-xl bg-color-white/0 p-6">
                        <h3 className="mb-6 text-2xl font-bold text-color-primary">
                            Denah Lokasi
                        </h3>
                        <a
                            href="https://maps.app.goo.gl/2ipHZTeD1oyFzTpA9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block h-80 w-full overflow-hidden rounded-lg shadow-lg"
                        >
                            <img
                                src="/images/maps.jpg"
                                alt="Denah Lokasi"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="bg-black/20 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-4xl font-semibold text-color-white drop-shadow-lg">
                                    Buka di Google Maps
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="rounded-xl bg-color-white p-6 shadow-xl">
                        <h3 className="mb-6 text-2xl font-bold text-color-primary">
                            Kontak
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 rounded-lg bg-color-secondary/10 p-4 transition-colors duration-300 hover:bg-color-secondary/20">
                                <svg
                                    className="h-8 w-8 text-color-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div>
                                    <h4 className="mb-1 font-semibold text-color-primary">
                                        Email
                                    </h4>
                                    <span className="text-lg text-color-primary">
                                        smpn3jatiagung@yahoo.com
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg bg-color-secondary/10 p-4 transition-colors duration-300 hover:bg-color-secondary/20">
                                <svg
                                    className="h-24 w-24 text-color-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div>
                                    <h4 className="mb-1 font-semibold text-color-primary">
                                        Alamat
                                    </h4>
                                    <p className="text-justify text-lg text-color-primary">
                                        Jalan Raya Karang Anyar, Perumahan
                                        Permata Asri, Kecamatan Jati Agung,
                                        Kabupaten Lampung Selatan, Lampung 35365
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg bg-color-secondary/10 p-4 transition-colors duration-300 hover:bg-color-secondary/20">
                                <svg
                                    className="h-8 w-8 text-color-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div>
                                    <h4 className="mb-1 font-semibold text-color-primary">
                                        Telepon
                                    </h4>
                                    <span className="text-lg text-color-primary">
                                        0821-8044-1426
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
