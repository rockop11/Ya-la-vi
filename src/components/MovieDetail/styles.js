import styled from "styled-components";

export const MovieBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100vh;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  width: 50%;
`;

export const Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;
