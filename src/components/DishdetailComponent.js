import { Component } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(selectedDish){
        if(selectedDish == null){
            return <div></div>
        }
        return(
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(selectedDish){
        if(selectedDish == null){
            return(
                <div></div>
            )
        }else{
            const comments = selectedDish.comments.map((comment) => {
                return(
                    <div id = {comment.id}>
                        <div>{comment.comment}</div>
                        <br></br>
                        <div>-- {comment.author}, {(new Date(comment.date)).toDateString()}</div>
                        <br></br>
                    </div>
                )
            });

            return(
                <div>
                    <Card>
                        <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>{comments}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
    }

    render(){
        console.log(this.props);
        return(
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;