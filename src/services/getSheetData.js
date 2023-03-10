export function getSheetData({ sheetId, sheet }) {
  // const apiURL = `https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1i8V1Umifjucb_qCcipGRlghDnB-LFPkst8P0B81w5Iw&sheet=Data`;
  const apiURL = `https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=${sheetId}&sheet=${sheet}`;
  // console.log(sheetId, sheet);

  return fetch(apiURL)
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error: ', error);
    });
}
