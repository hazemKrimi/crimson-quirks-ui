import styled, { css } from 'styled-components';

type WrapperProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'black'
    | 'gray'
    | 'white';
  error?: boolean;
  errorMessage?: string;
  type?: 'text' | 'email' | 'password' | 'file' | 'number';
  label?: string;
  fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  .select {
    width: inherit;
    height: inherit;
    border-radius: 5px;
    padding: 2px;
    color: ${({ theme }) => theme.colors.black.main};

    div {
      background: ${({ theme }) => theme.colors.white.main};
      padding: 1rem;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .info {
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    p {
      background: ${({ theme }) => theme.colors.gray.dark};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .label {
      justify-self: flex-start;
    }

    .error-message {
      justify-self: flex-end;
    }
  }

  select {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.black.main};
    background-image: url('../../assets/icons/chevron-down.svg');
  }

  ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return css`
          .select {
            background: ${theme.colors.primary.light};
          }
        `;
      case 'secondary':
        return css`
          .select {
            background: ${theme.colors.secondary.light};
          }
        `;
      case 'tertiary':
        return css`
          .select {
            background: ${theme.colors.tertiary.light};
          }
        `;
      case 'success':
        return css`
          .select {
            background: ${theme.colors.success.main};
          }
        `;
      case 'warning':
        return css`
          .select {
            background: ${theme.colors.warning.main};
          }
        `;
      case 'error':
        return css`
          .select {
            background: ${theme.colors.error.main};
          }
        `;
      case 'black':
        return css`
          .select {
            background: ${theme.colors.black.main};
          }
        `;
      case 'white':
        return css`
          .select {
            background: ${theme.colors.white.main};
          }
        `;
      default:
        return css`
          .select {
            background: ${theme.colors.primary.light};
          }
        `;
    }
  }}

  ${({ error, theme }) =>
    error &&
    css`
      .info p {
        background: ${theme.colors.error.main};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .select {
        background: ${theme.colors.error.main};
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      font-size: 1.25rem;
    `};
`;
