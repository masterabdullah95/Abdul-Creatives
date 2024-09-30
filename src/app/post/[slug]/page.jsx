import client from "@/app/utils/getSanityClient";
import imageUrlBuilder from "@sanity/image-url";
import moment from "moment";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import urlFor from "@/app/utils/urlFor";
import Image from "next/image";

const SampleImageComponent = ({ value, isInline }) => {
  return (
    <Image
      src={imageUrlBuilder(client)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || "image"}
      width={500}
      height={500}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({ children }) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),

      // Ex. 2: rendering a custom `link` annotation
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" && "noindex nofollow"}
          >
            {children}
          </a>
        );
      },
    },
  },
};

export default async function Page({ params }) {
  const timestamp = new Date().getTime();
  let query = `*[_type == "blog" && slug.current match "${params.slug}"][0] {
    description,
    title,
    content,
    CreatedAt,
    tags,
    author->
  }`;
  let query1 = `*[_type == "blog"] {
    slug
  }`;
  const post = await client.fetch(query, { ts: timestamp });
  const post_titles = await client.fetch(query1, { ts: timestamp });

  const index = post_titles.findIndex(
    (title) => title.slug.current == params.slug
  );

  let prev_post = "";
  let next_post = "";

  if (index != 0) {
    prev_post = post_titles[index - 1];
  }
  if (post_titles.length != index + 1) {
    next_post = post_titles[index + 1];
  }

  return (
    <div className="pt-28">
      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {post.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              <div>
                <Image
                  src={urlFor(post.author.image).width(200).url()}
                  className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="pl-5">
                <span className="block font-body text-xl font-bold text-grey-10">
                  {post.author.title}
                </span>
                <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                  {moment(post.CreatedAt).format("MMMM DD, YYYY")}
                </span>
              </div>
            </div>
          </div>
          <div className="prose max-w-none pt-8">
            <p>{post.description}</p>
          </div>
          <div className="prose max-w-none pt-8">
            <PortableText value={post.content} components={components} />
          </div>
          <div className="flex pt-10">
            {post.tags?.map((tag, index) => (
              <a
                key={index}
                href="/"
                className="rounded-xl bg-primary px-6 py-1 mx-1 font-body font-bold text-white hover:bg-grey-20"
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="mt-10 flex justify-between border-t border-lila py-12">
            {prev_post && (
              <Link
                href={`/post/${prev_post.slug.current}`}
                className="flex items-center"
              >
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                  Previous Post
                </span>
              </Link>
            )}

            {next_post && (
              <Link
                href={`/post/${next_post.slug.current}`}
                className="flex items-center"
              >
                <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                  Next Post
                </span>
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </Link>
            )}
          </div>
          <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
            <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
              <Image
                src={urlFor(post.author.image).width(200).url()}
                className="rounded-full shadow"
                alt="author image"
                width={500}
                height={500}
              />
            </div>
            <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                {post.author.title}
              </h3>
              <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                {post.author.about}
              </p>
              <div className="flex items-center justify-center pt-5 md:justify-start">
                <a href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
