import React, {useReducer, useState} from 'react';
import {reducer} from "./reducer";



type accordionType = {
    titleAcc: string
}


const UnControleAccordion = (props: accordionType) => {
    // const [collapsed, setCollapsed] = useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleAcc} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
        { !state.collapsed && <AccordionBody/>}
    </div>
}

type AccorTitlePops = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccorTitlePops) => {
    return  <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export default UnControleAccordion