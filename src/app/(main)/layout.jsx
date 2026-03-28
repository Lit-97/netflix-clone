import Navbar from '@/components/Navbar';
import MainMenu from '@/components/MainMenu';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <MainMenu />
    </>
  );
}
