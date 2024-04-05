import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data.js";
import Person from "./Person.jsx";

const App = () => {
  const [person, setPerson] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const subtractIndex = () => {
    let newIndex = 0;
    currentIndex === 0
      ? (newIndex = data.length - 1)
      : (newIndex = currentIndex - 1);
    updateIndex(newIndex);
  };

  const addIndex = () => {
    let newIndex = 0;
    currentIndex === data.length - 1
      ? (newIndex = 0)
      : (newIndex = currentIndex + 1);
    updateIndex(newIndex);
  };

  const randomIndex = () => {
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * data.length);
    }
    updateIndex(newIndex);
  };

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
    setPerson(data[newIndex]);
  };

  return (
    <div className="main">
      <article className="review">
        <Person key={person.id} {...person} />
        <div className="btn-container">
          <button
            type="button"
            className="prev-btn"
            onClick={() => subtractIndex()}
          >
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={() => addIndex()}>
            <FaChevronRight />
          </button>
        </div>
        <div>
          <button type="button" className="btn" onClick={() => randomIndex()}>
            Surprise Me
          </button>
        </div>
      </article>
    </div>
  );
};
export default App;
