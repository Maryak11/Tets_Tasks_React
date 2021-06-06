import React, {useState, KeyboardEvent, useEffect} from 'react';
import style from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

export type SelectType = {
    items: ItemType[],
    onChange: (value: any) => void
    value?: any
}


export const Select = (props: SelectType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    useEffect(() => {
        setHovered(props.value)
    }, [props.value] )

    const showItem = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(!active)

    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown")
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                if (pretendentElement) {
                    props.onChange(pretendentElement.value)
                    break
                }
            }
    }
    }
        return <>
            <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span onClick={showItem} className={style.main}>{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={style.items}>
                    {props.items.map(i => <div
                        key={i.value}
                        className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                        onMouseEnter={() => setHovered(i.value) }
                        onClick={() => onItemClick(i.value)}
                    >
                        {i.title}
                    </div>)}
                </div>
                }
            </div>
        </>
    }
