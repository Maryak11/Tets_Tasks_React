import {Select, SelectType} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}

export const ModeChange: Story<SelectType> = (args: SelectType) => {
    const [value, setValue] = useState<any>("2")

    return <Select {...args} onChange={setValue}  value={value}/>
}
ModeChange.args = {

    items: [
        {title: "Kirill", value: "1"},
        {title: "Valera", value: "2"},
        {title: "Dmitry", value: "3"},
    ]

}

export const ModeChangeNoActive: Story<SelectType> = (args: SelectType) => {
    const [value, setValue] = useState<any>(null)
    return <Select {...args} onChange={setValue} value={value}/>
}
ModeChangeNoActive.args = {
    onChange: action('Value changed'),
    items: [
        {title: "Kirill", value: "1"},
        {title: "Valera", value: "2"},
        {title: "Dmitry", value: "3"},
    ]

}


