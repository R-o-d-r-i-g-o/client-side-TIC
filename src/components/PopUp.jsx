import React from "react";
import styles from './PopUp.module.css';

export const QuestionatePopUP = () => {

    return (
        <div className={styles.QuoteModal}>
            <div className={styles.popupModal}>
                <div>
                {/* <a href="#close" title="Close" className="fclose" style="text-decoration: none;">X</a> */}
                <h3>Registro de escritório</h3>
                </div>
                <div> <br />
                <form role="form" className="text-center">

                    {/* map */}
                    <div className={styles.formGroup}>
                        <input type="text" id="valor_nome" required className="form-control" placeholder="Nome" tabIndex="1" />
                    </div>
                    {/* <div className="form-group">
                        <input type="email" id="valor_cnpj" required className="form-control" placeholder="CNPJ" maxLength="14" onInput="criaMascara('CPNJ')" tabIndex="2" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="valor_crc" required className="form-control" placeholder="CRC" maxLength="9" tabIndex="2" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="valor_email" required className="form-control" placeholder="Email" tabIndex="2" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="valor_whats" required className="form-control" placeholder="Whatsapp" maxLength="11" onInput="criaMascara('Celular')" tabIndex="2" />
                    </div> */}

                </form>
                </div>
                {/* <div className={styles.botao_popup}>
                    <a href="javascript:void(0)" onClick="history.go(-1); return false;">
                        <button type="button" className="btn btn-warning" > Cadastrar </button>
                    </a>
                </div> */}
            </div>
        </div>
    );
}
