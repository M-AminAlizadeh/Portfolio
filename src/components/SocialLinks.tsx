import { useGlobalState } from '../context/GlobalStatesContext';

const SocialLinks = () => {
  const { isDarkMode } = useGlobalState();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/m-aminalizadeh',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/m-amin-alizadeh',
    },
  ];
  return (
    <ul className="select-none flex-1 flex flex-col justify-start items-center 2xl:items-start gap-2 p-4">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="dark:text-white flex justify-start items-end capitalize underline"
          >
            {link.name}
            <img
              width="25"
              src={`https://img.icons8.com/pastel-glyph/64/${isDarkMode ? 'ffffff' : '000000'}/external-link--v1.png`}
              alt="external-link--v1"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
