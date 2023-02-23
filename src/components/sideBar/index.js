import React from 'react'
import { InfoContent, InfoElement, InfoMean, InfoNo, InfoStep, SideBarContainer } from './sideBarElement'
const SideBar = ({StepIndex}) => {
  return (<SideBarContainer >
   <InfoElement>
            <InfoNo className={StepIndex===0?"is-active":""} > 1</InfoNo>
            <InfoContent>
                <InfoStep>STEP 1</InfoStep>
                <InfoMean> YOUR INFO</InfoMean>
            </InfoContent>
        </InfoElement>
        <InfoElement>
            <InfoNo className={StepIndex===1?"is-active":""} > 2</InfoNo>
            <InfoContent>
                <InfoStep >STEP 2</InfoStep>
                <InfoMean> SELECT PLAN</InfoMean>
            </InfoContent>
        </InfoElement>
        <InfoElement>
            <InfoNo className={StepIndex===2?"is-active":""}> 3</InfoNo>
            <InfoContent>
                <InfoStep>STEP 3</InfoStep>
                <InfoMean> ADD-ONS</InfoMean>
            </InfoContent>
        </InfoElement>
        <InfoElement>
            <InfoNo className={StepIndex===3?"is-active":""}> 4</InfoNo>
            <InfoContent>
                <InfoStep>STEP 4</InfoStep>
                <InfoMean> SUMMARY</InfoMean>
            </InfoContent>
        </InfoElement>
        </SideBarContainer>
  )
}

export default SideBar