import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { personalData } from '@/lib/constants'; // 1. We import your personal data

const inter = Inter({ subsets: ['latin'] });

// --- 2. THIS IS THE NEW, SEO-OPTIMIZED METADATA BLOCK ---
export const metadata: Metadata = {
  // This tells Google the base URL of your site.
  metadataBase: new URL('https://mohamedeladarissi.vercel.app/'), // <-- CRITICAL: REPLACE WITH YOUR VERCEL URL
  
  title: {
    default: `Mohamed El Adarissi | Industrial Engineer Portfolio`, // The main title of your site
    template: `%s | Mohamed El Adarissi`, // The title format for other pages
  },
  
  description: personalData.description,
  
  keywords: [
    'Mohamed El Adarissi',
    'Industrial Engineer',
    'Portfolio',
    'Industry 4.0',
    'IoT',
    'Robotics',
    'Automation',
    'Smart Industry',
    'Morocco',
    'Engineer Portfolio',
  ],
  
  authors: [{ name: personalData.name, url: 'https://mohamedeladarissi.vercel.app/' }], // <-- CRITICAL: REPLACE
  creator: personalData.name,
  
  openGraph: {
    title: `Portfolio | Mohamed El Adarissi`,
    description: personalData.description,
    url: 'https://mohamedeladarissi.vercel.app/', // <-- CRITICAL: REPLACE
    siteName: `${personalData.name}'s Portfolio`,
    // IMPORTANT: Make sure your 'profile.png' is in the 'public' folder for this to work
    images: 'Engineering_Student_Portfolio/app/public/portfolio5.jpg',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Portfolio | Mohamed El Adarissi`,
    description: personalData.description,
    creator: '@yourtwitterhandle', // Optional: Add your Twitter handle
    images: ['Engineering_Student_Portfolio/app/public/portfolio5.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
    }
  }, // Add a comma here

  // --- PASTE THE NEW VERIFICATION BLOCK HERE ---
  verification: {
    google: 'b0rTYZJoVHk8NP_5e0_dB9N6ZkREwLqp80p9S3KFm1U',
  },

};


// --- 3. THE REST OF YOUR ORIGINAL FILE IS PRESERVED PERFECTLY ---
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* I have kept your custom favicon link */}
			<link rel="shortcut icon" href="https://y259nvmlltdutuek.public.blob.vercel-storage.com/favicon.png" type="image/x-icon" />
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow pt-16">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}