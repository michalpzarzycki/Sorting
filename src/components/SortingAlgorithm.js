import { useEffect, useState } from 'react';
import { randomNumberGenerator } from '../utils/randomNumberGenerator'
import { createAnArray } from '../utils/createAnArray'
import styles from './SortingAlgorithm.module.css';

function SortingAlgorithm() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        setArray(createAnArray(100, () => randomNumberGenerator(10, 30)))


    }, [])

    return (
        <div>
            {/* display an array as a rectangles with height of arr[i] */}
            {array.map(x => <div>{x}</div>)}
        </div>
    )
}

export default SortingAlgorithm
