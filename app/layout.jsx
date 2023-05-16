import '@styles/global.css';

export const metadata = {
  title: 'ai speak',
  description: 'Discover and share the language that AI speaks!',
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
