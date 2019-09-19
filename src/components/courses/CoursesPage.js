import React from "react";
import { connect } from "react-redux";
import { createCourse, loadCourses } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  ComponentDidMount = () => {
    return <h1>hi</h1>;
    this.props.loadCourses().catch(error => {
      throw error;
    });
  };

  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => {
          return <div key={course.title}>{course.title}</div>;
        })}
      </>
    );
  }
}

CoursesPage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps({ courses }) {
  return { courses };
}

const mapDispatchToProps = {
  createCourse,
  loadCourses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
