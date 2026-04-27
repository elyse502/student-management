import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* About */}
          <div className="space-y-2 max-w-md">
            <h2 className="text-lg font-semibold">ElyséeDev</h2>
            <p className="text-sm text-gray-500">
              Software Engineer focused on building clean, scalable, and
              user-friendly web applications using modern technologies.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://elyseedev.netlify.app"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaGlobe />
            </a>

            <a
              href="https://github.com/elyse502"
              target="_blank"
              className="hover:text-gray-800 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://twitter.com/Niyibizi_Elyse"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com/in/niyibizi-elysée"
              target="_blank"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 border-t pt-4 dark:border-gray-700">
          © {year} ElyséeDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
