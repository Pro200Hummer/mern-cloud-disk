import {ChangeEvent, useState} from "react";
import {useValidation} from "./useValidation";


export const useInput = (initialValue: string, validationSetting: string) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isDirty, setDirty] = useState<boolean>(false)
    const errors = useValidation(value, validationSetting)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setDirty(false)
    }
    const onBlurHandler = () => {
        setDirty(true)
    }

    return {value, isDirty, errors, handlers: {onChangeHandler, onBlurHandler}}
}