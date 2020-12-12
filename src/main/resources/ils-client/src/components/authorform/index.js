import React from 'react';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const AuthorForm = () => {


    return (
        <div>
            <h1>Author</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    dob: '',
                    about: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post('http://localhost:8080/authors', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/authors"
                        })
                        .catch(error => {
                            alert('Something went wrong :S')
                        })
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" placeholder="Jane"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" placeholder="Doe"/>

                        <label htmlFor="email">Email</label>
                        <Field name="email" placeholder="yourEmail@domain.com" type="email"/>

                        <label htmlFor="dob">Date of Birth</label>
                        <Field name="dob" placeholder="dd/MM/yyyy" type="date"/>

                        <label htmlFor="about">About</label>
                        <Field name="about" as="textarea" placeholder="about"/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AuthorForm;