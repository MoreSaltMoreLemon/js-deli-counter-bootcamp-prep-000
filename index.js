var line = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    let serving = line.shift()
    return `Currently serving ${serving}.`;
  }
}

function currentLine (line) {
  let string = "The line is currently:";
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < line.length; i++) {
      string = string + " "+ (i + 1) + ". " + line[i] + ",";
    }
    return string;
  }
}