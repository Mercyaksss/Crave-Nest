// app/fonts.js
import { Playfair_Display, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display',
    fallback: ['serif'],
    display: 'swap',
})


export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ui',
    fallback: ['sans-serif'],
    display: 'swap',
})

export const playlistScript = localFont({
    src: './PlaylistScript.otf',
    variable: '--font-script',
    display: 'swap',
})