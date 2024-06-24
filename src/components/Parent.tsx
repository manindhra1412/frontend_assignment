"use client";
import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [money, setMoney] = useState<number>(0);

    const incrementMoney = () => setMoney(money + 1000);
    const decrementMoney = () => setMoney(money - 500);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Money: ${money}</h1>
            <div className="flex space-x-4">
                <Child1 incrementMoney={incrementMoney} />
                <Child2 decrementMoney={decrementMoney} />
            </div>
        </div>
    );
};

export default Parent;