import ProfileImage from '@/Components/greeting/ProfileImage';
import Quote from '@/Components/greeting/Quote';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

const Greeting = () => {
    return (
        <GuestLayout>
            <Head title="Sambutan" />
            <div className="px-8 py-4 flex flex-col items-center justify-center gap-8 bg-color-secondary">
                <h1 className="text-2xl font-bold md:text-4xl text-color-primary">
                    Sambutan Kepala Sekolah
                </h1>
                <ProfileImage />
                <Quote text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti sunt eligendi quia numquam, perspiciatis adipisci
                    at quis ratione iste animi voluptate pariatur suscipit!
                    Accusantium voluptatem fuga qui molestias aliquam dolorum
                    doloremque blanditiis iure temporibus quas dicta, aperiam
                    commodi cum, sit eos ea excepturi rerum beatae earum tempore
                    ipsum consequuntur? Harum deleniti aut doloremque vero,
                    voluptates maxime. Tempore quam dolor exercitationem sequi
                    quibusdam nulla voluptatum aliquid quisquam modi? Nisi
                    doloremque ipsa quisquam. Harum quia voluptatem aliquam,
                    esse et aut animi eligendi at ab rem, nobis ratione. Velit
                    ducimus officiis ullam. Molestias, accusantium. Aspernatur
                    ut voluptates porro quos. Repudiandae adipisci optio,
                    maiores accusantium voluptates in beatae incidunt. Iste
                    dignissimos assumenda perferendis natus voluptatibus dolores
                    minima reiciendis et voluptates beatae minus sint veniam at
                    quasi voluptatum sapiente explicabo odit non, possimus
                    soluta magnam aut dolore quisquam? Doloribus facere animi
                    vel amet asperiores accusantium quisquam, eligendi maxime?
                    Aperiam ea delectus, et exercitationem error sint iure velit
                    ex adipisci placeat quis maxime quibusdam accusantium hic
                    voluptas dolor tenetur odit maiores repellat illo ut ad,
                    culpa provident? Repellendus corporis magnam sint. Minus
                    assumenda pariatur quod quos harum deserunt ullam fuga nam!
                    Nulla omnis dignissimos, nobis amet harum provident
                    obcaecati fugiat maiores laborum velit molestias ab soluta."
                    />
            </div>
        </GuestLayout>
    );
};

export default Greeting;
