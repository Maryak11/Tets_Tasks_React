import React, {useReducer, useState} from 'react';



type accordionType = {
    titleAcc: string
}

type ActionType = {
    type: string,
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED"){
        return !state
    }
    return state
}
const UnControleAccordion = (props: accordionType) => {
    // const [collapsed, setCollapsed] = useState<boolean>(true)
    const [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        <AccordionTitle title={props.titleAcc} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
        {!collapsed && <AccordionBody/>}
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