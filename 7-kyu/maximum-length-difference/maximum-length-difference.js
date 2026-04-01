function mxdiflg(a1, a2) {
    if(!a1.length || !a2.length){
      return -1
    }else {
      const longestStringa1 = a1.reduce((a, b) => a.length > b.length ? a : b, a1[0])
      const longestStringa2 = a2.reduce((a, b) => a.length > b.length ? a : b, a2[0])
      const shortestStringa1 = a1.reduce((a, b) => a.length > b.length ? b : a, a1[0])
      const shortestStringa2 = a2.reduce((a, b) => a.length > b.length ? b : a, a2[0])
      
      let A = Math.max(Math.abs(longestStringa1.length - shortestStringa2.length ))
      let B = Math.max(Math.abs(longestStringa2.length - shortestStringa1.length ))
      
      return Math.max(A, B)
    }
}