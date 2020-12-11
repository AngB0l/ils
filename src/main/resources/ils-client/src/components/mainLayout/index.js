import './mainLayout.css';
import {useState} from 'react';
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
    Visibility
} from 'semantic-ui-react'
import logo from './logo_transparent.png';
import AuthorsTable from "../authors";

const MainLayout = (props) => {
    const [menuFixed, setmenuFixed] = useState(false);
    const { children } = props;

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

    const stickTopMenu = () => {
        setmenuFixed(true)
    };
    const unStickTopMenu = () => {
        setmenuFixed(false)
    };

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
                                <Dropdown.Item as='a' href={'/books'}>Books</Dropdown.Item>
                                <Dropdown.Item as='a' href={'/journals'}>Journals</Dropdown.Item>
                                <Dropdown.Item as='a' href={'/theses'}>Theses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item as='a' href={'/authors'}>Authors</Menu.Item>
                        <Menu.Item as='a' href={'/publishers'}>Publishers</Menu.Item>
                    </Container>
                </Menu>
            </Visibility>

            { children }

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


