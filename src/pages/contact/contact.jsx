import Leftside from '../../components/leftside/leftside';
import Rightside from '../../components/rightside/rightside';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);
    console.log(object);
    console.log(json);
    form.reset();
  };

  return (
    <div className="mt-7 flex">
      <Leftside />
      <div className="mt-7 basis-auto grow grid items-center justify-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col">
            <label name="lastName">Nom</label>
            <input type="text" name="lastName" required />
          </div>
          <div className="flex flex-col">
            <label name="firstName">Prénom</label>
            <input type="text" name="firstName" required />
          </div>
          <div className="flex flex-col">
            <label name="society">Société</label>
            <input type="text" name="society" />
          </div>
          <div className="flex flex-col">
            <label name="mail">Adresse de contact</label>
            <input type="mail" name="mail" required />
          </div>
          <div className="flex flex-col resize-none">
            <label name="message">Message</label>
            <textarea
              className=" resize-none"
              name="message"
              required
            ></textarea>
          </div>
          <button
            className="text-xl border-2 border-importantcolor rounded-lg p-2 mt-3 text-importantcolor hover:bg-importantcolor hover:text-primary transition-all duration-300 ease-in-out"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
      <Rightside />
    </div>
  );
};

export default Contact;
