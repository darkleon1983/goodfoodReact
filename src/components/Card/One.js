import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, traceSVG: { background: "#f7f7f7", color: "#E6E6E6" }) {
            ...GatsbyImageSharpFluid
          }
          
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const ImageWrapper = styled.div`
  position: relative;
  width: 33.3%;
  overflow: hidden;
  margin-top: 24px;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.55) 100%);
    top: 0;
    right: 0;
    position: absolute;
    display: block;
    z-index: 1;
} 
`;

const Text = styled.div`
  position: absolute;
  color: #ffffff;
  width: 100%;
  text-align: center;
  bottom: 24px;
  z-index: 2;
  text-transform: uppercase;
  font-size: 16px;
`;

const CursiveText = styled.div`
  position: absolute;
  color: #ffffff;
  width: 100%;
  text-align: center;
  bottom: 4px;
  z-index: 2;
  font-style: cursive;
  font-size: 12px;

`;


export default function Card({name}) {
  return (
    <ImageWrapper>
      <Image />
      <Text>text text text</Text>
      <CursiveText>another text</CursiveText>
    </ImageWrapper>
  )
}





