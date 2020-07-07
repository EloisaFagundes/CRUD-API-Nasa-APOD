import styled from "styled-components";

export const MediaWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const SelectDateWrapper = styled.div`
  padding: 0.5rem;
`;

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  width: 100%;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const ImageStyled = styled.img`
  max-width: 1080px;
  width: 100%;
  max-height: auto;
  min-height: auto;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const VideoStyled = styled.iframe`
  max-width: 1080px;
  width: 100%;
  height: 500px;
  min-height: auto;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 74vh;
`;

export const ExplanationWrapper = styled.main`
  padding: 10px;
  max-width: 1080px;
  width: 100%;
  max-height: auto;
  height: auto;
  background-size: 100%;

`