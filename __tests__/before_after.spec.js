beforeAll(() => {
  console.log("connect to database or check connection");
});

afterAll(() => {
  console.log("disconnect from database");
});

beforeEach(() => {
  console.log("before each test");
});

beforeEach(() => {
  console.log("after each test");
});

describe("authentication", () => {
  it("test 1", () => {});
  it("test 2", () => {});
});

describe("Products", () => {
  it("test 1", () => {});
  it("test 2", () => {});
});
