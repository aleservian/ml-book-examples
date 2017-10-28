import csv from 'fast-csv';

const loadAccess = (file = '', headers = {x: [], y:''}) => {
  const attributesHeaderX = headers.x;
  const attributesHeaderY = headers.y;
  const readCsv = (file) => {
    return new Promise((resolve, reject) => {
      let chunks = []
      csv.fromPath(file, {headers: true})
      .on('data', chunk => {
        chunks.push(chunk);
      })
      .on('end', () => {
        resolve(chunks);
      })
      .on('error' , err => reject(err));
    })
  }
  return readCsv(file)
    .then((data) => {
      const result = data.reduce((prevData, currentItem, key )=> {
        const x  = attributesHeaderX.map(item  => currentItem[item]);
        prevData.x.push(x);
        prevData.y.push(currentItem[attributesHeaderY]);
        return prevData;
      }, {x: [], y: []});
      return result;
    })
}

export default loadAccess;