import styled from 'styled-components/native'
import { theme } from '../../styles/theme'


export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
`
export const SliderHeader = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`
export const SliderImage = styled.Image`
  width: 100%;
`
export const SliderFooter = styled.View`
  width: 90%;
  height: 50%;
  align-items: center;
  justify-content: center;
`
export const SliderTitle = styled.Text`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.shape};
  margin-bottom: 20px;
`
export const SliderDescription = styled.Text`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.shape};
`
