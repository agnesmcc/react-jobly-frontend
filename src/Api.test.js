import Api from "./Api";

Api.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyODYwODEwOX0.39xreIYcCsDDtrtQlb6D701PeCUzLwTPwzx--qksfH8";

describe("Api", () => {
    it("getCompany returns a company by handle", async () => {
        let company = await Api.getCompany("hall-davis");
        expect(company.handle).toEqual("hall-davis");
        expect(company.name).toEqual("Hall-Davis");
    });

    it("getCompanies returns a list of companies", async () => {
        let companies = await Api.getCompanies();
        expect(companies[0].handle).toEqual("anderson-arias-morrow");
        expect(companies[0].name).toEqual("Anderson, Arias and Morrow");
    })

    it("getJobs returns a list of jobs", async () => {
        let jobs = await Api.getJobs();
        expect(jobs[0].title).toEqual("Accommodation manager");
    })
    
    it("login returns a token", async () => {
        let token = await Api.login({ username: "testadmin", password: "password" });
        console.log('ADMINTOKEN', token);
        expect(token).toEqual(expect.any(String));
    })

    it("register returns a token", async () => {
        try {
            await Api.deleteUser("testusertemp")
        } catch (e) { console.log(e) }
        let token = await Api.register({ 
            username: "testusertemp", 
            password: "password",
            firstName: "test",
            lastName: "user",
            email: "test@me.com"
        });
        expect(token).toEqual(expect.any(String));
    })

    it("updateUser returns a user", async () => {
        let user = await Api.updateUser("testuser", { firstName: "test" });
        expect(user.firstName).toEqual("test");
    })

    it("getUser returns a user", async () => {
        let user = await Api.getUser("testuser");
        expect(user.username).toEqual("testuser");
    })
})
