import { Link } from 'react-router-dom';
import Leftside from '../../components/leftside/leftside';
import Rightside from '../../components/rightside/rightside';

const Contact = () => {
  return (
    <div className="mt-32 flex">
      <Leftside />
      <div className="basis-auto grow grid items-center justify-center">
        <h1 className="text-9xl"> Ici la page de contact</h1>
      </div>
      <Rightside />
    </div>
  );
};

export default Contact;
