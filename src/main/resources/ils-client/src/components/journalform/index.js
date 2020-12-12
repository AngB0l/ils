import React from 'react';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const JournalForm = () => {


    return (
        <div>
            <h1>Journal</h1>
            <Formik
                initialValues={{
                    title: '',
                    yearOfPublication: '',
                    pages: '',
                    copies: '',
                    refCode: '',
                    field: '',
                    volume: '',
                    issue: '',
                    isbn: '',
                    publisher: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post('http://localhost:8080/journals', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/journals"
                        })
                        .catch(error => {
                            alert('Something went wrong :S')
                        })
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field name="title"/>

                        <label htmlFor="issue">Issue</label>
                        <Field name="issue" type="number"/>

                        <label htmlFor="volume">Volume</label>
                        <Field name="volume" type="number"/>

                        <label htmlFor="yearOfPublication">Year of Publication</label>
                        <Field name="yearOfPublication" type="number"/>

                        <label htmlFor="field">Field</label>
                        <Field name="field"/>

                        <label htmlFor="refCode">Ref. Code</label>
                        <Field name="refCode"/>

                        <label htmlFor="isbn">ISBN</label>
                        <Field name="isbn"/>

                        <label htmlFor="publisher">Publisher</label>
                        <Field name="publisher"/>

                        <label htmlFor="copies">Copies</label>
                        <Field name="copies" type="number"/>

                        <label htmlFor="pages">Pages</label>
                        <Field name="pages"  type="number"/>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default JournalForm;