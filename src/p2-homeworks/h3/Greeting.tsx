import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={!!error} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div><span className={s.errorMessage}>{error}</span></div>}
        </div>
    )
}

export default Greeting
