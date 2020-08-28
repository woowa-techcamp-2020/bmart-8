import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from './common/ProductInfo';
import Refresh from './common/Refresh';
import useLazyRandomProducts from './hooks/useLazyRandomProducts';

const ProductWhatEatBlock = styled.div`
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

// 국,반찬,메인요리
// const cursor = getRandomInt(450, 500);

type ProductInfo = {
  id: number;
  name: string;
  price: number;
  img_url: string;
  discount: number;
};

function ProductWhatEat() {
  const [fetchProducts, fetchedProducts] = useLazyRandomProducts(9);

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
    <ProductWhatEatBlock>
      <div className="ProductTitle">지금 뭐 먹지?</div>
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
        <Refresh className="Refresh" title={'지금 뭐 먹지? '}></Refresh>
      </div>
    </ProductWhatEatBlock>
  );
}

export default ProductWhatEat;
