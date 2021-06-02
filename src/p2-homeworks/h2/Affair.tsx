import React from 'react'
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: () => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div className={style.wrapper}>
            <div>affair</div>
            <div>[priority]</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
