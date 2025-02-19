"use client";

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types"; // Corrigido: Importação do PriorityTypes
import { createContext, useState, ReactNode } from "react";

interface FilterContextProps {
  search: string;
  page: number;
  type: FilterType;
  priority: PriorityTypes;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setType: (value: FilterType) => void;
  setPriority: (value: PriorityTypes) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS, // Corrigido: Adicionado à interface
  setSearch: () => {},
  setPage: () => {},
  setType: () => {},
  setPriority: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
