import axios from "axios";
import md5 from "md5";

const privateKey = "d1cb10073488e9619adb40b6b35e96b24c0f878a";
const apikey = "78f329625b25b7b8fecdcc346e7447d8";

const ts = Number(new Date());

const hash = md5(ts + privateKey + apikey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey,
    hash,
  },
});
