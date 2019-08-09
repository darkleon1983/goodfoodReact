import styled from "styled-components"

export const Text = styled.p`
  color: #000000;
  font-size: 45px;
  margin: 40px auto 12px auto;
  width: 100%;
  text-align: center;
  font-weight: 600;
`
export const SmallText = styled.div`
  color: #000000;
  font-size: 18px;
  margin: 12px auto;
  text-align: center;
  font-weight: 600;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    width: 50px;
    height: 1px;
    background-color: #000000;
    top: 50%;
    right: -70px;
    position: absolute;
    display: block;
} 

&:before {
    content: "";
    width: 50px;
    height: 1px;
    background-color: #000000;
    top: 50%;
    left: -70px;
    position: absolute;
    display: block;
} 
`

export const SiteNameWrapper = styled.div`
  width: 100%;
  text-align: center;
`;