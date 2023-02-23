import React from 'react'
import { ThankContainer, ThankDetail, ThankHead} from './thankStyle'
import ThankIcon from '../../assets/images/icon-thank-you.svg'
const ThankSection = () => {
  return (
    <ThankContainer>
        <img src={ThankIcon}/>
        <ThankHead>
        Thank you!
        </ThankHead>
        <ThankDetail>
        Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.
        </ThankDetail>
        </ThankContainer>
  )
}

export default ThankSection