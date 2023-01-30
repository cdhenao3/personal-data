import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchData } from 'features/dataCounter'
import { RootState } from 'store'

import { Button } from '../components/Button'
import { TableSingleRow } from '../components/TableSingleRow'
import { ViewLayout } from '../components/ViewLayout'

export const TableRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const results = useSelector((state: RootState) => state.data.data)
    const error = useSelector((state: RootState) => state.data.error)

    const onClickNewUser = () => {
        navigate('/create')
    }

    const getData = async () => {
        return dispatch(fetchData() as any).unwrap()
    }

    useEffect(() => {
        getData()
    }, [dispatch])

    return (
        <ViewLayout title='Registro de datos'>
            <>
                {error ?
                    <p className='error'>{error}</p> :
                    <table className='tableRegister_table'>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Institución educativa</th>
                            <th>Nivel educativo</th>
                        </tr>
                        <>
                            {results.map((data: any) => <TableSingleRow key={data.id} data={data} />)}
                        </>
                    </table>
                }
                <div className='tableRegister_button'>
                    <Button onClickButton={onClickNewUser} text='Crear nuevo usuario' />
                </div>
            </>
        </ViewLayout>
    )
}