import { Wrapper } from './styles';

import Text from '../Text';

export type ChipProps = {
  variant?: 'outlined' | 'filled';
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error';
  text: string;
};

const Chip = ({ variant = 'outlined', color, text }: ChipProps) => {
  return (
    <Wrapper variant={variant} color={color}>
      <Text variant='caption' weight='bold'>
        {text}
      </Text>
    </Wrapper>
  );
};

export default Chip;
