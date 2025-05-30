import { Wrapper } from './styles';

export type IconButtonProps = {
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'big';
  icon?: React.ReactNode;
  onClick: () => void;
};

const IconButton = ({
  color,
  size = 'medium',
  icon,
  onClick,
}: IconButtonProps) => {
  return (
    <Wrapper color={color} size={size} onClick={onClick}>
      {icon}
    </Wrapper>
  );
};

export default IconButton;
