import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Using react-icons for the plus and minus icons

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = {
    BBA: [
      { question: "What are the placement opportunities for BBA students?", answer: "BBA students have opportunities in marketing, sales, HR, and finance roles in reputed companies." },
      { question: "Is internship mandatory for BBA?", answer: "Yes, a minimum 6-week internship is mandatory in the final year." },
      { question: "What is the duration of the BBA program?", answer: "The BBA program is typically a 3-year full-time undergraduate course." },
      { question: "Are BBA students eligible for campus placements?", answer: "Yes, BBA students are eligible for campus placements from the final year." },
      { question: "What specializations are offered in BBA?", answer: "Specializations include Finance, Marketing, Human Resource Management, and International Business." },
      { question: "Is there any entrance exam for BBA admission?", answer: "Admission is based on merit or entrance exams like IPU CET, depending on the university." },
      { question: "What kind of projects do BBA students work on?", answer: "BBA students work on case studies, market research, and live projects with industry relevance." }
    ],
    MBA: [
      { question: "What companies visit for MBA placements?", answer: "Top companies like Deloitte, EY, KPMG, and Infosys regularly visit for MBA placements." },
      { question: "Are MBA students eligible for international placements?", answer: "Yes, selected students with strong academic and soft skills may be eligible for international offers." },
      { question: "What are the major specializations in MBA?", answer: "Popular specializations include Finance, Marketing, HR, Operations, and Business Analytics." },
      { question: "Is work experience mandatory for MBA admission?", answer: "Work experience is preferred but not mandatory for all MBA programs." },
      { question: "What is the average package for MBA graduates?", answer: "The average package ranges from 6 to 12 LPA depending on specialization and institute." },
      { question: "Is there a summer internship during MBA?", answer: "Yes, most MBA programs include a mandatory 8-10 week summer internship after the first year." },
      { question: "What is the duration of the MBA program?", answer: "MBA is a 2-year full-time postgraduate program divided into 4 semesters." }
    ],
    BTech: [
      { question: "Do BTech students get core or software roles?", answer: "Yes, students are eligible for both core (ECE, MECH, etc.) and software roles in companies like TCS, Infosys, and Amazon." },
      { question: "Is CGPA important for BTech placements?", answer: "Most companies have a minimum CGPA cutoff ranging from 6.5 to 7.5 depending on the role." },
      { question: "Are internships compulsory in BTech?", answer: "Yes, internships are encouraged and often mandatory in the final year for industry exposure." },
      { question: "What are the major streams in BTech?", answer: "Common streams include Computer Science, Electronics, Mechanical, Civil, and IT." },
      { question: "Do BTech students get training on coding?", answer: "Yes, training in coding, DSA, and development is provided from the 2nd or 3rd semester onwards." },
      { question: "Are hackathons and coding contests encouraged?", answer: "Yes, students are encouraged to participate in hackathons, coding challenges, and open-source projects." },
      { question: "What are the higher study options after BTech?", answer: "Students can opt for MTech, MBA, or prepare for exams like GATE, CAT, or GRE for higher education." }
    ]
  };

  return (
    <div className="faq-container">
      {['BBA', 'MBA', 'BTech'].map((program, idx) => (
        <div key={idx} className="faq-section">
          <h2 className="program-title">{program} FAQ</h2>
          {faqData[program].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              className="faq-item"
            >
              <div
                className="question"
                onClick={() => toggleAnswer(index)}
              >
                <span>{item.question}</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="icon"
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.div>
              </div>
              <motion.div
                className="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{ overflow: 'hidden', marginTop: '10px' }}
              >
                <div className="answer-content">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Faq;

// Add the CSS for styling (can be added directly in the same file or external stylesheet)
const styles = `
.faq-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #e7eaf6;
}

.faq-section {
  margin-bottom: 30px;
}

.program-title {
  text-align: center;
  font-size: 28px;
  color: #113f67;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.faq-item {
  margin-bottom: 15px;
}

.question {
  font-size: 18px;
  color: #333;
  padding: 15px;
  border-radius: 8px;
  background: linear-gradient(45deg, #e7eaf6, #e7eaf6);
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 2px solid #113f67;
}

.question:hover {
  transform: translateY(-3px);
  background-color: #c5e1a5;
  border-color: #004d40; /* Animated border color */
}

.icon {
  font-size: 20px;
  color: #113f67;
  transition: transform 0.3s ease;
}

.answer-content {
  font-size: 16px;
  color: #555;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.answer {
  background-color: #e7eaf6;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
