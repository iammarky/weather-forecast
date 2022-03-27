export function convertDateMMDDYYYY(date) {
  let dateInstance = new Date(0)
  dateInstance.setUTCSeconds(date)
  return dateInstance.toLocaleDateString()
}
