import styles from "../style";
import Stats from "./Stats";

const Page = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className=" flex-1 font-Rose font-[100] ss:text-[80px] text-[43px] text-white ss:leading-[75px] leading-[45px]">
            <h1 className="w-full headline">Discover</h1>
            Collect, & Sell <br className="sm:block hidden" />
            <h1 className="text-gradient headline1">Extraordinary</h1>
            <h1 className="headline2">NFTs</h1>
          </h1>
        </div>

        <p className="font-poppins font-normal text-dimWhite max-w-[470px] mt-5 leading-[27px] xs:leading-[30px] text-[14px] xs:text-[18px]">
          ▶ The Leading NFT Marketplace On ICP Blockchain 
          <br />
          ▶ Home To The Next Generation Of Digital Creators.
          <br />▶ Discover The Best NFT Collections.
        </p>
        <div className="flex flex-row w-[270px] mt-5 justify-between">
          <button
            type="button"
            className="xyz focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Explore
          </button>
          <button
            type="button"
            className="xyz braveSupport
              border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:focus:ring-gray-900"
          >
            Create
          </button>
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="https://i.ytimg.com/vi/YDj3JHtIviQ/maxresdefault.jpg"
          alt="NFT"
          className="w-[65%] h-[100%] relative z-[5] border-[7px] border-purple-300 rounded-[5px]"
        />
        <Stats />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};
export default Page;
