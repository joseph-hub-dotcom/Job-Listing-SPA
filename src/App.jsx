import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import JobCard2 from "./JobCard2";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="center">
        <JobCard2 />
      </div>
    </>
  );
}

export default App;
