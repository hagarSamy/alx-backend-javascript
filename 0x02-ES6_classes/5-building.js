export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
    }
}

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
