import { useForm } from "react-hook-form";
import React from "react";
import styles from "./Register.module.scss"
export default function Register() {
 const {
    register,
    formState:{
        errors,
    },
    handleSubmit,
 } = useForm();

 const onSubmit = (data) =>{
    alert(JSON.stringify(data))
 }//data- хранит всю заполненную информацию о форме
  return (
    <div className={styles.form}>
    <h1>React Hock Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        First Name:
            <input
                {...register('firstName')}
            />
        </label>
            <input type="submit"/>
        </form>
    </div>
  );
}