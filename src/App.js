import React, {useEffect, useState}  from 'react'
import './css/base.css';
import './css/common.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(()=>{
  const handleScroll = () =>{
    const y = window.scrollY;
    console.log('srollY',y);

    //헤더 고정
    setIsHeaderFixed(y >= 35);

    //top버튼
    setShowTopBtn(y >=50);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
    <Header isHeaderFixed={isHeaderFixed} />
    <Main showTopBtn={showTopBtn} />
    <Footer />
    </>
  );
}

export default App;
