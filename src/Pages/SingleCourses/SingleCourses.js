import React from 'react';



const SingleCourses = ({ course, setSelectCategory }) => {
    const { name, details, img } = course
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center font-bold">{name}</h2>
                <p>{details.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setSelectCategory(course)} htmlFor="my-modal-3" className="btn btn-primary w-full">
                        Purchase Coures
                    </label>
                   
                </div>
            </div>
        </div>
    );
};

export default SingleCourses;