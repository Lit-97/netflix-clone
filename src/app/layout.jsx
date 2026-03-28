import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.sass';
import StoreProvider from '@/redux/StoreProvider';
import BootstrapClient from '@/components/BootstrapClient';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: 'Netflix | Watch Movies And TV Shows Online',
  description: 'Netflix clone react next.js application',
};

export const viewport = {
  themeColor: '#FF2530',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </head>
      <body>
  <BootstrapClient />
  <AuthProvider>
    <StoreProvider>
      {children}
    </StoreProvider>
  </AuthProvider>
  <div id="wrapper"></div>
  <div id="mob-menu"></div>
</body>
    </html>
  );
}