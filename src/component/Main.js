import React from 'react';
import ProductList from '../main/ProductList';

function Main({ showTopBtn }) {

  return (
    <>
      <main>
        {/* 상품 입력과 출력 콤포넌트가 들어가는 페이지 */}
        <ProductList />

        <button
          className={`top_btn ${showTopBtn ? 'show' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          TOP
        </button>

      </main>
    </>
  )
}

export default Main;