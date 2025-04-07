import styled, { css } from 'styled-components';

type WrapperProps = {
  color?: 'primary' | 'secondary' | 'tertiary';
  checked: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  flex-direction: row;
  user-select: none;

  .checkbox {
    cursor: pointer;
    border-radius: 3px;
    margin-right: 10px;
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
  }

  ${({ checked, color, theme }) => {
    if (!checked || !color)
      return css`
        .checkbox {
          border: 2px solid ${theme.colors.black.main};
          background: ${theme.colors.white.main};
        }
      `;
    return css`
			.checkbox {
				border: none;
				background: ${theme.colors[color].main};
			}
		`;
  }}
`;
