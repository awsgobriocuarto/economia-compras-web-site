import { BarColor } from './BarColor';
import Footer from './Footer';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <BarColor />
      {children}
      <Footer />
    </>
  );
}
