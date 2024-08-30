import React from "react";

const Home = () => {
  return (
    <div>
      {/* <BreadCumb currentPage={paramsTitle} /> */}
      {/* <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid grid-cols-12 gap-7">
            <div class="lg:col-span-8 col-span-12 relative mb-[43px] transition-all ease-in-out duration-400">
              <div>
                <BlogTitle
                  title={paramsTitle}
                  subTitle="Lorem available market standard dummy text available market industry Lorem Ipsum simply dummy text of free available market.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
                  img={single?.img}
                  category={single?.category}
                  readmore={false}
                />
              </div>
              <Quote />
            </div>
            <div class="lg:col-span-4 col-span-12">
              <div class=" relative pl-[10px]">
                <aside class="">
                  <BlogContact />
                </aside>
                <aside class=" relative p-0 my-[42px]">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Recent Post
                  </h3>
                  <RecentPost />
                </aside>
                <aside class=" ">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    Categories
                  </h3>
                  <Category />
                </aside>
                <aside class="">
                  <Call />
                </aside>
                <aside class=" capitalize font-normal  ">
                  <h3
                    class={`${rubik.className}  capitalize relative md:text-[28px] text-[23px] font-bold md:leading-[36px] leading-8 mb-11 mt-9 after:absolute after:w-[50px] after:h-[3px] after:bg-primary after:left-0 after:-bottom-2 after:content-['']`}
                  >
                    popular tags
                  </h3>
                  <div class=" relative">
                    <Tag />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* blogt Title */}
      {/* <div class=" relative mb-9">
        <Image
          src={img}
          width={750}
          height={200}
          className="rounded-[5px] h-[400px] mt-10 mx-auto"
          alt="Blog"
        />
      </div>
      <div class=" relative">
        <div class=" inline-block relative mr-3">
          <Link
            href="blog2.html"
            className={`${rubik.className} inline-block h-[42px] bg-primary text-center rounded-[5px] text-[12px] leading-[42px] text-white mr-[10px] mb-[10px] tracking-[1.2px] uppercase px-[14px] hover:bg-black hover:text-white`}
          >
            {category}
          </Link>
        </div>
        <div
          class={`${rubik.className}  relative top-5 inline-block pl-[58px]  pt-[8px]`}
        >
          <Image
            src={author}
            className="rounded-[50%] absolute top-0 left-0 w-11 h-11"
            alt="Author"
          />
          <a
            href=""
            className="uppercase block text-[15px] leading-[17px] text-secondary font-medium mb-[7px] hover:text-primary"
          >
            Mark Smith
          </a>
          <span className="block text-secondary text-sm leading-3[17px] font-normal">
            02 Apr, 2021
          </span>
        </div>
        {readmore ? (
          <h3
            className={` text-[34px] leading-[38px] mt-[19px] mb-[15px] font-bold`}
          >
            <Link href={`${title}`}>{title}</Link>
          </h3>
        ) : (
          ""
        )}
        <p className={`${readmore ? "line-clamp-2" : ""} mb-[22px] mt-10`}>
          {subTitle}
        </p>
        {readmore ? (
          <Link
            class={` ${rubik.className} group  flex items-center text-base text-secondary font-bold uppercase hover:text-primary`}
            href={`blog/${title}`}
          >
            Read More
            <span className="text-[22px] relative text-primary pl-[15px] transition-all ease-in-out duration-400 group-hover:pl-5">
              <FaCaretRight />
            </span>
          </Link>
        ) : (
          ""
        )}
      </div> */}
      <h1>hello</h1>
    </div>
  );
};

export default Home;
