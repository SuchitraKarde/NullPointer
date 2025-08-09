import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MapPage.css";

const MapPage = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState(
    JSON.parse(localStorage.getItem("completedLessons")) || []
  );

  const lessons = [
    { id: 1, name: "Lesson 1", top: "10%", left: "10%" },
    { id: 2, name: "Lesson 2", top: "25%", left: "70%" },
    { id: 3, name: "Lesson 3", top: "45%", left: "20%" },
    { id: 4, name: "Lesson 4", top: "65%", left: "65%" },
    { id: 5, name: "Lesson 5", top: "80%", left: "40%" },
  ];

  const [showConnectors, setShowConnectors] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConnectors(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLessonClick = (lessonId) => {
    if (lessonId <= 2 || completedLessons.includes(lessonId - 1)) {
      navigate(`/lesson/${lessonId}`);
    } else {
      alert("Complete the previous lesson to unlock this one!");
    }
  };

  return (
    <div className="map-container">
      <div className="stars"></div>

      {lessons.map((lesson, index) => {
        const isLocked = !(lesson.id <= 2 || completedLessons.includes(lesson.id - 1));
        return (
          <motion.div
            key={lesson.id}
            className={`planet ${isLocked ? "locked" : ""}`}
            initial={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            animate={{ top: lesson.top, left: lesson.left, transform: "translate(0, 0)" }}
            transition={{ duration: 1.2, delay: index * 0.3, type: "spring", stiffness: 50 }}
            onClick={() => handleLessonClick(lesson.id)}
          >
            <div className="planet-inner">
              {lesson.name} {isLocked && "🔒"}
            </div>
          </motion.div>
        );
      })}
      

      {showConnectors && (
        <svg className="connectors">
          <line x1="15%" y1="15%" x2="75%" y2="30%" className="connector" />
          <line x1="75%" y1="30%" x2="25%" y2="50%" className="connector" />
          <line x1="25%" y1="50%" x2="70%" y2="65%" className="connector" />
          <line x1="70%" y1="65%" x2="45%" y2="80%" className="connector" />
        </svg>
      )}
    </div>
  );
};

export default MapPage;
