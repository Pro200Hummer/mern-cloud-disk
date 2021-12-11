import {ChangeEvent} from "react";

export interface FlexProps {
    width?: string
    direction?: string
    justify?: string
    align?: string
    margin?: string
    padding?: string
    background?: string
}

export interface TitleProps {
    line?: string
    size?: string
}

export interface InputProps {
    type: string
    value: string
    placeholder: string
    handlers: {
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
        onBlurHandler: () => void
    }
}

export interface ButtonProps {
    disable: boolean
    handler: () => void
    align?: string
}
