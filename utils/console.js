/* eslint-disable func-names */
/* eslint-disable no-console */

console.color = function (message = '', value = '', ...args) {
  if (process.browser) {
    const str = `%c${message} %c${value}`
    const msgColor = 'color:#FF6F61;font-size:14px;'
    const valueColor = 'color:blue;font-size:13px;font-style:italic;'
    this.info(str, msgColor, valueColor, ...args)
  } else {
    console.log(message, value, ...args)
  }
  
}
