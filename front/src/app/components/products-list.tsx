"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 32px auto;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: var(--shapes-dark);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--text-dark-2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export function ProductsList() {
  const { data, hasMore, loadMoreProducts } = useProducts();

  return (
    <>
      <ListContainer>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url}
            id={product.id}
          />
        ))}
      </ListContainer>
      {hasMore && (
        <LoadMoreButton onClick={loadMoreProducts}>
          Carregar mais
        </LoadMoreButton>
      )}
    </>
  );
}
