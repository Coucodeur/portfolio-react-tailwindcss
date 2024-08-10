import Leftside from '../../components/leftside/leftside';
import Rightside from '../../components/rightside/rightside';
import Projectcard from '../../components/projectcard/projectcard';
import projects from '../../data/projects';

const Projet = () => {
  return (
    <div className="mt-32 flex justify-between w-vw">
      <Leftside />
      {/* <div className="basis-auto grow grid items-center justify-center gap-12"> */}
      <div className="projects-container grid items-center justify-center">
        <div className="grid gap-12 grid-cols-2 max-lg:grid-cols-1">
          {projects.map((projet) => (
            <Projectcard key={projet.id} projet={projet} />
          ))}
        </div>
      </div>
      <Rightside />
    </div>
  );
};

export default Projet;
