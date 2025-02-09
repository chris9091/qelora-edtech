import '@styles/globals.css';
import Navbar from '@components/Navbar';

export const metadata = {
  metadataBase: new URL('https://qeloraedtech.com'),
  title: 'Qelora Edtech',
  description:
    'Empowering learners and businesses with cutting-edge educational solutions, courses, and technology services. Join us to unlock your true potential.',
  authors: [{ name: 'Qelora Edtech' }],
  openGraph: {
    siteName: 'Qelora Edtech',
    title: 'Qelora Edtech - Transforming Learning',
    type: 'website',
    images: [
      {
        url: '/qelora-logo.png',
        width: 512,
        height: 512,
      },
    ],
    description:
      'Empowering learners and businesses with cutting-edge educational solutions, courses, and technology services. Explore our platform to grow and achieve.',
    url: 'https://qeloraedtech.com',
  },
  locale: 'en_IN',
  alternates: {
    languages: {
      'en-US': '/en-US',
      'hi-IN': '/hi-IN',
      'ml-IN': '/ml-IN',
    },
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/qelora-logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Navbar />
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
