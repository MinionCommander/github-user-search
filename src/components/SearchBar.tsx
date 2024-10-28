import React, { useState } from 'react';

import Button from './Button';

interface SearchBarProps {
  onSearch: (username: string) => void;
  error?: boolean;
  theme?: 'light' | 'dark';
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  error = false,
  theme = 'light',
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue('');
    }
  };

  const lightModeClasses = {
    container: 'bg-white border-gray-300',
    inputText: 'text-darkGray placeholder-gray-500',
    borderError: 'border-red-500',
    placeholderError: 'text-red-500',
  };

  const darkModeClasses = {
    container: 'bg-mediumBlue border-mediumBlue',
    inputText: 'text-white placeholder-gray-400',
    borderError: 'border-red-500',
    placeholderError: 'text-red-500',
  };

  const modeClasses = theme === 'light' ? lightModeClasses : darkModeClasses;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-4 w-full mb-8"
    >
      <div
        className={`flex items-center pl-8 pr-3 py-2 rounded-lg transition-all duration-300 border-2 w-full ${
          error ? modeClasses.borderError : modeClasses.container
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary mr-4"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21l-4.3-4.3" />
          </g>
        </svg>

        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={'Search GitHub username...'}
          className={`flex-1 bg-transparent outline-none ${modeClasses.inputText}`}
        />

        {error && <p className="text-red-500 mr-4">No results</p>}

        <Button
          label="Search"
          onClick={handleSubmit}
          variant="primary"
          size="large"
        />
      </div>
    </form>
  );
};

export default SearchBar;
