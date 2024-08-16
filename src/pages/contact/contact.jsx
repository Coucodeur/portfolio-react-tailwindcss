import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert('Message envoyé');
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Erreur lors de l'envoi du message");
        }
      );
  };

  return (
    <div className="mt-7 flex flex-col items-center lg:flex-row lg:justify-around  ">
      <div className="mt-7 lg:grid lg:place-items-baseline max-w-[408px]">
        <div className="instruction-container mx-auto  lg:mt-5 ">
          <h1 className="text-4xl font-jetbrain text-importantcolor">
            Contact
          </h1>
          <p className="text-importanttextcolor mt-3">
            Pour être reconcaté concernant la création de votre site faites le
            savoir en envoyant une demande de contact.
          </p>
        </div>
      </div>
      <div className="form-container max-w-[408px] mt-7 basis-auto grow grid justify-center">
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="grid grid-cols-2 grid-rows-5 gap-4 lg:text-center "
        >
          <div className="flex flex-col">
            <label name="lastName">Nom</label>
            <input
              type="text"
              className="bg-transparent rounded-lg p-2 text-importanttextcolor outline-none border-2 border-textcolor focus:border-importantcolor"
              name="lastName"
              required
            />
          </div>
          <div className="flex flex-col">
            <label name="firstName">Prénom</label>
            <input
              type="text"
              className="bg-transparent rounded-lg p-2 text-importanttextcolor outline-none border-2 border-textcolor
              focus:border-importantcolor"
              name="firstName"
              required
            />
          </div>
          <div className="flex flex-col">
            <label name="mail">Adresse de contact</label>
            <input
              type="mail"
              name="mail"
              required
              className="bg-transparent rounded-lg p-2 text-importanttextcolor outline-none border-2 border-textcolor
              focus:border-importantcolor"
            />
          </div>

          <div className="flex flex-col">
            <label name="society">Société</label>
            <input
              type="text"
              className="bg-transparent rounded-lg p-2 text-importanttextcolor outline-none border-2 border-textcolor
              focus:border-importantcolor"
              name="society"
            />
          </div>
          <div className="flex flex-col flex-none row-span-2 col-span-2 ">
            <label name="message">Message</label>
            <textarea
              className="resize-none w-full h-full bg-transparent rounded-lg p-2 text-importanttextcolor outline-none border-2 border-textcolor
              focus:border-importantcolor focus:border-4"
              name="message"
              required
            ></textarea>
          </div>
          <div>
            <button
              className="text-xl border-2 border-importantcolor rounded-lg p-2 mt-3 text-importantcolor hover:bg-importantcolor hover:text-primary transition-all duration-300 ease-in-out"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
