import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, className, title, children }) {
	const { openItemId, toogleItem } = useAccordionContext();

	const isOpen = openItemId === id;

	return (
		<li className={className}>
			<h3 onClick={() => toogleItem(id)}>{title}</h3>
			<div
				className={
					isOpen ? "accordion-item-content open" : "accordion-item-content"
				}>
				{children}
			</div>
		</li>
	);
}
