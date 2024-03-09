import { TodoProps, TagsProps } from "../pages/Todo/todo.interface"

export type CardSectionProp = {
    title?: string, 
    value?: number | string,
    status?: string,
    color?: string,
    bottomText?: string
}

export type ChartLoadProps = {
    variant?: string
}