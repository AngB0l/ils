import {useState, useEffect} from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';
import {
    Container,
    Header,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';



const AuthorsTable = () => {
    const [authors, setAuthors] = useState([]);

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);

        return id;
    }
    // example of the format in the db : 1997-01-05T00:00:00.000+00:00
    const formatDate =(date) => {
        const parse = parseISO(date)
        console.log(parse)
        const dmy = format(parse, 'dd/MM/yyyy');
        return dmy
    }

    useEffect(async () => {
        const result = await axios('http://localhost:8080/authors');
        setAuthors(result.data._embedded.authors);
    }, []);

    return (
        <div className="AuthorsTable">
            <Container>
                <Header content={"Authors"} as="h2"/>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                            <Table.HeaderCell>About</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {authors.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.author.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.author.href)}</Table.Cell>
                                <Table.Cell> {item.firstName} </Table.Cell>
                                <Table.Cell> {item.lastName} </Table.Cell>
                                <Table.Cell> {item.email} </Table.Cell>
                                <Table.Cell> {formatDate(item.dob)} </Table.Cell>
                                <Table.Cell> {item.about} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>
        </div>
    );
}

export default AuthorsTable;


