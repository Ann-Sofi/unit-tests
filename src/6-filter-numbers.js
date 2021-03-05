

export const filterNumbers = (array, largerThan) => {
  let newArray = array.filter(function (item){
    if (item <= largerThan)
    return item;
  })
  return newArray
}

