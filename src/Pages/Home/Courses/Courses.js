import React from 'react';
import { Link } from 'react-router-dom';
import IndividualCourses from './IndividualCourses';

const Courses = () => {
    const courses = [
        {
            "id": "01",
            "name": "Web development",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCt_k8OQXraNBm5UrcqaEP42S0Z7faLD7gw&usqp=CAU"
        },

        {
            "id": "02",
            "name": "Computer Science and Programming Specialization",
            "image": "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600"
        },

        {
            "id": "03",
            "name": "Data Structures and Algorithms Specialization",
            "image": "https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=is&k=20&c=l3HsU_oirBYqEkfnN2XMKzedcRE8GOvts1mXqId3Uks="
        },

        {
            "id": "04",
            "name": "Machine Learning Specialization",
            "image": "https://images.pexels.com/photos/7869047/pexels-photo-7869047.jpeg?auto=compress&cs=tinysrgb&w=600"
        },



    ]
    return (
        <div>
            <h1 className='text-center text-3xl mb-8 mt-8 font-bold'>COURSE CATEGORY</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-6'>

                {
                    courses.map(course =><IndividualCourses 
                    key={course.id}
                    course={course}
                    >
                    </IndividualCourses>)
                }

            </div>
        </div>
    );
};

export default Courses;