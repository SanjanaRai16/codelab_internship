import React from 'react'
import { useState } from 'react'
import {Box, Typography} from '@mui/material'
import {TextField,Button} from '@mui/material'
//importing Box from mui package 2 ways
//1.import Box from '@mui/material/Box';
//2.import {Box} from '@mui/material';
export default function Products() {
    const[products,setProducts]=useState({
        pname:'',
        pprice:0,
        pcategory:'',
        pimageUrl:''
    })
  return (
    <div>
        <Typography variant='h4' sx={{textAlign:'center'}}>Add form</Typography>
      <Box>
        <TextField id="outlined-basic" label="Enter Product Name" variant="outlined"sx={{m:5}} onChange={(e)=>setProducts({...products,pname:e.target.value})} value={products.pname} />
        <TextField id="outlined-basic" label="Enter Price" variant="outlined" sx={{m:5}} onChange={(e)=>setProducts({...products,pprice:e.target.value})} value={products.pprice} type='number'/>
        <TextField id="outlined-basic" label="Enter Category" variant="outlined" sx={{m:5}} onChange={(e)=>setProducts({...products,pcategory:e.target.value})} value={products.pcategory} />
        <TextField id="outlined-basic" label="Enter image url" variant="outlined" sx={{m:5}} onChange={(e)=>setProducts({...products,pimageUrl:e.target.value})} value={products.pimageUrl} />
          <Button variant="contained" sx={{m:5,p:2}}>Submit</Button>
      </Box>
    </div>
  )
}
 //in mui to use any tag you have import it first from mui package
 //in mui the tags are capital letters first letter
 //only in mui components for styling we use sx attribute,use camelcase