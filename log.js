var fs = require('fs');
var logFile = './log.txt';

module.exports = log = {
    print: function(message){
        console.log(message);
        fs.appendFileSync(logFile, new Date().toISOString() + ' - ' + message + '\n', encoding='utf8');
    }
};