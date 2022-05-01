import React, {useState} from 'react';

type NewComponentPropsType = {
    money: Array<MoneyType>
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type FilterType = "all" | "dollar" | "ruble"


export const NewComponent = (props: NewComponentPropsType) => {

    const [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = props.money;

    if (filter === 'ruble') {
        currentMoney = props.money.filter((money) => {
            return money.banknote === 'ruble';
        });
    }
    if (filter === 'dollar') {
        currentMoney = props.money.filter((money) => {
            return money.banknote === 'dollar';
        });
    }

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName);
    }


    return (
        <>
            <hr/>
            <h2>5 - filter</h2>

            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={(event) => {
                    onClickFilterHandler("all")
                }} type={"button"}>All
                </button>
                <button onClick={(event) => {
                    onClickFilterHandler("ruble")
                }} type={"button"}>Rubles
                </button>
                <button onClick={(event) => {
                    onClickFilterHandler("dollar")
                }} type={"button"}>Dollars
                </button>
            </div>

            <hr/>
        </>
    );
}

