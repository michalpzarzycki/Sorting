
export let bubbleSort = (inputArr, cb = () => { }, cb2 = () => { }) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            setTimeout(() => {
                cb(j, 'blue')
                if (inputArr[j] > inputArr[j + 1]) {
                    cb(j, 'red');
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                    cb2(inputArr)

                }
            }, 10 * j)


        }
    }
    return inputArr;
};