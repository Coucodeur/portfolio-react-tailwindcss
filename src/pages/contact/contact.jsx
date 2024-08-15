import { useRef } from "react";
import Leftside from "../../components/leftside/leftside";
import Rightside from "../../components/rightside/rightside";
import emailjs from "@emailjs/browser";
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
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="mt-7 flex">
            <div className="mt-7 basis-auto grow grid items-center justify-center">
                <form
                    ref={form}
                    onSubmit={(e) => sendEmail(e)}
                    className="grid grid-cols-2 grid-rows-5 gap-4"
                >
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
                    <div className="flex flex-col flex-none row-span-2 col-span-2">
                        <label name="message">Message</label>
                        <textarea
                            className="resize-none w-full h-full"
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
