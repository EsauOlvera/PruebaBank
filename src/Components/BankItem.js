import React from 'react'
import { DescriptionLabel, OperationalAgeLabel, TitleLabel, BankCard, ContentCard, BankImage } from './CardItems'

const BankItem = ({id, name, description, age, uri}) => {
    return(
        <BankCard id={id}>
            <BankImage uri={uri} />
            <ContentCard>
                <TitleLabel text={name} />
                <DescriptionLabel text={description} />
                <OperationalAgeLabel text={age} />
            </ContentCard>
        </BankCard>
    )
}

export default BankItem