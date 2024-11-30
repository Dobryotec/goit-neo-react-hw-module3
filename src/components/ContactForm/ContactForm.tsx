import { useId } from 'react';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import { contactSchema } from '../../utils/contactSchema';
import { IValues, IContactFormProps } from './ContactForm.types';

import css from './ContactForm.module.css';

const ContactForm: React.FC<IContactFormProps> = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const contactId = uuidv4();

  const handleSubmit = (values: IValues, { resetForm }: FormikHelpers<IValues>) => {
    addContact({ ...values, id: contactId });
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css['form-field-wrapper']}>
            <label className={css['form-label']} htmlFor={nameId}>
              Name
            </label>
            <Field
              className={clsx(css['form-input'], {
                [css['error-input']]: errors.name && touched.name,
                [css['success-input']]: !errors.name && touched.name,
              })}
              id={nameId}
              name="name"
            />
            <ErrorMessage component="p" className={css.error} name="name" />
          </div>
          <div className={css['form-field-wrapper']}>
            <label className={css['form-label']} htmlFor={numberId}>
              Number
            </label>
            <Field
              className={clsx(css['form-input'], {
                [css['error-input']]: errors.number && touched.number,
                [css['success-input']]: !errors.number && touched.number,
              })}
              id={numberId}
              name="number"
            />
            <ErrorMessage component="p" className={css.error} name="number" />
          </div>
          <button className={css['form-button']} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
