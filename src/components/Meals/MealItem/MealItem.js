import { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import './MealItem.module.css'

const MealItem = props => {

  const CartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
    })

  };

  return( 
    <>
    <Grid item xs={3} key={props.id} >
    <Card style={{ height: '100%', width:'100%', borderRadius: '16px', backgroundColor: '#dfefe7', borderColor: '#dfefe7', border: '1px solid #dfefe7'  }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={props.image}
            alt="no image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {props.name}
            </Typography>
            <Typography variant="body2"  component="div"  >
              {props.description}
            </Typography>
            <Typography variant="body2" component="div" > 
              Preço KG: R${props.price}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography variant="body2" component="div" >
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
          </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
</Grid>
</>
  );
}

export default MealItem;