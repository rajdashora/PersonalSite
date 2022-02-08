import profilepic from './linkedinpic.jpg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import Project from './Project'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.projectsRef = React.createRef()  
  }

  scroll(key) {
    if (key == '0') {
      window.scrollTo(0, 0)
    }
    else if (key == '1') {
      window.scrollTo(0, this.projectsRef.current.offsetTop)
    }
  }

  renderProjects() {
    return (
    <Project></Project>
    )
  }

  render() {
    return (
      <>
      <Navbar sticky="top" className="justify-content-end" style={{height: '10vh', background: '#ecf0f1'}}>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => this.scroll(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="0">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1">PROJECTS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div className='screen' style={{background: '#ecf0f1'}}>
          <Container style={{height: '90%', textAlign: 'center'}}>
            <Image src={profilepic} width='250vmin' roundedCircle/>
            <h1>Abhiraj Dashora</h1>
            <h3>Computer Science @ UW-Madison</h3>
            <p>Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.</p> 
          </Container>
      </div>
      <div className='screen' ref={this.projectsRef}>
      <Fade>
        <Container>
          <h2>Projects</h2>
          <p>Computer Science @ UW-Madison</p>
          <CardGroup>
            {this.renderProjects()}
          </CardGroup>   
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
