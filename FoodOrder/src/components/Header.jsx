import { useContext } from "react";
import Button from "../UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

export default function Header() {
	const cartCtx = useContext(CartContext);

	const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
		return totalNumberOfItems + item.quantity;
	}, 0);
	return (
		<header id='main-header'>
			<div id='title'>
				<img
					src={logoImg}
					alt='Graphic of a plate with wine glasses in the middle and cutlery'
				/>
				<h1>ReactFood</h1>
			</div>
			<nav>
				<Button textOnly>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
}
