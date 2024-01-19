import { defineCollection, z } from "astro:content";

const SIGHTS_ITEM = {
  type: "content" as const,
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
};

// Define a `type` and `schema` for each collection
const sightsCollection = defineCollection(SIGHTS_ITEM);
const guidedToursCollection = defineCollection(SIGHTS_ITEM);
const museumsCollection = defineCollection(SIGHTS_ITEM);
const eventsCollection = defineCollection(SIGHTS_ITEM);
const ideasCollection = defineCollection(SIGHTS_ITEM);

// Export a single `collections` object to register your collection(s)
export const collections = {
  sights: sightsCollection,
  museums: museumsCollection,
  events: eventsCollection,
  ["guided-tours"]: guidedToursCollection,
  ideas: ideasCollection,
};
