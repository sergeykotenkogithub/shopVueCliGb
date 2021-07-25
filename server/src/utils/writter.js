const fs = require('fs');
const { writer } = require('repl');

module.exports = async (fileURL, data) => {
    try {
        await fs.writeFile(fileURL, JSON.stringify(data, null, ' '), err => { console.log('err write file ') } );
        return true;
    }
    catch(err) {
        return false;
    }    
}

// writer('/basket.json', {}).then(res => {
//     if(res) {

//     }
// })

// let res = await writer('/basket.json', {});
// if (res) {

// }

