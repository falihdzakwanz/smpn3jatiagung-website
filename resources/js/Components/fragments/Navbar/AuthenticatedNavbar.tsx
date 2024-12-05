import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react';
import { FiEdit, FiLogOut, FiMenu, FiUser } from 'react-icons/fi';

interface Proptypes {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const AuthenticatedNavbar = (props: Proptypes) => {
    const { setIsOpen, isOpen } = props;
    return (
        <nav className="flex h-[80px] items-center justify-between bg-color-purple px-6 text-color-white">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <FiMenu className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-4">
                <Menu as="div" className="relative">
                    <MenuButton className="text-white">
                        <FiUser className="h-6 w-6" />
                    </MenuButton>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-color-purple/80 shadow-lg focus:outline-none">
                            <div className="py-1">
                                <MenuItem>
                                    {({ active }) => (
                                        <Link
                                            href="/admin/profile"
                                            className={`${
                                                active ? 'bg-color-purple' : ''
                                            } text-white flex items-center px-4 py-2`}
                                        >
                                            <FiEdit className="mr-2 h-5 w-5" />
                                            Profile
                                        </Link>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            className={`${
                                                active ? 'bg-color-purple' : ''
                                            } text-white flex w-full items-center px-4 py-2`}
                                        >
                                            <FiLogOut className="mr-2 h-5 w-5" />
                                            Logout
                                        </Link>
                                    )}
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
