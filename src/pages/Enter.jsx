import React, { useState } from "react";
import logo_paroquia from './../assets/logo_paroquia.png';
import styles from './Enter.module.css'

export const Enter = () => {

  const [layout, setLayout] = useState(false);

    return (
        <>
        <div className={layout ? styles.container + ' ' + styles.signUp_mode : styles.container }>
        <div className={styles.formsContainer}>
          <div className={styles.signinSignup}>

            <form action="#" className={styles.signIn_form}>
              <h2 className={styles.title}>Entrar</h2>
              <div className={styles.inputField}>
                <i class='bx bx-user'></i>
                <input type="text" placeholder="Usuário" />
              </div>
              <div className={styles.inputField}>
                <i class='bx bx-key'></i>
                <input type="password" placeholder="Senha" />
              </div>
              <input type="submit" value="Login" className={styles.btn} />
            </form>

            <form action="#" className={styles.signUp_form}>
              <h2 className={styles.title}>Registar</h2>
              <div className={styles.inputField}>
                <i class='bx bx-user'></i>
                <input type="text" placeholder="Nome completo" />
              </div>
              <div className={styles.inputField}>
                <i class='bx bx-envelope' ></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.inputField}>
                <i class='bx bx-phone'></i>
                <input type="text" placeholder="Telefone" />
              </div>
              <div className={styles.inputField}>
                <i class='bx bx-key'></i>
                <input type="password" placeholder="Senha" />
              </div>
              <div className={styles.inputField}>
                <i class='bx bx-key'></i>
                <input type="password" placeholder="Confirmar senha" />
              </div>
              <input type="submit" className={styles.btn} value="Sign up" />
            </form>
          </div>
        </div>

        <div className={styles.panelsContainer}>
          <div className={styles.leftPanel + ' ' + styles.panel} id="sign-up-side">
            <div className={styles.content}>
              <h3>É novo por aqui?</h3>
              <p>
                Venha fazer parte de nossa comunidade paroquial aqui de Buritizal.
                Estamos de aguardando!!!
              </p>
              <button className={styles.btn} onClick={() => setLayout(true)}>
                Fazer registro
              </button>
            </div>
            <img src={logo_paroquia} className={styles.image} />
          </div>

          <div className={styles.rightPanel + ' ' + styles.panel} id="sign-in-side">
            <div className={styles.content}>
              <h3>Está cadastrado?</h3>
              <p>
                Então venha logo conectar-se com o pessoal e tudo que essa
                comunidade tem a oferecer!!!
              </p>
              <button className={styles.btn} onClick={() => setLayout(false)}>
                Conectar-se
              </button>
            </div>
            <img src={logo_paroquia} className={styles.image} />
          </div>

        </div>
      </div>
      </>
    );
}