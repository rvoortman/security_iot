var comPort = 'COM5';
var baudRate = 9600;
var codesJson = './codes.json';

var SerialPort = require('serialport').SerialPort;
var serialPort = new SerialPort(comPort, {
    baudrate: baudRate
}, false);

var log = require('./log.js');

var codes = require(codesJson).codes;

//variable for collecting the different buffers we receive
var buffered = '';

serialPort.open(function (error) {
    if (error) {
        log.print('Failed to open serial port: '+error);
    } else {

        log.print('Successfully opened serial port connection.');

        serialPort.on('data', function(data) {
            //append the stringified data tot he buffered variable
            buffered += (data + '');

            //if we detect a new line char (done reading)
            if (buffered.indexOf('\n') > -1) {
                //trim special chars (new line etc.)
                var trimmedData = buffered.trim();
                log.print('Received ' + trimmedData);

                //check if our codes array contains the given code
                if (codes.indexOf(trimmedData) > -1) {
                    log.print('Received valid code; ' + trimmedData);
                    serialPort.write('1\n');
                } else {
                    log.print('Received invalid code; ' + trimmedData);
                    serialPort.write('0\n');
                }

                buffered = '';
            }
        });
    }
});