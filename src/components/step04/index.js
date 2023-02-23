import React from 'react'
import { Addon, AddonHeading, AddonPrice, Content, Divider, FileChange, FileContainer, FileContent, FileHeading, FilePrice, FileType, FormContainer, FormGroup, FormInput, FormLabel, Heading, SubHeading, SummaryContainer, TotalContainer, TotalPrice, TotalTitle } from './step04Element'

const Summary = ({PlanT,Addonss ,Billing, Goto}) => {
  
let total=0
let pP=0
  if(Billing==="Monthly"){
    if(PlanT==="arcade"){
     
      pP=9 } 
    else if(PlanT==="advanced"){
     
      pP=12
    } else{
      pP=15

    }
    
      total=pP
    if(Addonss.service)
    total=total+1
      if(Addonss.storage)
      total=total+2
      if(Addonss.profile)
      total=total+2
    }
    if(Billing=="Yearly"){
      if(PlanT=="arcade")
      {
        pP=90
      } 
      else if(PlanT=="advanced"){
        pP=120

      } else{
        pP=150

      }
      
        total=pP
        if(Addonss.service)
        total=total+10
        if(Addonss.storage)
        total=total+20
        if(Addonss.profile)
        total=total+20
      }
    

  

  return (
    <SummaryContainer>
    <Content>

<Heading>Finishing up</Heading>
<SubHeading>Double-check everything looks OK before confirming.</SubHeading>
    </Content>

<FormContainer>
<FileContainer>
<FileHeading>
  <FileContent>
    <FileType>{PlanT} ({Billing=="Monthly"?"Monthly":"yearly"})</FileType>
    <FileChange onClick={()=>Goto(1)}>Change</FileChange>
  </FileContent>
  <FilePrice>${pP}/{Billing=="Monthly"?"mo":"yr"}</FilePrice>
</FileHeading>
<Divider/>
{Addonss.service?
  <Addon>

  <AddonHeading>Online service</AddonHeading>
  <AddonPrice>{ Billing=="Monthly"?"+$1/mo":"+$10/yr"
}</AddonPrice>
</Addon>:""}
{Addonss.storage?<Addon>

  <AddonHeading>Larger storage</AddonHeading>
  <AddonPrice>{ Billing=="Monthly"?"+$2/mo":"+$20/yr"
}</AddonPrice>
</Addon>
  :""}
{Addonss.profile?<Addon>

  <AddonHeading>Customizable Profile</AddonHeading>
  <AddonPrice>{ Billing=="Monthly"?"+$2/mo":"+$20/yr"
}</AddonPrice>
</Addon>:""}
</FileContainer>
<TotalContainer>
  <TotalTitle>Total (per { Billing=="Monthly"?"month":"year"
})</TotalTitle>
  <TotalPrice>+${total}/{Billing=="Monthly"?"mo":"yr"}</TotalPrice>
</TotalContainer>
</FormContainer>
  </SummaryContainer>
  )
}

export default Summary