const Jobcard = ({ job }) => {
  const { title, company, date, descriptions, keyPoints } = job;

  return (
    <div className="job-card mb-12 md:w-3/4 border-l-2 border-r-2 pl-2 pr-2 border-importantcolor">
      <h2 className="text-3xl text-importantcolor">{title}</h2>
      <h3 className="text-lg">{date}</h3>
      <h4 className="text-xl text-importanttextcolor pt-2">{company} :</h4>
      <div className="descriptions-container">
        {descriptions.map((description, index) => (
          <p key={index} className="md:text-lg text-sm">
            {description}
          </p>
        ))}
      </div>
      <div>
        <p className="text-importanttextcolor pt-2">Compétences :</p>
        <ul>
          {keyPoints.map((keypoint) => (
            <li key={keypoint} className="pl-3 md:text-lg text-sm">
              - {keypoint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobcard;
