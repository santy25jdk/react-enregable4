import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({createNewUsers, updateInfo, updateUserById, setUpdateInfo, setCloseForm}) => {

    const {register, reset,handleSubmit} = useForm()

    useEffect( () => {
            reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUsers(data)
        }
        setCloseForm(true)
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div onClick={ () => setCloseForm(true)} className='form__x'>x</div>
        <h2 className='form__title'>{updateInfo? 'Update user' : 'Create user'}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' id='email' type="email" {...register("email")} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form__input' id='password' type="password" {...register("password")} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">First Name</label>
            <input className='form__input' id='first_name' type="text" {...register("first_name")} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form__input' id='last_name' type="text" {...register("last_name")} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form__input' id='birthday' type="date" {...register("birthday")} />
        </div>
        <button className='form__btn'>Submit</button>
    </form>
  )
}

export default FormUser