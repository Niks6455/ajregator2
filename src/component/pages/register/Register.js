import { useForm} from "react-hook-form";
import React  from "react";
import styles from "./Register.module.scss"
import Layout from './../../common/Layout'
import Header from "../../common/header/Header";
import Footer from './../../common/footer/Footer'
import img1 from "./../../images/register/Caterpillar.png"
import img2 from "./../../images/register/Vector.png"
import { Link } from "react-router-dom";
import Title from "./../../ui/title/Title";

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
    if(JSON.stringify(data.FirstPassword) === JSON.stringify(data.TwoPassword)){
        //если пароли совпадают то отправляется форма, иначе выводим ошибку!
        console.log("Пароли совпадают");  
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));     
        reset();
    }else{
        alert("Пароли не совпадают!")
        console.log("Пароли не совпадают!");
    }
  
  
   
 }//data- хранит всю заполненную информацию о форме



 const [activeCheckbox, setActiveCheckbox] = React.useState(null);

return (
    
    <div className={styles.form}>
        <Header/>
        
        <div className={styles.form__inner}>
        <Layout>
            <Title text="Регистрация"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*----------------------------------------------------------------------------- ИМЯ ФАМИЛИЯ */}
                <label>
                    <input className={styles.field} placeholder="Имя"
                        {...register("firstName",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                            }
                        })}
                    />
                </label>
                <div className={styles.marg} style={{height:20, fontSize:11,padding:2} }>
                    {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
                </div>

                <label>
                    <input className={styles.field} placeholder="Фамилия"
                        {...register("LastName",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                            }
                        })}
                    />
                </label>
                <div className={styles.marg} style={{height:20, fontSize:11,padding:2} }>
                    {errors?.LastName && <p>{errors?.LastName?.message || "Ошибка!"}</p>}
                </div>
                {/*----------------------------------------------------------------------------- //ИМЯ ФАМИЛИЯ */}


                {/*----------------------------------------------------------------------------- чекбокс */}
                {/* <div className={styles.check__st}>
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className={styles.check__inner}>
                            <div  className={styles.check}>
                                <label >{(idx === 0 && <p>М</p>) || <p>Ж</p>} </label>
                                <input className={styles.field__check} value={(idx === 0 && "Men") || "Women"}
                                    {...register("Gender")}
                                    type="checkbox"
                                    checked={idx === activeCheckbox}
                                    onClick={() => setActiveCheckbox(idx)}
                                />
                            </div>
                        </div>
                    ))}
                </div> */}
                {/*----------------------------------------------------------------------------- //чекбокс */}
            

                {/*----------------------------------------------------------------------------- Почта */}
                <label>
                    <input className={styles.field} placeholder="Почта"
                        {...register("Email",{
                            required: "Обязательное поле!",
                            pattern:   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                </label>
                <div className={styles.marg} style={{height:20, fontSize:11, padding:2} }>
                    {errors?.Email && <p>{"Укажите правильную почту!"}</p>}
                </div>
                {/*----------------------------------------------------------------------------- //Почта */}


                {/*----------------------------------------------------------------------------- Пароль */}
                <label>
                    <input className={styles.field} placeholder="Пароль" 
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
                <div className={styles.marg} style={{height:20, fontSize:11, padding:2} }>
                    {errors?.FirstPassword && <p>{errors?.FirstPassword?.message || "Пароль содержит хотя бы одно число!"}</p>}
                </div>

              
                <label>
                    <input className={styles.field} placeholder="Повторите пароль" 
                        {...register("TwoPassword",{
                            required: "Обязательное поле!",
                            minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                            },
                            pattern: /(?=.*[0-9])/g
                            })}
                    />
                </label>

             
                {/* <div id= "lol" style={(check) ? {display: "none"} :  {display: "block"}} >
                   <p>Пароли не совпадают!</p>
                </div> */}
                
                {/*----------------------------------------------------------------------------- //Пароль */}


                {/*----------------------------------------------------------------------------- Confirmation */}

                <label>
                    <div className={styles.potw}>
                    <div className={styles.check__but}>
                         <input
                            type="checkbox"  {...register("Confirmation",{
                            required: "Обязательное поле!"})}
                        />
                    </div>
                       <div>
                            <p>Даю согласие на обработку персональных данных</p>
                       </div>
                
                    </div> 
                </label>

                {/*----------------------------------------------------------------------------- //Confirmation */}



                <div className={styles.button__div}>
                    <button className={styles.button} >
                      <input value="Зарегистрироваться" style={!isValid ? {color:"#b1acac", fontSize: 13} : {color:"white", fontSize: 13} } type="submit" disabled={!isValid}/>
                    </button>
                </div>

                    {/* временная кнопока перехода на Аторизацию */}
                <div className={styles.time__butt}>
                    <button className={styles.time__butt__text}>
                        <Link to="/authorization">Авторизация</Link>
                    </button>
                    <button className={styles.time__butt__text}>
                        <Link to="/HomePage">Homepage</Link>
                    </button>
                </div>
              
            </form>
            </Layout>
                {/* img1 */}
            {/* <div className={styles.images1}>
                <img src={img1} alt="bg1"></img>
            </div> */}
                 {/* img2 */}
            {/* <div className={styles.images2}>
                <img src={img2} alt="bg2"></img>
            </div> */}

            </div>
        <Footer/>
    </div> 
  );
}
// https://react-hook-form.com/api/useform/register - ссылка на документацию по функциям использовавшимся в формах)