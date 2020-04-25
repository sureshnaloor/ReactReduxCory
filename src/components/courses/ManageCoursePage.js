import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class ManageCoursePage extends React.Component {
  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((err) => {
        alert('loading courses failed' + err);
      });
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((err) => {
        alert('loading authors failed' + err);
      });
    }
  }
  render() {
    return (
      <>
        <h2> Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); // functions in single line.
