import styled from "styled-components";

export const HeroSection__Container = styled.div`
  width: 100%;
  // height: 80vh;
  padding: 70px 0 30px 0;
  background: url(/images/turakibg.png),
    linear-gradient(
      to top,
      rgb(0, 57, 60, 0.8) 0,
      rgb(0, 57, 60, 0.8) 30%,
      rgb(0, 57, 60, 0.8) 75%,
      rgb(0, 57, 60, 0.8) 100%
    );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
`;

export const HeroSection__Column = styled.div`
  width: 100%;
  position: relative;
  padding: 1em 0;
  display: flex;
  flex-basis: 50%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroSection__Sector = styled.div`
  width: 100%;
  position: relative;

  h1 {
    color: #fff;
    font-size: 40px;
  }

  h2 {
    color: #fff;
    line-height: 1.5;
    font-size: 2.5rem;
    font-weight: 700;

    span {
      color: #8bd15f;
      display: block;
    }
  }

  .Hero__button {
    margin: 1em 0;
    display: flex;
    gap: 1em;
  }

  .HeroSection__Image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    h1 {
      color: #fff;
      font-size: 23px;
    }

    h2 {
      color: #fff;
      font-size: 24px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export default HeroSection__Container;
