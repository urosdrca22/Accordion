import React from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const SingleQuestion = ({title, info}) => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                {info}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default SingleQuestion;