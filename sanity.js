import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "roquqbuq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
