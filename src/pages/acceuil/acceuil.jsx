import { Link } from "react-router-dom";

const Acceuil = () => {
    return (
        <div className="home-page">
            <div className="desc-container flex flex-col gap-7 mt-5 max-w-[550px] md:max-w-none lg:max-w-[850px] mx-auto">
                <p className="text-importantcolor font-jetbrain text-xl tracking-widest">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Bonjour, je m'appelle
                </p>
                <div>
                    <h1 className="md:text-7xl text-5xl text-importanttextcolor tracking-wides">
                        Matthieu COUTANT.
                    </h1>
                    <h2 className="md:text-3xl text-2xl tracking-widest">
                        Je construis des trucs sur le web.
                    </h2>
                </div>
                <div>
                    <p className="text-xl ">
                        Je suis un développeur passionné par la création d'applications
                        web modernes et performantes.
                    </p>
                    <p className="text-xl ">
                        Basé en Alsace, je serais ravis de vous aider dans votre
                        digitalisation.
                    </p>
                </div>
                <div className="flex items-center justify-around ">
                    <Link
                        to={"/contact"}
                        className="border-2 border-importantcolor rounded-md text-importantcolor text-base px-1 py-1 md:hover:bg-importantcolor md:hover:text-primary transition-all md:py-5 md:px-7 md:text-2xl"
                    >
                        Prennons contact
                    </Link>
                    <Link
                        to={"/mco"}
                        className="border-2 border-textcolor rounded-md text-textcolor text-base px-1 py-1 md:hover:bg-textcolor md:hover:text-primary transition-all md:py-5 md:px-7 md:text-2xl"
                    >
                        En savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Acceuil;
