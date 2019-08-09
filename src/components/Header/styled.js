import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  box-shadow: 1px 0.2px 5px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  background-color: #ffffff;
  z-index: 9999;
`

export const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const HeaderLinkWrapper = styled.div`
  color: #000000;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 100px;
  display: inline-flex;
  margin: 24px 0 12px 0;
  :hover {
    color: gray;
  }
  &.active {
    color: #8bc34a;
  }

  &:after {
    content: "";
    width: 12px;
    height: 12px;
    top: 0;
    right: 0;
    position: absolute;
    display: block;
} 

`
