function cardValues(cards) {
  return cards.map((card) => {
    const input = card.toUpperCase();

    const regexNumber = /^([1-9]|10)([SHDC])$/;
    const regexRoyal = /^([QJKA])([SHDC])$/;

    const numberMatch = input.match(regexNumber);
    const royalMatch = input.match(regexRoyal);

    if (numberMatch) {
      return Number(numberMatch[1]);
    } 
    if (royalMatch) {
      return royalMatch[1] === "A" ? 1 : 10;
    }

    return null;
  });
}