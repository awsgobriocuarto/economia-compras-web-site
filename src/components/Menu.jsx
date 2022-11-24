import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Logo from '../assets/logo-economia.svg';

const links = [
  { title: 'Home', path: '/' },
  { title: 'Cotizaciones y Concursos', path: '/cotizaciones-y-concursos' },
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
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Image src={Logo} alt="logo economia" />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
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
