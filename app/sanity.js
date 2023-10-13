import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '8bh5h6ko',
  dataset: 'production',
  useCdn: true // `false` if you want to use the preview mode
});

export default client;
