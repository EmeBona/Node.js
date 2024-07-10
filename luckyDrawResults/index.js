const players = [
    "Tina",
    "Jorge",
    "Julien"
]

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

function getResults(){
    let result;
    players.forEach(async (player) => {
        try{
            result = await luckyDraw(player)
            console.log(result);
        }catch(err){
            console.log(err);
        }
    })
}

getResults()