import React,{ Component } from "react";
import { Card, CardTitle, CardImgOverlay,CardImg } from "reactstrap";
import Dishdetail from "./Dishdetails"

class Menu extends Component{
    constructor(props){
        super (props);
        this.state = {
            selectedDish : null
        };
}

    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }
    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-3">
                   <Card key={dish.id}  onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} />
                            <CardImgOverlay>
                                    <CardTitle><strong className="text-uppercase">{dish.name}</strong></CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
              );
        });
        return(<div className="container">
            <div className="row">
                {menu}
            </div>
                <Dishdetail selectedDish={this.state.selectedDish}></Dishdetail>
            </div>);
    }
}

export default Menu;