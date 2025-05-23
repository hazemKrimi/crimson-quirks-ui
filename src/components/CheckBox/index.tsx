import { Wrapper } from './styles';

import Text from '../Text';

import { Check } from '../../assets';

export type CheckBoxProps = {
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  label: string;
  checked: boolean;
  onClick: () => void;
};

const CheckBox = ({
  label,
  checked,
  onClick,
  ...props
}: CheckBoxProps) => {
  return (
    <Wrapper checked={checked} {...props} onClick={onClick}>
      <div className='checkbox'>
        <Check />
      </div>
      <Text variant='body'>{label}</Text>
    </Wrapper>
  );
};

export default CheckBox;
