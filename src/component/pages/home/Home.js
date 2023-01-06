import Button from "./../../ui/Button.js";
import React from "react";
import Layout from "../../common/Layout";
import styles from './Home.module.scss';
import { Link } from "react-router-dom";

export default function Home() {
    return(
       <div className={styles.homepage}>
            <Layout> 
                <div className={styles.images }> </div>
                
                <Link to='/main'>
                    <Button text={"Начать"} bg_color={'white'} text_color={'#4E78E2'} />
                </Link>
            </Layout>
       </div>
   
       
    ) 
   
   
}