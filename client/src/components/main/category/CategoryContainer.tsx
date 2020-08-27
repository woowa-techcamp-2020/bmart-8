import React, { useState, useRef, useEffect } from 'react';
import CategoryNavbar from './CategoryNavbar';
import CategoryProductList from './CategoryProductList';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GetSecondCategory = gql`
  query getSecondCategory {
    secondCategories {
      id
      name
      children {
        product {
          name
          id
          img_url
        }
      }
    }
  }
`;

const CategoryContainer = () => {
  const { loading, error, data } = useQuery(GetSecondCategory);
  const [viewIdx, setviewIdx] = useState(0);
  const body = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let down = true;
    let pre = 0;
    const onScroll = () => {
      if (body.current) {
        const top = body.current!.offsetTop;
        const bottom = top + body.current!.offsetHeight;
        const now = window.scrollY;
        down = now - pre > 0;
        pre = now;
        if (now >= top && now <= bottom) {
          for (const [idx, child] of Array.from(
            body.current!.childNodes.entries()
          )) {
            const catTop = (child as HTMLElement).offsetTop - 150;
            const catBottom = catTop + (child as HTMLElement).offsetHeight;
            if (now >= catTop && now <= catBottom) {
              setviewIdx(idx);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러</p>;
  return (
    <>
      <CategoryNavbar
        onclick={(idx: any) => {
          const target = body.current?.childNodes[idx] as HTMLElement;
          setviewIdx(idx);
          window.scrollTo(0, target.offsetTop - 110);
        }}
        selected={viewIdx}
        categories={data.secondCategories.map(
          (c: any) => c.name
        )}></CategoryNavbar>
      <div ref={body}>
        {data.secondCategories.map((c: any) => {
          const category: { id: any; name: any; products: Array<any> } = {
            id: c.id,
            name: c.name,
            products: [],
          };
          for (const child of c.children) {
            if (category.products.length >= 10) break;
            for (const product of child.product) {
              if (category.products.length >= 10) break;
              category.products.push(product);
            }
          }
          return (
            <CategoryProductList category={category}></CategoryProductList>
          );
        })}
      </div>
    </>
  );
};

export default CategoryContainer;
