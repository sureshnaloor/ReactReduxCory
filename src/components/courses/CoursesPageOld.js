import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course)); //dispatch is added automagically in props by connect function
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2> Courses</h2>
        <h3> Add Course: </h3>
        <input
          type='text'
          name='title'
          id='title'
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map((course) => {
          return <div key={course.title}> {course.title}</div>;
        })}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, _) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage); // functions in single line.
