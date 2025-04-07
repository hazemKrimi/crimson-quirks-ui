import { Wrapper } from './styles';

export type AvatarProps = {
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | string;
  size?: 'small' | 'big';
  text: string;
};

const Avatar = ({ color, size = 'small', text, className }: AvatarProps) => {
  return (
    <Wrapper color={color} size={size} className={className}>
      {text[0]}
    </Wrapper>
  );
};

export default Avatar;
