import React from 'react';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const PublisherForm = () => {


    return (
        <div>
            <h1>Publisher</h1>
            <Formik
                initialValues={{
                    name: '',
                    street: '',
                    city: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post('http://localhost:8080/publishers', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/publishers"
                        })
                        .catch(error => {
                            alert('Something went wrong :S')
                        })
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name"/>

                        <label htmlFor="city">City</label>
                        <Field name="city"/>

                        <label htmlFor="street">Street</label>
                        <Field name="street"/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PublisherForm;