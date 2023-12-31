import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import formatCurrency from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  if (item === null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      ></img>
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".80rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price ?? 0)}
        </div>
      </div>
      <div>{formatCurrency((item?.price ?? 0) * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id ?? -1)}
      >
        {" "}
        &times;
      </Button>
    </Stack>
  )
}

export default CartItem
