import React from "react";
import styles from "./Header.module.css"
import {Col, Row} from "react-bootstrap";

function Header() {
    return (
        <Row>
            <Col>
                <div className={styles.root}>Header</div>
            </Col>
        </Row>
    )
}

export default Header