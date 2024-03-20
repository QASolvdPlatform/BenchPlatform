import Layout from "@/app/components/Layout";
import UsefulMaterialsCard from "../app/components/UsefulMaterialsCard";
import Certified from "./Certified.png";
import Learn from "./Learn.png";
import Testing from "./Testing.png";
import Webinars from "./Webinars.jpg";

const cards = [
  { imageUrl: Certified, title: "ISTQB/Syllabus", description: "Theory for the ISTQB Foundational level certificate", webUrl: "https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf" },
  { imageUrl: Webinars, title: "Testing automation university", description: "Automation learning path", webUrl: "https://testautomationu.applitools.com/" },
  { imageUrl: Learn, title: "dev.web", description: "Chrome’s development subjects", webUrl: "https://web.dev/learn/testing" },
  { imageUrl: Testing, title: "Testing institute", description: "Webinars and certifications", webUrl: "https://testinginstitute.com" }
];

const UsefulLinks = () => {
	return (
		<Layout>
			<h1>Useful Links</h1>
      {cards.map((card) => (
        <UsefulMaterialsCard
          key={card.title}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          webUrl={card.webUrl}
        />
      ))}
		</Layout>
	);
}

export default UsefulLinks;