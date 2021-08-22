import React, { ReactNode, useState } from 'react'
import { createContext } from 'react'
import { IMainContext } from '../interfaces/main'

interface IProps {
    children: ReactNode
}

export const MainContext= createContext<IMainContext>({
    sidebarVisibility: false,
    toggleSidebar: () => {}
})

export default function MainContextProvider({ children }: IProps) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const contextValue = {
        sidebarVisibility : showSidebar,
        toggleSidebar
    }

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}
