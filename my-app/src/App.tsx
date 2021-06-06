import React, {useState} from 'react';
import './App.css';
import Raiting from "./Rating/Raiting";
import RaitingController, {RaitingPropsTypeValue} from "./RaitingControl";
import UnControleAccordion from "./UnControleAccordion";


function App() {
    const [raitingValue, setRaitingValue] = useState<RaitingPropsTypeValue>(0)
    const [acccollapsed, setAccCollapsed] = useState<boolean>(false)


    return (


        <div>
            <RaitingController value={raitingValue} onClick = {setRaitingValue}/>
            <Raiting/>
            {/*<Accordion titleAcc={"Menu"} collapsed={acccollapsed} onChange={() => {setAccCollapsed(!acccollapsed)}}/>*/}
            <UnControleAccordion titleAcc={"Users"}/>

        </div>
    );
}

export default App;
