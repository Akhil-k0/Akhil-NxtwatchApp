import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-right: 18px;
  margin-bottom: 28px;
  @media screen and (min-width: 576px) {
    width: 33%;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
    flex-direction: row;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 500;
  }
`
export const VideoTextContainer = styled.div``

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 5px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`
