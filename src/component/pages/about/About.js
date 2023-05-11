import { useForm} from "react-hook-form";
import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Layout from "../../common/Layout";
import Style from './About.module.scss';
import Button from "./../../ui/Button";
import Card from "../../ui/Card";
import img1 from "./../../images/About/photo_car.png";
import img2 from "./../../images/About/work.png";

export default function About() {

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
            console.log(JSON.stringify(data));     
            reset();
     }//data- хранит всю заполненную информацию о форме
    

     
    return(
       <div className={Style.About}>
            <Layout>   

                <Header/>
                <div className={Style.About__inner}>
                    <div className={Style.About__content}>
                        <div className={Style.About__title}>
                            <div className={Style.About__title__text}> <h1>О нас</h1></div>
                        </div>
                        <div className={Style.About__title__inner}>
                            <div className={Style.About__img}>
                                <div className={Style.About__img__inner}></div>
                            </div>
                            <div className={Style.About__text}>
                                <div className={Style.About__text}>Наш агрегатор автомоек позволяет решать самые распространенные проблемы связанные с очередями и неудобствами при выборе автомойки.</div> 
                                <div className={Style.About__button}>
                                    <Button text={'Связаться'} bg_color={'#4E78E2'} text_color={'#ffffff'} w = '145' h = '50' size= '20'/>
                                </div>
                              
                            </div>
                        </div>
                      
                    </div>
 

                    <div className={Style.About__card}>
                        <Card text="52 партнера" bgImage={img1}/> 
                        <Card text="Более 10 000 пользователей" bgImage={img2}/> 
                    </div>

                </div>
                <div className={Style.partner}>
                    <h3>Если хотите стать частью нашей большой компании, заполните свои данные, чтообы мы могли с вами связаться!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={Style.form__inner}>
                        <label>Почта</label>
                            <input className={Style.field} type="email" placeholder="Wash@mail.com"
                                {...register("Email",{
                                    required: "Обязательное поле!",
                                    pattern:   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                     
                        <div  style={{height:20, fontSize:11, padding:2} }>
                            {errors?.Email && <p>{"Укажите правильную почту!"}</p>}
                        </div>

                        <label>Номер телефона</label>
                            <input className={Style.field} type="PhoneNumber" placeholder="+7. . ."
                                {...register("PhoneNumber",{
                                    required: "Обязательное поле!",
                                    pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
                                })}
                            />
                
                        <div  style={{height:20, fontSize:11, padding:2} }>
                            {errors?.PhoneNumber && <p>{"Укажите правильный номер телефона"}</p>}
                        </div>
                        

                        <label>Адрес мойки</label>
                            <input className={Style.field} type="Address" placeholder="ул.Автомойщиков 17"
                                {...register("AddressWash",{required:"Обязательное поле!",})}/>
                
                        <div  style={{height:20, fontSize:11, padding:2} }>
                            {errors?.AddressWash && <p>{"Это обязательное поле"}</p>}
                        </div>

                        <label>Название автомойки</label>
                            <input className={Style.field} type="WashName" placeholder="Автомойка №1"
                                {...register("WashName",{required:"Обязательное поле!"})}/>
                
                        <div  style={{height:20, fontSize:11, padding:2} }>
                            {errors?.WashName && <p>{"Это обязательное поле"}</p>}
                        </div>

                        <label>ФИО</label>
                            <input className={Style.field} type="FIO" placeholder="+7. . ."
                                {...register("FIO",{required:"Обязательное поле!"})}/>
                
                        <div  style={{height:20, fontSize:11, padding:2} }>
                            {errors?.FIO && <p>{"Это обязательное поле"}</p>}
                        </div>
                        
                        <label>
                            <div className={Style.potw}>
                            <div className={Style.check__but}>
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

                    </div>
                      

                        
                        <div className={Style.button__div}>
                            <button className={Style.button} style={!isValid ? {backgroundColor:"#8ca4e2", border: "1px solid #8ca4e2 "} : {backgroundColor:"#4E78E2"}}>
                                <input style={!isValid ? {backgroundColor:"#8ca4e2"} : {backgroundColor:"#4E78E2"}}
                                value="Стать партнёром"  type="submit" disabled={!isValid}/>
                            </button>
                        </div>

                    </form>
                  
                </div>
             
                
            </Layout>
            
              <Footer/>
          
             
       </div>
   
    ) 
   
   
}