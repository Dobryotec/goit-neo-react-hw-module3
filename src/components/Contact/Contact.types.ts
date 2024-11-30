import { IValues } from '../ContactForm/ContactForm.types';

export interface IDeleteContact {
  (id: string): void;
}

export interface IContactProps extends IValues {
  deleteContact: IDeleteContact;
}
