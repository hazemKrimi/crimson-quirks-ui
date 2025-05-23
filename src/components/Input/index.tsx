import Text from '../Text';

import { Upload } from '../../assets';
import { Wrapper } from './styles';

export type InputProps = {
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'white';
  error?: boolean;
  errorMessage?: string;
  value?: string | number;
  label?: string;
  name?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'file' | 'number';
  file?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = 'text',
  file = false,
  color = 'primary',
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <Wrapper label={label} error={error} type={type} color={color} {...props}>
      <div className='info'>
        {label && (
          <Text variant='body' weight='bold' className='label'>
            {label}
          </Text>
        )}
        {error && errorMessage && (
          <Text variant='body' color='error' className='error-message'>
            {errorMessage}
          </Text>
        )}
      </div>
      <div className='input'>
        <div>
          {type === 'file' && (
            <span className='icon left'>
              <Upload />
            </span>
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            accept={type === 'file' && !file ? 'image/*' : undefined}
            placeholder={placeholder}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Input;
