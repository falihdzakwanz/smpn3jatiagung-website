const ProfileImage = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4">
            <img
                src="https://www.dummyimage.com/450x300/000/fff&text=LOGO"
                alt="Kepala Sekolah"
                className="h-48 w-48 overflow-hidden rounded-full object-cover shadow-xl"
            />
            <h3 className="text-lg font-bold text-color-primary md:text-2xl">
                Dra. Rd. EMI SULASMI, M. Pd.
            </h3>
        </div>
    );
};

export default ProfileImage;
