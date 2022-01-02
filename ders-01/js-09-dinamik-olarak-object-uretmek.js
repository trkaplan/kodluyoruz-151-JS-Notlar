// Dinamik Olarak Object Üretmek
// değişken ile bir key adı set ederken bracket notation kullanıyoruz:
function createCar(brand, customKey, customValue) {
  return {
    brand: brand,
    [customKey]: customValue,
  };
}

newCar = createCar("Volvo", "engine", "electric");
console.log(newCar); // returns {brand: 'Volvo', engine: 'electric'}
console.log(newCar.engine); // returns electric
