import React, {useState} from "react";
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
    const selectedItem = props.items.find(el => el.value === props.value)
    const showItem = () => {
        setActive(!active)
    }

    const onChangeItem = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }


    return <div>
        <span className={s.selectTitle} onClick={showItem}>{selectedItem && selectedItem.title}</span>
        {active &&
        <div className={s.item}>{
            props.items.map(el => <div
            key={el.value}
            onClick={() => onChangeItem(el.value)}
            >
                {el.title}
            </div>)
        }
        </div>
        }

    </div>

}