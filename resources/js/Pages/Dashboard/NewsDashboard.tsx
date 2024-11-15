import DeleteButton from "@/Components/ui/DeleteButton";
import EditButton from "@/Components/ui/EditButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const dummyNews = [
    {
        id: 1,
        nama: 'Berita 1',
        deskripsi:
            'Deskripsi berita 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        gambar: 'https://via.placeholder.com/450x300/000/fff?text=Berita+1',
    },
    {
        id: 2,
        nama: 'Berita 2',
        deskripsi:
            'Deskripsi berita 2. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
        gambar: 'https://via.placeholder.com/450x300/000/fff?text=Berita+2',
    },
    {
        id: 3,
        nama: 'Berita 3',
        deskripsi:
            'Deskripsi berita 3. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.',
        gambar: 'https://via.placeholder.com/450x300/000/fff?text=Berita+3',
    },
    {
        id: 4,
        nama: 'Berita 4',
        deskripsi:
            'Deskripsi berita 4. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
        gambar: 'https://via.placeholder.com/450x300/000/fff?text=Berita+4',
    },
];


const NewsDashboard = () => {
    return (
        <AuthenticatedLayout>
            <div className="flex w-full flex-col items-center text-color-primary font-roboto">
                <div className="self-start">
                    <h1 className="font-libre-bold text-3xl uppercase">
                        Daftar Berita
                    </h1>
                    <button className="bg-color-succes rounded-md px-4 py-4">
                        Tambahkan Berita
                    </button>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className="bg-white mb-8 min-w-full border border-color-primary text-sm md:text-base">
                        <thead className="bg-color-accent text-color-secondary">
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Nama</th>
                                <th className="px-4 py-2">Deskripsi</th>
                                <th className="px-4 py-2">Gambar</th>
                                <th
                                    className="row-span-2 px-4 py-2"
                                    rowSpan={2}
                                >
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                key={1}
                                className="border text-center align-top"
                            >
                                <td className="border bg-color-white px-4 py-2 text-sm text-color-primary md:text-base">
                                    {1}
                                </td>
                                <td className="border bg-color-white px-4 py-2 text-sm text-color-primary md:text-base">
                                    {'Jupri'}
                                </td>
                                <td className="border bg-color-white px-4 py-2 text-justify text-sm text-color-primary md:text-base">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Hic esse tempora quae
                                        veritatis ad! Placeat iste accusantium,
                                        cupiditate aliquid dolorum perspiciatis
                                        tempore dolorem quaerat ipsam odio
                                        voluptatum voluptatem quis expedita
                                        aspernatur dicta sint doloremque
                                        voluptas! Accusamus illo eveniet soluta
                                        nam maxime ab sit nobis ad quaerat
                                        doloribus. Modi delectus sequi maiores
                                        cum aperiam totam eveniet ducimus
                                        corrupti doloremque quibusdam placeat,
                                        animi nobis voluptatem voluptatum culpa
                                        hic incidunt! Explicabo eligendi
                                        voluptates dignissimos, eum doloremque
                                        quas similique. Et totam autem
                                        doloremque, eaque libero laboriosam
                                        consequatur dolore eveniet fugiat
                                        quibusdam perferendis sunt voluptates
                                        nesciunt. Ea voluptatibus, accusantium
                                        ad reiciendis eum recusandae nobis
                                        assumenda?
                                    </p>
                                </td>
                                <td className="border bg-color-white px-4 py-2 text-sm text-color-primary md:text-base">
                                    <img
                                        src="https://via.placeholder.com/1200x1000/000/fff?text=No+Image+Available"
                                        className="aspect-video max-h-60 max-w-80 overflow-hidden rounded-xl object-cover"
                                    />
                                </td>
                                <td
                                    className="row-span-2 flex gap-2 bg-color-white px-4 py-2 text-sm text-color-primary md:text-base"
                                    rowSpan={2}
                                >
                                    <EditButton />
                                    <DeleteButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default NewsDashboard;