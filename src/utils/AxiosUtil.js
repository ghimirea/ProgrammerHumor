import axios from 'axios';

export const baseURL = "https://www.reddit.com";

const baseRequest = axios.create({
  baseURL,
});

export function getRequest(path) {
  return baseRequest.get(path);
}