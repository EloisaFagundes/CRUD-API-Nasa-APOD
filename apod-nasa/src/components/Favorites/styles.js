import styled from "styled-components";


export const ImageStyled = styled.img`
display: flex;
width: 350px;
height: 300px;
padding-bottom: 8px;
padding-top: 8px;
`;

export const ContentWrapperStyled = styled.div`
justify-content: space-around;
align-items: center;
justify-content: center;
align-self: center;
padding: 0;
`;


export const PaperContentStyled = styled.div`
display: table;
clear: both;
border: 1px solid grey;
border-radius: 3%;
height:100px;
width:70px;
align-items: center;
justify-content: center;
align-self: center;
margin: 32px 15px;
padding: 2px;

@media screen and (max-width: 1280px) {
    width: 100%;
    margin: 32px 0;
  }
`;

export const VideoStyled = styled.iframe`
width: 350px;
height:300px;
padding-bottom: 8px;
padding-top: 8px;
`;

export const ButtonWrapper = styled.div`
display:flex;
height: 8%;
justify-content: center;
`
export const TitleWrapper = styled.div`
margin: 1rem;
display:flex;
height: 3vh;
justify-content: center;
align-items: center;
`;

export const ContentPageWrapper =  styled.div`
margin: 0px;
display: flex;
justify-content: center;
flex-wrap: wrap;
flex-grow: 1;
`

export const WrapperAllContentPage = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`