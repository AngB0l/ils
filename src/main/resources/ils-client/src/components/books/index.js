import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Button,
    Container,
    Header,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';


const BooksTable = () => {
    const [books, setBooks] = useState([]);

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);

        return id;
    }

    const authorsToString = (authors) => {
        return authors.map(author => {
            return `${author.firstName} ${author.lastName}, `
        })
    }

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/books');
            const books = result.data._embedded.books;
            await Promise.all(books.map( async(book) => {
                const authorsUrl = await axios(book._links.authors.href);
                const authors =  authorsUrl.data._embedded.authors;
                book.authors = authors;

                const publisherUrl = await axios(book._links.publisher.href);
                const publisher =  publisherUrl.data.name;
                book.publisher = publisher;
            }))

            setBooks(books);
        }
        fetchData()
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/books/${id}`)
            .then(response => {
                alert('Success :)')
                window.location = "/books"
            })
            .catch(error => {
                alert('Something went wrong :s')
            })
    }

    return (
        <div className="BooksTable">
            <Container>
                <Header content={"Books"} as="h2"/>
                <Button circular size='mini' positive icon='add' as='a' href={'/addbook'}/>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Authors</Table.HeaderCell>
                            <Table.HeaderCell>Publication Date</Table.HeaderCell>
                            <Table.HeaderCell>Field</Table.HeaderCell>
                            <Table.HeaderCell>Ref Code</Table.HeaderCell>
                            <Table.HeaderCell>ISBN</Table.HeaderCell>
                            <Table.HeaderCell>Publisher</Table.HeaderCell>
                            <Table.HeaderCell>Copies</Table.HeaderCell>
                            <Table.HeaderCell>Pages</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {books.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.book.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.book.href)}</Table.Cell>
                                <Table.Cell> {item.title} </Table.Cell>
                                <Table.Cell> {authorsToString(item.authors)} </Table.Cell>
                                <Table.Cell> {item.yearOfPublication} </Table.Cell>
                                <Table.Cell> {item.field} </Table.Cell>
                                <Table.Cell> {item.refCode} </Table.Cell>
                                <Table.Cell> {item.isbn} </Table.Cell>
                                <Table.Cell> {item.publisher} </Table.Cell>
                                <Table.Cell> {item.copies} </Table.Cell>
                                <Table.Cell> {item.pages} </Table.Cell>
                                <Table.Cell>
                                    <Button.Group icon circular>
                                        <Button circular size='mini'  icon='edit' as='a' href={'#'}/>
                                        <Button circular size='mini' icon='delete' onClick={()=> handleDelete(getIdFromUrl(item._links.book.href))}/>
                                    </Button.Group>
                                </Table.Cell>

                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>
        </div>
    );
}

export default BooksTable;


