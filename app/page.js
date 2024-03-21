import Header from "./components/Header";
import Footer from "./components/Footer";
import Provinces from "./components/Provinces";

export default function Home() {
  return (
			<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
				<Header />
				<main style={{ flex: 1, padding: '1rem' }}>
					<h1>Welcome to the Home page</h1>
				</main>
				<Footer />
			</div>
  );
}
