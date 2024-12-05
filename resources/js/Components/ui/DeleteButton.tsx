import { FiTrash2 } from 'react-icons/fi';

interface Proptypes {
    item: number;
    onDelete: (item: number) => void;
}

const DeleteButton = (props: Proptypes) => {
    const { onDelete, item } = props;

    return (
        <button
            onClick={() => onDelete(item)}
            className="flex items-center gap-1 rounded bg-color-danger px-4 py-1 text-color-white transition duration-300 hover:text-color-darker-purple"
        >
            <FiTrash2 size={16} />
            <span>Hapus</span>
        </button>
    );
};

export default DeleteButton;
