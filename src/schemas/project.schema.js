import {z} from 'zod'

export const createProjectSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    urlProyect: z.string({
        required_error: 'The Project URL is required'
    }),
    IMG: z.string({
        required_error: 'url img is required'
    })

});


