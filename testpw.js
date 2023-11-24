const bcrypt = require('bcrypt');

const password = 'yourPlainTextPassword';

// Hash the password
bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        console.error(err);
        return;
    }

    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Hashed Password:', hash);

        // Now, let's pretend we are verifying a password
        const enteredPassword = 'admin12345678';

        // Compare enteredPassword with the stored hash
        bcrypt.compare(enteredPassword, hash, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            if (result) {
                console.log('Password Matched!');
            } else {
                console.log('Password Mismatch!');
            }
        });
    });
});
