import React from 'react'
import Video from '../../videos/videoplayback.mp4'
import {HeaderContainer, LogoImage, VideoPart, WelcomeParagraph, WelcomeText, WelcomeInfo} from './HeaderElements'

const Header = () => {
    return (
        <HeaderContainer>
            <VideoPart autoPlay loop muted src={Video} type='video/mp4'/>
            <WelcomeParagraph>
                <LogoImage/>
                <WelcomeText>Minipax of Oceania doubleplushellos you</WelcomeText>
                <WelcomeInfo>We doublepluslaik yor patriotic luv for the State and Big Brother himself.</WelcomeInfo>
                <WelcomeInfo>Here you can do whatever you want, officer, everything is being recorded!</WelcomeInfo>
                <WelcomeInfo>Every spy is already hanged!</WelcomeInfo>
            </WelcomeParagraph>
        </HeaderContainer>
    )
}

export default Header
