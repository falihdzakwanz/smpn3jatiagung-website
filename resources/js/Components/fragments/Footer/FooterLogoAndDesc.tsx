const FooterLogoAndDesc = () => {
    return (
        <div className="mb-4 flex w-full flex-row items-center gap-4">
            <img
                src="https://www.dummyimage.com/100x100/000/fff&text=LOGO"
                alt="Logo"
                className="mb-4 h-20 w-20 md:mb-0 md:mr-4"
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