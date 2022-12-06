import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import SingleCourses from '../SingleCourses/SingleCourses';

const AllCourse = () => {
    const [selectCategory, setSelectCategory] = useState(null)
    const { id } = useParams()
    console.log(id)
    const { data: courses = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch(`http://localhost:5000/courses/${id}`)
            .then(res => res.json())
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            {
                courses?.map(course => <SingleCourses
                    key={course.id}
                    course={course}
                    setSelectCategory={setSelectCategory}
                >
                </SingleCourses>)
            }
            {
                selectCategory &&
                <PurchaseModal
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                >
                </PurchaseModal>
            }


        </div>
    );
};

export default AllCourse;