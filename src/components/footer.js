'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t-2 border-gray-500 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Copyright info */}
        <div className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © 2024 {' '}
          <Link href="https://codeapto.com" target="_blank" rel="noopener noreferrer" className="underline">
            CodeApto India
          </Link>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 text-center md:text-left">
          <Link href="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/disclaimer" className="hover:text-gray-300">
            Disclaimer
          </Link>
          <Link href="/disclosure-policy" className="hover:text-gray-300">
            Disclosure Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-gray-300">
            Terms and Conditions
          </Link>

          {/* YouTube Icon */}
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
