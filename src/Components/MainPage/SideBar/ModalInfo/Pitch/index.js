import React from 'react';
import s from './style.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Pitch = () => {
    return (
        <>
            <p>It would be great to know the skills and their level of each employee.
                Then it will be easier to select a team for a new project or find a
                new team member within the company with the necessary or similar skills.
            </p>

            <p>Each employee would have a personal profile with unique competencies and their level.</p>

            <p>Based on these competencies, interesting news and projects for everyone would be selected.</p>

            <p>Yes, there is a 360 system. It allows you to improve relations between employees,
                identify problems in the team, determine those employee competencies that need to be developed.
            </p>
            <p>But this system cannot objectively assess the skills of an employee and it is easy to manipulate such assessments.</p>

            <p>We offer our own rating system that uses "review360", but gives objective ratings based on the work performed.
            If the team uses Jira or a similar solution, each task completed by the employee has already been evaluated - these are story points.
            </p>

            <p>During the quarter, they are summed up, and at the end of the quarter, we receive the team's and leaders'
                ratings, normalize the total story points to these ratings and increase the progress bars of the employee's
                respective skills.
            </p>

            <p>For socializing the remote regime of the work we decided to develop a virtual office that resembles the
                real office where you can do small breaks and drink a coffee or go to the gym with your colleagues.
                You just go to the corresponding room in our environment, invite colleagues or just join the call.
            </p>

        </>
    );
}

export default Pitch;
