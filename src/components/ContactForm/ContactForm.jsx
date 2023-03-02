import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import {
  UserForm,
  InputBox,
  Label,
  ButtonAdd,
  FormInput,
  Error,
} from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(5).max(30).trim().required(),
  number: yup.string().min(12).max(13).trim().required(),
});

const nameInputId = nanoid();
const numberInputId = nanoid();

const initialValue = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValue}
      onSubmit={handleFormSubmit}
    >
      <UserForm>
        <InputBox>
          <Label htmlFor={nameInputId}>Name</Label>
          <FormInput
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="name" component="p" />
        </InputBox>

        <InputBox>
          <Label htmlFor={numberInputId}>Number</Label>
          <FormInput
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error name="number" component="p" />
        </InputBox>

        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </UserForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
