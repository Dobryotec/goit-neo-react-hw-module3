import { FaUser, FaPhone } from 'react-icons/fa6';

import { IContactProps } from './Contact.types';

import css from './Contact.module.css';

const Contact: React.FC<IContactProps> = ({ name, number, id, deleteContact }) => {
  return (
    <div className={css['contact-content']}>
      <div className={css['contact-information-wrapper']}>
        <div className={css['contact-information']}>
          <FaUser className={css.icon} size={25} />
          {name}
        </div>
        <div className={css['contact-information']}>
          <FaPhone className={css.icon} size={25} />
          {number}
        </div>
      </div>
      <button type="button" onClick={() => deleteContact(id)} className={css["contact-button"]}>Delete</button>
    </div>
  );
};

export default Contact;
