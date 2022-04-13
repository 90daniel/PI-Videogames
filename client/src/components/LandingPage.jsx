import React from "react";
import { Link } from 'react-router-dom'
import s from '../style/LandingPage.module.css'
import gmail from '../imagenes/gmail (1).png'

const LandingPage = () => {
    return (
        <div className={s.full}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.titulo}>Videogames APP</h1>
                    <Link to='/home'>
                        <button className={s.btn}>
                            <span className={s.ingresar}>LETS START</span>
                        </button>
                    </Link>
                </div>
                <div className={s.links}>
                    <div className={s.mini_box}>
                        <a href='mailto:daniel@nexonet.com.ar' target="_blank" rel="noreferrer">
                            <img src={gmail} alt='gmail' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default LandingPage





{/* <div className={s.mini_box}>
    <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
        <img src={linkedin} alt='linkedin' />
    </a>
</div>
<div className={s.mini_box}>
    <a href='https://github.com/' target="_blank" rel="noreferrer">
        <img src={github} alt='github' />
    </a>
</div> */}