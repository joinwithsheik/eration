const accountSid = 'ACf1dba1f808d98026b1e378a667108a89';
const authToken = '393da449c9c7252ffca9c9fc20c5d6d2';
const senderNo = '+12029911026';
const client = require('twilio')(accountSid, authToken);


module.exports.alerts = {
    sendOTP : function(toNumber, callback){
        client.messages
        .create({
            body:   'Hi, ' + 
                    this.generateNewOTP(100001,990909).toString() + 
                    ' is Your OTP for eRation Sign In' ,
            from: senderNo,
            to: '+91' + toNumber
        })
        .then(message => {
            console.log(message.sid);
            callback(null, true);
        })
        .catch(error => {
            console.log(error.message);
            callback(error.message, false);
        });
    },

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    generateNewOTP : function(min, max) {  
        return Math.floor(
            Math.random() * (max - min) + min
        );
    }
};

