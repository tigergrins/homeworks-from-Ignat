import React from 'react'
import SuperButton from '../../../h4/common/c2-SuperButton/SuperButton';
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.numOfError}>404</div>
            <div className={s.title}>Sorry, but... page not found!</div>
            <div className={s.print}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <SuperButton>Go to the main page</SuperButton>
        </div>
    )
}

export default Error404
