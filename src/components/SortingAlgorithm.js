import { useEffect, useState } from 'react';
import { randomNumberGenerator } from '../utils/randomNumberGenerator'
import { createAnArray } from '../utils/createAnArray'
import { bubbleSort } from '../algorithms/bubbleSort'
import styles from './SortingAlgorithm.module.css';
import Button from './Button';
import { backgroundChanger } from '../utils/backgroundChanger';

function SortingAlgorithm() {
    const [array, setArray] = useState([]);
    const [random, setRandom] = useState(false)

    useEffect(() => {
        setArray(createAnArray(150, () => randomNumberGenerator(100, 600)))

    }, [random])


    return (
        <>
            <Button handleClick={() => setRandom(!random)} placeholder="RANDOM AGAIN!" />
            <Button handleClick={() => setArray([...bubbleSort(array, (x, y) => backgroundChanger(x, y), (arr) => setArray([...arr]))])} placeholder="BUBBLE SORT" />
            <div className={styles.barContainer}>
                {/* display an array as a rectangles with height of arr[i] */}
                {array.map((x, idx) => <div key={idx} className={styles.bar} id={idx} style={{ height: `${x}px` }}></div>)}
            </div>
        </>
    )
}

export default SortingAlgorithm
