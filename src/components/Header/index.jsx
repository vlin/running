import { Link } from 'gatsby';
import React from 'react';
import useSiteMetadata from 'src/hooks/useSiteMetadata';

const Header = () => {
  const { logo, siteUrl, navLinks } = useSiteMetadata();

  return (
    <nav
      className="flex justify-between w-100 ph5-l"
      style={{ marginTop: '1rem' }}
    >
      <div className="dib w-25 v-mid">
        <a href={siteUrl} className="link dim">
          <picture>
            <img className="dib w3 h3 br-100" alt="logo" src={logo} />
          </picture>
        </a>
      </div>
      <div className="dib w-75 v-mid tr">
        {navLinks.map((n, i) => (
          <a
            key={i}
            href={n.url}
            className="light-gray link dim f6 f5-l mr3 mr4-l"
          >
            {n.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
