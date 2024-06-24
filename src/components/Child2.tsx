interface Child2Props {
    decrementMoney: () => void;
}

const Child2 = ({ decrementMoney }: Child2Props) => {
    return (
        <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={decrementMoney}
        >
            Decrement by 500
        </button>
    );
};

export default Child2;
