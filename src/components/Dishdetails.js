import React,{ Component} from "react";
import { Card, CardTitle, CardImg, CardBody, CardText} from "reactstrap";

class Dishdetail extends Component{
    
    renderComments(comments) {
        if (comments != null) {
    
            const dishcomment = comments.map(comment => {
            return (
                <div className="comments-div" key={comment.id}>
                    <p><strong>{comment.comment}</strong></p>
                    <p><i>-- {comment.author},
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </i></p>
                </div>
            )
        })
        return (
            <div className='col-12 col-md-5 m-3'>
                <h3 className="text-uppercase"> Comments </h3>
                <ul className='list-unstyled'>
                    {dishcomment}
                </ul>

            </div>
        )
        }else{
            return <div></div>
        }
    }

    renderdish(Dish){
        if(Dish != null){
            return(
                <div className="col-12 col-md-5 mt-3">
                <Card>
                    <CardImg width="110%" src={Dish.image} />
                    <CardBody>
                        <CardTitle><strong className="text-uppercase">{Dish.name}</strong></CardTitle>
                        <CardText>{Dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    
    }

    render(){
        const Dish = this.props.selectedDish;
        if(Dish != null){
            const dishes = this.renderdish(Dish);
            const DishCmnts = this.renderComments(Dish.comments)
        return (
            <div className='row'>
                {dishes}
                {DishCmnts}
            </div>
            );
        }else{
            return (<div></div>);
        }
    }

}

export default Dishdetail;