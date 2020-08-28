import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from './common/ProductInfo';
import Refresh from './common/Refresh';
import useLazyRandomProducts from './hooks/useLazyRandomProducts';

const ProductEssentialBlock = styled.div`
  .ProductTitle {
    padding: 1rem;
    background-color: white;
    text-align: left;
    font-weight: bold;
  }
  .ProductInfo {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    width: auto;
    margin-bottom: 0.1rem;
    & > div {
      width: 32%;
    }
  }
  .Refresh {
    background-color: white;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
  }
`;

// 생활용품,리빙 카테고리
// const cursor = getRandomInt(6546, 6607);

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  img_url: string;
  discount: number;
};

function ProductEssential() {
  const [fetchProducts, fetchedProducts] = useLazyRandomProducts(9,[5092,5162]);

  const [products, setProducts] = useState<ProductInfo[] | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    if (fetchedProducts) setProducts(fetchedProducts);
  }, [fetchedProducts]);

  function RefreshProducts() {
    fetchProducts();
  }

  return (
    <ProductEssentialBlock>
      <div className="ProductTitle">지금 필요한 생필품!</div>
      <div className="ProductInfo">
        {products &&
          products.map((product) => {
            return (
              <ProductInfo
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                discount={product.discount}
                url={product.img_url}></ProductInfo>
            );
          })}
      </div>
      <div
        className="Refresh"
        onClick={() => {
          RefreshProducts();
        }}>
        <Refresh title={'지금 필요한 생필품! '}></Refresh>
      </div>
    </ProductEssentialBlock>
  );
}

export default ProductEssential;
