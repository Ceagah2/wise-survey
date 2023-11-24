import { IContainer } from "../../../types"
import { MainContainer } from "./styles"
export const Container = (props: IContainer) => {
  const {children} = props
  return(
    <MainContainer>
      {children}
    </MainContainer>
  )
 }
