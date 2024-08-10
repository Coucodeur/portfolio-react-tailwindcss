const Footer = () => {
  const externalLinks = [
    {
      name: 'Github',
      url: 'https://github.com/Coucodeur',
      icon: 'github',
    },
    {
      name: 'Instagram',
      url: 'https://help.instagram.com/110121795815331/?helpref=uf_share',
      icon: 'insta',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BeEeci7A4RNKTbfeEZGQ8Gg%3D%3D',
      icon: 'linkedin',
    },
  ];
  return (
    <footer className="text-slate-100 h-48 flex justify-around content-center ">
      <p className="flex items-center">Copyright © 2024 Matthieu COUTANT</p>
      <div className="flex items-center">
        <ul className="flex flex-col gap-3">
          {externalLinks.map((link) => (
            <li key={link.name} className="hover:text-red-600">
              <a className="flex gap-1" href={link.url} target="_blank">
                <img
                  className="h-6 w-6"
                  src={`./svg/socials/${link.icon}.svg`}
                  alt={`${link.name}'s link icon`}
                />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
