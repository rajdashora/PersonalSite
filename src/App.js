import profilepic from './linkedinpic.jpg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.homeRef = React.createRef()  
    this.projectsRef = React.createRef()  
  }

  render() {
    return (
      <>
      <Navbar sticky="top" className="justify-content-end" style={{height: '10vh', background: '#ecf0f1'}}>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => window.scrollTo(0, selectedKey.current.offsetTop)}
        >
          <Nav.Item>
            <Nav.Link eventKey={this.homeRef}>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={this.projectsRef}>PROJECTS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div className='screen' style={{background: '#ecf0f1'}}  ref={this.homeRef}>
          <Container style={{height: '90%'}}>
            <Row style={{height: '100%'}} className="align-items-center border">
              <Col sm={5} className="border d-flex justify-content-center">
                <Image src={profilepic} width='300vmin' roundedCircle/>
              </Col>
              <Col className="border">
                  <h1>Abhiraj Dashora</h1>
                  <h3>Computer Science @ UW-Madison</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.</p>
              </Col>
            </Row>
          </Container>
      </div>
      <div className='screen' ref={this.projectsRef}>
      <Fade>
        <Container className='border'>
          <h2>Projects</h2>
          <p>Computer Science @ UW-Madison</p>
        </Container>
      </Fade>
    </div>
    <div style={{background: '#ecf0f1', padding: '50px'}}>
      <p>Made by Abhiraj Dashora</p>
      <p>Built using React</p>
    </div>
    </>
    );
  }
}

export default App;
