const Rightside = () => {
  const email = 'matthieucoutant@gmail.com';
  const emailArray = [];
  for (let i = 0; i < email.length; i++) {
    emailArray.push(email[i]);
  }
  return (
    <div className="w-16 h-[750px] flex-none md:grid hidden items-center justify-center gap-16">
      <a
        href="mailto:matthieucoutant@gmail.com"
        className="flex text-xs hover:text-importantcolor text-center flex-col gap-y-0"
      >
        {emailArray.map((letter, index) => (
          <span className="rotate-90" key={index}>
            {letter}
          </span>
        ))}
      </a>

      <svg
        className="w-100 fill-textcolor hover:fill-importanttextcolor transition-all"
        viewBox="0 0 10 100"
      >
        <line x1="5" y1="0" x2="5" y2="100" stroke="white" />
      </svg>
    </div>
  );
};

export default Rightside;
