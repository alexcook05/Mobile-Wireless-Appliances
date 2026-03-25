
// Constructor for class
class Hotels {
  constructor(id, countryId, name, avgPrice, foundedYear, rating, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgPrice = avgPrice;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Daily Price: ${this.avgPrice}, Rating: ${this.rating}`;
  }
}

export default Hotels;
