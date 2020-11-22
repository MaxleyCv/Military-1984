import React from 'react'

import { BackdivEnemies, EnemiesContainer, EnemiesParagraph } from './EnemiesElements'

const Enemies = () => {
    return (
        <EnemiesContainer>
            <BackdivEnemies></BackdivEnemies>
            <EnemiesParagraph>We have always been at war with Eastasia!
                Kill them all!
            </EnemiesParagraph>
        </EnemiesContainer>
    )
}

export default Enemies
