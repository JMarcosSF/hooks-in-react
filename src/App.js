import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'Hello there',
    content: 'I\'m just some randon content'
  },
  {
    title: 'Hello again',
    content: '2 I\'m just some randon content'
  },
  {
    title: 'Hello and again',
    content: '3 I\'m just some randon content'
  },
  {
    title: 'Hello there finally',
    content: '4 I\'m just some randon content'
  },
];

const options = [
  {
    label: ' The Color Red',
    value: 'red'
  },
  {
    label: ' The Color Blue',
    value: 'blue'
  },
  {
    label: ' The Color Green',
    value: 'green'
  },
  {
    label: ' The Color White',
    value: 'white'
  },
];

export default () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isShowDropdown, setIsShowDropdown] = useState(true);

  return (<div>
    {/*<Accordion items={items}/>*/}
    {/*<Search></Search>*/}
    <button onClick={() => {
      setIsShowDropdown(!isShowDropdown);
    }}>Toggle Dropdown</button>
    {isShowDropdown ?
      <Dropdown
      selectedOption={selectedOption}
      onSelectedChange={setSelectedOption}
      options={options}
    ></Dropdown> : null
    }
  </div>);
};
