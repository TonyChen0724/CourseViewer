import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createCourse, loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        throw error;
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        throw error;
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps({ courses, authors }) {
  return {
    courses,
    authors
  };
}

const mapDispatchToProps = {
  createCourse,
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
