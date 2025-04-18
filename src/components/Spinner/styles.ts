import styled, { css } from 'styled-components';

type WrapperProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'white'
    | 'black'
    | 'gray';
  fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
    `}

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 35px;
    height: 35px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid
      ${({ theme, color }) =>
        color ? theme.colors[color].main : theme.colors.primary.main};
    border-color: ${({ theme, color }) =>
        color ? theme.colors[color].main : theme.colors.primary.main}
      transparent
      ${({ theme, color }) =>
        color ? theme.colors[color].main : theme.colors.primary.main}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
