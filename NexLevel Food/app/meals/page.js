import Link from "next/link";

export default function MealsPage() {
	return (
		<>
			<h1>Meals</h1>
			<Link href='/meals/share'>Share</Link>
			<Link href='/meals/post-1'>Slug</Link>
		</>
	);
}
