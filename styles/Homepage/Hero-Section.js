import styled from "styled-components";

export const HeroSection__Container = styled.div`
  width: 100%;
  padding: 70px 0 100px 0;
  background-color: rgb(11, 59, 62);
  background: url(/images/turakibg.png),
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
`;

export const HeroSection__Column = styled.div`
  width: 100%;
  position: relative;
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroSection__Sector = styled.div`
  width: 100%;
  position: relative;

  h1 {
    color: #fff;
  }

  h2 {
    color: #fff;
    line-height: 1.5;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 1em;

    span {
      color: #8bd15f;
      display: block;
    }
  }

  .Hero__button {
    margin: 2em 0;
    display: flex;
    gap: 1em;
  }
`;

export default HeroSection__Container;
