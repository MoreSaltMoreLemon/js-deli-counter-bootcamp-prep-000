var line = [];

function takeANumber(length, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length + 1} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return line.pop()
  }
}

function currentLine (line) {
  let string = "The line is currently:";
  if (line.length == 0) {
    return "The line is currently empty";
  } else {
    for (let i = 0; i < line.length; i++) {
      string = string + " "+ (i + 1) + ", " + line[i] + ".";
    }
    return string;
  }
}