import Contact from '../Contact/Contact';

import { IContactListProps } from './ContactsList.types';

import css from './ContactList.module.css';

const ContactList: React.FC<IContactListProps> = ({ contacts, deleteContact }) => {
  return (
    <ul className={css["contacts-list"]}>
      {contacts.map(({ name, number, id }) => (
        <li className={css['contact-item']} key={id}>
          <Contact name={name} number={number} id={id} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
