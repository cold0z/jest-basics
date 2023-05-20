const { getData } = require("../app");
const crypto = require("crypto");

//jest.mock('crypto');

test("Fetch data", async () => {
  jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("bytes-test");
  const res = await getData();
  console.log(res);
  expect(res).toBe("bytes-test");
});
