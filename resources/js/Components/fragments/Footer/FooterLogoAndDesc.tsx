const FooterLogoAndDesc = () => {
    return (
        <div className="mb-4 flex w-full flex-col md:flex-row items-center gap-4">
            <img
                src="/images/logo-sekolah.png"
                alt="Logo"
                className="mb-1 h-20 w-20 md:h-28 md:w-28 md:mb-0 md:mr-4"
            />
            <div>
                <h2 className="text-xl font-bold tracking-widest md:text-2xl">
                    SPANTIJA
                </h2>
                <p className="text-justify text-sm md:text-base">
                    SMPN 3 Jati Agung Lampung Selatan didirikan pada tahun 2007,
                    dengan SK Pendirian Direktur Pembinaan Sekolah Menengah
                    Pertama Direktorat Jenderal Manajemen Pendidikan Dasar dan
                    Menengah Departemen Pendidikan Nasional No. 1068/C3/KEP/2007
                    Tanggal 31 Mei 2007, dan penegerian sekolah sesuai dengan SK
                    Bupati Lampung Selatan No. 405.A/DIKNAS/HK-LS/2007.
                </p>
            </div>
        </div>
    );
}

export default FooterLogoAndDesc;