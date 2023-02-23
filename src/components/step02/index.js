import React, { useEffect } from 'react'
import { Circle, Content, ErrorTag, FormContainer, FormGroup, FormInput, FormLabel, FreeOpt, Heading, Icon, Icon01, Icon02, Icon03, Month, MonthYearToggle, PlanContainer, SubHeading, Switch, Tier, TierContainer, TierContent, TierHead, TierInfo, Tiers, Toggle, Year } from './step02Element'
import ArcadeSvg from '../../assets/images/icon-arcade.svg'
import AdvancedSvg from '../../assets/images/icon-advanced.svg'
import ProSvg from '../../assets/images/icon-pro.svg'
import { useState } from 'react'
const Plan = ({Billing , setBilling, PlanT,setPlanT , setValidPlan , ValidPlan, Err, setErr }) => {
  
  useEffect(() => {
    //setErr(false)
    if(PlanT)
    setValidPlan(true)
    else
    setValidPlan(false)
  }, [PlanT])
  
  const toggle=()=>{
    if(Billing==="Monthly")
    setBilling("Yearly")
    else
    setBilling("Monthly")

  }
  return (
    <PlanContainer>
    <Content>
<Heading>Select your plan</Heading>
<SubHeading> You have the option of monthly or yearly billing.
</SubHeading>
    </Content>
<ErrorTag className={(Err && !ValidPlan)?"Error":""}> choosing one is required
</ErrorTag>

<TierContainer>
<Tiers>
<Tier className={PlanT==="arcade" && "is-active"} Error={Err && !ValidPlan}  onClick={()=>{setPlanT("arcade")}}>
  <Icon src={ArcadeSvg}></Icon>
  <TierContent>

  <TierHead>Arcade</TierHead>
  <TierInfo>$9/mo</TierInfo>
  <FreeOpt year={Billing==="Yearly"}>2 months free</FreeOpt>
  </TierContent>

</Tier>

<Tier className={PlanT==="advanced" && "is-active" } Error={Err && !ValidPlan} onClick={()=>{setPlanT("advanced")}} >
  <Icon src={AdvancedSvg}></Icon>
  <TierContent>

  <TierHead>Advanced</TierHead>
  <TierInfo>$12/mo</TierInfo>
  <FreeOpt year={Billing==="Yearly"}>2 months free</FreeOpt>

  </TierContent>
</Tier>

<Tier className={PlanT==="pro" && "is-active"} Error={Err && !ValidPlan} onClick={()=>{setPlanT("pro")}}>
  <Icon src={ProSvg}></Icon>
  <TierContent>

  <TierHead>Pro</TierHead>
  <TierInfo>$15/mo</TierInfo>
  <FreeOpt year={Billing==="Yearly"} >2 months free</FreeOpt>

  </TierContent>

</Tier>
</Tiers>
<MonthYearToggle>
  <Month className={(Billing==="Monthly")?"active":""} >Monthly</Month>
  <Switch onClick={toggle} className={(Billing==="Monthly")?"month":""}>
  <Circle />
  </Switch>
  <Year className={(Billing==="Yearly")?"active":""}>Yearly</Year>
</MonthYearToggle>

</TierContainer>
  </PlanContainer>
  )
}

export default Plan