// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <div className="hero my-2 rounded-lg skeleton">
      <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-full py-2">
          <h1 className="mb-5 text-5xl font-bold">{children}</h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
