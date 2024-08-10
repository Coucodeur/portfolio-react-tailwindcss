import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
  const links = [
    { number: '01', name: 'Accueil', url: '/' },
    { number: '02', name: 'Projets', url: '/projet' },
    { number: '03', name: 'Contact', url: '/contact' },
  ];
  return (
    <nav className="w-vw min-h-32 grid place-items-center">
      <div className="w-full px-14 max-lg:px-2 max-lg:text-xs flex justify-between items-center">
        <Link
          to="/"
          className="font-boska font-extrabold text-3xl transition-all text-importantcolor cursor-pointer "
        >
          MCO
        </Link>

        <div className="flex justify-center gap-12">
          <ul className="flex gap-12">
            {links.map((link) => (
              <li
                key={link.name}
                className="underline-offset-2 transition-all text-lg max-lg:text-xs items-center flex"
              >
                <NavLink
                  to={link.url}
                  className="hover:text-importanttextcolor hover:scale-105 transition-all text-lg max-lg:text-xs items-center flex"
                >
                  <div className="flex gap-2">
                    <span className="font-jetbrain text-importantcolor">
                      {link.number}.
                    </span>
                    <span className="font-jetbrain">{link.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to={'/mco'}
            className="text-importantcolor font-jetbrain border-2 border-importantcolor px-6 py-3 rounded-md hover:bg-importantcolor hover:text-primary transition-all"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
