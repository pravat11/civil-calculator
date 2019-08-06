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

  _resetForm = () => this.setState({ formData: INITIAL_STATE.formData });

  _handleChange = (field: string, value: string) =>
    this.setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [field]: value
      }
    }));

  render() {
    const {
      columnLength,
      // gradeOfSteel,
      loadOnColumn,
      columnBreadth,
      numberOfFloors
      // gradeOfConcrete,
      // selectedReinforcementBar
    } = this.state.formData;

    return (
      <Form>
        <Form.Group>
          <Form.Label>Size of column(In mm)</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Length"
                value={columnLength}
                onChange={(event: any) => this._handleChange('columnLength', event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Breadth"
                value={columnBreadth}
                onChange={(event: any) => this._handleChange('columnBreadth', event.target.value)}
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
          <Form.Control
            type="number"
            placeholder="Number of floors"
            value={numberOfFloors}
            onChange={(event: any) => this._handleChange('numberOfFloors', event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Load on column</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Load on column"
                value={loadOnColumn}
                onChange={(event: any) => this._handleChange('loadOnColumn', event.target.value)}
              />
            </Col>
            <Col>
              <span className="line-40">KN per floor</span>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit" className="mr-10">
          Calculate
        </Button>
        <Button variant="danger" onClick={this._resetForm}>
          Reset
        </Button>
      </Form>
    );
  }
}

export default ColumnStrengthForm;
