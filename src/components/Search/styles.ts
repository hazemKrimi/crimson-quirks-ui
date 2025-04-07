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
  type?: 'text' | 'email' | 'password' | 'file' | 'number';
  fullWidth?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  .search {
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

  input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.black.main};
  }

  .icon {
    cursor: pointer;
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
          .search {
            background: ${theme.colors.primary.light};
          }

          .icon svg path {
            stroke: ${theme.colors.primary.main};
          }
        `;
      case 'secondary':
        return css`
          .search {
            background: ${theme.colors.secondary.light};
          }

          .icon svg path {
            stroke: ${theme.colors.secondary.main};
          }
        `;
      case 'tertiary':
        return css`
          .search {
            background: ${theme.colors.tertiary.light};
          }

          .icon svg path {
            stroke: ${theme.colors.tertiary.main};
          }
        `;
      case 'success':
        return css`
          .search {
            background: ${theme.colors.success.main};
          }

          .icon svg path {
            stroke: ${theme.colors.success.main};
          }
        `;
      case 'warning':
        return css`
          .search {
            background: ${theme.colors.warning.main};
          }

          .icon svg path {
            stroke: ${theme.colors.warning.main};
          }
        `;
      case 'error':
        return css`
          .search {
            background: ${theme.colors.error.main};
          }

          .icon svg path {
            stroke: ${theme.colors.error.main};
          }
        `;
      case 'black':
        return css`
          .search {
            background: ${theme.colors.black.main};
          }

          .icon svg path {
            stroke: ${theme.colors.black.main};
          }
        `;
      case 'white':
        return css`
          .search {
            background: ${theme.colors.white.main};
          }

          .icon svg path {
            stroke: ${theme.colors.white.main};
          }
        `;
      default:
        return css`
          .search {
            background: ${theme.colors.primary.light};
          }

          .icon svg path {
            stroke: ${theme.colors.primary.main};
          }
        `;
    }
  }}

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
