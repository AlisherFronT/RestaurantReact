import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FaPencilAlt} from 'react-icons/fa'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import axios from "../../utils/axios";
import {CustomContext} from "../../utils/Context";

const Form = () => {

    const [status, setStatus] = useState(false)
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const [eye, setEye] = useState(false)

    const {user, setUser} = useContext(CustomContext)


    const registerUser = (e) => {
        e.preventDefault()

        let newUser = {
            email,
            password: e.target[0].value
        }
        axios.post('/register' , newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                })

                localStorage.setItem('user', JSON.stringify({
                    token: data.accessToken,
                    ...data.user
                }))
                navigate('/')
            })
            .catch((err) => console.log(err.message) )

    }

    return (
        <div className='content'>
            <form action="" className='form' onSubmit={registerUser}>

                {
                    status && <p className='form__email' onClick={() => setStatus(false)}>{email} <FaPencilAlt/> </p>
                }

                <h2 className='form__title'>
                    {
                        status ? 'Придумай пароль для входа на любом устройстве' : 'Регистрация'
                    }
                </h2>

                {
                    status && <>
                        <div className='form__password'>
                            <input className='form__field' placeholder='Придумайте пароль' type={eye ? 'text' : 'password'}/>
                            <span className='form__eye' onClick={() => setEye(prev => !prev)}>
                                {
                                    eye ?  <AiFillEyeInvisible/> : <AiFillEye/>
                                }

                            </span>
                        </div>

                        <button className='form__btn' type='submit'>Создать аккаунт</button>
                    </>
                }

                {
                    !status &&
                    <>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='form__field' placeholder='Введите Email' type="text"/>
                        <div onClick={() => setStatus(true)} className='form__btn'>Продолжить</div>
                        <Link to='/login'>У меня есть аккаунт</Link>
                    </>
                }

            </form>
        </div>
    );
};

export default Form;