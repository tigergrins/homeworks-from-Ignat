import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsType> = ({avatar, name, message, time}) => {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>

            <div className={style.angle}></div>

            <div className={style.text_window}>
                <div className={style.user_name}>
                    {name}
                </div>
                <div className={style.text_message}>
                    {message}
                </div>
                <div className={style.message_time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
