import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1yzGkYLIVAprlPLThcwCiTH9WtImma_o18jeGVTIUuM",
  },
});
