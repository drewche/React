import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    render() {
        const dish = this.props.dishDetail;

        const comments = dish.comments.map((comment, index) => {
            return (
                <div key={dish.comments[index].id}>
                    <h5 className="mb-4 mt-4">
                        {comment.comment}
                    </h5>
                    <h5 className="mb-4 mt-4">
                        -- {comment.author}, {comment.date}
                    </h5>
                </div>
            );
        });
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <h2>Comments</h2>
                        <div>{comments}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;
