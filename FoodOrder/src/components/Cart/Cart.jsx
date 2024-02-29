import { useContext } from "react";

import UserProgressContext from "../../store/UserProgressContext.jsx";
import CartContext from "../../store/CartContext.jsx";

import Modal from "../../UI/Modal.jsx";
import Button from "../../UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import { currencyFormatter } from "../../util/formatting.js";

export default function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const cartTotalPrice = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.quantity * item.price;
	}, 0);

	function handleCloseCart() {
		userProgressCtx.hideCart();
	}

	return (
		<Modal className='cart' open={userProgressCtx.progress === "cart"}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map(item => (
					<CartItem
						key={item.id}
						item={item}
						onIncrease={cartCtx.addItem}
						onDecrease={cartCtx.removeItem}
					/>
				))}
			</ul>
			<p className='cart-total'>{currencyFormatter.format(cartTotalPrice)}</p>
			<p className='modal-actions'>
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				<Button onClick={handleCloseCart}>Go to Checkout</Button>
			</p>
		</Modal>
	);
}
