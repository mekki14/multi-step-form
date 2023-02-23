import useMultiStepForm from "./hooks/MultiStepForm";
import SideBar from './components/sideBar';
import PersonalInfo from './components/step01';
import Plan from './components/step02';
import Addons from './components/step03';
import Summary from './components/step04';
import { NextBtn,BackBtn, FormGrp, HomePage, BtnGrp } from './ComonStyle';
import { useState } from "react";
import ThankSection from "./components/thankYou";
import 'normalize.css';
function App() {
    const [Name, setName] = useState("")
    const [ValidName, setValidName] = useState(false)

    const [Email, setEmail] = useState("")
    const [ValidEmail, setValidEmail] = useState(false)

    const [Phone, setPhone] = useState("")
    const [ValidPhone, setValidPhone] = useState(false)

    const [PlanT, setPlanT] = useState("")
    const [ValidPlan, setValidPlan] = useState(false)
    const [Err, setErr] = useState(false)
    const [Billing, setBilling] =useState("Monthly")
    const [Addonss, setAddonss] = useState({"service":false, "storage":false, "profile":false})
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
    function Goto(index) {
      setCurrentStepIndex(index);
    }
  
    function Next() {
      setCurrentStepIndex((i) => {
        if (i >= steps.length - 1) return i;
        return i + 1;
      });
    }
  console.log(currentStepIndex)
    function Back() {
      setCurrentStepIndex((i) => {
        if (i <= 0) return i;
        return i - 1;
      });
    }
    const {  
      steps, step, 
      } = useMultiStepForm([
      <PersonalInfo Name={Name} 
      setName={setName} 
      Email={Email} 
      setEmail={setEmail} 
      Phone={Phone} 
      setPhone={setPhone} 
      setValidName={setValidName} 
      ValidName={ValidName}
      ValidEmail={ValidEmail}
      ValidPhone ={ValidPhone}
      setValidEmail={setValidEmail}
      setValidPhone={setValidPhone}
      Err={Err}
      setErr={setErr}
      />,
      <Plan PlanT={PlanT} 
      setPlanT={setPlanT} 
      Billing={Billing} 
      setBilling={setBilling} 
      setValidPlan={setValidPlan}
      Err={Err}
      ValidPlan={ValidPlan}
      setErr={setErr}
      />,

      <Addons Addonss={Addonss} 
      setAddonss={setAddonss} 
      Billing={Billing} />,

      <Summary PlanT={PlanT} 
      Addonss={Addonss} 
      Billing={Billing} 
      Goto={Goto} />
    ],currentStepIndex);
  const [success, setSuccess]=useState(false);
    
    return ( 
   <div >


<HomePage>
<SideBar StepIndex={currentStepIndex}/>
{success?<ThankSection/>:<FormGrp>
 
{step}

<BtnGrp>
  <BackBtn type="button" onClick={Back}>
    Go Back
  </BackBtn>
  <NextBtn
    type="button"
    confirm={currentStepIndex === 3}
    onClick={currentStepIndex === 0 ?(ValidName && ValidEmail && ValidPhone)?Next :()=>setErr(!Err):currentStepIndex ===1?ValidPlan?Next:()=>setErr(true)  : currentStepIndex === 3 ? () => setSuccess(true) : Next}
  >
    {currentStepIndex === 3 ? "Confirm" : "Next Step"}
  </NextBtn>
</BtnGrp>
</FormGrp>}
  </HomePage>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Fayssal Mekki</a>.
  </div>
  </div> );
}

export default App;
