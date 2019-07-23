import React from "react"
import {
  HeaderWrapper,
  StyledLink,
  HeaderLinkWrapper,
  ContentContainer,
} from "./styled"

export default function Header(props) {
  return (
    <HeaderWrapper>
      <ContentContainer>
        <HeaderLinkWrapper>
          <StyledLink activeClassName="active" to="/">
            Главная
          </StyledLink>
          <StyledLink activeClassName="active" to="/same">
            Одно
          </StyledLink>
          <StyledLink activeClassName="active" to="/another">
            Другое
          </StyledLink>
          <StyledLink activeClassName="active" to="/somelink">
            Контакты
          </StyledLink>
        </HeaderLinkWrapper>
      </ContentContainer>
    </HeaderWrapper>
  )
}
