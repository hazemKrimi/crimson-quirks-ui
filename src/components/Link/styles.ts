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
    | 'white'
    | string;
  selected: boolean;
  iconLeft?: React.SVGProps<SVGSVGElement>;
};

export const Wrapper = styled.div<WrapperProps>`
  display: inline;

  a {
    text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};

    &:hover {
      text-decoration: underline;
    }
  }

  ${({ color, theme }) => {
    if (!color)
      return css`
        color: #3e66fb;

        a {
          color: #3e66fb;
        }

        .icon svg path {
          stroke: #3e66fb;
        }

        a:visited {
          color: #3e66fb;
        }
      `;
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.primary.main};

          a {
            color: ${theme.colors.primary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.primary.main};
          }

          a:visited {
            color: ${theme.colors.primary.main};
          }
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.secondary.main};

          a {
            color: ${theme.colors.secondary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.secondary.main};
          }

          a:visited {
            color: ${theme.colors.secondary.main};
          }
        `;
      case 'tertiary':
        return css`
          color: ${theme.colors.tertiary.main};

          a {
            color: ${theme.colors.tertiary.main};
          }

          .icon svg path {
            stroke: ${theme.colors.tertiary.main};
          }

          a:visited {
            color: ${theme.colors.tertiary.main};
          }
        `;
      case 'success':
        return css`
          color: ${theme.colors.success.main};

          a {
            color: ${theme.colors.success.main};
          }

          .icon svg path {
            stroke: ${theme.colors.success.main};
          }

          a:visited {
            color: ${theme.colors.success.main};
          }
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning.main};

          a {
            color: ${theme.colors.warning.main};
          }

          .icon svg path {
            stroke: ${theme.colors.warning.main};
          }

          a:visited {
            color: ${theme.colors.warning.main};
          }
        `;
      case 'error':
        return css`
          color: ${theme.colors.error.main};

          a {
            color: ${theme.colors.error.main};
          }

          .icon svg path {
            stroke: ${theme.colors.error.main};
          }

          a:visited {
            color: ${theme.colors.error.main};
          }
        `;
      case 'black':
        return css`
          color: ${theme.colors.black.main};

          a {
            color: ${theme.colors.black.main};
          }

          .icon svg path {
            stroke: ${theme.colors.black.main};
          }

          a:visited {
            color: ${theme.colors.black.main};
          }
        `;
      case 'white':
        return css`
          color: ${theme.colors.white.main};

          a {
            color: ${theme.colors.white.main};
          }

          .icon svg path {
            stroke: ${theme.colors.white.main};
          }

          a:visited {
            color: ${theme.colors.white.main};
          }
        `;
      default:
        return css`
          color: ${color};

          a {
            color: ${color};
          }

          .icon svg path {
            stroke: ${color};
          }

          a:visited {
            color: ${color};
          }
        `;
    }
  }}

  ${({ iconLeft }) => {
    if (iconLeft)
      return css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `;
    return '';
  }}

  .icon {
    display: inline-flex;
    align-items: center;
  }

  .icon.left {
    margin-right: 5px;
  }
`;
