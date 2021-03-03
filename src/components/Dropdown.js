import React, { useState } from 'react';

const Dropdown = ({options, selectedOption, onSelectedChange}) => {
  const [open, setOpen] = useState(false)
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
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${options ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text"> Selected: {selectedOption.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
