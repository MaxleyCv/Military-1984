import React from 'react'
import { FooterContainer, FooterNav, FooterLogo, Ministries, Name, FooterLink, MinistryName, hover, dehover} from './FooterElements';
import {GlobalOutlined, HeartOutlined, CoffeeOutlined} from "@ant-design/icons";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterNav>
                <FooterLogo src="../../images/ingsoc.png"/>
                <Ministries>
                    <FooterLink  >
                        <CoffeeOutlined />
                        <MinistryName onMouseOver={hover} onMouseLeave={dehover}>Miniplenty</MinistryName>
                    </FooterLink>
                    <FooterLink  >
                    <HeartOutlined />
                        <MinistryName onMouseOver={hover} onMouseLeave={dehover}>Miniluv</MinistryName>
                    </FooterLink>
                    <FooterLink  >
                        <GlobalOutlined />
                        <MinistryName onMouseOver={hover} onMouseLeave={dehover}>Minitrue</MinistryName>
                    </FooterLink>
                </Ministries>
                <Name>
                    Minipax of Oceania. 
                </Name>
            </FooterNav>
        </FooterContainer>
    )
}

export default Footer
