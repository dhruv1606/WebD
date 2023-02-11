// const delayedColorChange = function(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay)
//   })
// }

// // delayedColorChange('red', 1000) 
// //   .then(() => delayedColorChange('orange', 1000))
// //   .then(() => delayedColorChange('yellow', 1000))
// //   .then(() => delayedColorChange('green', 1000))
// //   .then(() => delayedColorChange('blue', 1000))
// //   .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('violet', 1000);
//     await delayedColorChange('indigo', 1000);
//     await delayedColorChange('blue', 1000);
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('yellow', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('red', 1000);
// }

const fakeRequest = function(url) {
    return new Promise(resolve, reject) => {
        const delay = Math.floor(Math.random()*4500) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(');
            }
            else {
                resolve(`here is your fake data from ${url}`);
            }
        })
    }
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1/');
        console.log(data1);
        let data2 = await fakeRequest('/page2/');
        console.log(data2);
    }
    catch (err) {
        console.log("Caught in Error!");
        console.log(err);
    }
}