import request from "superagent";

export default function getGetRequest(url) {
  return new Promise((resolve, reject) => {
    const requestInstance = request('GET', `/api/${url}`)
      .accept('application/json');
    requestInstance.end((err, res) => {
      if (err) {
        reject(res ? res.text : err);
      } else {
        resolve(res.text);
      }
    });
  });
}