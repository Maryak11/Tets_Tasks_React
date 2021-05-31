import React from 'react';

type ItemType = {
    title: string,
    value: any
}
export type accordionType = {
    titleAcc: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}
const Accordion = (props: accordionType) => {

    return <div>
        <AccordionTitle title={props.titleAcc} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccorTitlePops = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccorTitlePops) => {
    return  <h3 onClick={() => props.onChange()}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    const itemsList = props.items.map((i,index) => <li
        onClick={() => props.onClick(i.value)}
        key={index}>{i.title}</li>)
    return <ul>
        {itemsList}
    </ul>
}

export default Accordion