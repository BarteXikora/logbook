import { Crimson_Pro, Raleway } from 'next/font/google'

export const crimsonPro = Crimson_Pro({
    variable: '--font-display',
    subsets: ['latin-ext'],
    weight: ['400', '700']
})

export const raleway = Raleway({
    variable: '--font-sans',
    subsets: ['latin-ext'],
    weight: ['400', '700']
})