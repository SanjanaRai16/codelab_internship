import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

export default function ActionAreaCard({ allproducts }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, p:2,flexWrap: 'wrap' }}>
      {allproducts.map((product, index) => (
        <Card sx={{ maxWidth: 300 }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.pimageUrl}
              alt={product.pname}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {product.pname}
              </Typography>
              <Typography variant="body2">
                Category: {product.pcategory}
              </Typography>
              <Typography variant="body2">
                Price: ₹{product.pprice}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
