import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const layoutStyles = {
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
};
export default function Layout({ children }) {
	return (
		<div style={layoutStyles} className={inter.className}>
			<Header />
			<main style={{ flex: 1, padding: '1rem' }}>
			{children}
			</main>
			<Footer />
		</div>
	);
}
