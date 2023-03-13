import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Logo from '../assets/logo-economia-2.svg';

const links = [
  { title: 'Proveedores', path: '/proveedores' },
  { title: 'Normativa', path: '/normativa' },
  { title: 'Novedades', path: '/novedades' },
];

const MenuItem = ({ title, path }) => {
  const router = useRouter();
  return (
    <Link href={path} passHref>
      <Nav.Link active={router.pathname === path}>{title}</Nav.Link>
    </Link>
  );
};

function Menu() {
  const router = useRouter();
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Image src={Logo} alt="logo economia" priority={'low'} />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link active={router.pathname === 'home'}>Home</Nav.Link>
            </Link>
            <NavDropdown title="Cotizaciones y Concursos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cotizaciones-y-concursos">Descripcion General</NavDropdown.Item>
              <NavDropdown.Item href="/cotizaciones-y-concursos/concurso-de-precios">Concurso de Precios</NavDropdown.Item>
              <NavDropdown.Item href="/cotizaciones-y-concursos/subasta-publica">Subasta Pública</NavDropdown.Item>
            </NavDropdown>
            {links.map((link, index) => (
              <MenuItem {...link} key={index} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
