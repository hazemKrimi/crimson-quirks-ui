import { Wrapper } from './styles';

export type SpinnerProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'white'
    | 'black'
    | 'gray';
  fullWidth?: boolean;
};

const Spinner = ({ fullWidth = false, color = 'primary' }: SpinnerProps) => {
  return (
    <Wrapper fullWidth={fullWidth} color={color}>
      <div className='lds-dual-ring'></div>
    </Wrapper>
  );
};

export default Spinner;
