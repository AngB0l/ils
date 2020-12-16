import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Button,
    Container,
    Header,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';
import EditModal from "../editModal";



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

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/publishers/${id}`)
            .then(response => {
                alert('Success :)')
                window.location = "/publishers"
            })
            .catch(error => {
                alert('Something went wrong :s')
            })
    }

    return (
        <div className="PublishersTable">
            <Container>
                <Header content={"Publishers"} as="h2"/>
                <Button circular size='mini' positive icon='add' as='a' href={'/addpublisher'}/>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Street</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {publishers.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.publisher.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.publisher.href)}</Table.Cell>
                                <Table.Cell> {item.name} </Table.Cell>
                                <Table.Cell> {item.street} </Table.Cell>
                                <Table.Cell> {item.city} </Table.Cell>
                                <Table.Cell>
                                    <Button.Group icon>
                                        {/*pass the type as a prop to let the editModel know which <editform> to render*/}
                                        <EditModal item={item} type='publisher'></EditModal>
                                        <Button circular size='mini' icon='delete' onClick={()=> handleDelete(getIdFromUrl(item._links.publisher.href))}/>
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

export default PublishersTable;


