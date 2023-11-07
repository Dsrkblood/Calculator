const header = <h1 className='title'>Witaj na stronie!</h1>;

const classBig = 'big'

const handleClick = () => alert('klik')
const main = (
	<div>
		<h1 onClick={handleClick}className='red'>Pierwszy artykuł</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta
			obcaecati sit ut cupiditate veritatis possimus qui. Architecto, beatae
			illo! Cum aperiam praesentium repellendus facere eligendi architecto
			assumenda totam quos!
		</p>
	</div>
);
const footer = (
	<footer>
		<p className={classBig}>Stopka</p>
	</footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
