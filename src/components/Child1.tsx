interface Child1Props {
    incrementMoney: () => void;
}

const Child1 = ({ incrementMoney }: Child1Props) => {
    return (
        <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={incrementMoney}
        >
            Increment by 1000
        </button>
    );
};

export default Child1;
