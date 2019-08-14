import * as React from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';

import reinforcementBarTypes from '../../constants/reinforcementBarTypes';

const steelGradeOptions = [415, 550];
const concreteStressOptions = [15, 20, 25];

const INITIAL_STATE = {
  formData: {
    columnLength: 200,
    loadOnColumn: 60,
    columnBreadth: 200,
    numberOfFloors: 1,
    gradeOfSteel: steelGradeOptions[0],
    gradeOfConcrete: concreteStressOptions[0],
    selectedReinforcementBar: reinforcementBarTypes[0].value
  },
  strengthOfColumn: null,
  safetyFactor: null
};

interface State {
  formData: {
    columnLength: number;
    gradeOfSteel: number;
    loadOnColumn: number;
    columnBreadth: number;
    numberOfFloors: number;
    gradeOfConcrete: number;
    selectedReinforcementBar: string;
  };
  strengthOfColumn: number | null;
  safetyFactor: number | null;
}

interface SafetyFactorFormProps {
  scrollToBottom: () => void;
}

class SafetyFactorForm extends React.Component<SafetyFactorFormProps, State> {
  constructor(props: SafetyFactorFormProps) {
    super(props);

    this.state = INITIAL_STATE;
  }

  _resetForm = () => this.setState({ formData: INITIAL_STATE.formData, strengthOfColumn: null, safetyFactor: null });

  _handleChange = (field: string, value: string) =>
    this.setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [field]: value
      }
    }));

  _calculateSafetyFactor = (event: any) => {
    event.preventDefault();

    const {
      columnLength,
      columnBreadth,
      gradeOfSteel,
      gradeOfConcrete,
      loadOnColumn,
      numberOfFloors
    } = this.state.formData;
    const reinforcementBarArea = this._getReinforcementBarArea();
    const concreteArea = +columnLength * +columnBreadth - reinforcementBarArea;

    const strengthOfColumn = 0.4 * +gradeOfConcrete * concreteArea + 0.67 * +gradeOfSteel * reinforcementBarArea;
    const safetyFactor = strengthOfColumn / (+loadOnColumn * numberOfFloors * 1000);

    this.setState(
      prevState => ({
        ...prevState,
        safetyFactor,
        strengthOfColumn
      }),
      this.props.scrollToBottom
    );
  };

  _getReinforcementBarArea = () => {
    const selectedReinforcementBar = reinforcementBarTypes.find(
      bar => bar.value === this.state.formData.selectedReinforcementBar
    );

    return selectedReinforcementBar ? selectedReinforcementBar.area : 0;
  };

  render() {
    const {
      safetyFactor,
      strengthOfColumn,
      formData: {
        columnLength,
        gradeOfSteel,
        loadOnColumn,
        columnBreadth,
        numberOfFloors,
        gradeOfConcrete,
        selectedReinforcementBar
      }
    } = this.state;

    return (
      <Form>
        <Form.Group>
          <Form.Label>Size of column(In mm)</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Length"
                value={`${columnLength}`}
                onChange={(event: any) => this._handleChange('columnLength', event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Breadth"
                value={`${columnBreadth}`}
                onChange={(event: any) => this._handleChange('columnBreadth', event.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Grade of concrete</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                as="select"
                value={`${gradeOfConcrete}`}
                onChange={(event: any) => this._handleChange('gradeOfConcrete', event.target.value)}
              >
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
              <Form.Control
                as="select"
                value={`${gradeOfSteel}`}
                onChange={(event: any) => this._handleChange('gradeOfSteel', event.target.value)}
              >
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
          <Form.Control
            as="select"
            value={`${selectedReinforcementBar}`}
            onChange={(event: any) => this._handleChange('selectedReinforcementBar', event.target.value)}
          >
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
            value={`${numberOfFloors}`}
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
                value={`${loadOnColumn}`}
                onChange={(event: any) => this._handleChange('loadOnColumn', event.target.value)}
              />
            </Col>
            <Col>
              <span className="line-40">KN per floor</span>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="primary" type="submit" className="mr-10" onClick={this._calculateSafetyFactor}>
          Calculate
        </Button>
        <Button variant="danger" onClick={this._resetForm}>
          Reset
        </Button>
        {safetyFactor && strengthOfColumn && (
          <Card className="mt-20">
            <Card.Header>Result</Card.Header>
            <Card.Body>
              <Card.Title>Strength of column</Card.Title>
              <Card.Text>{strengthOfColumn.toFixed(2)} N</Card.Text>
              <Card.Title>Safety factor</Card.Title>
              <Card.Text>{safetyFactor.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Form>
    );
  }
}

export default SafetyFactorForm;
