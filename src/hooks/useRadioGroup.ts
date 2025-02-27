import { useState } from 'react';

export function useRadioGroup(name: string) {
  const [selected, setSelected] = useState<string>('');

  const handleChange = (value: string) => {
    setSelected(value === selected ? '' : value);
  };

  return {
    selected,
    getInputProps: (value: string) => ({
      type: 'checkbox',
      name,
      checked: selected === value,
      onChange: () => handleChange(value),
      className: 'checkbox'
    })
  };
}
