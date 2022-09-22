import { useRef, useState } from 'react'
import objectPath from 'object-path'

type Optional<I> = {
    [P in keyof I]?: I[P]
}

interface IUseViewModel<T> {
    reRender: () => void
    saveData: (data: Optional<T> | Function) => void
    updateData: (data: Optional<T> | Function) => void
    getData: () => T
    resetData: () => void
    resetDataSilent: () => void
    getInitData: () => T
    data: T
}

const useViewModel = <T>(initData: T): IUseViewModel<T> => {
    const [step, setStep] = useState(0)

    const ref = useRef<T>({ ...initData })

    const reRender = () => {
        setStep((prev) => prev + 1)
    }

    const getNewDataWithObject = (data: Object) => {
        let obj = objectPath(ref.current)

        Object.keys(data).map((key) => {
            obj.set(key, data[key])
        })

        return obj.get()
    }

    const getNewDataWithCallBack = (callBack: (objectPath) => any) => {
        let obj = objectPath(ref.current)

        return callBack(obj)
    }

    const saveData = (data) => {
        let newData

        if (typeof data === 'object') {
            newData = getNewDataWithObject(data)
        }

        if (typeof data === 'function') {
            newData = getNewDataWithCallBack(data)
        }

        ref.current = newData
    }

    const updateData = (data) => {
        saveData(data)
        reRender()
    }

    const resetDataSilent = () => {
        saveData(initData)
    }

    const resetData = () => {
        updateData(initData)
    }

    const getData = () => {
        return ref.current
    }

    const getInitData = () => {
        return initData
    }

    const data = (() => {
        return ref.current
    })()

    return {
        reRender,
        saveData,
        updateData,
        getData,
        data,
        resetData,
        resetDataSilent,
        getInitData,
    }
}

export default useViewModel
