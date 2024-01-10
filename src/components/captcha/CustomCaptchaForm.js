import { Card, CardContent, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { Card, CardContent, Button, TextField } from '@material-ui/core';

const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    // for (let i = 0; i < length; i++) {
    //     result += characters.charAt(Math.floor(Math.random() * characters.length));
    // }

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CustomCaptchaForm = () => {
    const [captchaText, setCaptchaText] = useState(generateRandomString(6));
    const [userInput, setUserInput] = useState('');
    const [isValidCaptcha, setIsValidCaptcha] = useState(false);

    const handleRefreshCaptcha = () => {
        setCaptchaText(generateRandomString(6));
        setUserInput('');
        setIsValidCaptcha(false);
    };

    const handleSubmit = () => {
        if (userInput.toLowerCase() === captchaText.toLowerCase()) {
            // Valid captcha, handle form submission logic here
            setIsValidCaptcha(true);
        } else {
            // Invalid captcha, handle accordingly
            setIsValidCaptcha(false);
        }
    };

    return (
        <>
            <TextField
                label="Current Password"
                fullWidth
                margin="normal"
            />
            <TextField
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
            />
            {/* Custom CAPTCHA */}
            <div>
                <Typography>CAPTCHA: {captchaText}</Typography>
                <TextField
                    label="Enter CAPTCHA"
                    fullWidth
                    margin="normal"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </div>

            {/* Submit button */}
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>

            {/* Refresh CAPTCHA button */}
            <Button color="primary" onClick={handleRefreshCaptcha}>
                Refresh CAPTCHA
            </Button>

            {/* Display validation message */}
            {isValidCaptcha ? (
                <p style={{ color: 'green' }}>CAPTCHA is valid!</p>
            ) : (
                <p style={{ color: 'red' }}>CAPTCHA is invalid. Please try again.</p>
            )}
        </>
    );
};

export default CustomCaptchaForm;
