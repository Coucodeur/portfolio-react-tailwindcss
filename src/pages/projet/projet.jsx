import Projectcard from '../../components/projectcard/projectcard';
import Header from '../../components/shared/Header';
import projects from '../../data/projects';

const Projet = () => {
  return (
    <div className="project-page mt-7 grid place-items-center">
      <div className="mt-7 projects-container px-3 grid items-center justify-center">
        <Header title="Projets" />
        <div className="grid gap-12 grid-cols-2 max-lg:grid-cols-1">
          {projects.map((projet) => (
            <Projectcard key={projet.id} projet={projet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projet;
