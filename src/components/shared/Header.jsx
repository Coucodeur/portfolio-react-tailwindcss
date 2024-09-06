const Header = ({ title }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-jetbrain text-importantcolor mb-7">
        {title}
      </h1>
    </div>
  );
};

export default Header;
