import { useState } from 'react';

const Themeswitcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded tracking-wide"
        type="button"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? 'Switch Light' : 'Switch Dark'}
      </button>
    </div>
  );
};

export default Themeswitcher;
