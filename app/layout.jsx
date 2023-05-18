import '@styles/globals.css';

export const metadata = {
  title: 'ai speak',
  description: 'Discover and share the language that AI speaks!',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
