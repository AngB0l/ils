import React from 'react';
import {Formik, Field, Form} from 'formik';
import axios from 'axios';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const ThesisForm = () => {


    return (
        <div>
            <h1>Thesis</h1>
            <Formik
                initialValues={{
                    title: '',
                    yearOfPublication: '',
                    pages: '',
                    copies: '',
                    refCode: '',
                    field: '',
                    supervisingProfessor: '',
                    type: '',
                    department: '',
                    university: '',
                    author: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    axios.post('http://localhost:8080/theses', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/theses"
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

                        <label htmlFor="type">Type</label>
                        <Field name="type"/>

                        <label htmlFor="author">Author</label>
                        <Field name="author"/>

                        <label htmlFor="supervisingProfessor">Supervising Professor</label>
                        <Field name="supervisingProfessor"/>

                        <label htmlFor="university">University</label>
                        <Field name="university"/>

                        <label htmlFor="department">Department</label>
                        <Field name="department"/>

                        <label htmlFor="field">Field</label>
                        <Field name="field"/>

                        <label htmlFor="yearOfPublication">Year of publication</label>
                        <Field name="yearOfPublication" placeholder="yyyy"  type="number"/>

                        <label htmlFor="refCode">Ref. Core</label>
                        <Field name="refCode"/>

                        <label htmlFor="copies">Copies</label>
                        <Field name="copies" type="number"/>

                        <label htmlFor="type">Pages</label>
                        <Field name="type" type="number"/>



                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ThesisForm;