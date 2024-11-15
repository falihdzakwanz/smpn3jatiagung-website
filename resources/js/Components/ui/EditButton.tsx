interface Proptypes {
    onClick?: () => void;
}

const EditButton = (props: Proptypes) => {
    const { onClick } = props;

    return (
        <button 
            className="bg-color-succes rounded-md px-4 py-2 text-color-white"
            type="button"
            onClick={onClick}
        
        >Edit</button>
    );
}

export default EditButton;