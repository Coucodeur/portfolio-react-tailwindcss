const Rightside = () => {
  // Email address to display
  const email = 'matthieucoutant@gmail.com';

  // Transform the email string into an array of letters
  const emailLetters = email.split('');

  return (
    <div className="w-16 h-[750px] flex-none md:grid hidden items-center justify-center gap-16">
      <a
        href={`mailto:${email}`}
        className="flex text-xs hover:text-importantcolor text-center flex-col gap-y-0"
      >
        {/* Display each letter of the email vertically rotated */}
        {emailLetters.map((letter, index) => (
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
