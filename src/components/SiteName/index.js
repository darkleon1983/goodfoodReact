import React from "react"
import { Text, SmallText, SiteNameWrapper } from "./styled"

export default function SiteName(props) {
  return (
    <>
    <Text>{props.text}</Text>
    <SiteNameWrapper>
      <SmallText>
        Студия авторского кейтеринга
      </SmallText>
    </SiteNameWrapper>
    </>
  )
}
