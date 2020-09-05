import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Course = () => {
     const [course, setCourse] = useState(fakeData);

     const [addItem, setAddCourse] = useState([]);

     const addCourse = (props) => {
        if(addItem.indexOf(props) === -1){
            const allCourse  = [...addItem, props];
            setAddCourse(allCourse);
        }
        else{
            alert("already your course added");
        }
        
     }
     
    return (
        <div className="container mt-4">
            <div className="text-center">
               <Cart addItem={addItem}></Cart>
            </div>
            <div className="row">
                {course.map(course => <Card addCourse={addCourse} key={course.id} course={course}></Card>)}
            </div>
        </div>
    );
};

export default Course;