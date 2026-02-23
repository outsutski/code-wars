function getRealFloor(n) {
  if(n > 0 && n < 14){
    return n-1
  }else if(n >= 14){
    return n-2
  }else {
    return n
  }
}