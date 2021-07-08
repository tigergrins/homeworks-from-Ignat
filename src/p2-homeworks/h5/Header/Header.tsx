import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    let [switcherStatus, setSwitcherStatus] = useState<boolean>(false)

    const finalMenuClassName = `${s.menu } ${switcherStatus ? s.menuActive : ''}`
    const finalBurgerClassName = `${s.burger } ${switcherStatus ? s.burgerActive : ''}`
    const finalBurgerItemClassName = `${s.burgerItem } ${switcherStatus ? s.burgerItemActive : ''}`


    const burgerSwitcher = () => {
        setSwitcherStatus(!switcherStatus)
    }


    return (
        <div className={s.body}>
            <div className={finalMenuClassName}>
                <NavLink to={'/pre-junior'} className={s.link}>Pre-Junior</NavLink>
                <NavLink to={'/junior'} className={s.link}>Junior</NavLink>
                <NavLink to={'/junior+'} className={s.link}>Junior+</NavLink>
                <div onClick={burgerSwitcher} className={finalBurgerClassName}>
                    <span className={finalBurgerItemClassName}></span>
                </div>
            </div>
        </div>


    )
}

export default Header
