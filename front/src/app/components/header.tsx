"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; /* Adjust the gap between search and cart control */
  }

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    gap: 20px; /* Adjust gap for mobile */
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 18px; /* Reduced logo size on mobile */
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 22px; /* Slightly bigger on tablet */
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href="/">
        MugWear
      </Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Correto
          placeholder="Procurando por algo específico?"
        />

        <CartControl />
      </div>
    </TagHeader>
  );
}
