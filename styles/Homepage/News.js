import styled from "styled-components";

export const News__Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const News__Section__Container = styled.div`
  width: 100%;
  padding: 1em 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const News__Section__Box = styled.div`
  width: 100%;
  padding: 1em;
  background-color: #ececec;
  border-radius: 4px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  .News__Images {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    position: relative !important;
    border-radius: 1px;
  }

  .News__Text__Content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;

    h2 {
      font-weight: 600;
      font-size: 20px;
    }

    p {
      font-weight: 400;
      font-size: 13px;
    }
  }
`;

export default News__Container;
