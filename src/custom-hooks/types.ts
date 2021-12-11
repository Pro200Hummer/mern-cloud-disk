import {ChangeEvent} from "react";

export type UseInputReturnType = {
    value?: string
    isDirty?: boolean
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlurHandler?: () => void
}