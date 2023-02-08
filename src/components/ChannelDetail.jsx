import React from 'react'
import {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

const [channelDetail,setChannelDetail] = useState(null)
const [videos,setVideos] = useState([])
const {id} = useParams();



console.log(channelDetail,videos)

useEffect(() =>{
  fetchFromAPI(`channels?part=snippet&id=${id}`)
  .then((data)=> setChannelDetail(data?.items[0]));


  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
  .then((data)=> setVideos(data?.items));
},[id])

  return (
    <Box
      minHeight= "95vh">
        <Box>
          <div
            style = {{
              background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(140,53,31,1) 29%, rgba(231,51,28,1) 48%, rgba(178,88,81,1) 60%, rgba(124,125,133,1) 72%, rgba(103,93,164,1) 79%, rgba(53,175,203,1) 88%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 105%)',
              zIndex : 10,
              height : '300px'
            }}/>

            <ChannelCard channelDetail={channelDetail}
            marginTop="-110px"/>
        </Box>
          <Box
            display ="flex" p="2">
              <Box
                sx={{mr: {sm:'100px'}}} />
                  <Videos videos={videos}/>
              
              
          </Box>
    </Box>
  )
}

export default ChannelDetail