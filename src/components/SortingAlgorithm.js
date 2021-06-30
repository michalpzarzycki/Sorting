import { useEffect, useState } from 'react';
import { randomNumberGenerator } from '../utils/randomNumberGenerator'
import { createAnArray } from '../utils/createAnArray'
import styles from './SortingAlgorithm.module.css';
import Button from './Button';

function SortingAlgorithm() {
    const [array, setArray] = useState([]);
    const [random, setRandom] = useState(false)

    useEffect(() => {
        setArray(createAnArray(100, () => randomNumberGenerator(10, 600)))
    }, [random])

    return (
        <>
            <Button handleClick={() => setRandom(!random)} placeholder="RANDOM AGAIN!" />
            <div className={styles.barContainer}>
                {/* display an array as a rectangles with height of arr[i] */}
                {array.map((x, idx) => <div key={idx} className={styles.bar} style={{ height: `${x}px` }}></div>)}
            </div>
        </>
    )
}

export default SortingAlgorithm
