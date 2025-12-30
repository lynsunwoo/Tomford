import React from 'react';

function Product({product, onRemove}) {

  //가격에 천단위 구분기호가 들어가게
  const formatPrice =(priceStr)=>{
    if(!priceStr) return;

    //입력된 문자에 , 기호가 있으면 제거함
    const numberPrice = parseInt(priceStr.toString().replace(/,/g,''),10);

    if(isNaN(numberPrice))return priceStr; //유효성 검사
    return numberPrice.toLocaleString(); //천단위 구분기호 추가
  }

  return (
    <>
      <li>
        <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt="상품사진" />
        <p className='p_name'>{product.name}</p>
        <p className='p_price'>{formatPrice(product.price)}원</p>
        <p><input type="button" className="btn" value="삭제하기" onClick={()=>onRemove(product.id)}></input></p>
      </li>
    </>
  )
}

export default Product;