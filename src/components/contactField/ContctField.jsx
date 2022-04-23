import React from "react";

import ContactFieldStile from "./contactField.module.css";

const ContctField = () => {
  return (
    <div className={ContactFieldStile.container}>
      <div className={ContactFieldStile.blueLine}></div>
      <div className={ContactFieldStile.office}>
        <div className={ContactFieldStile.item}>
          <h3 className={ContactFieldStile.title}>Phone</h3>
          <p className={`${ContactFieldStile.text} ${ContactFieldStile.phone}`}>
            +34 965 020784
          </p>
        </div>
        <div className={ContactFieldStile.item}>
          <h3 className={ContactFieldStile.title}>Office in Spain</h3>
          <p className={ContactFieldStile.text}>
            Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </p>
        </div>
        <div className={ContactFieldStile.item}>
          <h3 className={ContactFieldStile.title}>E-mail</h3>
          <p className={`${ContactFieldStile.text} ${ContactFieldStile.mail}`}>
            sales@wtgspain.c om
          </p>
        </div>
      </div>
      <div className={ContactFieldStile.online}>
        <div className={ContactFieldStile.blueLine}></div>
        <h3 className={ContactFieldStile.title}>We are online</h3>
        <div className={ContactFieldStile.icons}>
          <div className={ContactFieldStile.whatsApp}>WhatsApp</div>
          <div className={ContactFieldStile.viber}>Viber</div>
          <div className={ContactFieldStile.messenger}>Messenger</div>
          <div className={ContactFieldStile.telegram}>Tlegram</div>
        </div>
      </div>
    </div>
  );
};

export default ContctField;
