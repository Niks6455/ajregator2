import React from "react";
import styles from './Footer.module.scss';
const Footer = () =>{
    return(
        <footer>
            <div className={styles.footer__inner}>

                <div className={styles.footer__logo}>
                    <h3>CLEANCAR</h3>
                    <p>© 2023 Cleancar</p>
                </div>

                <div className={styles.footer__address}>
                    <a href="https://yandex.ru/maps/-/CCUvQDD61C" ><p>Таганрог, улица Чехова дом 2, этаж 1, ком.7</p></a>
                    <p>ООО «Чистый автомобиль»</p>
                </div>

                <div className={styles.footer__number}>
                    <h3><strong>Телефон поддержки:</strong></h3>
                    <p>8 906 630 41 56 </p>
                    <h3 className={styles.footer__email} ><strong>Почта:</strong></h3>
                    <a href="/">Cleancar@gmail.com</a>
                </div>

            </div>
            
        </footer>
    )
}

export default Footer;