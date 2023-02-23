import React, { useState } from 'react'
import { AddonsContainer, CheckContainer, CheckIcon, CheckMark, Content, FormContainer, FormGroup, FormInput, FormLabel, Heading, Item, ItemContent, Itemdesc, ItemHeading, ItemInput, ItemPrice, ItemsContainer, SubHeading } from './step03Element'

const Addons = ({setAddonss, Addonss, Billing}) => {
 
 const [service, setService] = useState(false)
 const [storage, setStorage] = useState(false)
 const [profile, setProfile] = useState(false)
  const handleChange=(e)=>{
    if(e.target.name=="service")
    setAddonss({...Addonss, "service":e.target.checked})
if(e.target.name=="storage")
setAddonss({...Addonss, "storage":e.target.checked})
if(e.target.name=="profile")
setAddonss({...Addonss, "profile":e.target.checked})

}

function CustomCheckbox( name2 ) {
  
  return (
    <CheckContainer >
      <CheckMark type="checkbox"  name={name2} onChange={handleChange} value={Addonss[name2]} checked={Addonss[name2]}  />
      <CheckIcon></CheckIcon>
    </CheckContainer>
  );
}

  return (
    <AddonsContainer>
    <Content>

<Heading>Pick add-ons</Heading>
<SubHeading>Add-ons help enhance your gaming experience.</SubHeading>
    </Content>
   
  
<ItemsContainer>
 <Item className={Addons.service?"is-active":""} >
 {CustomCheckbox("service")}

<ItemContent>

<ItemHeading>Online service</ItemHeading>
<Itemdesc>Access to multiplayer games</Itemdesc>
</ItemContent>

<ItemPrice>
 { Billing=="Monthly"?"+$1/mo":"+$10/yr"
}
</ItemPrice>
    </Item>

    <Item className={Addons.storage?"is-active":""} >
    {CustomCheckbox("storage")}


<ItemContent>

<ItemHeading>Larger storage</ItemHeading>
<Itemdesc>Custom theme on your profile</Itemdesc>
</ItemContent>

<ItemPrice>
{ Billing=="Monthly"?"+$2/mo":"+$20/yr"
}
</ItemPrice>
    </Item>

    <Item className={Addons.profile?"is-active":""} >
 {CustomCheckbox("profile")}

<ItemContent>

<ItemHeading>Customizable Profile</ItemHeading>
<Itemdesc>Custom theme on your profile</Itemdesc>
</ItemContent>

<ItemPrice>
{ Billing=="Monthly"?"+$2/mo":"+$20/yr"
}
</ItemPrice>
    </Item>

</ItemsContainer>
  </AddonsContainer>
  )
}

export default Addons