import styles from './Menu.module.css';
import logo_paroquia from './../assets/logo_paroquia.png';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Menu = () => {

    const [appear, setAppear] = useState(true);

    return (
        <>
        <div className={appear ? styles.sidebar : styles.sidebar + ' ' + styles.sidebarOpen}>
            <div
                className={styles.logoDetails}
                onClick={() => appear ? setAppear(false) : setAppear(true)}
            >
                <div className={styles.logo_name}>Scheduler</div>
                <i className={appear ? 'bx bx-menu' : 'bx bx-x'} id={styles.btn}></i>
            </div>

            <img src={logo_paroquia} id={styles.paroquia} />

            <ul className={styles.navList}>
                <li>
                    <Link className={styles.linkReference} to='/Events'>
                        <i className='bx bx-calendar' />
                        <span className={styles.links_name}>Eventos</span>
                    </Link>
                    <span className={styles.tooltip}>Eventos</span>
                </li>
                <li>
                    <Link className={styles.linkReference} to='/Pastors'>
                        <i className='bx bx-home-alt' />
                        <span className={styles.links_name}>Pastorais</span>
                    </Link>
                    <span className={styles.tooltip}>Pastorais</span>
                </li>
                <li>
                    <Link className={styles.linkReference} to='/User'>
                        <i className='bx bx-user' />
                        <span className={styles.links_name}>Usuário</span>
                    </Link>
                    <span className={styles.tooltip}>Usuário</span>
                </li>
                <li>
                    <Link className={styles.linkReference} to='/Community'>
                        <i className='bx bxs-group'/>
                        <span className={styles.links_name}>Comunidade</span>
                    </Link>
                    <span className={styles.tooltip}>Comunidade</span>
                </li>
                <li className={styles.profile}>
                    <div className={styles.profileDetails}>
                    <div >
                        <div className={styles.name}>Rodrigo M. Ribeiro</div>
                        <div className={styles.job}>rodrigomarqribeiro@gmail.com</div>
                    </div>
                    </div>
                    <i className='bx bx-log-out' id={styles.log_out} />
                </li>
            </ul>
        </div>

        <section className={styles.homeSection}>
            <Outlet />
        </section>
        </>
    );
};