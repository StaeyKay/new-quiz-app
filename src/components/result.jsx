// src/Results.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the score and the total questions from the state passed via navigate
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 0,
  };

  const handleRetakeQuiz = () => {
    navigate("/");
  };

  const handleShare = async () => {
    const shareData = {
      title: `I scored ${score}/${totalQuestions} in the quiz!`,
      text: `I just completed this quiz and scored ${score}/${totalQuestions}. Can you beat my score?`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="space-y-8 md:p-48 p-10 text-white font-bold md:text-[35px] text-[20px] overflow-hidden">
      <Helmet>
        <meta
          property="og:title"
          content={`I scored ${score}/${totalQuestions} in the quiz!`}
        />
        <meta
          property="og:description"
          content="Test your knowledge with this fun quiz!"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <div className="md:p-[60px] p-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-3xl">
        <div className="space-y-10">
          <div>
            <h3>Quiz Completed!</h3>
            <p>
              Your accumulated score is {score}/{totalQuestions}
            </p>
          </div>
          <div className="flex gap-20 justify-center">
            <button
              onClick={handleRetakeQuiz}
              className="flex items-center gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-xl text-[25px] font-bold px-5 py-2"
            >
              Retake quiz
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl rounded-xl text-[25px] font-bold px-5 py-2"
            >
              Share
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
