import { ClientConfig, createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config: ClientConfig | any = {
  dataset: 'production',
  projectId: 'em5hvxdd',
  apiVersion: 'v2021-10-21',
  useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
