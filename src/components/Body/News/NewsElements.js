import styled from 'styled-components';

export const NewsContainer = styled.div`
    margin-top: 0;
    background: url('../../../videos/war.mp4');
    width: 100%;
    height: 110vh;

`

export const NewsVideo = styled.video`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 110vh;
    opacity: 0.2;
    z-index: -10;
    display: inline;
    /* top: 0rem; */
`

export const NewsParagraph = styled.div`
    display: flex;
    position: relative;
    top: 11rem;
    /* color: silver; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -5;

`

export const NewsText = styled.p`
    font-size: 3rem;
    opacity: 0.55;
    margin-bottom: 1.5rem;
`

export const NewsFrameContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    align-items: center;
    width: 100%;
    top: 4rem;
    position: relative;
    justify-content: space-evenly;
`

export const NewsArticle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27rem;
    width: 29rem;
    border: 2px solid rgba(255, 226, 203, 0.288);;
    padding: 1rem;
`

export const NewsArticleHeading = styled.p`
    font-size: 2.5rem;
    color:  #ffdcbf;
    opacity: 0.55;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;

`

export const NewsArticleText = styled.p`
    font-size: 1.5rem;
    color: whitesmoke;
    opacity: 0.5;
    margin-top: 10px;
    margin-left: 10px;
`

export const NewsArticleButton = styled.button`
    font-size: 2rem;
    position: absolute;
    bottom: 2rem;
    background-color:  rgba(255, 255, 255, 0.2);
    color: wheat;
    opacity: 0.85;
    border: 2px solid rgba(255, 255, 255, 0.3);
    width: 20rem;
    height: 5rem;
`
