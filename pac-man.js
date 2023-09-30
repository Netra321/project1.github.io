//const canvas = document.getElementById("gamecanvas");
//const ctx = canvas.getContext("2d");
/*function gameloop()
{
    console.log("gameloop");
}

setInterval(gameloop,1000/75);*/

document.addEventListener('DOMContentLoaded', () => {

    const width = 20
    const grid = document.querySelector('.grid')
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   //0
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,   //1
        1,0,3,1,0,1,1,1,1,1,1,1,1,1,1,0,1,3,0,1,   //2
        1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,   //3
        1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,   //4
        1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,   //5
        1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,   //6
        1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,   //7
        1,0,1,0,0,0,0,0,1,2,2,1,0,0,0,1,0,0,0,1,   //8
        1,0,1,0,0,0,1,1,1,2,2,1,1,1,0,1,0,1,0,1,   //9
        1,0,0,0,1,0,1,2,2,2,2,2,2,1,0,1,0,1,0,1,   //9
        1,1,1,0,1,0,1,2,2,2,2,2,2,1,0,0,0,0,0,1,   //8
        1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,   //7
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,   //6
        1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,   //5
        1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,   //4
        1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,   //3
        1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,   //2
        1,3,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,3,1,   //1
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1    //0
    /*  0,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,0*/
       ]
    const squares = []
  



    function createBoard() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if(layout[i] === 0) 
        {
          squares[i].classList.add('dots')
        } 

        else if (layout[i] === 1)
         {
          squares[i].classList.add('wall')
         } 

         else if (layout[i] === 2)
         {
          squares[i].classList.add('empty')
         } 
        
        else if (layout[i] === 3) 
        {
          squares[i].classList.add('power-pellet')
        }
        
        else if (layout[i] === 4) 
          {
            squares[i].classList.add('pacman')
          }
      }
    }
    createBoard()
  
  
})