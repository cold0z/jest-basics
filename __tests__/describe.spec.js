const myBeverage = {
  delicious: true,
  sour: false,
};

describe("ma boisson", () => {
  it("est délicieuse", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  it("n'est pas amer", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
