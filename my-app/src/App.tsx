import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./Accordion/Accordion";
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
            <Accordion titleAcc={"Menu"} collapsed={acccollapsed} onChange={() => {setAccCollapsed(!acccollapsed)}}/>
            <UnControleAccordion titleAcc={"Users"}/>

        </div>
    );
}

export default App;
