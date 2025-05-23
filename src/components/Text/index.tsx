import { Wrapper } from './styles';

export type TextProps = {
  children?: string;
  className?: string;
  variant?: 'display' | 'headline' | 'title' | 'subheader' | 'body' | 'caption';
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
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  display?: 'initial' | 'block' | 'inline';
  gutterBottom?: boolean;
  lineThrough?: boolean;
  weight?: 'initial' | 'normal' | 'bold' | number;
};

const Text = ({
  children,
  variant = 'body',
  className,
  ...props
}: TextProps) => {
  return (
    <Wrapper className={`${variant} ${className}`} {...props}>
      {children}
    </Wrapper>
  );
};

export default Text;
