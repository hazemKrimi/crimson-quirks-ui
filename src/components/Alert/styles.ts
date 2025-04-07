import styled, { css } from 'styled-components';

type WrapperProps = {
  color:
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error';
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: auto;
  padding: 0.938rem;
  border-radius: 10px;

  ${({ color, theme }) => {
    return css`
			border: 1px solid ${theme.colors[color].main};
			color: ${theme.colors[color].main};
			background: ${theme.colors[color].light};
		`;
  }}
`;
