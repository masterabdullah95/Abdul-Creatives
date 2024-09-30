import Link from "next/link";
import client from "./utils/getSanityClient";
import moment from "moment";
import FooterTop from "./components/FooterTop";
import urlFor from "./utils/urlFor";
import Image from "next/image";

export default async function Home() {
  const timestamp = new Date().getTime();
  let query = `*[_type == "blog"][0..2] {
    title,
    slug, 
    description,
    image,
    CreatedAt,
    author->
  }`;
  const posts = await client.fetch(query, { ts: timestamp });

  return (
    <>
      {/* Hero section  */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(assets/img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <Image
                src="/assets/img/profile-pic.png"
                className="rounded-full h-48 w-48 sm:h-56 sm:w-56"
                width={480}
                height={480}
                alt="Picture of the Abdullah"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I&apos;m Abdullah Shoaib!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let&apos;s connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <Link href="https://www.facebook.com/abdullah.shoaib.3344">
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abdullah-shoaib-b0b48849/"
                    className="pl-4"
                  >
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I&apos;m Abdullah Shoaib, a Passionate Web Developer
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              I&apos;m a dedicated and full-time web developer with nine years
              of experience and a portfolio showcasing over thousands of
              websites. My journey has taken me from small startups to
              international companies, allowing me to refine my skills in
              creating user-friendly, responsive designs that meet diverse
              client needs. I thrive on transforming ideas into engaging digital
              experiences and am dedicated to delivering high-quality solutions
              tailored to each project. Let&apos;s collaborate and bring your
              vision to life!
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link href="https://www.facebook.com/abdullah.shoaib.3344">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abdullah-shoaib-b0b48849/"
                  className="pl-4"
                >
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  HTML & CSS
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  92%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Javascript
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  85%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Nodejs
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  80%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  React & Nextjs
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  82%
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s what I&apos;m good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/icon-development-white.svg"
                  alt="development icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/icon-development-black.svg"
                  alt="development icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Transforming your vision into a stunning, user-friendly website
                that drives results.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/icon-content-white.svg"
                  alt="content marketing icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/icon-content-black.svg"
                  alt="content marketing icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                API Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Building robust APIs that seamlessly connect your applications
                and enhance functionality.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/repair-svgrepo-com.svg"
                  alt="Mobile Application icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/repair-svgrepo-com-blue.svg"
                  alt="Mobile Application icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Bug Fixing
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Quickly identifying and resolving issues to ensure your website
                runs smoothly and efficiently.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/layers-three-svgrepo-com-white.svg"
                  alt="Email Marketing icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/layers-three-svgrepo-com.svg"
                  alt="Email Marketing icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Integration
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Seamlessly integrating systems and applications to enhance
                performance and streamline workflows.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/icon-design-white.svg"
                  alt="Theme Design icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/icon-design-black.svg"
                  alt="Theme Design icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Deployments
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Effortlessly deploying your web solutions for optimal
                performance and accessibility.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/assets/img/icon-graphics-white.svg"
                  alt="Graphic Design icon"
                  width={500}
                  height={500}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/assets/img/icon-graphics-black.svg"
                  alt="Graphic Design icon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Crafting visually captivating designs that elevate your brand
                and engage your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <Link
            href="https://catdi.com"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/1.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="https://marvelapp.com"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/22.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="https://indolj.pk"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/33.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="https://paintingsfromphoto.com"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/44.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="https://www.patientprism.com"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/55.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
          <Link
            href="https://clearbit.com"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0 border border-purple-200"
          >
            <Image
              src="/assets/img/66.png"
              className="w-full shadow"
              alt="portfolio image"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <Image
                  src="/assets/img/Untitled-removebg-preview.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/assets/img/doozy-removebg-preview.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/assets/img/clearbit_by_hubspot.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/assets/img/Patient-Prism-LOGO-png.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/assets/img/indolj-new-red.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/assets/img/aaa.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/assets/img/qwqw-removebg-preview.png"
                  alt="client logo"
                  className="mx-auto block h-12 w-auto"
                  width={500}
                  height={500}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I did before freelancing
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src="/assets/img/cloud.png"
                    className="h-auto w-32"
                    alt="company logo"
                    width={500}
                    height={500}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Dec 2014 - Jan 2016
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Backend Developer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I have started worked in CloudSolutions LLC. as a
                        Backend Web Developer and gradually i have promoted to
                        senior position and become a Team Lead.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src="/assets/img/incisivesoft.png"
                    className="h-auto w-32"
                    alt="company logo"
                    width={500}
                    height={500}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Feb 2016 - Mar 2017
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Software Engineer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I was hired as a software engineer at Incisivesoft Pvt.
                        Ltd. and i worked on their products which is based on
                        PHP, Symfony and Codeigniter frameworks.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src="/assets/img/symits.png"
                    className="h-auto w-32"
                    alt="company logo"
                    width={500}
                    height={500}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      April 2017 - Oct 2018
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Full Stack Developer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I was working as a Full Stack Developer at Symits, i
                        usually maintain and customize their products which is
                        based on codeigniter and PHP.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src="/assets/img/fiverr.png"
                    className="h-auto w-32"
                    alt="company logo"
                    width={500}
                    height={500}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Aug 2015 - Currently Working
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Full Stack Developer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I started working on fiverr as a freelancer in Aug 2015,
                        i was doing job in parallel, but after 4 years, i
                        finally switched myself to a full time freelancer in Jan
                        2019 and till now i am working as a fulltime web
                        developer. I worked with many international clients and
                        companies and completed 290+ orders with 239+
                        <span className="block">
                          {" "}
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />{" "}
                          reviews.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <Image
                    src="/assets/img/upwork.png"
                    className="h-auto w-32"
                    alt="company logo"
                    width={500}
                    height={500}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Aug 2017 - Currently Working
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Full Stack Developer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        I am a Top Rated freelancer on upwork sine Dec 2017, and
                        have 100% Job Success Score on Upwork, i am still
                        working as a fulltime web developer on upwork. I worked
                        with many international clients and companies and
                        completed 50+ jobs, 800+ hours worked with 40+
                        <span className="block">
                          {" "}
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />
                          <Image
                            src="/assets/img/star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="inline mt-[-6px]"
                          />{" "}
                          reviews on Upwork.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{ backgroundImage: "url(assets/img/experience-figure.png)" }}
        id="statistics"
      >
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <Image
                    src="/assets/img/icon-project.svg"
                    className="mx-auto h-12 w-auto md:h-20"
                    alt="icon project"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    950+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <Image
                    src="/assets/img/icon-award.svg"
                    className="mx-auto h-12 w-auto md:h-20"
                    alt="icon award"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    200+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Recommendations
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/assets/img/icon-happy.svg"
                    className="mx-auto h-12 w-auto md:h-20"
                    alt="icon happy clients"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    450+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/assets/img/icon-puzzle.svg"
                    className="mx-auto h-12 w-auto md:h-20"
                    alt="icon puzzle"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    50+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Integrations
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                className="shadow bg-white"
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
                  <span className="block font-body text-lg font-semibold text-black">
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
          <div className="flex mx-auto justify-center mt-10">
            <Link
              href="/blogs"
              className="rounded-full border-2 border-[#5540AF] text-[#5540AF] px-7 py-3 text-md font-bold"
            >
              VIEW ALL POSTS
            </Link>
          </div>
        </div>
      </div>
      <FooterTop />
    </>
  );
}
