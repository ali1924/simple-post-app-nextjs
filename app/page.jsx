import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Post</span>
      </h1>
      {/* dec==description */}
      <p className='desc text-center'>
      It is an open-source AI posting tool for modern world to
      discover, create and share creative post.
    </p>
    {/* Feedback component */}
    <Feed></Feed>
    </section>
  );
};

export default Home;
