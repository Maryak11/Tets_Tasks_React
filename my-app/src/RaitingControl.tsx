import React, {useState} from 'react';

export type RaitingPropsTypeValue = 0 | 1 | 2 | 3 | 4 | 5

type RaitingPropsType = {
    value:  0| 1 | 2 | 3 | 4 | 5
    onClick: (value: RaitingPropsTypeValue) => void
}
const RaitingController = (props: RaitingPropsType) => {

    return <div>
        <Star selected={props.value > 0} onClick = {props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick = {props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick = {props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick = {props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick = {props.onClick} value={5}/>
    </div>
}
type SelectedType = {
    selected: boolean
    value: RaitingPropsTypeValue
    onClick: (value: RaitingPropsTypeValue) => void
}

const Star = (props: SelectedType) => {
    return <span onClick={ () => {props.onClick(props.value)}}> {props.selected ? <b>star </b> : "star "}</span>


}


export default RaitingController