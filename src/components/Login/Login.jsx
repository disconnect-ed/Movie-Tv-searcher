import React from "react";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../utils/validators/validator";
import {Input} from "../common/FormControls/FormControls";
import {Redirect} from "react-router";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Логин'} name={'username'} component={Input} validate={[requiredField]} type={'text'}/>
            <Field placeholder={'Пароль'} name={'password'} component={Input} validate={[requiredField]}
                   type={'password'}/>
            <div>
                <button className='btn btn-primary' >Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.getAuthRequest(formData)
    }

    if (localStorage.movieSearcherSessionId && localStorage.movieSearcherUsername) {
        return <Redirect to={'/user-profile'} />
    }

    return (
        <div className='auth-form'>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <a target={'_blank'} href="https://www.themoviedb.org">Регистрация</a>
        </div>
    )
}

export default Login;