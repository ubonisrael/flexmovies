export default function CheckFave(array, itemId) {
  const index = array.findIndex(item => item.id === itemId)
  
  if (index < 0) {
    return false
  } else {
    return true
  }
}
