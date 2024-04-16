import Layout from "@/app/components/Layout";
import Certified from "./Certified.png";
import Learn from "./Learn.png";
import Testing from "./Testing.png";
import Webinars from "./Webinars.jpg";
import CollapsibleBox from "@/app/components/CollapsibleBox/CollapsibleBox";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/UsefulLinks.module.css";

const cards = [
  { imageUrl: Certified, title: "ISTQB/Syllabus", description: "Theory for the ISTQB Foundational level certificate", webUrl: "https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf" },
  { imageUrl: Webinars, title: "Testing automation university", description: "Automation learning path", webUrl: "https://testautomationu.applitools.com/" },
  { imageUrl: Learn, title: "dev.web", description: "Chrome’s development subjects", webUrl: "https://web.dev/learn/testing" },
  { imageUrl: Testing, title: "Testing institute", description: "Webinars and certifications", webUrl: "https://testinginstitute.com" }
];

const UsefulLinks = () => {
	return (<>
		<Layout>
			<h1 className={styles.h1}>Useful Links</h1>
			<div className={styles.cards}>
				{cards.map((card) => (
					<CollapsibleBox
						title={card.title}
						key={card.title}
						showIcon={false}
						isCollapsible={false}
					>
						<div
							className={styles.card}>
							<Link
								href={card.webUrl}
								target="_blank"
								rel="noopener noreferrer">
								<Image className={styles.image} src={card.imageUrl} alt={card.title} width={150} height={100} />
							</Link>
							<p>{card.description}</p>
						</div>
					</CollapsibleBox>
      ))}
			</div>

		</Layout>
	</>
	);
}

export default UsefulLinks;