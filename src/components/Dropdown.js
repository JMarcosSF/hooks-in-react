import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({options, selectedOption, onSelectedChange}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef();

  // Setting an event listener
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      // Using useRef as "ref" here to bypass setIsDropdownOpen
      // if the element is the most parent element in this component
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
        setIsDropdownOpen(false);
    }, { capture: true });
  }, []);

  const renderedOptions = options.map((option) => {
    if (selectedOption.value === option.value) {
      return null;  // Do not show this item if it is the currently selected one
    }
    return (
      <div
        onClick={() => { onSelectedChange(option) }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  })

  return (
    <div
      ref={ref}
      className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`ui selection dropdown ${options ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text"> Selected: {selectedOption.label}</div>
          <div className={`menu ${isDropdownOpen ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
