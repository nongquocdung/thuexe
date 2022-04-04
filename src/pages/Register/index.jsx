import React, { useState } from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    Link,
    TextField,
    Typography
} from '@mui/material';

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [read, setRead] = useState(false)

    const onSubmit = (e) => {

    }
    return (
        <>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <form onSubmit={onSubmit}>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Create a new account
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Use your email to create a new account
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            label="First Name"
                            margin="normal"
                            name="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            margin="normal"
                            name="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            value={email}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            variant="outlined"
                        />
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                ml: -1
                            }}
                        >
                            <Checkbox
                                checked={read}
                                name="policy"
                            onChange={(e)=>setRead(e.target.checked)}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                I have read the
                                {' '}
                                <Link
                                    color="primary"
                                    underline="always"
                                    variant="subtitle2"
                                >
                                    Terms and Conditions
                                </Link>
                            </Typography>
                        </Box>
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign Up Now
                            </Button>
                        </Box>
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            Have an account?
                            {' '}
                            <Link
                                variant="subtitle2"
                                underline="hover"
                            >
                                Sign In
                            </Link>
                        </Typography>
                    </form>
                </Container>
            </Box>
        </>
    );
};

export default Register;
