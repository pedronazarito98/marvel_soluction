import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ImageBook = styled.img`
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;
