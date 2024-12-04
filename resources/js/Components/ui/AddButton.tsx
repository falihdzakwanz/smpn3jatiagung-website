const AddButton = ({
    handleAdd,
    title,
}: {
    handleAdd: () => void;
    title: string;
}) => {
    return (
        <button
            onClick={handleAdd}
            className="text-color-white flex items-center gap-2 rounded bg-color-purple px-6 py-2.5 font-medium capitalize transition-all duration-300 hover:text-color-darker-purple"
        >
            <span className="text-xl leading-none">+</span>
            <span>Tambah {title}</span>
        </button>
    );
};

export default AddButton;
