import { JSX } from 'react';
import { Wrapper } from './styles';

export type LinkProps = {
  href?: string;
  url?: boolean;
  children?: React.ReactNode | JSX.Element | string;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white'
    | string;
  selected?: boolean;
  className?: string;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
  target?: '_self' | '_blank';
};

const Link = ({
  href,
  url = false,
  children,
  iconLeft,
  selected = false,
  target = '_self',
  ...props
}: LinkProps) => {
  return (
    <Wrapper {...props} selected={selected}>
      {href && !url ? (
        <a href={href} target={target}>
          {iconLeft && <span className='icon left'>{iconLeft}</span>}
          {children}
        </a>
      ) : (
        <a href={href} target={target}>
          {iconLeft && <span className='icon left'>{iconLeft}</span>}
          {children}
        </a>
      )}
    </Wrapper>
  );
};

export default Link;
