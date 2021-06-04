import React from 'react'
import style from './Affair.module.css'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const d = props.affair.priority;
    console.log(d)

    return (
        <div className={style.wrapper}>
            <div>{props.affair.name}</div>
            <div className={style[props.affair.priority]}>[{props.affair.priority}]</div>
            <button onClick={() => deleteCallback()}>X</button>
        </div>
    )
}

export default Affair
