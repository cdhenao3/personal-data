import { RootState } from 'store'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { Button } from 'components/Button'
import { ShowValue } from "components/ShowValue"
import { ViewLayout } from "components/ViewLayout"

import { URL } from '../../constants'
import { formatDate } from './Resume.utils'

export const Resume = () => {
    const navigate = useNavigate()

    const personalData = useSelector((state: RootState) => state.data.personal)
    const academicData = useSelector((state: RootState) => state.data.academic)

    const onSubmitHandler = async () => {
        try {
            const personal = await axios.post(`${URL}/personal`, personalData)

            await axios.post(`${URL}/personal/${personal.data.id}/academic`, academicData)

            navigate('/')
        } catch (error) {

        }
    }

    return (
        <ViewLayout title='Resumen'>
            <div className='resume'>
                <h3 className='resume_title'>Información personal</h3>
                <div className='resume_value'>
                    <ShowValue name='nombres' value={personalData.firstName} />
                    <ShowValue name='apellidos' value={personalData.lastName} />
                    <ShowValue name='correo' value={personalData.email} />
                    <ShowValue name='telefono' value={personalData.phone} />
                    <ShowValue name='ciudad' value={personalData.city} />
                    <ShowValue name='direccion' value={personalData.address} />
                </div>
                <h3 className='resume_title'>Información académica</h3>
                <div className='resume_value'>
                    <ShowValue name='institución educativa' value={academicData.educationCenter} />
                    <ShowValue name='nivel educativo' value={academicData.educationLevel} />
                    <ShowValue name='nombre del programa' value={academicData.programName} />
                    <ShowValue name='ciudad' value={academicData.city} />
                    <ShowValue name='fecha de inicio' value={formatDate(academicData.initialDate)} />
                    <ShowValue name='fecha de finalizacion' value={formatDate(academicData.endDate)} />
                </div>
                <div className='resume_save'>
                    <Button text='guardar' onClickButton={onSubmitHandler} />
                </div>
            </div>
        </ViewLayout>
    )
}