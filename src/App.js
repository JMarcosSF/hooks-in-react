import React, { useState } from 'react';
import {Routes, BrowserRouter, Route, NavLink} from 'react-router-dom';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const DD = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isShowDropdown, setIsShowDropdown] = useState(true);

  return (<div>
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

export default () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <NavLink className="App-link" to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/translate" >Translate</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/accordion" >Accordion</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/search" >Search</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/dropdown" >Dropdown</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={(<div>You Are Home</div>)} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/accordion" element={<Accordion items={items}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/dropdown" element={ DD() } />
          </Routes>
            {/*<Route path="/" render={() => {return <h1>Welcome</h1>}}></Route>*/}
        </header>
      </div>
    </BrowserRouter>
    // <Translate />
  );
}
