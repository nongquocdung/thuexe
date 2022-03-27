import React from 'react';
import { List } from 'antd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const data = [
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://vcdn-vnexpress.vnecdn.net/2021/05/22/ferrari-vne-1621607920-8880-1621646312.jpg',
        name: 'Ferrari',
        price: 1300
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Lamborghini',
        price: 1200
    },
    {
        img: 'https://autopro8.mediacdn.vn/2022/1/24/photo-1-16429933601762136203782.jpg',
        name: 'Ferrari',
        price: 1300
    }
]

const ListCar = () => {
  return (
    <div style={{padding: "60px 80px"}}>
        <h2>Danh sách các xe</h2>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 3,
        }}
        dataSource={data}
        pagination={{
          pageSize: 12,
        }}
        renderItem={(item) => (
          <List.Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={item.img}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  {item.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Choose
                </Button>
              </CardActions>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListCar;
