import jobs from '../../data/cv';
import Jobcard from '../../components/jobcard/Jobcard';
import Header from '../../components/shared/Header';

const Mco = () => {
  return (
    <div className="mt-14">
      <Header title="Expériences" />
      <div className="jobs-container flex flex-col items-center">
        {jobs.map((job) => (
          <Jobcard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Mco;
