import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
        <Header />
        <main role="main" style={{ flex: 1, padding: "1rem" }}>
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;
