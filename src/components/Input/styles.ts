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
  type?: 'text' | 'email' | 'tel' | 'password' | 'file' | 'number';
  label?: string;
  fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  .input {
    width: inherit;
    height: inherit;
    border-radius: 5px;
    padding: 2px;
    color: ${({ theme }) => theme.colors.black.main};

    div {
      background: ${({ theme }) => theme.colors.white.main};
      padding: 1rem;
      border-radius: 5px;
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

  input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.black.main};
  }

  input[type='file'] {
    cursor: pointer;

    &::-webkit-file-upload-button {
      display: none;
    }
  }

  ${({ type }) => {
    if (type === 'file')
      return css`
        .input div {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      `;
    return '';
  }}

  .icon {
    ${({ type }) => type === 'file' && `cursor: pointer`};
    display: inline-flex;
    align-items: center;
  }

  .icon.left {
    margin-right: 0.5rem;
  }

  ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return css`
          .input {
            background: ${theme.colors.primary.light};

            &:focus-within {
              background: ${theme.colors.primary.main};
            }
          }

          input[type='file'] {
            color: ${theme.colors.primary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.primary.main};
          }
        `;
      case 'secondary':
        return css`
          .input {
            background: ${theme.colors.secondary.light};

            &:focus-within {
              background: ${theme.colors.secondary.main};
            }
          }

          input[type='file'] {
            color: ${theme.colors.secondary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.secondary.main};
          }
        `;
      case 'tertiary':
        return css`
          .input {
            background: ${theme.colors.tertiary.light};

            &:focus-within {
              background: ${theme.colors.tertiary.main};
            }
          }

          input[type='file'] {
            color: ${theme.colors.tertiary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.tertiary.main};
          }
        `;
      case 'success':
        return css`
          .input {
            background: ${theme.colors.success.main};
          }

          input[type='file'] {
            color: ${theme.colors.success.main};
          }

          .icon svg path {
            stroke: ${theme.colors.success.main};
          }
        `;
      case 'warning':
        return css`
          .input {
            background: ${theme.colors.warning.main};
          }

          input[type='file'] {
            color: ${theme.colors.warning.main};
          }

          .icon svg path {
            stroke: ${theme.colors.warning.main};
          }
        `;
      case 'error':
        return css`
          .input {
            background: ${theme.colors.error.main};
          }

          input[type='file'] {
            color: ${theme.colors.error.main};
          }

          .icon svg path {
            stroke: ${theme.colors.error.main};
          }
        `;
      case 'black':
        return css`
          .input {
            background: ${theme.colors.black.main};
          }

          input[type='file'] {
            color: ${theme.colors.black.main};
          }

          .icon svg path {
            stroke: ${theme.colors.black.main};
          }
        `;
      case 'white':
        return css`
          .input {
            background: ${theme.colors.white.main};
          }

          input[type='file'] {
            color: ${theme.colors.white.main};
          }

          .icon svg path {
            stroke: ${theme.colors.white.main};
          }
        `;
      default:
        return css`
          .input {
            background: ${theme.colors.primary.light};

            &:focus-within {
              background: ${theme.colors.primary.main};
            }
          }

          input[type='file'] {
            color: ${theme.colors.primary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.primary.main};
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

      .input {
        background: ${theme.colors.error.main};

        &:focus-within {
          background: ${theme.colors.error.main};
        }
      }

      input[type='file'] {
        color: ${theme.colors.error.main};
      }

      .icon svg path {
        stroke: ${theme.colors.error.main};
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      font-size: 1.25rem;

      .icon svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `};
`;
