import { IValues } from '../ContactForm/ContactForm.types';
import { IDeleteContact } from '../Contact/Contact.types';

export interface IContactListProps {
  contacts: IValues[];
  deleteContact: IDeleteContact;
}
