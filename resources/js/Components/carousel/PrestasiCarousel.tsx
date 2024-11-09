// File: /resources/js/Components/carousel/PrestasiSection.tsx
const PrestasiSection = () => {
    const prestasi = [
        {
            title: "Juara 1 Lomba Robotik",
            date: "28 Februari 2024",
            image: "https://i.pinimg.com/564x/a8/1b/2b/a81b2bd4d511d3a391bad32bfbfc12e5.jpg"
        },
        {
            title: "Medali Emas OSN Informatika",
            date: "15 Maret 2024",
            image: "https://i.pinimg.com/564x/21/76/ac/2176acadb80a50210842d192e95c037a.jpg"
        },
        {
            title: "Juara Umum Tingkat Provinsi",
            date: "20 Maret 2024",
            image: "https://i.pinimg.com/236x/d2/0a/9a/d20a9aea13027c1784d35e116e976292.jpg"
        },
        {
            title: "Best Performance Seni Tari",
            date: "5 April 2024",
            image: "https://i.pinimg.com/564x/f0/9c/d7/f09cd70bad200f776051aebbf33edb7e.jpg"
        },
        {
            title: "Juara 1 Karya Ilmiah",
            date: "12 April 2024",
            image: "https://i.pinimg.com/236x/5d/10/ba/5d10ba787b60d619f65cb5bc4a98f3e4.jpg"
        },
        {
            title: "Medali Perak OSN Matematika",
            date: "18 April 2024",
            image: "https://i.pinimg.com/474x/9a/82/44/9a8244a9dee4cef9b9b27afdb4178926.jpg"
        },
        {
            title: "Juara 1 Lomba Debat",
            date: "25 April 2024",
            image: "https://i.pinimg.com/736x/5a/3e/7b/5a3e7b11210857908a764ede920d1249.jpg"
        },
        {
            title: "Juara 2 Festival Band",
            date: "1 Mei 2024",
            image: "https://i.pinimg.com/236x/af/59/3d/af593d5a443d3563cc7731e4a9e24812.jpg"
        }
    ];

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {prestasi.map((item, index) => (
                    <a 
                        key={index}
                        href="/prestasi"
                        className="group bg-color-accent/50 p-4 rounded-xl shadow-xl 
                                 hover:bg-color-accent transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-32 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg text-color-secondary font-bold mb-2 group-hover:text-color-white transition-colors duration-300 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-color-secondary/90 group-hover:text-color-white/90 transition-colors duration-300">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            
            {/* Tombol Lihat Lebih Banyak */}
            <a 
                href="/prestasi"
                className="mt-8 px-6 py-3 bg-color-accent text-color-white rounded-full 
                         shadow-lg hover:bg-color-secondary hover:text-color-primary transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-color-accent"
            >
                Lihat Lebih Banyak
            </a>
        </div>
    );
};

export default PrestasiSection;