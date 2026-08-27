import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Taksh Patel | Software Engineering, AI/ML & Cybersecurity',
  description: 'Portfolio of Taksh Patel — Computer Science student at York University specializing in Software Engineering, Artificial Intelligence/Machine Learning, and Cybersecurity.',
  keywords: [
    'Taksh Patel',
    'Software Engineer',
    'AI Intern',
    'Cybersecurity',
    'Machine Learning',
    'York University',
    'Portfolio',
    'Developer',
    'Deep Learning',
    'SIEM'
  ],
  authors: [{ name: 'Taksh Patel' }],
  openGraph: {
    title: 'Taksh Patel | Software Engineering, AI/ML & Cybersecurity',
    description: 'Portfolio of Taksh Patel — Computer Science student at York University focused on Software Engineering, AI/ML, and Cybersecurity.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Taksh Patel Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
