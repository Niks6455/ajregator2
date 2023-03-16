import React from 'react';
import styles from './Header_Hamburger.module.scss';
import people from './../../images/header/people.svg';
import IconClose from './../../images/header/hamburger-close.svg';
import IconOpen from './../../images/header/hamburger.svg';
import { Link } from "react-router-dom";
const Header = () => {

  
    const [show, setShow] = React.useState(false);
   

    return(

      <div className={styles.nav__inner} style={show ? {height: '185px'} :  {height: '85px'}}>

        <div className={styles.logo}></div>


        <div className={styles.navR}>

           <div className={styles.flex}>
              <div className={styles.peopleIcons}>
              <Link to="/MyPage"><img src={show ? '' : people} ></img></Link>  
              </div>

              <button className={styles.button1} type='button' onClick={() => setShow(!show)}>
                    <img src={show ? IconClose : IconOpen} alt='Auth'></img>
              </button>
            </div>

          
              <nav className= {styles.menu  + (show ? 'show' : '')}>
                <ul>
                  <Link to='/MyPage'><li>Личный кабинет</li></Link>
                  <Link to='/about'><li>О нас</li></Link>
                  <Link to='/about'><li>Контакты</li></Link>
                </ul>
              </nav>  
              
          </div>
      </div>
    )
  } 

export default Header