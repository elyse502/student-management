import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const socials = [
  {
    href: "https://elyseedev.netlify.app",
    label: "Portfolio",
    icon: <FaGlobe />,
    hover:
      "hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:border-indigo-200 dark:hover:border-indigo-800",
  },
  {
    href: "https://github.com/elyse502",
    label: "GitHub",
    icon: <FaGithub />,
    hover:
      "hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800 hover:border-slate-300 dark:hover:border-gray-600",
  },
  {
    href: "https://twitter.com/Niyibizi_Elyse",
    label: "Twitter",
    icon: <FaTwitter />,
    hover:
      "hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950 hover:border-sky-200 dark:hover:border-sky-800",
  },
  {
    href: "https://linkedin.com/in/niyibizi-elysée",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    hover:
      "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 dark:hover:border-blue-800",
  },
];

const navLinks = [
  { href: "/register", label: "Register" },
  { href: "/students", label: "Students" },
  { href: "/course", label: "Courses" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Top accent stripe */}
      <div className="h-px w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        {/* ── Main row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand block */}
          <div className="space-y-3 max-w-xs">
            {/* Logo mark */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 flex items-center justify-center shadow-sm shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
                  ElyséeDev
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  Student Portal
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Software Engineer focused on building clean, scalable, and
              user-friendly web applications using modern technologies.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ href, label, icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-gray-700 text-slate-500 dark:text-slate-400 text-base transition-all duration-150 active:scale-95 ${hover}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 group"
                  >
                    <svg
                      className="w-3 h-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built with */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "React Router"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-100 dark:bg-gray-800" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {year}{" "}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400">
              ElyséeDev
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <p className="text-xs text-slate-400 dark:text-slate-500">
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
