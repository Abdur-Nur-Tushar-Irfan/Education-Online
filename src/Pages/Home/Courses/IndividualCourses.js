import React from 'react';
import { Link } from 'react-router-dom';

const IndividualCourses = ({course}) => {
    const {image,name,id}=course
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p></p>
                <div className="card-actions">
                    <Link to={`/allcourses/${id}`} className="btn btn-primary w-full">See Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default IndividualCourses;