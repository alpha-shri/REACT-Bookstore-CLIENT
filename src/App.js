import './App.css';
import ViewBook from './components/ViewBook';
import AddBook from './components/AddBook';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Book Store App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Add Book</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <h4>Shrijeet Kumar Panda</h4>
          </NavbarText>
        </Collapse>
      </Navbar>
      <ViewBook />
      <hr/>
      <AddBook />
    </div>
  );
}

export default App;
