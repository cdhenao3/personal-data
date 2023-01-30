import React from 'react'

import { ViewLayoutProps } from './ViewLayout.types'

export const ViewLayout = (props: ViewLayoutProps) => {
    const { children, title } = props;

    return (
        <div className='view'>
            <h1 className='view_title'>{title}</h1>
            <div className='view_children-container'>
                {children}
            </div>
        </div>
    )
}