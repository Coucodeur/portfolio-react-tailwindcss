import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const links = [
  { number: '01', name: 'Accueil', url: '/' },
  { number: '02', name: 'Projets', url: '/projets' },
  { number: '03', name: 'Parcours', url: '/mco' },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div
      className={
        scrolling
          ? 'bg-primary sticky top-0 transition duration-700 z-10'
          : 'sticky top-0  transition duration-700 z-10'
      }
    >
      <nav className="w-full flex justify-between items-center pt-2 px-2 md:px-2">
        {/* <div className="w-full px-14 max-lg:px-2 max-lg:text-xs flex justify-between items-center"> */}
        <Link
          to="/"
          className="font-boska md:font-bold md:text-3xl transition-all text-importantcolor cursor-pointer "
        >
          MCO
        </Link>

        <div className="font-jetbrain flex justify-center text-xs gap-1 md:text-base md:gap-10">
          <ul className="flex gap-2 md:gap-10">
            {links.map((link) => (
              <li
                key={link.name}
                className="underline-offset-2 transition-all items-center flex"
              >
                <NavLink
                  to={link.url}
                  className="hover:text-importanttextcolor hover:scale-105 transition-all items-center flex"
                >
                  <div className="flex gap-1 md:gap-2">
                    <span className=" text-importantcolor">{link.number}.</span>
                    <span>{link.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to={'/contact'}
            className="text-importantcolor  border-2 border-importantcolor px-1 py-1 md:px-3 md:py-3  rounded-md hover:bg-importantcolor hover:text-primary transition-all"
          >
            Contact
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
