import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'STEM Sprouts — Local Chapters. Global Impact.',
    template: '%s | STEM Sprouts',
  },
  description:
    'STEM Sprouts expands access to STEM education through a growing network of student-led chapters. From Georgia to Kenya, students lead free hands-on workshops for their communities.',
  keywords: [
    'STEM education',
    'student-led',
    'nonprofit',
    'STEM chapters',
    'youth education',
    'STEM access',
    'Pinboard',
    'Kenya STEM',
    'Georgia STEM',
    'STEM Sprouts',
  ],
  openGraph: {
    title: 'STEM Sprouts — Local Chapters. Global Impact.',
    description:
      'A growing network of student-led STEM chapters expanding access to hands-on STEM education from Georgia to Kenya.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
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
