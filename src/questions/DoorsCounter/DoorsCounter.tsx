import React, { useState } from 'react'
import QuestionTemplate from '../../components/QuestionTemplate/QuestionTemplate'
import { useOutletContext } from 'react-router-dom';
import NumberInput from '../../components/NumberInput/NumberInput';

const DoorsCounter = () => {

    const [doorsCount, setDoorsCount] = useState("");

    const onSubmit = () => {

    }

    return (
        <QuestionTemplate questionName="Введите количество дверей" onSubmit={onSubmit}>
            <NumberInput onChange={(value) => setDoorsCount(value)} />
        </QuestionTemplate>
    )
}

export default DoorsCounter