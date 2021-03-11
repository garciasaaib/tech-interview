const { expect } = require("chai");
const clockMinuteAdder = require("../Ejercicios/11-ClockMinuteAdder/ClockMinuteAdder");

describe("ClockMinuteAdder", function () {
  it("Should return '9:20' if add 20 minutes to '9:00'", () => {
    expect(clockMinuteAdder("09:00", 20)).to.equal("09:20");
  });
  it("Should return '2:00' if add 30 minutes to '1:30'", () => {
    expect(clockMinuteAdder("01:30", 30)).to.equal("02:00");
  });
  it("Should return '01:45' if add 100 minutes to '12:05'", () => {
    expect(clockMinuteAdder("12:05", 100)).to.equal("01:45");
  });
});
