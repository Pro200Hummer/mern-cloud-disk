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
    handler: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonProps {
    handler: () => void
    align?: string
}
