import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard({formulaires}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {formulaires.map((el)=><><React.Fragment>
    <CardContent>
    <Typography variant="h5" component="div">
        Nom et Prenom: {el.Prénom}
      </Typography>
      <Typography variant="h5" component="div">
        Email : {el.Mail}
      </Typography>
      <Typography variant="h5" component="div">
        Destinataire : {el.destinataire}
      </Typography>
      <Typography variant="h5" component="div">
      Tél : {el.Tél}
      </Typography>
      <Typography variant="h5" component="div">
      Message : {el.Message}
      </Typography>
    </CardContent>
  </React.Fragment></>)}
      


        </Card>
    </Box>
  );
}
