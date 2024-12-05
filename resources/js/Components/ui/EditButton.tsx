import { FiEdit2 } from 'react-icons/fi';

interface Proptypes {
    item: any;
    onEdit: (item: any) => void;
}

const EditButton = (props: Proptypes) => {
    const { onEdit, item } = props;

    return (
        <button
            onClick={() => onEdit(item)}
            className="flex items-center gap-1 rounded bg-color-purple px-4 py-1 text-color-white transition duration-300 hover:text-color-darker-purple"
        >
            <FiEdit2 size={16} />
            <span>Edit</span>
        </button>
    );
};

export default EditButton;
