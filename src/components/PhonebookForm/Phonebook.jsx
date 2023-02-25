import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { FormInput, FormBtn, Form } from './Phonebook.styled';



export class PhonebookForm extends Component {
    handleSubmit = ({ name, number }, { resetForm }) => {
        const nameInContacts = this.props.contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (nameInContacts) {
            alert(`${name} is already in contacts`);
            return;
        }
        const contact = { id: nanoid(), name, number };
        this.props.onSubmit(contact);
        resetForm();
    };
    render() {
        return (<div>
            <Formik
                initialValues={{ name: '', number: '' }} onSubmit={this.handleSubmit}>
                <Form>
                    <FormInput>Name
                        <Field
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required /></FormInput>
                    <FormInput>Number
                        <Field
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required /></FormInput>
                    <FormBtn type='submit'>Add contact</FormBtn>
                </Form>
            </Formik>
        </div>
        )
    }
}
PhonebookForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};