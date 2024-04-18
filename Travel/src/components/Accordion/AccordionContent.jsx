import { useAccordionContext } from "./Accordion";
import { useaccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className }) {
	const { openItemId } = useAccordionContext();
	const  id  = useaccordionItemContext();

	const isOpen = openItemId === id;
	return (
		<div
			className={
				isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
			}>
			{children}
		</div>
	);
}
