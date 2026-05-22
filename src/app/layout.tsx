// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { AuthProvider } from '@/lib/auth-context';
// import { Toaster } from '@/components/ui/sonner';


// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   metadataBase: new URL('https://cellcurehub.com'),
//   title: 'CellCureHub - Nagpur\'s Most Trusted Gadget Repair Hub',
//   description: 'Fix It. Track It. Trust It. Premium smartphone & gadget repair service in Nagpur with free pickup, 48hr turnaround, and 90-day warranty.',
//   openGraph: {
//     title: 'CellCureHub - Nagpur\'s Most Trusted Gadget Repair Hub',
//     description: 'Fix It. Track It. Trust It.',
//     images: [{ url: 'https://bolt.new/static/og_default.png' }],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
//         <AuthProvider>
//           {children}
//           <Toaster />
          
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Cell Cure Hub | Mobile Repair Nagpur",
  description: "Nagpur's best mobile repair shop. Screen replacement, battery, IC repair & water damage. Same day service.",
  keywords: "mobile repair nagpur, phone repair nagpur, screen replacement nagpur, battery replacement, IC chip repair",
  metadataBase: new URL("https://cellcurehub.in"),
  openGraph: {
    title: "Cell Cure Hub | Mobile Repair Nagpur",
    description: "Walk in broken. Walk out fixed.",
    url: "https://cellcurehub.in",
    siteName: "Cell Cure Hub",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
