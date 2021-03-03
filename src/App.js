import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
]

export default () => {
  return (<div>
    {/*<Accordion items={items}/>*/}
    <Search></Search>
  </div>);
};
