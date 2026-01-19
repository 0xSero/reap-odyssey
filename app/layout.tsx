import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The REAP Odyssey',
  description: 'Democratizing frontier AI through compression',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
