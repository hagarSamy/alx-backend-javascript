export default function getBudgetObject(income, gdp, capita) {
  // automatically assigns the value of the variable with the same name to the property
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
