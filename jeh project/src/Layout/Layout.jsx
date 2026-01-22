export default function Layout({ children = null }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";