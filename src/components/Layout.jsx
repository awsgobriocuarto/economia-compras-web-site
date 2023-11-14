import { BarColor } from './BarColor';
import Footer from './Footer';
import Menu from './Menu';
import WhatsappButton from './WhatsappButton';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <BarColor />
      {children}
      <WhatsappButton />
      <Footer />
    </>
  );
}
