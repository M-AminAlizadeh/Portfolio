const SocialLinks = () => {
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
    <ul className="flex-1 flex flex-col justify-center items-center gap-2">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start items-end capitalize underline"
          >
            {link.name}
            <img
              width="25"
              src="https://img.icons8.com/pastel-glyph/64/external-link--v1.png"
              alt="external-link--v1"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
