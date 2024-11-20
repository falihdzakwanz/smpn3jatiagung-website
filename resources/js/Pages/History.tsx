// resources/js/Pages/Sejarah.tsx
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Sejarah() {
    const visiMisiList = [
        "Menjadi sekolah yang sigma",
        "Menjadikan murid Skibidi",
        "Semua guru harus memiliki Rizz",
        "Jika murid tidak sigma akan dikeluarkan",
        "Semua anggota sekolah harus mewing"
    ];

    return (
        <GuestLayout>
            <Head title="Sejarah" />
            
            <div className="container mx-auto max-w-[1440px]">
                {/* Banner Image */}
                <div className="flex justify-center mb-20 px-4 md:px-8 lg:px-20">
                    <img 
                        src="https://www.dummyimage.com/900x300/000/fff&text=SPIRIT+OF+SPARTANS"
                        alt="Spirit of Spartans"
                        className="w-full max-w-[900px] rounded-[25px] shadow-2xl mt-12 md:mt-16 lg:mt-20"
                    />
                </div>

                    {/* Visi & Misi */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-32 mb-24 relative px-4 md:px-8 lg:px-20">
                        {/* Visi */}
                        <div className="flex-1">
                            <h2 className="font-libre text-3xl md:text-4xl lg:text-5xl text-color-primary mb-4 md:mb-6 lg:mb-8">Visi</h2>
                            <ol className="list-decimal ml-5 space-y-2 md:space-y-3 lg:space-y-4">
                                {visiMisiList.map((item, index) => (
                                    <li key={index} className="text-color-primary text-base md:text-lg lg:text-xl">{item}</li>
                                ))}
                            </ol>
                        </div>

                        {/* Divider Line - Hidden on mobile */}
                        <div className="hidden md:block w-[1px] bg-color-primary"></div>

                        {/* Misi */}
                        <div className="flex-1">
                            <h2 className="font-libre text-3xl md:text-4xl lg:text-5xl text-color-primary mb-4 md:mb-6 lg:mb-8">Misi</h2>
                            <ol className="list-decimal ml-5 space-y-2 md:space-y-3 lg:space-y-4">
                                {visiMisiList.map((item, index) => (
                                    <li key={index} className="text-color-primary text-base md:text-lg lg:text-xl">{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Sejarah */}
                    <div className="px-4 md:px-8 lg:px-20 mb-24">
                        <h2 className="font-libre text-3xl md:text-4xl lg:text-5xl text-color-primary text-center mb-16">
                            Sejarah Sekolah
                        </h2>

                        <div className="relative">
                            {/* Timeline Line - Hidden on mobile */}
                            <div className="hidden md:block absolute left-1/2 h-full w-[1px] bg-color-primary"></div>

                            {/* Timeline Items */}
                            <div className="space-y-16 md:space-y-24">
                                {[1, 2, 3, 4].map((num, index) => (
                                    <div key={num}>
                                        {/* Mobile Layout - Stack Vertikal */}
                                        <div className="md:hidden flex flex-col gap-4">
                                            <h3 className="font-libre text-2xl text-color-primary text-center">
                                                Skibidi {num}
                                            </h3>
                                            <img 
                                                src={`https://www.dummyimage.com/400x300/000/fff&text=SKIBIDI+${num}`}
                                                alt={`Skibidi ${num}`}
                                                className="w-full rounded-xl shadow-xl"
                                            />
                                            <p className="text-color-primary text-base text-justify">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis facilisis arcu. 
                                                Mauris consequat, est at dictum vulputate, erat nisi sodales nunc, pharetra fringilla 
                                                arcu metus at neque. Nam scelerisque enim eu orci lacinia fringilla.
                                            </p>
                                        </div>

                                        {/* Desktop Layout - Side by Side */}
                                        <div className="hidden md:flex flex-row justify-between items-start gap-8">
                                            {/* Left Side */}
                                            <div className="w-[45%] flex flex-col gap-4">
                                                {index % 2 === 0 ? (
                                                    <>
                                                        <h3 className="font-libre text-[32px] text-color-primary mb-4 text-left">
                                                            Skibidi {num}
                                                        </h3>
                                                        <img 
                                                            src={`https://www.dummyimage.com/400x300/000/fff&text=SKIBIDI+${num}`}
                                                            alt={`Skibidi ${num}`}
                                                            className="w-full rounded-xl shadow-xl"
                                                        />
                                                    </>
                                                ) : (
                                                    <div className="pt-[150px]">
                                                        <p className="text-color-primary text-lg lg:text-xl text-justify">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis facilisis arcu. 
                                                            Mauris consequat, est at dictum vulputate, erat nisi sodales nunc, pharetra fringilla 
                                                            arcu metus at neque. Nam scelerisque enim eu orci lacinia fringilla.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Timeline Dot */}
                                            <div className="relative">
                                                <div className="absolute w-2 h-2 rounded-full bg-color-primary left-1/2 -translate-x-1/2 top-8"></div>
                                            </div>

                                            {/* Right Side */}
                                            <div className="w-[45%] flex flex-col gap-4">
                                                {index % 2 === 0 ? (
                                                    <div className="pt-[150px]">
                                                        <p className="text-color-primary text-lg lg:text-xl text-justify">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis facilisis arcu. 
                                                            Mauris consequat, est at dictum vulputate, erat nisi sodales nunc, pharetra fringilla 
                                                            arcu metus at neque. Nam scelerisque enim eu orci lacinia fringilla.
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <h3 className="font-libre text-[32px] text-color-primary mb-4 text-left">
                                                            Skibidi {num}
                                                        </h3>
                                                        <img 
                                                            src={`https://www.dummyimage.com/400x300/000/fff&text=SKIBIDI+${num}`}
                                                            alt={`Skibidi ${num}`}
                                                            className="w-full rounded-xl shadow-xl"
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sekarang Section - Perbaikan ukuran teks */}
                    <div className="px-4 md:px-8 lg:px-20 mb-24">
                        <h2 className="font-libre text-3xl md:text-4xl lg:text-5xl text-color-primary text-center mb-8 md:mb-10 lg:mb-12">
                            Sekarang
                        </h2>
                        <div className="flex justify-center mb-8">
                            <img 
                                src="https://www.dummyimage.com/900x300/000/fff&text=SPIRIT+OF+SPARTANS"
                                alt="Current Status"
                                className="w-full max-w-[900px] rounded-[25px] shadow-2xl"
                            />
                        </div>
                        <p className="text-center text-base md:text-lg lg:text-xl text-color-primary max-w-3xl mx-auto">
                            Sekarang spantija adalah sekolah dengan sigma terbanyak di lampung dll pokoknya bagian jilat lah
                        </p>
                    </div>
                </div>
        </GuestLayout>
    );
}