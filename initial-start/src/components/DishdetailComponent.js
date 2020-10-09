import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

	renderDish(dish){
		if(dish != null){
			return(
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			)	
		}
		else{
			return(
				<div></div>
			)
		}
	}


	renderComments(dish){
		if(dish != null && dish.comments != null){
			const com = dish.comments.map((comments) => (
			    <li key={comments.id}>
				  <p>{comments.comment}</p>
				  <p>{comments.author}, {comments.date}</p>
				</li>
			));

			return(
			<div>
				<h2>Comments</h2>
			    <ul className="list-unstyled">
					{com}
				</ul>
			</div>
			);
		} 
		else{
			return(
				<div></div>
			);			
		}		
	}
	

	render(){

		const selectedDish = this.props.selectedDish;

		if(selectedDish != null){
			return(
				<div className="container">
					<div className="row" >
							<div className="col-12 col-md-5 m-1">
								{this.renderDish(this.props.selectedDish)}
							</div>
							<div className="col-12 col-md-5 m-1">
								{this.renderComments(this.props.selectedDish)}
							</div>
					</div>	
				</div>
				
			)	
		}
		else{
			return(
				<div></div>
			)
		}
	}
}

export default DishDetail;