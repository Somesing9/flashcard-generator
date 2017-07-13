function BasicCard(front, back) {
  if (typeof front === 'undefined' || typeof back === 'undefined') {
    return console.log("ERROR: You must pass the front and back of the card");
  }

  if (this instanceof BasicCard) {
    this.front = front;
    this.back = back;
  } else {
    return new BasicCard(front, back);
  }

  return this;
}

module.exports = BasicCard;
