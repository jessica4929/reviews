import { FaQuoteRight } from "react-icons/fa";

const Person = ({ id, name, job, image, text }) => {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h2 className="author">{name}</h2>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
    </div>
  );
};
export default Person;
