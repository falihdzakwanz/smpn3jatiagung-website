import { Module } from '@/types/module';
import { MdOutlineFileDownload } from 'react-icons/md';

const Card = (props: Module) => {
    const { id, nama, penerbit, deskripsi, file } = props;

    return (
        <div
            key={id}
            className="flex w-full flex-row items-center justify-around text-color-secondary"
        >
            <div className="flex w-2/3 flex-col items-start gap-2 justify-center overflow-hidden rounded-xl bg-color-accent px-4 py-2 shadow-md md:shadow-xl">
                <h2 className="text-sm font-bold md:text-lg">{nama}</h2>
                <h3 className="text-sm md:text-lg">{`Penerbit: ${penerbit}`}</h3>
                <p className="text-sm md:text-lg text-justify">{deskripsi}</p>
            </div>
            <div className="overflow-hidden rounded-xl bg-color-accent shadow-md md:shadow-xl hover:text-color-primary">
                <a href={`storage/${file}` || ""} className="block text-4xl md:text-6xl">
                    <MdOutlineFileDownload />
                </a>
            </div>
        </div>
    );
};

export default Card;
