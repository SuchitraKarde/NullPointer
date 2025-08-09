import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessons from "../data/lessons";
import bgMusicFile from "../assets/playful-music.mp3";
import wrongSoundFile from "../assets/wrong.mp3";
import "./LessonPage.css";

const LessonPage = () => {
  const { id } = useParams();
  const lesson = lessons[id];
  const navigate = useNavigate();

  const [currentQ, setCurrentQ] = useState(0);
  const [xp, setXp] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [pairsMatched, setPairsMatched] = useState([]);
  const [lessonComplete, setLessonComplete] = useState(false);

  const question = lesson.questions[currentQ];

  const bgMusic = new Audio(bgMusicFile);
  const wrongSound = new Audio(wrongSoundFile);

  useEffect(() => {
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    bgMusic.play();

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const playWrongSound = () => {
    wrongSound.currentTime = 0;
    wrongSound.play();
  };

  const checkAnswer = (answer) => {
    if (question.type === "mcq") {
      if (answer === question.answer) {
        setXp((prev) => prev + 10);
        setFeedback("✅ Correct!");
      } else {
        setFeedback("❌ Wrong!");
        playWrongSound();
      }
    }
  };

  const handleMatch = (left, right) => {
    const questionPairs = question.pairs || [];
    const correct = questionPairs.find((p) => p.left === left && p.right === right);

    if (correct && !pairsMatched.includes(left)) {
      setPairsMatched((prev) => [...prev, left]);
      setXp((prev) => prev + 10);
      setFeedback("✅ Matched!");
    } else {
      setFeedback("❌ Wrong Match!");
      playWrongSound();
    }
  };

  const nextQuestion = () => {
    if (currentQ < lesson.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setFeedback("");
      setSelected(null);
      setPairsMatched([]);
    } else {
      setLessonComplete(true);
      const completedLessons = JSON.parse(localStorage.getItem("completedLessons")) || [];
      if (!completedLessons.includes(Number(id))) {
        localStorage.setItem("completedLessons", JSON.stringify([...completedLessons, Number(id)]));
      }
    }
  };

  return (
    <div className="lesson-container">
      <h2>{lesson.title}</h2>
      <div className="stats">
        <p>XP: {xp}</p>
      </div>

      {!lessonComplete ? (
        <>
          {question.type === "mcq" && (
            <div>
              <h3>{question.question}</h3>
              <div className="options">
                {question.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`option-btn ${selected === opt ? "selected" : ""}`}
                    onClick={() => {
                      setSelected(opt);
                      checkAnswer(opt);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {question.type === "match" && (
            <div className="match-container">
              <h3>{question.question}</h3>
              <div className="match-columns">
                <div className="left-column">
                  {question.pairs.map((pair, idx) => (
                    <div
                      key={idx}
                      className={`match-item ${pairsMatched.includes(pair.left) ? "matched" : ""}`}
                      draggable={!pairsMatched.includes(pair.left)}
                      onDragStart={(e) => e.dataTransfer.setData("text/plain", pair.left)}
                    >
                      {pair.left}
                    </div>
                  ))}
                </div>

                <div className="right-column">
                  {question.pairs.map((pair, idx) => (
                    <div
                      key={idx}
                      className="match-dropzone"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const draggedLeft = e.dataTransfer.getData("text/plain");
                        handleMatch(draggedLeft, pair.right);
                      }}
                    >
                      {pair.right}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="feedback">{feedback}</p>
          {(feedback || pairsMatched.length === question.pairs?.length) && (
            <button onClick={nextQuestion} className="next-btn">
              Next
            </button>
          )}
        </>
      ) : (
        <div>a
          <h3>🎉 Lesson Complete!</h3>
          <button className="next-btn" onClick={() => navigate("/map")}>
            Back to Map
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonPage;
