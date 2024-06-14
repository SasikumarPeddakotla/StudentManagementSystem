import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import studentImage from '../../images/studentImage.png'

const StudentProfile = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/students/student/${id}`);
                setStudent(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching student data');
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container my-5">
            {student ? (
                <div className="card mx-auto p-4 shadow" style={{ maxWidth: '500px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 text-center ml-5">
                            <img
                                src={student.image || studentImage}
                                alt={`${student.firstname} ${student.lastname}`}
                                className="img-fluid rounded" 
                                style={{width:'150px'}}
                            />
                            <div className="mt-3">
                                {student.phone && <a href={`tel:${student.phone}`} className="btn btn-outline-primary mx-1">
                                    <FaPhone /> Call
                                </a>}
                                <a href={`mailto:${student.email}`} className="btn btn-outline-secondary mx-1">
                                    <FaEnvelope /> Mail
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{student.firstname} {student.lastname}</h1>
                                <p className="card-text"><strong>Email:</strong> {student.email}</p>
                                <p className="card-text"><strong>Department:</strong> {student.department}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Student not found</div>
            )}
        </div>
    );
};

export default StudentProfile;
