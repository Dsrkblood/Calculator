import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, children, className }) {
	const { toogleItem } = useAccordionContext();
	return (
		<h3 className={className} onClick={() => toogleItem(id)}>
			{children}
		</h3>
	);
}
