import {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Container,
    Header,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';



const PublishersTable = () => {
    const [publishers, setPublishers] = useState([]);

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);

        return id;
    }

    useEffect(async () => {
        const result = await axios('http://localhost:8080/publishers');
        setPublishers(result.data._embedded.publishers);
        console.log(result.data._embedded.publishers);
    }, []);
    return (
        <div className="PublishersTable">
            <Container>
                <Header content={"publishers"} as="h2"/>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Street</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {publishers.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.publisher.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.publisher.href)}</Table.Cell>
                                <Table.Cell> {item.name} </Table.Cell>
                                <Table.Cell> {item.street} </Table.Cell>
                                <Table.Cell> {item.city} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>
        </div>
    );
}

export default PublishersTable;


