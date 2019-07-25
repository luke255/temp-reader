const thermometers = require('temper1'),
    device = thermometers.getDevices()[0],
    func = () => {
        thermometers.readTemperature(device, (err, val) => {
            let newTemp = parseFloat(val).toFixed(1);
            if (newTemp !== temp) {
                temp = newTemp;
                console.log(temp + 'ºC');
            }
        });
    };
let temp;
func();
setInterval(func, 1000);