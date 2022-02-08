import './App.css';
import Card from 'react-bootstrap/Card'


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';


class Project extends React.Component{
  constructor(props) {
    super(props)
    this.projectsRef = React.createRef()  
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./linkedinpic.jpg" />
            <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
      </>
    )
  }
}

export default Project;
