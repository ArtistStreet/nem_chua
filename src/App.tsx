import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
