import axios from "axios";
import { config } from "./config.js";

export const getBalance = async () => {

    const response = await axios.get(config.balanceUrl, {
        headers: {
          'RnCard-Identity-Account-Pass': 'NjgwZTM5NDZlMTI4NTczYTQ3N2VjNmYzNDM1YWFkOTY='
        },
      });
    console.log(response);
    let text = `Текущий баланс РН-Карт: ${response.data.Available} рублей`;

    return text;
    /* return response.data[0].url; */
};