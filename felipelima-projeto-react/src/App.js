import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import VideoBackground from "./components/VideoBackground";
import ScrollToTop from "./components/ScrollToTop";
import SideBar from "./components/SideBar"

function App() {
  return (
    <>
      <Header />
      <VideoBackground />
      <ScrollToTop/>
      <Home />
      <SideBar />
      <Footer />
    </>
  );
}

export default App;
