import { Link } from "react-router-dom";

const Projectcard = ({ projet }) => {
    return (
        <div className="projetContainer opacity-90 w-11/12 max-w-96 p-1 flex flex-col gap-4 rounded-sm hover:bg-textcolor hover:bg-opacity-5 hover:opacity-100 hover:shadow-2xl bg-textcolor bg-opacity-5 md:bg-transparent md:p-3">
            <h1 className="projetTitle text-2xl text-importanttextcolor">
                {projet.title}
            </h1>
            <div>
                {projet.status === "En cours" ? (
                    <span className="projetStatus text-importantcolor">
                        {projet.status}
                    </span>
                ) : (
                    <span className="projetStatus text-red-600">{projet.status}</span>
                )}
            </div>
            <div className="projetDescription">{projet.description}</div>
            <div className="projetTechnologies flex flex-wrap gap-2">
                {projet.technologies.map((technology) => (
                    <div
                        key={technology}
                        className="projetTechnology text-importantcolor border-solid border-importantcolor border-2 py-1 px-2 rounded-xl"
                    >
                        {technology}
                    </div>
                ))}
            </div>
            <div className="links-container w-full flex gap-4">
                {projet.github ? (
                    <Link to={projet.github} target="_blank">
                        <svg
                            className="w-8 fill-textcolor hover:fill-importanttextcolor transition-all"
                            viewBox="-143 145 512 512"
                        >
                            <path d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z" />
                            <path d="M224.5 351.2c.9-20.1-1.8-39.6-8.6-58.6-.9-2.4-2-3.3-4.5-2.6-5.6 1.7-11.4 3-16.9 5-15.2 5.5-29.1 13.5-42.6 22.2-1.4.9-3.5 1.5-5.2 1.2-22.1-3.9-44.3-3.7-66.5-.3-2.2.3-5-.2-6.8-1.3-15.7-10.2-31.7-20.2-50-25-15.1-4-12-4.8-16.3 8.9-5.1 16.4-7.1 33.4-6 50.6.1 1.2-.8 2.7-1.6 3.8-6.6 7.9-11.7 16.6-14.8 26.4-6 19-4.8 38.2-1 57.3 7.5 37.5 32.8 63.8 70.2 70.3 19.3 3.4 39.2 3.7 57.3 5.2 20.2-1.5 38.9-1.6 57.1-4.5 31.8-5.1 55.8-22 67.8-52.7 4.2-10.7 6.5-22.4 7.9-33.8 3.1-25.2-1.2-48.8-18.4-68.7-.6-.8-1.1-2.2-1.1-3.4zm-16.4 107.9c-3.3 15.6-12.4 26.3-27.6 31.8-14.7 5.4-29.9 7.6-45.4 8.6-7.5.5-15 .1-22.5.1-20.2.4-40.4-.4-59.9-6.2-24.5-7.3-35.5-21.9-36.2-47.5-.3-9.1.7-17.9 5-26.1 8.5-16.5 23.2-22.3 40.6-22.6 9.5-.1 19.1.7 28.7 1.6 20.1 1.8 40-.1 60-1.2 8.8-.5 17.8-.7 26.4.8 18.5 3.2 32.5 21.6 32.8 42.3 0 6.1-.7 12.4-1.9 18.4z" />
                            <path d="M56.1 424.8c-5.5 5.7-7.4 12.9-7.7 19.3 0 9.6 2.8 17.3 7.7 22.3 6.8 6.9 16.1 6.7 22.6-.3 9.8-10.6 9.7-30.5 0-41-6.5-7.1-16-7.2-22.6-.3zM148.2 424c-11.2 10.3-11.2 33 0 43.2 6.5 5.9 15.3 5.6 21.4-.7 5.6-5.8 7.6-13.1 7.8-21-.2-7.9-2.2-15.1-7.9-20.9-6.1-6.3-14.9-6.5-21.3-.6z" />
                        </svg>
                    </Link>
                ) : (
                    <span className="h-8 px-2 rounded-sm border-2 border-textcolor">
                        SECRET
                    </span>
                )}
                {projet.link ? (
                    <Link
                        to={projet.link}
                        className="h-8 px-2 rounded-sm border-2 border-textcolor hover:text-importanttextcolor hover:border-importanttextcolor transition-all"
                        target="_blank"
                    >
                        Visiter
                    </Link>
                ) : (
                    <span className="h-8 px-2 rounded-sm border-2 border-textcolor">
                        SECRET
                    </span>
                )}
            </div>
        </div>
    );
};

export default Projectcard;
