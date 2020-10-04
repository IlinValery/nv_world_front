import React from 'react';
import s from './style.module.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Skill = ({children, skill}) => {
    return (
        <>
            <Button color="info" className={s.skill}>
                {/*{children.name}*/}
                {skill}
            </Button>{' '}
        </>
    );
}

export default Skill;
