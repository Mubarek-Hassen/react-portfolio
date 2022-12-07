import { Card, Container, CardContent, CardMedia, Typography, Link } from "@mui/material";

const Projects =()=>{
  return (
    <Container>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://user-images.githubusercontent.com/102003916/169443966-40c3fa50-3723-464f-af02-3912d25de99b.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href="">Rick and Morty</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Container>
  )
}

export default Projects;