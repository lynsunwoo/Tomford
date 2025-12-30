import React from 'react';

function Header({isHeaderFixed}) {
  return (
    <>
      <header className={isHeaderFixed ? 'header fixed' :'header'}>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='상단로고'/>
        </h1>
      </header>
    </>
  )
}

export default Header;