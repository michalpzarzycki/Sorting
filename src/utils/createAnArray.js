//cb has to return a value!
export function createAnArray(length, callback) {
    const array = []

    for (let i = 0; i < length; i++) {
        array.push(callback())
    }

    return array;
}