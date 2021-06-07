import React, {useEffect, useState} from "react";
import s from "./MySelect.module.css"

export type ItemsType = {
    title: string,
    value: any
}

export type MySelectPropsType = {
    items: ItemsType[],
    value: any
    onChange: (value: any) => void
}

export const MySelect = (props: MySelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState(props.value)
    const selectedItem = props.items.find(el => el.value === props.value)
    const selectedHover = props.items.find(el => el.value === hovered)
    const showItem = () => {
        setActive(!active)
    }
    const onChangeItem = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }

    // useEffect(() => {
    //     setHovered(props.value)
    // }, [props.value] )


    return <div className={s.selectTitle}>
        <span className={s.selectTitle} onClick={showItem}>{selectedItem && selectedItem.title}</span>
        {active &&
        <div className={s.items}>{
            props.items.map(el => <div
                className={s.item + " " + (selectedHover === el ? s.selectedHover : "")}
                key={el.value}
                onMouseEnter={() => setHovered(el.value)}
                onClick={() => onChangeItem(el.value)}
            >
                {el.title}
            </div>)
        }
        </div>
        }

    </div>

}