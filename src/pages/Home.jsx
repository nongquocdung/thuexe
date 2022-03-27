import React from 'react';
import ResponsiveAppBar from '../components/AppBar/Bar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HorizontalLinearStepper from '../components/Step/StepCar';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
    {
        id: 1,
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        id: 2,
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        id: 3,
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        id: 4,
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    }
]

const CardMUI = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={data.img}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {data.name}
        </Typography>
        <Typography gutterBottom variant='h6' component='div'>
          {data.price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

const Home = () => {
  return (
    <div style={{padding: '10px 50px'}}>
      <br/>
      <div className={'carousel-car-populate'}>
        <h4>Các xe phổ biến</h4>
        <Carousel responsive={responsive}>
            {data.map(item => {
                return <CardMUI key={item.id} data={item}/>
            })}
        </Carousel>
      </div>
      <br/>
      <div className="stepper-car">
        <h4>Quy trình đặt xe</h4>
          <HorizontalLinearStepper/>
      </div>
    </div>
  );
};

export default Home;
