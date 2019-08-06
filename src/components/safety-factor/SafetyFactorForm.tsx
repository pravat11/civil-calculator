import * as React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import reinforcementBarTypes from '../../constants/reinforcementBarTypes';

const steelGradeOptions = [415, 550];
const concreteStressOptions = [15, 20, 25];

const INITIAL_STATE = {
  formData: {
    columnLength: '200',
    gradeOfSteel: '415',
    loadOnColumn: '60',
    columnBreadth: '200',
    numberOfFloors: '1',
    gradeOfConcrete: '15',
    selectedReinforcementBar: '4Φ10'
  }
};

interface State {
  formData: {
    columnLength: string;
    gradeOfSteel: string;
    loadOnColumn: string;
    columnBreadth: string;
    numberOfFloors: string;
    gradeOfConcrete: string;
    selectedReinforcementBar: string;
  };
}

class ColumnStrengthForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = INITIAL_STATE;
  }

  render() {
    const {
      columnLength,
      // gradeOfSteel,
      // loadOnColumn,
      columnBreadth
      // numberOfFloors,
      // gradeOfConcrete,
      // selectedReinforcementBar
    } = this.state.formData;

    return (
      <Form>
        <Form.Group>
          <Form.Label>Size of column</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Length"
                value={columnLength}
                onChange={(val: any) =>
                  this.setState(prevState => ({ ...prevState, formData: { ...prevState.formData, columnLength: val } }))
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Breadth"
                value={columnBreadth}
                onChange={(val: any) =>
                  this.setState(prevState => ({ ...prevState, formData: { ...prevState.formData, columnLength: val } }))
                }
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Grade of concrete</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control as="select">
                {concreteStressOptions.map((opt, index) => (
                  <option key={`concrete-strength-option-${index}`}>{opt}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <span className="line-40">
                N/mm<sup>2</sup>
              </span>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Grade of steel</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control as="select">
                {steelGradeOptions.map((opt, index) => (
                  <option key={`steel-grade-option-${index}`}>{opt}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <span className="line-40">
                N/mm<sup>2</sup>
              </span>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of reinforcement bar</Form.Label>
          <Form.Control as="select">
            {reinforcementBarTypes.map((opt, index) => (
              <option key={`reinforcement-bar-type-${index}`}>{opt.value}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of floors</Form.Label>
          <Form.Control type="number" placeholder="Number of floors" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Load on column</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control type="number" placeholder="Load on column" defaultValue="60" />
            </Col>
            <Col>
              <span className="line-40">KN per floor</span>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Calculate
        </Button>
      </Form>
    );
  }
}

export default ColumnStrengthForm;
