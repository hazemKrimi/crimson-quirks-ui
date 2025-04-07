import { Wrapper } from './styles';

export type AlertProps = {
  className?: string;
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error';
  text: string;
};

const Alert = ({ text, ...props }: AlertProps) => {
  return <Wrapper {...props}>{text}</Wrapper>;
};

export default Alert;
