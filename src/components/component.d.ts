import { TodoProps, TagsProps } from "../pages/Todo/todo.interface"

// Other components
export type snackbarOptionsProps = {
    message?: string,
    type?: string
}

export type snackBarProps = {
    snackbarOptions: snackbarOptionsProps
}

export type CardSectionProp = {
    title?: string, 
    value?: number,
    status?: string,
    color?: string
}