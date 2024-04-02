import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TimeAndDate from './TimeDate';
import './navBar.css'
import fullStackDevResume from "./full_stack_dev.pdf";

function MyNavbar() {
    const openResume = () => {
        window.open(fullStackDevResume);
      };
  return (
    <Navbar bg="light" data-bs-theme="light">
     
          <Navbar.Brand href="/">Lea's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Past Project</Nav.Link>
            <Nav.Link onClick={openResume}>Resume</Nav.Link>
          </Nav>
          <div s={8} m={8} lg={8}>
        <TimeAndDate />
        {/* <WeatherBox /> */}
      </div>

      </Navbar>
  );
}

export default MyNavbar;