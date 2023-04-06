import TopSection from "../components/Sections/TopSection";
import ProductsSection from "../components/Sections/ProductsSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <TopSection />

      <ProductsSection />
    </div>
  );
};

export default Home;
