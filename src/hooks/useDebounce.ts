import { useEffect, useState } from "react"

export const useDebounce = <T>(value:T, delay = 500) => {
    const [debouncedValue, setdebouncedValue] = useState<T>()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setdebouncedValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}