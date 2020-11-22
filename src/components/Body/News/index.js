import React from 'react'
import { NewsArticle, NewsArticleButton, NewsArticleHeading, NewsArticleText, NewsContainer, NewsFrameContainer, NewsParagraph, NewsText, NewsVideo } from './NewsElements'
import Video from '../../../videos/war.mp4'

const News = () => {
    return (
        <NewsContainer>
            <NewsVideo autoPlay loop muted src={Video} type='video/mp4'/>
            <NewsParagraph>
                <NewsText>Latest news from the front</NewsText>
                <NewsFrameContainer>
                    <NewsArticle>
                        <NewsArticleHeading> Big Brother congratulates Vika!</NewsArticleHeading>
                        <NewsArticleText> Today, on the 12th of May 1984
                            Big Brother published his article where he was obcessed with doubleplusluv to Viktoria Yegie who heroically destroyed a rocket with a hand!
                        </NewsArticleText>
                        <NewsArticleButton>BE VIKA!</NewsArticleButton>
                    </NewsArticle>
                    <NewsArticle>
                        <NewsArticleHeading> Fuehrer wird lang leben!</NewsArticleHeading>
                        <NewsArticleText> We will never forgot the hero of all worlds,
                            one of the Big Brother close friends Fuehrer! He leads the revival of
                            Oceanian origin in Eurasia!
                        </NewsArticleText>
                        <NewsArticleButton>BE A FUEHRER!</NewsArticleButton>
                    </NewsArticle>
                    <NewsArticle>
                        <NewsArticleHeading> 10 most violent spies were hanged!</NewsArticleHeading>
                        <NewsArticleText> No need to know that the party is full of Eurasian spies!
                            Big Brother will remove even those, who pretended to be a friend!
                        </NewsArticleText>
                        <NewsArticleButton>BE BIG BROTHER!</NewsArticleButton>
                    </NewsArticle>
                </NewsFrameContainer>
            </NewsParagraph>

        </NewsContainer>
    )
}

export default News
