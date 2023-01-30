import React from 'react'

import { TableSingleRowProps } from './TableSingleRow.types';

export const TableSingleRow = (props: TableSingleRowProps) => {
    const { data } = props;

    return (
        <tr key={data.id}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.educationCenter}</td>
            <td className='firstToUppercase'>{data.educationLevel}</td>
        </tr>
    )
}