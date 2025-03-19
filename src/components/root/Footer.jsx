import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-10">
      <aside>
        <img
          src="/sv_svg.svg"
          alt="Custom Logo"
          width="100"
          height="100"
          className="inline-block"
        />
        <p className="font-bold">
          Sree Varshan
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/sree-varshan-5b2a47193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tech_stack/logos/social/linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 dark:invert"
            />
          </a>
          <a
            href="https://www.instagram.com/sree_varshan?igsh=ZGI2ZDNydjB6Njk0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tech_stack/logos/social/insta.svg"
              alt="Instagram"
              className="w-10 h-10 dark:invert"
            />
          </a>
          <a
            href="https://www.behance.net/sreevarshan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tech_stack/logos/social/behance.svg"
              alt="Behance"
              className="w-10 h-10 dark:invert"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
