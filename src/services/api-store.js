import axios from "axios";
import { storeServerUrl } from "../constants/common";

export default axios.create({
  baseURL: storeServerUrl,
});