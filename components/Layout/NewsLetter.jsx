const NewsLetter = () => {
  return (
    <div className="md:col-span-4 lg:col-span-1 sm:px-6 md:px-0">
      <h3 className="footer-title">Subscribe for Newslatter</h3>
      <form>
        <input
          type="email"
          placeholder="Your Email"
          className="py-2 px-4 mb-2 block max-w-[380px] outline-none border-none rounded-md w-full"
        />
        <button className="main-btn !my-0 !py-2">Subscribe Now</button>
      </form>
    </div>
  );
};

export default NewsLetter;
