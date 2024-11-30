export interface IValues {
  name: string;
  number: string;
  id: string;
}

export interface IAddContact {
  (newContact: IValues): void;
}

export interface IContactFormProps {
  addContact: IAddContact;
}
