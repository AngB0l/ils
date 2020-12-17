import React from 'react'
import {Card, Icon, Image, Grid, Container} from 'semantic-ui-react'
import book from './book.jpg'
import author from './author.jpg'
import publisher from './publisher.jpg'
import {NavLink} from "react-router-dom";

const CardContentBlock = () => (
    <Container>
        <Grid stackable columns={3}>
            <Grid.Column>
                <Card>
                    <Image src={book} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>Publications</Card.Header>
                        <Card.Description>
                            22.000 Books, Journals and Theses!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Icon name='add' color ='green'/>
                        Add a new
                        <NavLink to='/addbook'> Book  </NavLink>
                        ,a
                        <NavLink to='/addjournal'> Journal  </NavLink>
                        or a
                        <NavLink to='/addthesis'> Thesis </NavLink>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src={author} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>Authors</Card.Header>
                        <Card.Description>
                            7.000 Authors!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Icon name='add' color ='green'/>
                        Add a new
                        <NavLink as={NavLink} to='/addauthor'> Author  </NavLink>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src={publisher} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>Publishers</Card.Header>
                        <Card.Description>
                            3.000 Publishers!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <Icon name='add' color ='green'/>
                        Add a new
                        <NavLink to='/addpublisher'> Publisher  </NavLink>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>

    </Container>

)

export default CardContentBlock
