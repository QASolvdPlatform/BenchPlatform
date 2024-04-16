import Link from "next/link";

const footerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
	marginTop: "5rem",
  padding: "1rem",
  backgroundColor: "#F6F6F8",
};

const linkStyles = {
  margin: "0 1rem",
	color: "#476887",
	textDecoration: "none",
	padding: "0.5rem",

};

const pStyles = {
	color: "#00CC66"
}

export default function Footer() {
	return (
    <footer style={footerStyles}>
      <Link style={linkStyles} href="https://solvd.peopleforce.io/">PeopleForce</Link>
      <Link style={linkStyles} href="https://solvdinc.harvestapp.com/">Harvest</Link>
      <Link style={linkStyles} href="https://solvd.atlassian.net/servicedesk/">Service Desk</Link>
			<p style={pStyles}>© 2024 Solvd, Inc.</p>
		</footer>
	);
}
