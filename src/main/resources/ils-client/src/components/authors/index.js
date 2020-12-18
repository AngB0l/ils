import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';
import {
    Button,
    Container,
    Header, Input, Search,
    Table,
} from 'semantic-ui-react'
import _ from 'lodash';
import EditModal from '../editModal'
import {NavLink} from "react-router-dom";


function Reducer(state, action) {
    switch (action.type) {

        case 'FETCH':
            return {
                ...state,
                column: action.column,
                data: action.data,
                direction: 'ascending',
            }

        case 'CHANGE_SORT':
            if (state.column === action.column) {

                return {
                    ...state,
                    column: action.column,
                    //use clone because the reducer should change state without mutating the current state
                    data: _.clone(state.data).reverse(),
                    direction:
                        state.direction === 'ascending' ? 'descending' : 'ascending',
                }
            }
            return {
                column: action.column,
                data: _.sortBy(state.data, [action.column]),
                direction: 'ascending',
            }
        // search cases
        case 'UPDATE_SELECTION':
            return {...state, data: action.authors.filter((author) => {return author['firstName'].indexOf(action.query)>-1})}

        default:
            throw new Error()
    }
}

const AuthorsTable = () => {
    const [allAuthors, setAuthors] = useState([]);

    const getIdFromUrl = (url) => {
        const ar = url.split('/');
        const id = _.last(ar);

        return id;
    }
    // example of the format in the db : 1997-01-05T00:00:00.000+00:00
    const formatDate = (date) => {
        const parse = parseISO(date)
        const dmy = format(parse, 'dd/MM/yyyy');
        return dmy
    }

    const [state, dispatch] = React.useReducer(Reducer, {
        column: null,
        data: [],
        direction: null,
    })
    const handleSearchChange = (data) => {
        dispatch({ type: 'UPDATE_SELECTION', query: data.target.value, authors: allAuthors })
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/authors');
            const authorsData = result.data._embedded.authors

            dispatch({type: 'FETCH', column: 'id', data: authorsData})
            setAuthors(authorsData)
        }
        fetchData()

    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/authors/${id}`)
            .then(response => {
                alert('Success :)')
                window.location = "/authors"
            })
            .catch(error => {
                alert('Something went wrong :s')
            })
    }


    const {column, data, direction} = state
    console.log(data)
    return (
        <div className="AuthorsTable">
            <Container>
                <Header content={"Authors"} as="h2"/>
                <Button circular positive size='mini' icon='add' as={NavLink} to='/addauthor'/>
                <Input icon='search' onChange={handleSearchChange} />
                <Table sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={column === 'id' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'id'})}
                            >Id</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'firstName' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'firstName'})}
                            >First Name</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'lastName' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'lastName'})}
                            >Last Name</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'email' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'email'})}
                            >E-mail</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'dob' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'dob'})}
                            >Date of Birth</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={column === 'about' ? direction : null}
                                onClick={() => dispatch({type: 'CHANGE_SORT', column: 'about'})}
                            >About</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map(item => (
                            <Table.Row key={getIdFromUrl(item._links.author.href)}>
                                <Table.Cell> {getIdFromUrl(item._links.author.href)}</Table.Cell>
                                <Table.Cell> {item.firstName} </Table.Cell>
                                <Table.Cell> {item.lastName} </Table.Cell>
                                <Table.Cell> {item.email} </Table.Cell>
                                <Table.Cell> {formatDate(item.dob)} </Table.Cell>
                                <Table.Cell> {item.about} </Table.Cell>
                                <Table.Cell>
                                    <Button.Group icon>
                                        {/*pass the type as a prop to let the editModel know which <editform> to render*/}
                                        <EditModal item={item} type='author'></EditModal>
                                        <Button circular size='mini' icon='delete'
                                                onClick={() => handleDelete(getIdFromUrl(item._links.author.href))}/>
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

export default AuthorsTable;


