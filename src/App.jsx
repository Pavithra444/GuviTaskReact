import './App.css'
import Card from './components/Card';


const App = () => {
  const data = [{cost:"$0/month",label: "FREE",
                 plans:[{planA:"Single User",AisAvailable:"✔"},
                        {planB:"50GB Storage",BisAvailable:"✔"},
                        {planC:"Unlimited Public Projects",CisAvailable:"✔"},
                        {planD:"Community Access",DisAvailable:"✔"},
                        {planE:"Unlimited Private Projects",EisAvailable:"✖"},
                        {planF:"Dedicated Phone Support",FisAvailable:"✖"},
                        {planG:"Free Subdomain",GisAvailable:"✖"},
                        {planH:"Monthly Status Reports",HisAvailable:"✖"}]},

               {cost:"$9/month",label: "PLUS", 
                plans:[{planA:"Single User",AisAvailable:"✔"},
                {planB:"50GB Storage",BisAvailable:"✔"},
                {planC:"Unlimited Public Projects",CisAvailable:"✔"},
                {planD:"Community Access",DisAvailable:"✔"},
                {planE:"Unlimited Private Projects",EisAvailable:"✔"},
                {planF:"Dedicated Phone Support",FisAvailable:"✔"},
                {planG:"Free Subdomain",GisAvailable:"✔"},
                {planH:"Monthly Status Reports",HisAvailable:"✖"}]},
               
           {cost:"$49/month",label: "PRO",
             plans:[{planA:"Single User",AisAvailable:"✔"},
            {planB:"50GB Storage",BisAvailable:"✔"},
            {planC:"Unlimited Public Projects",CisAvailable:"✔"},
            {planD:"Community Access",DisAvailable:"✔"},
            {planE:"Unlimited Private Projects",EisAvailable:"✔"},
            {planF:"Dedicated Phone Support",FisAvailable:"✔"},
            {planG:"Free Subdomain",GisAvailable:"✔"},
            {planH:"Monthly Status Reports",HisAvailable:"✔"}]}];
  
  return (
    <>
      
        {data.map(details => (
           
           <Card
          key={details.label}
          label={details.label}
          cost={details.cost}
          planA={details.plans.map(plans=>(plans.planA))}
          AisAvailable={details.plans.map(plans=>(plans.AisAvailable))}
          planB={details.plans.map(plans=>(plans.planB))}
          BisAvailable={details.plans.map(plans=>(plans.BisAvailable))}
          planC={details.plans.map(plans=>(plans.planC))}
          CisAvailable={details.plans.map(plans=>(plans.CisAvailable))}
          planD={details.plans.map(plans=>(plans.planD))}
          DisAvailable={details.plans.map(plans=>(plans.DisAvailable))}
          planE={details.plans.map(plans=>(plans.planE))}
          EisAvailable={details.plans.map(plans=>(plans.EisAvailable))}
          planF={details.plans.map(plans=>(plans.planF))}
          FisAvailable={details.plans.map(plans=>(plans.FisAvailable))}
          planG={details.plans.map(plans=>(plans.planG))}
          GisAvailable={details.plans.map(plans=>(plans.GisAvailable))}
          planH={details.plans.map(plans=>(plans.planH))}
          HisAvailable={details.plans.map(plans=>(plans.HisAvailable))}
          
        />
           
        ))}
    
    </>
  );
};


export default App;



