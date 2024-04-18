import { useAccordionContext } from "./Accordion";
import { useaccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
	const { toogleItem } = useAccordionContext();
	const  id  = useaccordionItemContext();
	return (
		<h3 className={className} onClick={() => toogleItem(id)}>
			{children}
		</h3>
	);
}
