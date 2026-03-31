function feast(beast, dish) {
  let b = beast.length - 1
  let d = dish.length - 1
  if(dish[0] === beast[0] && beast[b] === dish[d]){
    return true
  }else return false
}