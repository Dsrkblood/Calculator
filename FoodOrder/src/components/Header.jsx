import logoImg from "../assets/logo.jpg";
export default function Header() {
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
				<button>Cart (0)</button>
			</nav>
		</header>
	);
}
