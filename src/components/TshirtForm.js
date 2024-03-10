import { Button, Card } from "react-bootstrap";
import classes from "./TshirtForm.module.css";

const TshirtForm = (props) => {
  return (
    <Card className={classes["for-card"]}>
      <form className={classes.flex}>
        <div className={classes.w20}>
          <label>Tshirt name</label>
          <input className="form-control" placeholder="Tshirt name"></input>
        </div>
        <div className={classes.w20}>
          <label>Description</label>
          <input className="form-control" placeholder="Description"></input>
        </div>
        <div className={classes.w20}>
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="Price"
          ></input>
        </div>
        <div className={classes.w20}>
          <label>Quantity</label>
          <div className={classes.flex}>
            <input placeholder="L" className={`${classes.input} form-control`}></input>
            <input placeholder="M" className={`${classes.input} form-control`}></input>
            <input placeholder="S" className={`${classes.input} form-control`}></input>
          </div>
        </div>
        <div className={classes['button-div']}>
          <Button>Add product</Button>
        </div>
      </form>
    </Card>
  );
};

export default TshirtForm;
