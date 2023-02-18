import { useForm } from "react-hook-form";
import React from "react";
import styles from "./Register.module.scss"
import Layout from './../../common/Layout'
import Header from "../../common/header/Header";
import Footer from './../../common/footer/Footer'
export default function Register() {
    

const {
    register,
    formState:{errors, isValid},
    handleSubmit,
    reset
 } = useForm({
    mode: "onBlur"
 });

 const onSubmit = (data) =>{
    alert(JSON.stringify(data));
    reset();
 }//data- хранит всю заполненную информацию о форме

 const [activeCheckbox, setActiveCheckbox] = React.useState(null);

return (
    <div className={styles.form}>
        <Header/>
        
        <div className={styles.form__inner}>
       
        <Layout>
                <div className={styles.title}>
                    <div className={styles.title__inner}>
                        <h2> Регистрация </h2>
                    </div>
                </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*----------------------------------------------------------------------------- ИМЯ ФАМИЛИЯ */}
                <label>
                    <input placeholder="Имя"
                        {...register("firstName",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                            }
                        })}
                    />
                </label>
                <div style={{height:20, fontSize:11,padding:2} }>
                    {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
                </div>

                <label>
                    <input placeholder="Фамилия"
                        {...register("LastName",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                            }
                        })}
                    />
                </label>
                <div style={{height:20, fontSize:11,padding:2} }>
                    {errors?.LastName && <p>{errors?.LastName?.message || "Ошибка!"}</p>}
                </div>
                {/*----------------------------------------------------------------------------- //ИМЯ ФАМИЛИЯ */}


                {/*----------------------------------------------------------------------------- чекбокс */}
                <div className={styles.check__st}>
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className={styles.check__inner}>
                            <div  className={styles.check}>
                                <label >{(idx === 0 && <p>М</p>) || <p>Ж</p>} </label>
                                <input value={(idx === 0 && "Men") || "Women"}
                                    {...register("Gender")}
                                    type="checkbox"
                                    checked={idx === activeCheckbox}
                                    onClick={() => setActiveCheckbox(idx)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/*----------------------------------------------------------------------------- //чекбокс */}
            

                {/*----------------------------------------------------------------------------- Почта */}
                <label>
                    <input placeholder="Почта"
                        {...register("Email",{
                            required: "Обязательное поле!",
                            pattern:   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                </label>
                <div style={{height:20, fontSize:11, padding:2} }>
                    {errors?.Email && <p>{"Укажите правильную почту!"}</p>}
                </div>
                {/*----------------------------------------------------------------------------- //Почта */}


                {/*----------------------------------------------------------------------------- Пароль */}
                <label>
                    <input placeholder="Пароль" 
                        {...register("FirstPassword",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                            },
                            pattern: /(?=.*[0-9])/g
                        })}
                    />
                </label>
                <div style={{height:20, fontSize:11, padding:2} }>
                    {errors?.FirstPassword && <p>{errors?.FirstPassword?.message || "Пароль содержит хотя бы одно число!"}</p>}
                </div>


                <label>
                    <input placeholder="Повторите пароль" 
                        {...register("TwoPassword")}
                    />
                </label>
                
                
                {/*----------------------------------------------------------------------------- //Пароль */}


                <div className={styles.button__div}>
                    <button className={styles.button}>
                        <input type="submit" disabled={!isValid}/>
                    </button>
                </div>
            
            </form>
            </Layout>
            </div>
        <Footer/>
    </div> 
  );
}
// https://react-hook-form.com/api/useform/register - ссылка на документацию по функциям использовавшимся в формах)