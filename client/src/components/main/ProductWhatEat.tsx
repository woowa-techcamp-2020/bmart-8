import React from 'react';
import styled from 'styled-components';
import ProductInfo from './common/ProductInfo';
import Refresh from './common/Refresh';
import useRandomProducts from './hooks/useRandomProducts';

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

function ProductWhatEat() {
  const products = useRandomProducts(9);
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
                url={product.img_url}></ProductInfo>
            );
          })}
      </div>
      <div className="Refresh">
        <Refresh className="Refresh" title={'지금 뭐 먹지? '}></Refresh>
      </div>
    </ProductWhatEatBlock>
  );
}

export default ProductWhatEat;
