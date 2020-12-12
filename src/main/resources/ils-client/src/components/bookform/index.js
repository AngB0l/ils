import React from 'react';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const BookForm = () => {


    return (
        <div>
            <h1>Book</h1>
            <Formik
                initialValues={{
                    copies: '',
                    title: '',
                    field: '',
                    pages: '',
                    refCode: '',
                    yearOfPublication: '',
                    isbn: '',
                    authors: '',
                    publisher: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post('http://localhost:8080/books', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/books"
                        })
                        .catch(error => {
                            console.log(values)
                            alert('Something went wrong :S \n'+ error)
                        })
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field name="title"/>

                        <label htmlFor="authors">Authors</label>
                        <Field name="authors"/>

                        <label htmlFor="yearOfPublication">Year of publication</label>
                        <Field name="yearOfPublication" placeholder="yyyy"  type="number"/>

                        <label htmlFor="field">Field</label>
                        <Field name="field"/>

                        <label htmlFor="refCode">Ref Code</label>
                        <Field name="refCode"/>

                        <label htmlFor="isbn">ISBN</label>
                        <Field name="isbn"/>

                        <label htmlFor="publisher">Publisher</label>
                        <Field name="publisher"/>

                        <label htmlFor="copies">Copies</label>
                        <Field name="copies" type="number"/>

                        <label htmlFor="pages">Pages</label>
                        <Field name="pages" type="number"/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookForm;