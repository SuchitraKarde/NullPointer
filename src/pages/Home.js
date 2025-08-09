import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header"
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="title">LinguaQuest</h1>
        <motion.button
          className="start-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/map")}
        >
          Start Learning
        </motion.button>
      </div>

      <div className="right-section">
        <div className="rotating-disc">
          <div className="disc-text">Explore • Learn • Play</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
