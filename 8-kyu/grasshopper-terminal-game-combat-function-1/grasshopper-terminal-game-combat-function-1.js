function combat(health, damage) {
  let s = health - damage
  return s < 0 ? 0 : s
}