const Rightside = () => {
  const email = 'matthieucoutant@gmail.com';
  const emailArray = [];
  for (let i = 0; i < email.length; i++) {
    emailArray.push(email[i]);
  }
  return (
    <div className="w-44 flex-none grid items-center justify-center gap-16">
      {/* // <div className="w-44 flex-none flex flex-col"> */}
      <p className="flex text-sm text-center flex-col gap-y-0">
        {emailArray.map((letter, index) => (
          <span className="rotate-90" key={index}>
            {letter}
          </span>
        ))}
      </p>

      <svg
        className="w-8 fill-textcolor hover:fill-importanttextcolor transition-all"
        viewBox="0 0 10 100"
      >
        <line x1="5" y1="0" x2="5" y2="100" stroke="white" />
      </svg>
    </div>
  );
};

export default Rightside;
