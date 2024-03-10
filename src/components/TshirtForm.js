import { Button, Card } from "react-bootstrap";
import classes from "./TshirtForm.module.css";
import { useContext, useRef } from "react";
import InventoryContext from "../store/inventory-context";

const TshirtForm = (props) => {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const largeRef = useRef();
  const mediumRef = useRef();
  const smallRef = useRef();

  const invCtx = useContext(InventoryContext)

  function onSubmitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value
    const description = descRef.current.value
    const price = priceRef.current.value
    const large = largeRef.current.value || '0'
    const medium = mediumRef.current.value || '0'
    const small = smallRef.current.value || '0'

    const obj = {name, description, price, large, medium, small}

    console.log(obj)
    invCtx.addToInv(obj)

    nameRef.current.value = ''
    descRef.current.value = ''
    priceRef.current.value = ''
    largeRef.current.value = ''
    mediumRef.current.value = ''
    smallRef.current.value = ''
  }

  return (
    <Card className={classes["for-card"]}>
      <form className={classes.flex} onSubmit={onSubmitHandler}>
        <div className={classes.w20}>
          <label>Tshirt name</label>
          <input
            className="form-control"
            placeholder="Tshirt name"
            ref={nameRef}
          ></input>
        </div>
        <div className={classes.w20}>
          <label>Description</label>
          <input
            className="form-control"
            placeholder="Description"
            ref={descRef}
          ></input>
        </div>
        <div className={classes.w20}>
          <label>Price</label>
          <input
            className="form-control"
            pattern="[0-9]*"
            title="Please enter a valid integer"
            placeholder="Price"
            ref={priceRef}
          ></input>
        </div>
        <div className={classes.w20}>
          <label>Quantity</label>
          <div className={classes.flex}>
            <input
              placeholder="L"
              className={`${classes.input} form-control`}
              pattern="[0-9]*"
              title="Please enter a valid integer"
              ref={largeRef}
            ></input>
            <input
              placeholder="M"
              className={`${classes.input} form-control`}
              pattern="[0-9]*"
              title="Please enter a valid integer"
              ref={mediumRef}
            ></input>
            <input
              placeholder="S"
              className={`${classes.input} form-control`}
              pattern="[0-9]*"
              title="Please enter a valid integer"
              ref={smallRef}
            ></input>
          </div>
        </div>
        <div className={classes["button-div"]}>
          <Button type="submit">Add product</Button>
        </div>
      </form>
    </Card>
  );
};

export default TshirtForm;
