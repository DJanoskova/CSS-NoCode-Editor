import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  RefObject,
  useContext,
  useMemo,
  useRef,
  useState
} from 'react';
import styled from 'styled-components';

import InputText from '../UI/InputText';
import CSSPropertiesContext from '../../context/CSSPropertiesContext';
import OptionDropdown from '../UI/OptionDropdown';

interface RuleNameProps {
  value: string;
  onChange: (property: string) => void;
  fullwidth?: boolean;
  valueRef?: RefObject<HTMLInputElement>;
  order: number;
}

const StyledNameWrapper = styled.div<{ fullwidth: boolean }>`
  margin-bottom: 4px;
  height: 25px;
  font-size: inherit;
  width: ${({ fullwidth }) => !fullwidth ? `calc(100% - 60px)` : '100%'};
  position: relative;
`;

const RuleName: FunctionComponent<RuleNameProps> = ({ value = '', onChange, fullwidth = true, order }) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const trimmedValue = localValue.trim();

  const cssProperties = useContext(CSSPropertiesContext);

  const availableProperties = useMemo(() => {
    if (!trimmedValue) return [];

    return cssProperties.filter(property => property.startsWith(trimmedValue.toLowerCase()));
  }, [cssProperties, trimmedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
    setIsDropdownOpen(true);
  }

  const handleChangeFromDropdown = (newValue: string) => {
    setLocalValue(newValue);
    onChange(newValue);
    setIsDropdownOpen(false);
  }

  const handleOpenEdit = () => {
    inputRef.current?.select();
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <StyledNameWrapper fullwidth={fullwidth}>
      <form onSubmit={handleSubmit}>
        <InputText
          ref={inputRef}
          type="text"
          value={localValue}
          placeholder="Property"
          onChange={handleChange}
          onClick={handleOpenEdit}
          order={order}
          transparent
        />
        {isDropdownOpen && (
          <OptionDropdown
            options={availableProperties}
            wrapperRef={inputRef}
            onChange={handleChangeFromDropdown}
          />
        )}
      </form>
    </StyledNameWrapper>
  )
}

export default RuleName;
