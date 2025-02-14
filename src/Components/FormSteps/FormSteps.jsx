import React from 'react';
import './FormSteps.css'
import PropTypes from 'prop-types';

export const FormSteps = ({ form, setForm, addResult} ) => {
    const regDate = /^\d{4}-\d{2}-\d{2}$/;
    const regDistance = /^\d+\.?\d*$/;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!regDate.test(form.date) || !regDistance.test(form.distance)) return;
        //if (!regDistance.test(form.distance)) return;
        addResult(form)
        setForm({ date: '', distance: '' , editNow: undefined})
    }

    let className_form_step_input = (form._id === undefined) ? "form_step_input" : "form_step_input form_step_input_disabled";

    return (
    <form className="form_steps" onSubmit={handleSubmit}>
        <div className="form_step_date">
            <label className="form_step_label">Дата</label>
            <input type="date"
            className={className_form_step_input}
            name={'date'}
            value={form.date}
            onChange={handleInputChange}
            placeholder={'дд.мм.гггг'} />
        </div>
        <div className="form_step_distance">
            <label className="form_step_label">Пройдено</label>
            <input type="number" 
            className="form_step_input" 
            name={'distance'}
            value={form.distance} 
            onChange={handleInputChange}
            placeholder={'км'}/>
        </div>
        <div className="form_step_button_ok">
            <button className="button_ok">ОК</button>
        </div>
    </form>
  )
}

FormSteps.propTypes = {
    form: PropTypes.object.isRequired,
    setForm: PropTypes.func.isRequired,
    addResult: PropTypes.func.isRequired,
  }
  