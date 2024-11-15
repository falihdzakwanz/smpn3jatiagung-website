interface Proptypes {
    onClick?: () => void;
}

const DeleteButton = (props: Proptypes) => {
    const { onClick } = props;

    return (
        <button
            className="bg-color-danger rounded-md px-4 py-2 text-color-white"
            type="button"
            onClick={onClick}
        >
            Delete
        </button>
    );
};

export default DeleteButton;
