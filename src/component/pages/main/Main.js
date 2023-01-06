import React from "react";
import styles from './Main.module.scss';
import Header from './../../common/header/Header';
import Layout from "../../common/Layout";

export const Main = () => (
      <div className={styles.main__page}>
            <Layout>
                  <Header/>
            </Layout>
         
      </div>
)

export default Main