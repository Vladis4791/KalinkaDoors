import React, { useState } from 'react'
import QuestionTemplate from '../../../components/QuestionTemplate/QuestionTemplate'
import NumberInput from '../../../components/NumberInput/NumberInput'
import DoorSize from './DoorSize';


const Depth = () => {

    const [length, setLength] = useState(1);

	return (
		<DoorSize
			questionName="Померьте глубину дверного проема"
			russianDimensionName="Глубина"
			englishDimensionName="depth"
			nextPageRoute="../width"
			previousPageRoute="/doorsList"
            value={length}
            onChange={(value) => setLength(value)}
		/>
	);
}

export default Depth