import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-24 py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
        <div className="mb-4">© {new Date().getFullYear()} LLE STEM — Building the next generation of engineers.</div>
        <div className="flex items-center justify-center gap-4 mb-2">
          <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
          <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
          <a href="#" aria-label="GitHub" className="hover:text-white">GitHub</a>
        </div>
        <div className="text-xs text-gray-500">This site is maintained by students. For help: <a href="mailto:hello@stem-sprouts.org" className="underline">hello@stem-sprouts.org</a></div>
      </div>
    </footer>
  );
}
