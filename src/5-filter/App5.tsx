import React, {useState} from 'react';

export const App5 = () => {

    type FilterType = "all" | "dollar" | "ruble"

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((money) => {
            return money.banknote === 'ruble';
        });
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((money) => {
            return money.banknote === 'dollar';
        });
    }

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName); // После вызова этой функции компонента перерисовывается
    }


    return (
        <div>
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
        </div>
    );
}

