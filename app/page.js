"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CollapsibleBox from "./components/CollapsibleBox/CollapsibleBox";
import Image from "next/image";
import SolvdCover from "../images/SolvdCover.jpg"
import styles from "@/styles/page.module.css";

import '@/styles/global.css';

export default function Home() {
  return (
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<Header />
				<main style={{ flex: 1, padding: '1rem' }}>
				<CollapsibleBox
					title="Welcome to the QA Solvd team"
					startsOpen={true}
					showIcon={false}
					isCollapsible={false}
					titleSize="h1"
				>

					<p style={{ margin: "2rem 0" }}>Welcome to the QA SOLVD TEAM ! We're thrilled to have you on our continuous learning platform. Our course is tailored to individuals like you who are currently not assigned to projects. Through a combination of tasks and instructional videos, you'll engage in a dynamic learning environment, staying updated on the latest trends and technologies in our field.</p>
					<p style={{ margin: "2rem 0" }}>
						Our commitment is to provide you with the resources and support you need to grow personally and professionally, even when not actively involved in a project. Every moment is an opportunity to learn and grow, and this course is just the beginning of your journey towards continuous success.
					</p>
					<p style={{ margin: "2rem 0" }}>
						Explore the modules and resources available on our platform. We're here to assist you every step of the way and look forward to seeing you achieve new milestones.</p>
					<Image className={styles.solvdCover} src={SolvdCover} layout="responsive" />
				</CollapsibleBox>
				</main>
				<Footer />
			</div>
  );
}
