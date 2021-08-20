import React, {useState, useEffect, ReactNode} from 'react'

type Props = {
    show: boolean,
    children: ReactNode
}

const Drawer:React.FC<Props> = ({ show, children }) => {

    const [showDrawer, setShowDrawer] = useState<boolean>(show)

    useEffect(() => {
        setShowDrawer(show)
    }, [show, showDrawer])

    return (
        <div className={`drawer ${ showDrawer ? 'show':'' } `}>
            {children}
        </div>
    )
}

export default Drawer