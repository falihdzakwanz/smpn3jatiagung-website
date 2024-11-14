import { BsPersonCircle } from 'react-icons/bs';
import { FaBook, FaSuitcase } from 'react-icons/fa6';
import { GiTrophyCup } from 'react-icons/gi';
import { IoNewspaper } from 'react-icons/io5';
import SidebarLink from './SidebarLink';

type Proptypes = {
    isOpen: boolean;
};

const Sidebar = ({ isOpen }: Proptypes) => {
    return (
        <div
            className={`fixed left-0 top-0 h-full w-96 transform bg-color-accent text-color-secondary ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
            <div className="flex w-full items-center justify-center bg-color-primary px-8 py-4">
                <h1 className="font-libre-bold uppercase md:text-4xl">
                    Spantija Admin
                </h1>
            </div>
            <div className="w-full">
                <SidebarLink href="/dashboard/berita" title="Laman Berita">
                    <IoNewspaper />
                </SidebarLink>
                <SidebarLink href="/dashboard/modul" title="Modul">
                    <FaBook />
                </SidebarLink>
                <SidebarLink
                    href="/dashboard/ekstrakurikuler"
                    title="Ekstrakurikuler"
                >
                    <FaSuitcase />
                </SidebarLink>
                <SidebarLink href="/dashboard/prestasi" title="Prestasi">
                    <GiTrophyCup />
                </SidebarLink>
                <SidebarLink href="/dashboard/staff" title="Staff">
                    <BsPersonCircle />
                </SidebarLink>
            </div>
        </div>
    );
};

export default Sidebar;
