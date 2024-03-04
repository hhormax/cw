import React from "react";
import classnames from 'classnames'
import s from './ProjectCreationWindow.module.css'
import { Field, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const validateName = value =>{
    if (!value) {
        return 'Required';
    } 
    else if (!/\w/.test(value)
    ) {
        return 'Invalid email address';
    }
}

const validateBudget = value =>{
    if (!value) {
        return 'Required';
    } 
}

const ProjectCreationWindow = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/eventPage')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.content}> 
                <Formik
                    initialValues={{ 
                        email: '', 
                        password: '',
                    }}
                >
                    {({ errors, touched }) => (
                    <Form className={s.form}>
                        <div className={s.loginComponent}>
                            <label className={s.label}>Name</label>
                            <Field className={classnames(s.field, {[s.errorInput]: errors.email && touched.email})}
                                name="email"
                                placeholder="name"
                                validate={validateName}/>
                            {errors.email && touched.email && (<div className={s.error}>{errors.email}</div>)}
                        </div>

                        <div className={s.passComponent}>
                            <label className={s.label}>Budget</label>
                            <Field className={classnames(s.field, {[s.errorInput]: errors.password && touched.password})}
                                name="password"
                                type="password"
                                placeholder="budget"
                                validate={validateBudget}/>
                            {errors.password && touched.password && (<div className={s.error}>{errors.password}</div>)}
                        </div>
                        <button onClick={handleClick} className={s.button} type="submit">Create</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>    
    )
};

export default ProjectCreationWindow;