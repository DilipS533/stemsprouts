import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'STEM Sprouts — Expanding STEM Access Through Student-Led Chapters',
    template: '%s | STEM Sprouts',
  },
  description:
    'STEM Sprouts is building a global network of student-led STEM chapters that expand access to STEM education. From Georgia to Kenya, we empower students to lead STEM learning in their communities.',
  keywords: [
    'STEM education',
    'student-led chapters',
    'STEM access',
    'youth nonprofit',
    'coding workshops',
    'robotics',
    'Kenya STEM',
    'Pinboard',
    'STEM Sprouts',
  ],
  openGraph: {
    title: 'STEM Sprouts — Expanding STEM Access Through Student-Led Chapters',
    description:
      'A global network of student-led STEM chapters expanding access to STEM education from Georgia to Kenya.',
    url: 'https://stem-sprouts.org',
    siteName: 'STEM Sprouts',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BF7C9BFD06" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BF7C9BFD06');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
