import {useEffect, useState} from 'react';

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

const useDropDownOptions = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isShowDropdown, setIsShowDropdown] = useState(true);

  return [options, selectedOption, setSelectedOption, isShowDropdown, setIsShowDropdown]
}

export default useDropDownOptions;