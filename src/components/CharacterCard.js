import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

export default function CharacterCard({data}) {
  console.log(data.name)
  return (
    <div className='card-body'>
      <Card>
        <CardImg top width="100%" src={data.image} alt="Card image cap" />
        <CardBody>
          <div className="card-content">
            <CardTitle><strong>{data.name}</strong></CardTitle>
            <CardSubtitle>({data.gender})</CardSubtitle>
          </div>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
        </CardBody>
      </Card>
    </div>
  );
}
