import React from 'react';
import {Formik, Field, Form, Input} from 'formik-semantic-ui';
import axios from 'axios';
import {Container} from 'semantic-ui-react'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const ThesisForm = () => {


    return (
        <Container>
            <h1>Thesis</h1>
            <Form
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
                    await axios.post('http://localhost:8080/theses', values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/theses"
                        })
                        .catch(error => {
                            alert('Something went wrong :S')
                        })
                }}
            >
                <label htmlFor="title">Title</label>
                <Input name="title"/>

                <label htmlFor="type">Type</label>
                <Input name="type"/>

                <label htmlFor="author">Author</label>
                <Input name="author"/>

                <label htmlFor="supervisingProfessor">Supervising Professor</label>
                <Input name="supervisingProfessor"/>

                <label htmlFor="university">University</label>
                <Input name="university"/>

                <label htmlFor="department">Department</label>
                <Input name="department"/>

                <label htmlFor="field">Field</label>
                <Input name="field"/>

                <label htmlFor="yearOfPublication">Year of publication</label>
                <Input name="yearOfPublication" placeholder="yyyy" type="number"/>

                <label htmlFor="refCode">Ref. Core</label>
                <Input name="refCode"/>

                <label htmlFor="copies">Copies</label>
                <Input name="copies" type="number"/>

                <label htmlFor="pages">Pages</label>
                <Input name="pages" type="number"/>


                <button type="submit">
                    Submit
                </button>
            </Form>
        </Container>
    );
}

export default ThesisForm;