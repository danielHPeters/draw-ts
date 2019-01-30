import Matrix from './Matrix'

/**
 * Matrix factory.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class MatrixFactory {

  /**
   * Creates a matrix with an array.
   *
   * @param mArray The array used to create the matrix
   * @returns The generated matrix object or empty matrix if not valid
   */
  static createMatrix (mArray: number[][]): Matrix {
    const length = mArray[0].length
    for (let i = 1; i < mArray.length; i++) {
      if (mArray[i].length !== length) {
        return Matrix.EMPTY
      }
    }
    return new Matrix(mArray)
  }
}
