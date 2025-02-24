import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { CartIcon } from "@/Icons/cart-icon";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  background-color: var(--delete-color);
  color: white;

  position: absolute;
  top: 20px; /* Position below the cart icon */
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center; /* Centers the number inside the bubble */

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    top: 22px; /* Adjust position on mobile */
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`;

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage("cart-items", []);

  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
