import {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Container,
    Header,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';


const JournalsTable = () => {
    const [journals, setJournals] = useState([]);

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);

        return id;
    }

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/journals');
            const journals = result.data._embedded.journals;
            console.log(journals);

            await Promise.all(journals.map( async(journal) => {
                const publisherUrl = await axios(journal._links.publisher.href);
                const publisher =  publisherUrl.data.name;
                journal.publisher = publisher;
            }))
            setJournals(journals);
        }
        fetchData()
    }, []);

    return (
        <div className="JournalsTable">
            <Container>
                <Header content={"Journals"} as="h2"/>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Issue</Table.HeaderCell>
                            <Table.HeaderCell>Volume</Table.HeaderCell>
                            <Table.HeaderCell>Publication Year</Table.HeaderCell>
                            <Table.HeaderCell>Field</Table.HeaderCell>
                            <Table.HeaderCell>Ref Code</Table.HeaderCell>
                            <Table.HeaderCell>ISBN</Table.HeaderCell>
                            <Table.HeaderCell>Publisher</Table.HeaderCell>
                            <Table.HeaderCell>Copies</Table.HeaderCell>
                            <Table.HeaderCell>Pages</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {journals.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.journal.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.journal.href)}</Table.Cell>
                                <Table.Cell> {item.title} </Table.Cell>
                                <Table.Cell> {item.issue} </Table.Cell>
                                <Table.Cell> {item.volume} </Table.Cell>
                                <Table.Cell> {item.yearOfPublication} </Table.Cell>
                                <Table.Cell> {item.field} </Table.Cell>
                                <Table.Cell> {item.refCode} </Table.Cell>
                                <Table.Cell> {item.isbn} </Table.Cell>
                                <Table.Cell> {item.publisher} </Table.Cell>
                                <Table.Cell> {item.copies} </Table.Cell>
                                <Table.Cell> {item.pages} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>
        </div>
    );
}

export default JournalsTable;

