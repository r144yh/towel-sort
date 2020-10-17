module.exports = function towelSort(matrix) {
    let newArr = [];
    let yArr = [];
    let mediumArr = [];
    if (matrix === undefined) return []
    for (let i = 0; i < matrix.length; i++) {
        for (let y = 0; y < matrix[i].length;) {
            if (i % 2 === 0) {
                newArr.push(matrix[i][y]);
                y++
            } else {
                while (y < matrix[i].length) {
                    yArr.push(matrix[i][y]);
                    y++
                }
                mediumArr = newArr.concat(yArr.reverse());
                yArr = [];
                newArr = mediumArr;
            }
        }
    }
    return newArr
}
