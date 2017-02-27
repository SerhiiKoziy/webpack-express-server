import getGetRequest from './requests';

function textToParagraph(text) {
  return `<p>${text}</p>`;
}

function sendRequests() {
  const requestFirst = getGetRequest('get1');
  const requestSecond = getGetRequest('get2');

  Promise.all([requestFirst, requestSecond]).then((results)=> {
    console.log(results);
    document.write(results.map(textToParagraph).join(''));
    setTimeout(() => { //
      getGetRequest('get3').then((result)=> {
        console.log(result);
        document.write(textToParagraph(result));
      });
    }, 3000)
  })
}

window.onload = function () {
  sendRequests();
};

