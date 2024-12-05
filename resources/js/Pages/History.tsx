import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Sejarah() {
    const visiMisiList = [
        'Menjadi sekolah yang sigma',
        'Menjadikan murid Skibidi',
        'Semua guru harus memiliki Rizz',
        'Jika murid tidak sigma akan dikeluarkan',
        'Semua anggota sekolah harus mewing',
    ];

    return (
        <GuestLayout>
            <Head title="Sejarah" />

            <div className="container mx-auto max-w-[1440px]">
                <div className="mb-20 flex justify-center px-4 md:px-8 lg:px-20">
                    <img
                        src="https://www.dummyimage.com/900x300/000/fff&text=SPIRIT+OF+SPARTANS"
                        alt="Spirit of Spartans"
                        className="mt-12 w-full max-w-[900px] rounded-[25px] shadow-2xl md:mt-16 lg:mt-20"
                    />
                </div>

                <div className="relative mb-24 flex flex-col justify-center gap-8 px-4 md:flex-row md:gap-16 md:px-8 lg:gap-32 lg:px-20">
                    <div className="flex-1">
                        <h2 className="font-libre mb-4 text-3xl text-color-primary md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
                            Visi
                        </h2>
                        <ol className="ml-5 list-decimal space-y-2 md:space-y-3 lg:space-y-4">
                            {visiMisiList.map((item, index) => (
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
                            {visiMisiList.map((item, index) => (
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

                    <div className="relative">
                        <div className="absolute left-1/2 hidden h-full w-[1px] bg-color-primary md:block"></div>

                        <div className="space-y-16 md:space-y-24">
                            {[1, 2, 3, 4].map((num, index) => (
                                <div key={num}>
                                    <div className="flex flex-col gap-4 md:hidden">
                                        <h3 className="font-libre text-center text-2xl text-color-primary">
                                            Skibidi {num}
                                        </h3>
                                        <img
                                            src={`https://www.dummyimage.com/400x300/000/fff&text=SKIBIDI+${num}`}
                                            alt={`Skibidi ${num}`}
                                            className="w-full rounded-xl shadow-xl"
                                        />
                                        <p className="text-justify text-base text-color-primary">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Fusce
                                            quis facilisis arcu. Mauris
                                            consequat, est at dictum vulputate,
                                            erat nisi sodales nunc, pharetra
                                            fringilla arcu metus at neque. Nam
                                            scelerisque enim eu orci lacinia
                                            fringilla.
                                        </p>
                                    </div>

                                    <div className="hidden flex-row items-start justify-between gap-8 md:flex">
                                        <div className="flex w-[45%] flex-col gap-4">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="font-libre mb-4 text-left text-[32px] text-color-primary">
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
                                                    <p className="text-justify text-lg text-color-primary lg:text-xl">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Fusce
                                                        quis facilisis arcu.
                                                        Mauris consequat, est at
                                                        dictum vulputate, erat
                                                        nisi sodales nunc,
                                                        pharetra fringilla arcu
                                                        metus at neque. Nam
                                                        scelerisque enim eu orci
                                                        lacinia fringilla.
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <div className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-color-primary"></div>
                                        </div>

                                        <div className="flex w-[45%] flex-col gap-4">
                                            {index % 2 === 0 ? (
                                                <div className="pt-[150px]">
                                                    <p className="text-justify text-lg text-color-primary lg:text-xl">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Fusce
                                                        quis facilisis arcu.
                                                        Mauris consequat, est at
                                                        dictum vulputate, erat
                                                        nisi sodales nunc,
                                                        pharetra fringilla arcu
                                                        metus at neque. Nam
                                                        scelerisque enim eu orci
                                                        lacinia fringilla.
                                                    </p>
                                                </div>
                                            ) : (
                                                <>
                                                    <h3 className="font-libre mb-4 text-left text-[32px] text-color-primary">
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

                <div className="mb-24 px-4 md:px-8 lg:px-20">
                    <h2 className="font-libre mb-8 text-center text-3xl text-color-primary md:mb-10 md:text-4xl lg:mb-12 lg:text-5xl">
                        Sekarang
                    </h2>
                    <div className="mb-8 flex justify-center">
                        <img
                            src="https://www.dummyimage.com/900x300/000/fff&text=SPIRIT+OF+SPARTANS"
                            alt="Current Status"
                            className="w-full max-w-[900px] rounded-[25px] shadow-2xl"
                        />
                    </div>
                    <p className="mx-auto max-w-3xl text-center text-base text-color-primary md:text-lg lg:text-xl">
                        Sekarang spantija adalah sekolah dengan sigma terbanyak
                        di lampung dll pokoknya bagian jilat lah
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
