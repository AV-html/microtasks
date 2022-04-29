import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
    // students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    // debugger

    const listElement = props.students.map((student) => {
        // debugger
        return <li key={student.id}>{`Student name: ${student.name} || age: ${student.age}`}</li>
    });

    return (
        <ul>
            {listElement}
        </ul>
    );
}