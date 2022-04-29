import React from 'react';

type CarsPropsType = {
    topCars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsPropsType) => {
    const rowTable = props.topCars.map((car, index) => {
        return (
            <tr key={index + 1}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
        );
    });

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                </thead>
                
                <tbody>
                {rowTable}
                </tbody>
            </table>
        </div>
    );
} 