import { EnvServer } from '@/config/env-server'
import { createClient } from 'next-sanity'

const sanityClient = createClient ({
  apiVersion: '2021-03-25', 
  dataset: EnvServer.SANITY_DATASET,
  projectId: EnvServer.SANITY_PROJECT_ID,
  token: EnvServer.SANITY_ACCESS_TOKEN,
  useCdn: EnvServer.NODE_ENV === 'production',
});

export { sanityClient }
