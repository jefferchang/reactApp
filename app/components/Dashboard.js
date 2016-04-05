import React from 'react'
import { Link } from 'react-router'
import MyButtonController from './buttons/MyButtonController';
class Dashboard extends React.Component {
  render() {
    const { courses } = this.props
    return (
        <div>
          <h2>数据连接测试</h2>
          <div>
            <MyButtonController></MyButtonController>
          </div>
          <h2>Courses</h2>{' '}
          <ul>
            {courses.map(course => (
                <li key={course.id}>
                  <Link to={`/course/${course.id}`}>{course.name}</Link>
                </li>
            ))}
          </ul>
        </div>
    )
  }
}

export default Dashboard
