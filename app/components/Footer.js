import Link from "next/link";

const footerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#F6F6F8",
};

const linkStyles = {
  margin: "0 1rem",
};
export default function Footer() {
	return (
    <footer style={footerStyles}>
      <Link style={linkStyles} href="https://solvd.peopleforce.io/">PeopleForce</Link>
      <Link style={linkStyles} href="https://solvdinc.harvestapp.com/">Harvest</Link>
      <Link style={linkStyles} href="https://solvd.atlassian.net/servicedesk/">Service Desk</Link>
			<p>© 2024 Solvd, Inc.</p>
		</footer>
	);
}
