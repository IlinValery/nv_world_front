import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Progress, Container, Row, Col} from 'reactstrap';


class Skill extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        const skills = this.props.skills;
        // skills.map((s, i) => {
        //     console.log("s", i);
        // });
        return (
            <div >
                <Container fluid={true}>

                    {/*<ul className="hr">*/}
                    {/*    {skills.map((skill) =>*/}
                    {/*        <li key={skill} >*/}
                                <Row>
                                    <Col xl={"2"}>
                                        {/*{skill}*/}
                                        C++
                                    </Col>
                                    <Col xl={"10"}>
                                        <Progress value={this.props.skills.value}/>
                                    </Col>
                                </Row>
                    {/*        </li>*/}
                    {/*    )}*/}
                    {/*</ul>*/}



                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Skill);