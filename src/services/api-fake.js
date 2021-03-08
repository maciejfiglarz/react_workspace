import axios from "axios";
import { fakeServerUrl } from "../constants/common";

export default axios.create({
  baseURL: fakeServerUrl,
});