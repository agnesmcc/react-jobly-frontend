import Api from "./Api";

describe("Api", () => {
    it("getCompany returns a company by handle", async () => {
        let company = await Api.getCompany("hall-davis");
        expect(company.handle).toEqual("hall-davis");
        expect(company.name).toEqual("Hall-Davis");
    });
})
