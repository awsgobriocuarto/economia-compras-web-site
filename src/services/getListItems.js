import axios from 'axios';
import Papa from 'papaparse';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  list: async ({ url = ' ' }) => {
    console.log(url);
    return axios.get(url, { responseType: 'blob' }).then(
      (response) =>
        new Promise((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const items = results.data;
              return resolve(
                items.map((item) => ({
                  ...item,
                  urlExternal: Boolean(item.urlExternal.toLowerCase()),
                }))
              );
            },
            error: (error) => reject(error.message),
          });
        })
    );
  },
};
