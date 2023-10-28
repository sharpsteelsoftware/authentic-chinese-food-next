import { z } from 'zod'

//zod schema which defines the type
const EnvServerInputSchema = z.object({
    SANITY_ACCESS_TOKEN: z.string(),
    SANITY_DATASET: z.string(),
    SANITY_PROJECT_ID: z.string(),
    NODE_ENV: z.string().default('development'),
})
//export the type that zod generates. 
export type EnvServerInputs = z.input<typeof EnvServerInputSchema>;
//Validate and return type if successful or throw exception.
const EnvServer: EnvServerInputs = EnvServerInputSchema.parse(process.env);

export { EnvServer }
