import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<Link href="https://solvd.peopleforce.io/">PeopleForce</Link>
			<Link href="https://solvdinc.harvestapp.com/">Harvest</Link>
			<Link href="https://solvd.atlassian.net/servicedesk/">Service Desk</Link>
			<p>© 2024 Solvd, Inc.</p>
		</footer>
	);
}
