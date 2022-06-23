import styled from "styled-components";

export const Navigation__OverAll = styled.div`
  width: 100%;
  position: relative;
  height: 68px;
`;

export const Navigation__Container = styled.div`
  width: 100%;
  background-color: rgb(0, 62, 65, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  z-index: 9999999999;
`;

export const Navigation__Column = styled.div`
  width: 100%;
  padding: 1.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: red;

  @media (max-width: 900px) {
    padding: 1.2em 0;
  }
`;

export const Navigation__Sector = styled.div`
  width: auto;
`;

export const Navigation__Logo = styled.div`
  width: auto;

  h1 {
    color: white;
  }
`;

export const Navigation__Item = styled.ul`
  width: auto;
  display: flex;
  gap: 1.5em;

  li {
    display: flex;
    gap: 0.4em;
    align-items: center;
    color: white;

    a {
      color: inherit;
    }

    h3 {
      margin-top: 0.1em;
    }
  }

  @media (max-width: 900px) {
    display: block;
    width: 99%;
    position: fixed;
    top: 0.05em;
    left: ${({ click }) => (click ? "0" : "-100%")};
    transition: all 0.5s ease-in;
    background-color: white;
    height: 99vh;
    padding: 2em;
    color: #000;
    border-radius: 0 0.5em 0.5em 0;
    z-index: 99999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    li {
      color: black;
      border-bottom: 1px solid #ccc;
      padding: 1em 0;
    }
  }
`;

export const Navigation__Mobile = styled.div`
  cursor: pointer;
  display: none;
  position: relative;
  z-index: 99999;

  @media (max-width: 900px) {
    display: block;
    color: black !important;
  }
`;

export default Navigation__Container;
