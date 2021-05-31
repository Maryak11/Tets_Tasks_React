import Accordion, {accordionType} from "../Accordion/Accordion";
import {Select, SelectType} from "./Select";
import {Story} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}

export const ModeChange: Story<SelectType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Select {...args}  onChange={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
}
ModeChange.args = {

    items: [
        {title: "Kirill", value: 1},
        {title: "Valera", value: 2},
        {title: "Dmitry", value: 3},
    ]

}
