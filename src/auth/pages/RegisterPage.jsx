import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

    return (

        <AuthLayout title='Crear cuenta'>

            <form action="">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            required
                            type="text"
                            placeholder='Nombre'
                        />
                    </Grid>

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
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent={'end'} sx={{ mt: 2 }}>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Iniciar sesion
                        </Link>
                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    )
}
