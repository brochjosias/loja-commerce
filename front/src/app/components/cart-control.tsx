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

  margin-left: -10px;
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
