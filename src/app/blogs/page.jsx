import React from "react";
import Link from "next/link";
import moment from "moment";
import urlFor from "../utils/urlFor";
import client from "../utils/getSanityClient";

const POSTS_PER_PAGE = 6;

function getPagination(totalItems, itemsPerPage, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationNumbers = [];

  // Calculate the range of pagination numbers to show
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    paginationNumbers.push(i);
  }

  return {
    totalPages,
    paginationNumbers,
    currentPage,
  };
}

const Blogs = async ({ searchParams }) => {
  const timestamp = new Date().getTime();
  const page = parseInt(searchParams.page) || 1;

  const Query = `count(*[_type == "blog"]) `;

  const totalItems = await client.fetch(Query, { ts: timestamp });

  const paginationInfo = getPagination(totalItems, POSTS_PER_PAGE, page);

  const paginatedQuery = `
  *[_type == "blog"] | order(CreatedAt desc)[${(page - 1) * POSTS_PER_PAGE}...${page * POSTS_PER_PAGE}]{
    title, 
    slug, 
    description, 
    image, 
    CreatedAt, 
    author->
  }
`;

  const posts = await client.fetch(paginatedQuery, { ts: timestamp });

  return (
    <div className="pt-28 bg-grey-50">
      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {posts?.map((post, index) => (
              <Link
                href={`/post/${post.slug.current}`}
                className="shadow"
                key={index}
              >
                <div
                  style={{
                    backgroundImage: "url(" + urlFor(post.image).url() + ")",
                  }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <div className="flex justify-between mb-2">
                    <span className="block pt-2 font-body text-grey-20">
                      {moment(post.CreatedAt).format("MMMM DD, YYYY")}
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      By: {post.author.title}
                    </span>
                  </div>
                  <span className="block font-body text-lg font-semibold text-black uppercase">
                    {post.title}
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    {post.description.length > 200
                      ? post.description.slice(0, 200) + " ..."
                      : post.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex space-x-2 mt-4 justify-center items-center">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  {page > 2 ? (
                    <Link
                      href={`blogs/?page=1`}
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {"Previous"}
                    </Link>
                  ) : (
                    ""
                  )}
                </li>

                {paginationInfo.paginationNumbers.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`blogs/?page=${item}`}
                      className={
                        item == page
                          ? "flex items-center justify-center px-3 h-8 text-purple-600 border border-gray-300 bg-purple-50 hover:bg-purple-100 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  {page < paginationInfo.totalPages ? (
                    <Link
                      href={`blogs/?page=${paginationInfo.totalPages}`}
                      className={
                        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                    >
                      {"Next"}
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
