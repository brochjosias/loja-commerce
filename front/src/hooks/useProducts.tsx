import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue, useEffect } from "react";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.data?.data?.allProducts || [];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  // Estado para paginação
  const [visibleProducts, setVisibleProducts] = useState(10);

  // Função para carregar mais produtos
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  useEffect(() => {
    setVisibleProducts(10); // Reset para 6 itens quando o tipo mudar
  }, [type]); // Esse efeito é acionado sempre que o 'type' mudar

  return {
    data: filteredProducts.slice(0, visibleProducts),
    hasMore: filteredProducts.length > visibleProducts,
    loadMoreProducts,
  };
}
