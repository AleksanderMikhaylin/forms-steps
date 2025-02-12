import React from 'react';
import { useState } from 'react'
import './App.css'
import { FormSteps } from './Components/FormSteps/FormSteps'
import { ResForms } from './Components/ResForms/ResForms'

function App() {
  const 
  [form, setForm] = useState({date: '', distance: ''}),
  [results, setRes] = useState([]);

  const handleAdd = (form) => {
    const newResults = [...results];
    const sameDate = newResults.find((o) => o.date === form.date);

    if (sameDate) {
      sameDate.distance = parseFloat(sameDate.distance) + parseFloat(form.distance);
    } else {
      newResults.push(form);
      newResults.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setRes(newResults);
  };

  const btnEdit = (result) => {
    setForm(result)
  }

  const btnRemove = (date) => {
    setRes(results.filter((result) => result.date !== date))
  }

  return (
    <div className='steps'>
      <FormSteps form={form} setForm={setForm} addResult={handleAdd}/>
      <div className='res_forms'>
        <header className='res_header'>
          <div className='res_data'>Дата</div>
          <div className='res_distance'>Пройдено км</div>
          <div className='res_action'>Действия</div>
        </header>
        <ResForms results={results} btnEdit={btnEdit} btnRemove={btnRemove}/>
      </div>
    </div>
  )
}

export default App
