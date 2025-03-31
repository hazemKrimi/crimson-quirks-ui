import { Wrapper } from './styles';

export type SpinnerProps = {
  color?:
    | 'client'
    | 'productOwner'
    | 'developer'
    | 'admin'
    | 'white'
    | 'black'
    | 'gray';
  fullWidth?: boolean;
};

const Spinner = ({ fullWidth = false, color = 'client' }: SpinnerProps) => {
  return (
    <Wrapper fullWidth={fullWidth} color={color}>
      <div className='lds-dual-ring'></div>
    </Wrapper>
  );
};

export default Spinner;
