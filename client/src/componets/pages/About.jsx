import React from 'react';
import { Container } from 'react-bootstrap';

function About () {
    return(
        <Container className="my-5">
        <header className='jumbotron'>
            <h1>Welcome to my about page</h1>
        </header>
    
        <div>
            <h2>About Me</h2>
            <p>My name is Mitchell Haak and I currently live in Barrie, Ontario. I'm in my last semester of computer programming, my favorite colour is blue and my hobbies are playing games with the buddies and roll
            </p>
        </div>
        </Container>
    );
};

export default About;