import "./App.css";
import React, { useState, useEffect } from "react";
import { Col, Row, Form, Table } from "react-bootstrap";
import { userData } from "./fakedata";

function App() {
  let userdata = userData;
  useEffect(() => {
    setPatientData(JSON.parse(JSON.stringify(userdata)));
  }, [userdata]);
  const [patientData, setPatientData] = useState([]);
  const handleData = (e) => {
    let patientName = e.target.value.toLowerCase();
    console.log(e.target.value);
    if (patientName.length > 0) {
      if (patientData !== undefined) {
        let data = patientData;
        let tempData = [];
        data.forEach((item, i) => {
          let tempname = item.patientName.toLowerCase();
          if (tempname.includes(patientName) === true) {
            // setPatientData([patientData[i]]);
            // setclickedvalue(i);
            tempData.push(item);
          }
        });
        if (tempData.length > 0) {
          setPatientData(tempData);
        }
      }
    } else {
      if (patientData !== undefined) {
        setPatientData(JSON.parse(JSON.stringify(userdata)));
      }
    }
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Large text"
              onChange={(e) => handleData(e)}
              onInputCapture={(e) => handleData(e)}
            />
          </Col>
          <Col lg={12} md={12} sm={12}>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {patientData.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      className="col-md-12 col-lg-12 col-xl-12 m-b-10 bd-10 p-0"
                      id="pat_card_wrap"
                    >
                      <td>{i}</td>
                      <td>{item.patientName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
