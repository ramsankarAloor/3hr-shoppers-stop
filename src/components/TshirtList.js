import { Button, Card, Table } from "react-bootstrap"
import classes from './TshirtList.module.css'
import { useContext } from "react"
import InventoryContext from "../store/inventory-context"

const TShirtList=props=>{
    const invCtx = useContext(InventoryContext)
    const dataRows = invCtx.inventory

    console.log('data rows => ', dataRows)

    const tableRows = dataRows.map((data, index)=>{
        return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>&#8377;{data.price}</td>
                <td>
                    <div className={classes['buttons-container']}>
                        <Button className="btn-light">Buy L <span class="badge text-bg-secondary">{data.large}</span></Button>
                        <Button className="btn-light">Buy M <span class="badge text-bg-secondary">{data.medium}</span></Button>
                        <Button className="btn-light">Buy S <span class="badge text-bg-secondary">{data.small}</span></Button>
                    </div>
                </td>
            </tr>
        )
    })

    return(
        <Card className={classes['for-card']}>
            <Table>
                <thead>
                    <tr>
                        <th>Tshirt name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity available</th>
                    </tr>
                    {tableRows}
                </thead>
            </Table>
        </Card>
    )
}

export default TShirtList