import {MySelect, MySelectPropsType} from "./MySelect";
import {Story} from "@storybook/react";
import {Select, SelectType} from "./Select";
import {useState} from "react";


export default {
    title: 'MySelect',
    component: MySelect
}


export const MySelectChange: Story<MySelectPropsType> = (args: MySelectPropsType) => {
    const [value, setValue] = useState<any>("2")

    return <MySelect {...args} onChange={setValue}  value={value}/>
}

MySelectChange.args = {
    items: [
        {title: "Kirill", value: "1"},
        {title: "Dmitriy", value: "2"},
        {title: "Matvei", value: "3"}
    ]
}