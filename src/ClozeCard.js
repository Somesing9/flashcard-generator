function ClozeCard(text, cloze) {
  if (typeof text === 'undefined' ||  typeof cloze === 'undefined') {
    return console.log("ERROR: You must provide the text and the cloze.");
  }

  if (text.indexOf(cloze) === -1) {
    return console.log("ERROR: The cloze text must be part of the full text.");
  }

  if (this instanceof ClozeCard) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.replace(cloze, "______________");
  } else {
  	return new ClozeCard(text, cloze);
  }

  return this;
}

module.exports = ClozeCard;
