import { Link } from 'react-router-dom';
import Leftside from '../../components/leftside/leftside';
import Rightside from '../../components/rightside/rightside';

const Acceuil = () => {
  return (
    <div className="mt-7 flex">
      <Leftside />
      <div className="basis-auto mt-7 grow flex items-center justify-center">
        <div className="w-full max-w-3xl px-4 flex flex-col gap-9 ">
          <p className="text-importantcolor font-jetbrain text-xl tracking-widest">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Bonjour, je m'appelle
          </p>
          <div>
            <h1 className="md:text-7xl text-5xl text-importanttextcolor tracking-widest mt-4">
              Matthieu COUTANT.
            </h1>
            <h2 className="md:text-3xl text-2xl tracking-widest">
              Je construis des trucs sur le web.
            </h2>
          </div>
          <div>
            <p className="text-2xl mt-6">
              Je suis un développeur passionné par la création d'applications
              web modernes et performantes.
            </p>
            <p className="text-2xl mt-1">
              Basé en Alsace, je serais ravis de vous aider dans votre
              digitalisation.
            </p>
          </div>
          <div className="mt-20 flex items-center justify-between md:justify-center md:gap-24">
            <Link
              to={'/contact'}
              className="border-2 border-importantcolor rounded-md text-importantcolor text-base px-1 py-1 md:hover:bg-importantcolor md:hover:text-primary transition-all md:py-5 md:px-7 md:text-2xl"
            >
              Prennons contact
            </Link>
            <Link
              to={'/mco'}
              className="border-2 border-textcolor rounded-md text-textcolor text-base px-1 py-1 md:hover:bg-textcolor md:hover:text-primary transition-all md:py-5 md:px-7 md:text-2xl"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
      <Rightside />
    </div>
  );
};

export default Acceuil;
