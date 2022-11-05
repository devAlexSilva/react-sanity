import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: import.meta.env.VITE_DATASET,
    apiVersion: import.meta.env.VITE_API_VERSION,
    useCdn: true,
    token: import.meta.env.VITE_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (src) => builder.image(src)