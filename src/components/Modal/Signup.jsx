import React, {useState, useContext} from "react";
import { useForm } from "react-hook-form";
import Ctx from "../../Ctx";

export default ({change, close}) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [inp3, setInp3] = useState("");
    const [testPwd, setTestPwd] = useState(true);
    const {api, setToken, setUser} = useContext(Ctx);

    const Email_RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const PWD_RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    const Message = {
        incorrectEmail: 'Введите корректную почту',
        incorrectPWD: 'Пароль должен содержать 6 символов'
    };

    const {register, handleSubmit, formState: { errors }} = useForm({ mode: 'onBlur' });

    const checkPwd = (val, type = "main") => {
        type === "main" ? setInp2(val) : setInp3(val);
        if (val) {
            if (type === "main") {
                setTestPwd(val !== inp3);
            } else {
                setTestPwd(val !== inp2);
            }
        }
    }

    const sendForm = (e) => {
        e.preventDefault();
        const body = {
            email: inp1,
            password: inp2
        }
        api.signUp(body)
            .then(res => res.json())
            .then(data => {
                if (!data.err) {
                    api.signIn(body)
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem("user8", JSON.stringify(data.data));
                            localStorage.setItem("token8", data.token);
                            setToken(data.token);
                            setUser(data.data);
                        })
                    setInp1("");
                    setInp2("");
                    setInp3("");
                    close(false);
                } else {
                    alert(data.message);
                }
            })
    }

    return <form onSubmit={sendForm}>
        <input 
            {...register('email', {
                required: "Поле обязательно для заполнения",
                pattern: { 
                    value: Email_RegExp, 
                    message: Message.incorrectEmail 
                }
            })}
            type="email" 
            placeholder="Введите вашу почту" 
            value={inp1} 
            required
            onChange={(e) => {setInp1(e.target.value)}}
        />
         { errors?.email && <div className="error">{errors.email.message || "Error!"}</div> }
        <input 
            {...register('password', {
                required: "Поле обязательно для заполнения",
                pattern: { 
                    value: PWD_RegExp, 
                    message: Message.incorrectPWD 
                    }
            })}
            type="password" 
            placeholder="Пароль" 
            value={inp2} 
            onChange={(e) => {checkPwd(e.target.value)}}
        />
        { errors?.password && <div className="error">{errors.password.message || "Error!"}</div> }
        <input 
            {...register('checkPassword', {
                required: "Поле обязательно для заполнения",
            })}
            type="password" 
            placeholder="Повторить пароль" 
            value={inp3} 
            onChange={(e) => {checkPwd(e.target.value, "check")}}
        />
        { errors?.checkPassword && <div className="error">{errors.checkPassword.message || "Error!"}</div> }
        <button className="btn" 
        type="submit" 
        disabled={testPwd}>
            Зарегистрироваться
        </button>
        <button className="btn link" 
        type="button" onClick={() => 
        {change(prev => !prev)}}>
            Войти
        </button>
    </form>
}