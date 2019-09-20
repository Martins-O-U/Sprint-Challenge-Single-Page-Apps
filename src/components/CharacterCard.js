import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

export default function CharacterCard({data}) {
  return (
    <div className='card-body'>
      <Card>
        <CardImg top width="100%" src={data.image} alt="Card image cap" />
        <CardBody>
          <div className="card-content">
            <CardTitle><strong>{data.name}</strong></CardTitle>
            <CardSubtitle>({data.gender})</CardSubtitle>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
