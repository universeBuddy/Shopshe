const cartItem = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: {subtotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
        <p>Tax : {tax}</p>
        <p>
          Discount-<em> {discount}</em>{" "}
        </p>
        <p>
          <strong>Total : {total}</strong>
        </p>
      </aside>
      Cart
    </div>
  );
};

export default Cart;
