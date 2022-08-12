import axios from "axios";

export const apiB3 = axios.create({
  baseURL: 'https://api.hgbrasil.com/finance/stock_price?key=9a93501d&symbol='
})