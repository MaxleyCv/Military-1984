import React from 'react'
import { SettingsContainer, SoldierCheckbox, SoldierInput, SoldiersCount } from './SettingsComponents'

const Settings = () => {
    return (
        <SettingsContainer>
            <SoldiersCount>
                <p>How many soldiers do you have? </p>
                <SoldierInput type='number' defaultValue='0' min='0'></SoldierInput>
            </SoldiersCount>
            <SoldiersCount>
                <p>Should we sort by people? </p>
                <SoldierCheckbox type='checkbox'></SoldierCheckbox>
            </SoldiersCount>
        </SettingsContainer>
    )
}

export default Settings
