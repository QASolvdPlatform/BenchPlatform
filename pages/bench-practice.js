import Layout from "@/app/components/Layout";
import Sidebar from "@/app/components/Sidebar";
import { useState } from "react";

const sidebarButtons = [
	{ title: "QA Conception First Activities", isActive: true },
	{ title: "Creation and Execution", isActive: false },
	{ title: "Bug Creation and Reports", isActive: false },
	{ title: "API Test Cases", isActive: false },
	{ title: "Team Work and Communication", isActive: false },
	{ title: "Salesforce", isActive: false },
	{ title: "SQL", isActive: false },
	{ title: "Performance Test", isActive: false },
	{ title: "Basic Programming Theory", isActive: false },
	{ title: "Leadership", isActive: false },
	{ title: "Coaching", isActive: false },
	{ title: "Deeper Testing", isActive: false },
	{ title: "ISTQB Certification", isActive: false }
]


const BenchPractice = () => {
	const [items, setItems] = useState(sidebarButtons);

	const handleSetActive = (title) => {
		const updatedItems = items.map(item => ({
			...item,
			isActive: item.title === title,
		}));
		setItems(updatedItems);
	};

	return (
		<Layout>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Sidebar items={items} onSetActive={handleSetActive} />
				<div style={{ flex: 1 }}>
					{items.map(item =>
						item.isActive && <h1 key={item.title}>{item.title}</h1>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default BenchPractice;