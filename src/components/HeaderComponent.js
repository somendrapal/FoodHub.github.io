import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../App.css'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
    import Item from '../Item';
import { NavLink } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
   
  ];

class Header extends Component {
    

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

  
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
    return(
        <div>
        <Navbar dark expand="md">

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>

            <Form onSubmit={this.handleLogin}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                    innerRef={(input) => this.password = input}  />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input}  />
                    Remember me
                </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
        </Form>

            </ModalBody>
        </Modal>

            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.jpg' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>

                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                    </NavItem>
                </Nav>

                </div>
        </Navbar>
     
    
            
    
      <h1 style={{ textAlign: "center" }}></h1>
    
        <Carousel breakPoints={breakPoints}>
          <Item><img src='assets/images/foodundersky1.jpg' width="100%" height="100%"></img></Item>
          <Item><img src='assets/images/foodundersky.jpg'  width="100%" height="100%"></img></Item>
          <Item><img src='assets/images/foodundersky2.jpg'  width="100%" height="100%"></img></Item>
        </Carousel>
    
    
  

                
    
        
    </div>
    );
  }
}

export default Header;