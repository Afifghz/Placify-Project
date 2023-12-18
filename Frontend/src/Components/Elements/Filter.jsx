import React, { useState, useRef, useEffect } from 'react';

const Filter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    let newSelectedOptions = [...selectedOptions];

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, option];
    } else {
      newSelectedOptions.splice(selectedIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const applyFilter = () => {
    // Logic to apply the selected filter goes here
    console.log("Applied Filter:", selectedOptions);
    // You can add further logic to use the selected options as filters
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative">
      <button
        id="dropdownCheckboxButton"
        onClick={toggleDropdown}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Filter
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        ref={dropdownRef}
        className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow  ${dropdownOpen ? 'block' : 'hidden'}`}
        aria-labelledby="dropdownCheckboxButton"
      >
        {/* Dropdown content */}
        {/* ... */}
        <div
        id="dropdownDefaultCheckbox"
        className={`z-10 ${dropdownOpen ? 'block' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg shadow`}
        aria-labelledby="dropdownCheckboxButton"
      >
        <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-option-1"
                type="checkbox"
                checked={selectedOptions.includes('Option 1')}
                onChange={() => handleCheckboxChange('Option 1')}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="checkbox-option-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Terdekat
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-option-2"
                type="checkbox"
                checked={selectedOptions.includes('Option 2')}
                onChange={() => handleCheckboxChange('Option 2')}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="checkbox-option-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Terpopuler
              </label>
            </div>
          </li>
          {/* Add more checkbox options as needed */}
          <li>
            <a
              onClick={applyFilter}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-purple-700  hover:text-purple-800"
              href='#'
            >
              Terapkan
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Filter;
