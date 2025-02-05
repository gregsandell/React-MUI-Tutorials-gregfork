import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia
} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
