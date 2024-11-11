import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (

        <AuthLayout title='Login'>

            <form action="">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            variant="outlined"
                            fullWidth
                            required
                            type="email"
                            placeholder='correo@gmail.com'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            variant="outlined"
                            fullWidth
                            required
                            type="password"
                            placeholder='********'
                        />
                    </Grid>

                    <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 2 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent={'end'} sx={{ mt: 2 }}>
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    )
}
