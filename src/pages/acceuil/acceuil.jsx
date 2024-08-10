import { Link } from 'react-router-dom';
import Leftside from '../../components/leftside/leftside';
import Rightside from '../../components/rightside/rightside';

const Acceuil = () => {
  return (
    <div className="mt-32 flex">
      <Leftside />
      <div className="basis-auto grow flex items-center justify-center">
        <div className="w-5/6 max-w-3xl px-1 flex flex-col gap-9 ">
          <p className="text-importantcolor font-jetbrain text-xl tracking-widest">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Bonjour, je m'appelle
          </p>
          <div>
            <h1 className="text-7xl text-importanttextcolor tracking-widest mt-4">
              Matthieu COUTANT.
            </h1>
            <h2 className="text-4xl tracking-widest">
              Je construis des trucs sur le web.
            </h2>
          </div>
          <div>
            <p className="text-2xl mt-6">
              Je suis un développeur web passionné par la création de sites web
              modernes et performants.
            </p>
            <p className="text-2xl mt-1">
              Basé en Alsace, je serais ravis de vous aider dans votre
              digitalisation.
            </p>
          </div>
          <div className="mt-32 flex gap-12">
            <Link
              to={'/contact'}
              className="border-2 border-importantcolor rounded-md text-importantcolor fontextrabold text-2xl  py-8 px-10 hover:bg-importantcolor hover:text-primary transition-all"
            >
              Prennons contact
            </Link>
            <Link
              to={'/mco'}
              className="border-2 border-textcolor rounded-md text-textcolor fontextrabold text-2xl  py-8 px-10 hover:bg-textcolor hover:text-primary transition-all"
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
