import styled from "styled-components";
/* Extra small devices (phones, 600px and down) */
export const XS = "(max-width: 600px)";

/* Small devices (portrait tablets and large phones, 600px and up) */
export const SM = "(min-width: 600px)";

/* Medium devices (landscape tablets, 768px and up) */
export const MD = "(min-width: 768px)";

/* Large devices (laptops/desktops, 992px and up) */
export const LG = "(min-width: 992px)";

/* Extra large devices (large laptops and desktops, 1200px and up) */
export const XL = "(min-width: 1200px)";

export const AppContainer = styled.div`
  width: 100%;
  @media ${SM} {
    width: 600px;
    margin: unset;
  }
  @media ${MD} {
    width: 668px;
    margin: unset;
  }
  @media ${LG} {
    width: 1000px;
  }
  @media ${XL} {
    width: 1100px;
  }
`;

export const AppInput = styled.input`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 14px;
  &:focus {
    outline-width: 0;
  }
`;

export const AppTextArea = styled.textarea`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 14px;
  &:focus {
    outline-width: 0;
  }
`;

export const AppButton = styled.button`
  padding: 10px 16px;
  background: #fff;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 20px;
  outline-color: transparent;
  color: rgb(55, 65, 81);
  margin-top: 32px;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;

export const AppFormLabel = styled.label`
  margin-top: 16px;
  color: #fff;
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.current_theme.page_background};
`;
