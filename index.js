var katzDeli = []

var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift(1)}.`)
  }
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  var order = []
  for (let i = 0; i < katzDeliLine.length; i++) {
    order.push(' ' + [i+1] + '. ' + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else return (`The line is currently:` + order)
}
