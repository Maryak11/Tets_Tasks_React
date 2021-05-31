import React, {useState} from 'react';
import AccordionBody from "./AccordionBody";

import {createSecureServer} from "http2";

type accordionType = {
    titleAcc: string
}
const UnControleAccordion = (props: accordionType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <div>
        <AccordionTitle title={props.titleAcc} onClick={() => {setCollapsed(!collapsed)}}/>
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

export default UnControleAccordion