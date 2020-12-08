import './mainLayout.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Table,
    Visibility
} from 'semantic-ui-react'
import logo from './logo_transparent.png';
import _ from 'lodash';



const MainLayout = () => {
    const [menuFixed, setmenuFixed] = useState(false);
    const [authors, setAuthors] = useState([]);

    const fixedMenuStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    }

    const menuStyle = {
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        marginBottom: '1em',
        marginTop: '4em',
        transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    }
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

    const stickTopMenu = () => {
        setmenuFixed(true)
    };
    const unStickTopMenu = () => {
        setmenuFixed(false)
    };
    useEffect(async () => {
        const result = await axios('http://localhost:8080/authors');
        // console.log(result)
        setAuthors(result.data._embedded.authors);
    }, []);

    return (
        <div className="MainLayout">
            <Container text style={{marginTop: '2em'}}>
                <Header as='h1'>Integrated Library System</Header>
                <p>
                    Manage Publishers, authors and publications.
                </p>
            </Container>

            <Visibility
                onBottomPassed={stickTopMenu}
                onBottomVisible={unStickTopMenu}
                once={false}>
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container text>
                        <Menu.Item><Image size='tiny' src={logo}/></Menu.Item>

                        <Dropdown item text="Pulbications">
                            <Dropdown.Menu>
                                <Dropdown.Item as='a'>Books</Dropdown.Item>
                                <Dropdown.Item as='a'>Journals</Dropdown.Item>
                                <Dropdown.Item as='a'>Theses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item as='a'>Authors</Menu.Item>
                        <Menu.Item as='a'>Publishers</Menu.Item>
                    </Container>
                </Menu>
            </Visibility>
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
                                {/*<Table.Cell> {item.dob} </Table.Cell>*/}
                                <Table.Cell> {formatDate(item.dob)} </Table.Cell>
                                {/*<Table.Cell> {format((item.dob), 'yyyy/MM/dd')} </Table.Cell>*/}
                                <Table.Cell> {item.about} </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Container>

            {/*Add Footer*/}
            <Segment inverted style={{margin: '5em 0em 0em', padding: '5em 0em'}} vertical>
                <Container textAlign='center'>
                    <Grid columns={4} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column>
                                <Header inverted as='h4' content='Top 5 authors'/>
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Top 5 publications'/>
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Top 5 publishers'/>
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='OpenSource'/>
                                <p>
                                    We love opensource! Hack our ILS with us at github.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider inverted section/>
                    <Image src={logo} centered size='small'/>
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
}

export default MainLayout;


