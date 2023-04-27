import './globals.css'

export const metadata = {
    title: 'Matt French | Software Engineer',
    description: 'Information about Matt French, a software engineer based in Bristol, UK.',
    authors: [{ name: "Matt French" }],
    keywords: [
        'Matt French',
        'Software Engineer',
        'Bristol',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Java',
        'Python',
        'C#',
    ],
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    // twitter: {
    //     card: 'summary_large_image',
    //     title: 'Matt French',
    //     description: 'Software Engineer based in Bristol, UK.',
    //     siteId: '1467726470533754880',
    //     creator: '@nextjs',
    //     creatorId: '1467726470533754880',
    //     images: ['https://nextjs.org/og.png'],
    // },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
