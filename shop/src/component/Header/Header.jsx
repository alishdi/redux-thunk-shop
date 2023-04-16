import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const selector = useSelector(state => state.cart.cart)

    return (
        <Navbar expand="lg" bg="light" variant="light" className='sticky'>
            <Container>
                <img src="/logo.png" className='img' alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/product" className='nav-link'>products</Link>

                    </Nav>
                    <Nav>

                        <Link className="nav-link p-1 me-3" to="/cart">
                            <span className="badge rounded-pill bg-primary me-1">{selector.length}</span>
                            <i className="bi bi-basket-fill fs-4"></i>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;