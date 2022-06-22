import styled from "styled-components";

export const About__Container = styled.div`
  width: 100%;
  background-color: #0b635e;
  padding: 20px 0;
  color: white;
  text-align: center;
`;

export const About__Column = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const About__Row = styled.div`
  width: 100%;
  color: white;

  .About__Header__Text {
    padding: 20px 0;
  }

  .About__Content__Text {
    display: flex;
    gap: 1em;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    .About__Content__Text {
      display: block;
    }
  }
`;

export const About__Turaki__Container = styled.div`
  background: url(/images/group.png),
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
  margin: 20px 0;
  padding: 20px 0;
`;

export const About__Sector = styled.div`
  width: 100%;

  .HeroSection__Image {
    width: 100% !important;
    height: 500px;
    position: relative !important;
  }

  .showcase {
    width: 100%;
    height: 150px;
    position: relative !important;
  }

  .Maphor {
    position: relative !important;
    height: 150px !important;
  }

  .About__btn {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 900px) {
    .About__btn button {
      width: 60%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default About__Container;
