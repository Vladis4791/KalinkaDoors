import React, { useState } from 'react'
import DoorSize from './DoorSize';


const Depth = () => {

    const [length, setLength] = useState(1);

	return (
		<DoorSize
			questionName="Померьте глубину дверного проема"
			inputLabel="Глубина проема"
			nextPageRoute="../width"
			previousPageRoute="../state"
            value={length}
            onChange={(value) => setLength(value)}
		/>
	);
}

export default Depth