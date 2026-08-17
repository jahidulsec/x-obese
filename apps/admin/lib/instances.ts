import { FetchApiJSON } from "./api";

const api = new FetchApiJSON();
api.setBaseUrl(process.env.API_URL!)

export { api }