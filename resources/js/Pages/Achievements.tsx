import Card from '@/Components/achievements/Card';
import GuestLayout from '@/Layouts/GuestLayout';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 2,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 3,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 4,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 5,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 6,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 7,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 8,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
        {
            id: 9,
            imageSrc: 'https://www.dummyimage.com/450x300/000/fff&text=LOGO',
            title: 'Juara lomba makan nasi padang tingkat nasional',
        },
    ];

    return (
        <GuestLayout>
            <div className="flex w-full flex-col items-center justify-center bg-color-secondary">
                <h1 className="my-8 mb text-2xl font-bold uppercase text-color-accent md:text-4xl">
                    Prestasi
                </h1>
                <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-8 px-4 md:mb-8 md:grid-cols-3 md:gap-12 md:px-12">
                    {achievements.map((achievement) => (
                        <Card
                            id={achievement.id}
                            imageSrc={achievement.imageSrc}
                            title={achievement.title}
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Achievements;
