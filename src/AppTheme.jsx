import React from 'react';
import './AppTheme.css';

export default function AppTheme() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile></Profile>
      <Products></Products>
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User></User>
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail></ProductDetail>
    </div>
  );
}

function ProductDetail() {
  return (
    <div>
      {' '}
      Product Detail
      <p>DarkMode:</p>
      <button>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
