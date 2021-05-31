import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input"
}
export const UncontrolledInput = () => < input/>
export const TrackValueControlledInput = () => {
    const [value, setValue] = useState(" ")
    return <><input onChange={(event) => {
        setValue(event.currentTarget.value)
    }
    }/> - {value}</>
}
export const GetValueControlledInputByButton = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const saveOnClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/> <button onClick={saveOnClick}>save</button> - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={ChangeInput}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false);
    const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.checked)
    }
    return <input checked={parentValue} type="checkbox" onChange={ChangeInput}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const ChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {

        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={ChangeSelect}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}
