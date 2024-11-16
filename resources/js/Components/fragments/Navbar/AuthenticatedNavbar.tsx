interface Proptypes {
    toggleSidebar: () => void;
    isOpen: boolean;
}

const AuthenticatedNavbar = (props: Proptypes) => {
    const { toggleSidebar, isOpen } = props;
    return (
        <nav
            className={`bg-color-accent ${isOpen && 'ml-96'} px-8 py-4 transition-all duration-300 sticky top-0 left-0`}
        >
            <div className="flex">
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className={`group inline-flex items-center justify-center p-2 transition-all duration-300 hover:text-color-secondary`}
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        {!isOpen ? (
                            <>
                                <path
                                    className="origin-right transform transition-all duration-300 group-hover:scale-x-125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16"
                                />
                                <path
                                    className="origin-center transform transition-all duration-500 group-hover:scale-x-110"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 12h16"
                                />
                                <path
                                    className="origin-left transform transition-all duration-700 group-hover:scale-x-125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 18h16"
                                />
                            </>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        )}
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
