import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center mt-16 mb-8 text-gray-500">
      <div className="flex justify-center gap-6 text-2xl mb-2">
        <a href="mailto:ivnortz@gmail.com" aria-label="Email" className="hover:text-black">
          <FaEnvelope />
        </a>
        <a href="https://github.com/krisivortiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/kristoffer-ivan-ortiz-a6b08583" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-black">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@ivnortz7" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-black">
          <FaYoutube />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Ivan O.</p>
    </footer>
  );
}