// Rover Object Goes Here
// ======================

var locationSpace = [];

for( x = 0; x < 10; x++){
  
  locationSpace[x] = [""];
  
  for( y = 0; y < 10; y++){

    locationSpace[x][y] = "";

  }

}

locationSpace[0][2] = "X";
locationSpace[2][4] = "X";
locationSpace[3][4] = "X";
locationSpace[8][2] = "X";
locationSpace[4][5] = "X";
locationSpace[0][2] = "X";
locationSpace[1][5] = "X";
locationSpace[3][2] = "X";
locationSpace[7][5] = "X";

console.log(locationSpace);

var myRovers = [
  {
  name: 'rover1',
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
 },
 {
  name: 'rover2',
  direction: "N",
  x: 5,
  y: 5,
  travelLog:[]
 }
]

var comandsExample = "bbrfffrllfffrrrllffrbbasffrrllff";

receivesCommands(myRovers, comandsExample, locationSpace);

// ======================
function turnLeft(rover){

  rover.forEach(function(itemrover){
        
    switch(rover.direction){
      case "N":
      itemrover.direction = "W";
      break;
      case "W":
      itemrover.direction = "S";
      break;
      case "S":
      itemrover.direction = "E";
      break;
      case "E":
      itemrover.direction = "N";
      break;
    }

    //console.log(`Rover esta en la direccion ${itemrover.direction}`);
  });


}

function turnRight(rover){

  rover.forEach(function(itemrover){

    switch(itemrover.direction){
      case "N":
      itemrover.direction = "E";
      break;
      case "E":
      itemrover.direction = "S";
      break;
      case "S":
      itemrover.direction = "W";
      break;
      case "W":
      itemrover.direction = "N";
      break;
    }
    //console.log(`Rover esta en la direccion ${itemrover.direction}`);

  });

}

function moveForward(rover, space){

  rover.forEach(function(itemrover){

  //console.log(`estamos en ${itemrover.x} y en ${itemrover.y}`);

  switch(itemrover.direction){
    case "N":
        if(itemrover.x > 0){
          if(space[itemrover.x-1][itemrover.y] == "X"){
            console.log('stop obtaculo en moveForward N');
          }else{
            itemrover.x -= 1;
          }
        }
        //console.log(`N`)
    break;
    case "S":
        if(itemrover.x < 10){
          if(itemrover.x == 9){
            console.log('stop te vas fuera del límite');
          }
          else if(space[itemrover.x+1][itemrover.y] == "X"){
            console.log('stop obtaculo en moveForward S');
          }else{
            itemrover.x += 1;
          }
        }
        //console.log(`S`)
    break;
    case "E":
        if(itemrover.y < 10){
          if(itemrover.y == 9){
            console.log('stop te vas fuera del límite');
          }
          else if(space[itemrover.x][itemrover.y+1] == "X"){
            console.log('stop obtaculo en moveForward E');
          }else{
            itemrover.y += 1;
          }
        }
       // console.log(`E`)
    break;
    case "W":
        if(itemrover.y > 0){
          if(space[itemrover.x][itemrover.y-1] == "X"){
            console.log('stop obtaculo en moveForward W');
          }else{
            itemrover.y -= 1;
          }
        }
        //console.log(`W`)
    break;
  }

  //console.log(`estamos en ${itemrover.x} y en ${itemrover.y}`)

  itemrover.travelLog.push(`(${itemrover.x},${itemrover.y})`);
  
  });

}

function moveBack(rover, space){


  rover.forEach(function(itemrover){

  //console.log(`estamos en ${itemrover.x} y en ${itemrover.y} y mi 

  switch(rover.direction){
    case "N":
        if(itemrover.x < 10){
          if(itemrover.x == 9){
            console.log('stop te vas fuera del límite');
          } else if(space[itemrover.x+1][itemrover.y] == "X"){
            console.log('stop obtaculo en moveBack N');
          }else{
            itemrover.x += 1;
          }
        }
        //console.log(`N`)
    break;
    case "S":
        if(itemrover.x > 0){
          if(space[itemrover.x-1][itemrover.y] == "X"){
            console.log('stop obtaculo en moveBack S');
          }else{
            itemrover.x -= 1;
          }
        }
        //console.log(`S`)
    break;
    case "E":
        if(itemrover.y > 0){
          if(space[itemrover.x][itemrover.y-1] == "X"){
            console.log('stop obtaculo en moveBack E');
          }else{
            itemrover.y -= 1;
          }
        }
       // console.log(`E`)
    break;
    case "W":
        if(itemrover.y < 10){
          if(itemrover.y == 9){
            console.log('stop te vas fuera del límite');
          } else if (space[itemrover.x][itemrover.y+1] == "X"){
            console.log('stop obtaculo en moveBack W');
          }else{
            itemrover.y += 1;
          }
        }
        //console.log(`W`)
    break;
  }

  //console.log(`estamos en ${itemrover.x} y en ${itemrover.y}`)

  itemrover.travelLog.push(`(${itemrover.x},${itemrover.y})`);

  });

}

function receivesCommands(rover, comands, space){

  var arrayCommands = comands.split('');

  //console.log(arrayCommands)

  arrayCommands.forEach(function(itemCommand){

    if(itemCommand === "r"){

      turnRight(rover);

    } else if(itemCommand === "l"){

      turnLeft(rover);

    } else if(itemCommand === "f"){

      moveForward(rover, space);

    } else if(itemCommand === "b"){

      moveBack(rover, space);

    }

  });



  console.log(`viaje de ${rover[0].name}, su dirección es ${rover[0].direction} y su viaje  ha sido  ${rover[0].travelLog} y ${rover[1].name}, su dirección es ${rover[1].direction} y su viaje  ha sido  ${rover[1].travelLog} `);

}