import jobs from '../../data/cv';
import Jobcard from '../../components/jobcard/Jobcard';

const Mco = () => {
  console.log('cest la page des jobs');

  return (
    <div className="mt-14">
      <h1 className="text-4xl font-jetbrain text-importantcolor mb-7">
        Expériences
      </h1>
      <div className="jobs-container flex flex-col items-center">
        {jobs.map((job) => (
          <Jobcard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Mco;
