import React from "react";
import './loader.scss'

export default function Loader(props){

    return(
        <main>
        {
            props.isLoading===true?
            <div className="loader" >
                <div className="loader__text">CLEANCAR</div>
                <div className="loader__inner">
                    <div className="loadingio-spinner-rolling-qyr1t3mnhdq">
                        <div className="ldio-z39gtxb0jrf">
                            <div></div>
                        </div>
                    </div>

                </div>
            </div>: 
            <div className="loader show" >
            <div className="loader__text">CLEANCAR</div>
            <div className="loader__inner">
                <div className="loadingio-spinner-rolling-qyr1t3mnhdq">
                    <div className="ldio-z39gtxb0jrf">
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
            } 
        </main>
          
    )
}


