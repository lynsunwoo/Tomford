import React, { useRef, useState } from 'react';
import ProductInput from './ProductInput';
import Product from './Product';
import dummy from '../db/product.json';

function ProductList() {

  //1. 데이터를 초기값으로 사용
  const [products, setProducts] = useState(dummy); //db파일 불러오기

  //2. 기존 json데이터에 개수에 1을 더해서 추가
  const nextId = useRef(products.length + 1);

  //3. 입력상자에서 사용할 값을 state관리
  const [inputs, setInputs] = useState({
    image: '',
    name: '',
    price: ''
  });

  //4. 삭제하기 버튼을 클릭하면 해당 id값을 찾아서 삭제
  const onRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  }

  //5. 비구조화 할당 방식으로 각각 데이터  state값 변수에 담기
  const { image, name, price } = inputs;

  //6. 데이터 변경을 위한 함수
  const onDataChange = (e) => {
    //name 과 value는 값이 변경되는 input 태그의 속성을 비구조화 할당 한다.
    const { name, value } = e.target;

    //state값 변경하기
    setInputs({
      ...inputs, //변경되는 것 외에 나머지 속성값을 의미
      [name]: value
    });
  };

  //7. 데이터 입력을 위한 함수
  const onCreate = () => {
    //새롭게 배열 데이터를 추가하기 위한 함수
    const product = {
      id: 'a' + nextId.current, //배열 데이터 값 앞에 'a'문자를 붙임
      image,
      name,
      price
    };
    //기본 배열 뒤에 새로 입력한 데이터가 추가되도록 한다.
    setProducts([...products, product]);

    //데이터 입력이 끝나면 입력박스에 데이터는 아무것도 없게 내용을 비움.
    setInputs({
      image: '',
      name: '',
      price: ''
    });

    nextId.current += 1; //기존 배열값 순서에 1을 더하여 계속 추가
  };

  return (
    <>
      {/* 상품 입력폼 */}
      <ProductInput
        image={image}
        name={name}
        price={price}
        onDataChange={onDataChange}
        onCreate={onCreate}
      />

      {/* 상품 출력 */}
      <ul class="product_list">
        {products.map((product) => (
          <Product product={product} key={product.id} onRemove={onRemove} />
        ))};
      </ul>
    </>
  )
}

export default ProductList;