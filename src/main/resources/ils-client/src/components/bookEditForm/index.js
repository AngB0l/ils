import React from 'react';
import {Form, Input} from 'formik-semantic-ui';
import axios from 'axios';
import {Container} from 'semantic-ui-react'
import _ from "lodash";


const BookEditForm = (props) => {

    const {item} = props;

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);
        return id;
    }

    return (
        <Container>
            <h1>Book</h1>
            <Form
                initialValues={{
                    copies: item.copies,
                    title: item.title,
                    field: item.field,
                    pages: item.pages,
                    refCode: item.refCode,
                    yearOfPublication: item.yearOfPublication,
                    isbn: item.isbn,
                    //TODO : render the links to the authors & publisher
                    authors: item.authors,
                    publisher: item.publisher,
                }}
                onSubmit={async (values) => {
                    // authors is expected to be a list
                    values.authors = values.authors.split(',')
                   await axios.patch(`http://localhost:8080/books/${getIdFromUrl(item._links.book.href)}`, values)
                        .then(response => {
                            alert('Success :)')
                            window.location = "/books"
                        })
                        .catch(error => {
                            console.log(values)
                            alert('Something went wrong :S \n' + error)
                        })
                }}
            >
                <label htmlFor="title">Title</label>
                <Input name="title"/>

                <label htmlFor="authors">Authors</label>
                <Input name="authors"/>

                <label htmlFor="yearOfPublication">Year of publication</label>
                <Input name="yearOfPublication" placeholder="yyyy" type="number"/>

                <label htmlFor="field">Field</label>
                <Input name="field"/>

                <label htmlFor="refCode">Ref Code</label>
                <Input name="refCode"/>

                <label htmlFor="isbn">ISBN</label>
                <Input name="isbn"/>

                <label htmlFor="publisher">Publisher</label>
                <Input name="publisher"/>

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

export default BookEditForm;