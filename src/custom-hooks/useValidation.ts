import {useEffect, useMemo, useState} from "react";

export const useValidation = (value: string, validationSetting: string): string[] => {
    const emailValidationErrors = useMemo(() => {
        return {
            isEmptyError: 'The field cannot be empty',
            isEmailError: 'Invalid email',
        }
    }, [])

    const passwordValidationErrors = useMemo(() => {
        return {
            isEmptyError: 'The field cannot be empty',
            minLengthError: 'Password must be at least 3 characters',
            maxLengthError: 'Password must be less than 20 characters'
        }
    }, [])

    const [isEmptyError, setIsEmptyError] = useState<string>('')
    const [isEmailError, setEmailError] = useState<string>('')
    const [minLengthError, setMinLengthError] = useState<string>('')
    const [maxLengthError, setMaxLengthError] = useState<string>('')

    useEffect(() => {
        if (validationSetting === 'email') {
            for (const validation in emailValidationErrors) {
                switch (validation) {
                    case 'isEmptyError':
                        value.length > 0 ? setIsEmptyError('') : setIsEmptyError(emailValidationErrors[validation])
                        break
                    case 'isEmailError':
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        re.test(String(value).toLowerCase()) ? setEmailError('') : setEmailError(emailValidationErrors[validation])
                        break
                }
            }
        }
        if (validationSetting === 'password') {
            for (const validation in passwordValidationErrors) {
                switch (validation) {
                    case 'isEmptyError':
                        value.length > 0 ? setIsEmptyError('') : setIsEmptyError(passwordValidationErrors[validation])
                        break
                    case 'minLengthError':
                        value.length < 3 ? setMinLengthError(passwordValidationErrors[validation]) : setMinLengthError('')
                        break
                    case 'maxLengthError':
                        value.length > 20 ? setMaxLengthError(passwordValidationErrors[validation]) : setMaxLengthError('')
                        break
                }
            }
        }
    }, [value, validationSetting])

    const validatorReturn = (setting: string): string[] => {
        const errorsArray = [isEmptyError, isEmailError, minLengthError, maxLengthError]
        switch (setting) {
            case 'email':
                return errorsArray.filter(err => err !== '')
            case 'password':
                return errorsArray.filter(err => err !== '')
            default:
                return errorsArray.filter(err => err !== '')
        }
    }

    return validatorReturn(validationSetting)
}