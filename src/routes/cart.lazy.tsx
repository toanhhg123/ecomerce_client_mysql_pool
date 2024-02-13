import { createLazyFileRoute } from '@tanstack/react-router'

const Cart = () => {
  return <div>Cart</div>
}

export const Route = createLazyFileRoute('/cart')({
  component: Cart
})

export default Cart
