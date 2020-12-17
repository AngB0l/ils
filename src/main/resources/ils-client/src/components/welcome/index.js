import {Container, Header, Menu} from "semantic-ui-react";
import React from "react";
import {NavLink} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="Welcome">
            <Container>
                <p>
                    <Header content="Welcome to ILS application using Spring Boot framework and React JS" as="h2"/>
                    <h3>You can start by adding a <NavLink to='/addauthor'>new Author</NavLink>
                        or a <NavLink to='/addpublisher'>new Publisher</NavLink></h3>
                </p>
            </Container>
        </div>
    );
}
export default Welcome;