import Accordion, {accordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {Story} from "@storybook/react";
import {ButtonProps} from "../stories/Button";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
const Template: Story<accordionType> = (args) => <Accordion {...args}/>
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleAcc: "Menu",
    collapsed: false,
    onChange: callback,
    items:[]

}
export const MenuUnCollapsedMode = Template.bind({})
MenuUnCollapsedMode.args = {
    titleAcc: "User",
    collapsed: true,
    onChange: callback,
    onClick: onClickCallback,
    items: [
        {title: "Kirill", value: 1},
        {title: "Valera", value: 2},
        {title: "Dmitry", value: 3},
    ]
}


// export const CollapsedMode = () => <Accordion titleAcc={"Menu"} collapsed={true} onChange={callback}/>
// export const UnCollapsedMode = () => <Accordion titleAcc={"Menu"} collapsed={false} onChange={callback}/>
export const ModeChange: Story<accordionType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion {...args} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
}
    ModeChange.args = {
        titleAcc: "Menu",
        onClick: onClickCallback,
        items: [
            {title: "Kirill", value: 1},
            {title: "Valera", value: 2},
            {title: "Dmitry", value: 3},
        ]

    }

