export function array2json(data){
    const master_data = []
    for(let i = 1; i< data.length; i++){
    let entry = {};
    for(let j = 0; j< data[0].length; j++){
      entry[data[0][j]] = data[i][j]
    }
    master_data.push(entry)
  }
  return master_data;
}