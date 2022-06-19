import React from 'react'
import { Image } from "./image";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function Document() {
  return (
    <div>
        <div id='portfolio' className='text-center' style={{padding: "100px 0"}}>
            <div className='container'>
                <div className='section-title'>
                <h2>Transactional Document & Promotional Document</h2>
                <p>
                ‛‛ Nous optimisons vos compositions pour insérer un message marketing ou publicitaire sur vos documents de gestion ’’
                </p>
                </div>
                <div className='row'>
                <div className='portfolio-items'>
                   
                
                    
                    {/*{itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                            }
                        />
                        </ImageListItem>
                        ))}*/}
                



                   <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image  title="Graphique 1" largeImage="images/3/image19.jpg" smallImage="images/3/image19.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 2" largeImage="images/3/image24.jpg" smallImage="images/3/image24.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 3" largeImage="images/3/IMAGE20.jpg" smallImage="images/3/IMAGE20.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 4" largeImage="images/3/image21.jpg" smallImage="images/3/image21.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 5" largeImage="images/3/image22.jpg" smallImage="images/3/image22.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 6" largeImage="images/3/image23.jpg" smallImage="images/3/image23.jpg" />
                    </div>

                    <div  className='col-sm-6 col-md-4 col-lg-4'>
                        <Image title="Graphique 7" largeImage="images/3/image24.jpg" smallImage="images/3/image24.jpg" />
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Document

const itemData = [
    {
      img: 'images/3/image19.png',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'images/3/image20.jpg',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'images/3/image21.jpg',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'images/3/image22.jpg',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'images/3/image23.jpg',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'images/3/image24.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
  ];