import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of companies. */

  static async getCompanies(name) {
    let data = {};
    if (name) data.name = name;
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  /** Get list of jobs. */

  static async getJobs(title) {
    let data = {};
    if (title) data.title = title;
    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  /** Login a user. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Register a user. */

  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Update user. */

  static async updateUser(username, data) {
    // Remove any empty fields from the update data, so that 
    // we don't erase any of the user's existing info.
    Object.keys(data).forEach(key => {
      if (!data[key].trim()) {
        delete data[key];
      }
    });
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Delete user. */

  static async deleteUser(username) {
    await this.request(`users/${username}`, {}, "delete");
  }

  /** Get details on a user. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Apply to a job. */

  static async applyToJob(username, jobId) {
    console.log(username, jobId, 'applying to job');
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
