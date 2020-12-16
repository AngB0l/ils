import {Button, Container, Header} from "semantic-ui-react";
import React from "react";

const Welcome = () => {
    return (
        <div className="Welcome">
            <Container>
                <Header content="Welcome! This is my first application using Spring Boot framework and React JS" as="h2"/>
                <h3>You can start by adding a <a href={'/addauthor'}>new Author</a>
                    or a <a href={'/addpublisher'}>new Publisher</a></h3>
            </Container>
        </div>
    );
}
export default Welcome;