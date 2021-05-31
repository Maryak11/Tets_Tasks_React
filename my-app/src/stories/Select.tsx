import React from 'react';

type ItemType = {
    title: string,
    value: any
}

export type SelectType = {
    items: ItemType[],
    onClick: (value: any) => void,
    onChange: () => void
    collapsed: boolean

}


export const Select = (props: SelectType) => {
    const ItemSelect = props.items.map(el => {
        return <div>{el.title}</div>
    })
    return <div>
        <div onClick = {() => props.onChange()} >
            {!props.collapsed && ItemSelect}
        </div>

    </div>
}
