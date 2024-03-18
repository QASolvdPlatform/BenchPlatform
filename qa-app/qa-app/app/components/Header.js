import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/bench-practice">Bench Practice</Link>
				<Link href="/webinars">Webinars</Link>
				<Link href="/useful-links">Useful Links</Link>
				<Link href="/clients-faq">Clients FAQ</Link>
			</nav>
		</header>
	);
}
