import { GRID, NUMBERS } from 'typings'
import { checkGrid, shuffle, IsInRow, IsInCol, IdentifySquare, isInSquare} from 'utils';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillGrid (grid:GRID){
    let row = 0;  
    let col = 0;

    for ( let i = 0; i < 81; i++ ){
        row = Math.floor(i / 9);
        col = i % 9
        if( grid[row][col]=== 0 ){
            shuffle(numbers)
            for ( let value of numbers )
            if ( !IsInRow({ grid, row, value })){
                if (!IsInCol({ col, grid, value })){
                    const square =  IdentifySquare({ col, grid, row})
                        if(!isInSquare({ square, value}))
                        {
                        grid[row][col] = value
                        //check is it full, if yes stop
                        if(checkGrid(grid)) return true
                        //rerun if it isnt
                        else if (fillGrid(grid)) return true
                        }
                }
            }       
          break;
        }
    }
    grid[row][col] = 0;
}
export default fillGrid