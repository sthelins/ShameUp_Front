import React from "react";
import {Grid, Box, Paper, Button, Typography} from '@mui/material';


import'./Home.css';



function Home() {

    

    return(
        <>
    
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
            <Grid alignItems="center" item xs={12}>
              <Box>
              <img src="https://media.discordapp.net/attachments/988429116711772190/1014536579433369630/SHAME_up.png" alt="Logo do Projeto Integrador Shame Up" width="20" height="100" />
              </Box>
            </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Aqui é o seu lugar de fala</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>fale aqui</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media.discordapp.net/attachments/988429116711772190/1014536579433369630/SHAME_up.png" alt="Logo do Projeto Integrador Shame Up" width="100%" height="100%" />
                </Grid>

                
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
