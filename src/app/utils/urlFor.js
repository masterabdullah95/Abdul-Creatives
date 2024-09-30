import imageUrlBuilder from "@sanity/image-url";
import client from "./getSanityClient";

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

export default urlFor;
