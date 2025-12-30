import React, { useState } from 'react';

function ProductInput({image, name, price, onDataChange, onCreate}) {

  //error 상태 변수 선언
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    //1.이미지 파일 확장자 유효성 검사
    if (!image.trim()) {
      newErrors.image = "이미지 파일명을 입력하세요."
    } else if (!/\.(jpg|jpeg|png|gif)$/i.test(image)) {
      newErrors.image = "유효한 이미지 확장자(jpg, jpeg, png, gif)를 입력하세요";
    }

    //2. 상품명 유효성 검사
    if (!name.trim()) {
      newErrors.name = "상품명을 입력하세요";
    }

    //3. 가격정보 유효성 검사
    if (!price.trim()) {
      newErrors.price = "가격정보를 입력하세요.";
    } else if (!/^\d+$/.test(price)) { //숫자인지 아닌지 판단
      newErrors.price = "가격정보는 숫자만 입력 가능합니다."
    }

    setErrors(newErrors); //화면에 에러 발생
    //유효성 검사 통과되면
    return Object.keys(newErrors).length === 0;
  }

  //유효성 검사 onClick
  const handleClick = () => {
    if (validate()) { //유효성 검사 통과 되면 
      onCreate();
    }
  }

  //가격정보를 입력시 실행되는 함수
  const handlePriceChange=(e)=>{
    const onlyNumbers = e.target.value.replace(/[^\d]/g, ''); //숫자만 추출
    onDataChange({target:{name:'price', value:onlyNumbers}}); //부모에게 숫자만 전달하기
  }

  //숫자에 천단위 구분기호를 삽입하기
  const formatPrice = (numStr)=>{
    if(!numStr) return;
    return parseInt(numStr, 10).toLocaleString(); //숫자에 쉽표기호가 들어가게
  }

  const errorStyle = {
    color: "#f00",
    fontSize: "12px"
  }

  return (
    <>
      <div className="input_item">
        <p>
          <label htmlFor="img_filename">이미지 파일명</label>
          <input 
          type="text" 
          id="img_filename" 
          value={image}
          name="image" 
          placeholder='이미지 파일명을 입력하세요. 예)파일명.확장자' 
          onChange={onDataChange}
          />

          {errors.image && <div style={errorStyle}>{errorStyle.image}</div>}
        </p>
        <p>
          <label htmlFor="product_name">상품명</label>
          <input 
          type="text" 
          id="product_name"
          value={name} 
          name="name" 
          placeholder="상품명을 입력하세요. 예)네롤리 포르토피노 오 드 퍼퓸" 
          onChange={onDataChange}
          />

          {errors.name && <div style={errorStyle}>{errorStyle.name}</div>}
        </p>
        <p>
          <label htmlFor="price_info">가격정보</label>
          <input 
          type="text" 
          id="price_info"
          value={formatPrice(price)} 
          name="price" 
          placeholder='가격정보를 입력하세요. 예)99999' 
          onChange={handlePriceChange}
          />

          {errors.price && <div style={errorStyle}>{errorStyle.price}</div>}
        </p>
        <p>
          <input type="button" value="내용입력" className="submit_btn" onClick={handleClick} />
        </p>
      </div>
    </>
  )
}

export default ProductInput;