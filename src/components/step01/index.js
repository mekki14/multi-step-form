import React, { useEffect } from 'react'
import useMultiStepForm from '../../hooks/MultiStepForm'
import { Content, ErrorLabel, FormContainer, FormGroup, FormInput, FormLabel, Heading, Labels, NextBtn, PersonalContainer, SubHeading } from './step01Element'


const PersonalInfo = ({Name,setName, Email, setEmail, Phone ,setPhone, setValidName, setValidPhone, ValidName,ValidEmail, ValidPhone,  setValidEmail, Err, setErr}) => {
 
  useEffect(() => {
    setErr(false)

    if(Name)
    setValidName(true)
    else
    setValidName(false)
  }, [Name])
  
  useEffect(() => {
    setErr(false)

    if(Email)
    setValidEmail(true)
    else
    setValidEmail(false)
  }, [Email])

  
  useEffect(() => {
    setErr(false)
    if(Phone)
    setValidPhone(true)
    else
    setValidPhone(false)
  }, [Phone])

  return (<PersonalContainer>
    <Content>

<Heading>Personal Info</Heading>
<SubHeading>Please provide your name, email address, and phone number.</SubHeading>
    </Content>

<FormContainer>
<FormGroup>
<Labels>
<FormLabel>Name</FormLabel>
<ErrorLabel className={(Err && !ValidName)?"Error":""}>This field is required</ErrorLabel>
      </Labels>
<FormInput placeholder="e.g. Stephen King" value={Name} onChange={e=>setName(e.target.value)} className={(Err && !ValidName)?"Error":""}/>
    </FormGroup>

    <FormGroup>
    <Labels>
    <FormLabel>Email Address</FormLabel>
    <ErrorLabel className={(Err && !ValidEmail)?"Error":""}>This field is required</ErrorLabel>
      </Labels>
    <FormInput placeholder="e.g. stephenking@lorem.com" value={Email} onChange={e=>setEmail(e.target.value)} className={(Err && !ValidEmail)?"Error":""}/>
    </FormGroup>

    <FormGroup>
      <Labels>

    <FormLabel >Phone Number</FormLabel>
    <ErrorLabel className={(Err && !ValidPhone)?"Error":""}>This field is required</ErrorLabel>
      </Labels>
<FormInput placeholder="e.g. +1 234 567 890" value={Phone} onChange={e=>setPhone(e.target.value)} className={(Err && !ValidPhone)?"Error":""} />
    </FormGroup>
</FormContainer>
  </PersonalContainer>
  )
}

export default PersonalInfo