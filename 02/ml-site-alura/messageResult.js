const messageResult = (result, test, numberElm) => {
  const differences = result.map((value, index) => value - test[index]);
  const hits = differences.filter(value => value===0);
  const totalHits = hits.length;
  const totalElementsTest = numberElm;
  const hitRate = 100 * (totalHits / totalElementsTest);
  const message = `
                    Result: ${result},
                    Hits: ${hits},
                    Total Hits: ${totalHits},
                    Hit Rate: ${hitRate}%
                  `;
  return message;
}

export default messageResult;