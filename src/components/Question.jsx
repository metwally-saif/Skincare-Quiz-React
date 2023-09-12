import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import QuizContext from '../Quiz-context';

function Question(props) {
  const { value, setValue } = useContext(QuizContext);
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const updateAnswers = (e) => {
    e.preventDefault();
    if (answer === "") {
        window.alert("Please choose an answer.");
        return;
    }
    const updatedValue = { ...value, [`q${props.question.n}`]: answer.substring(3) };
    setValue(updatedValue);

    if (props.question.n < 5) {
        navigate(`/q${props.question.n + 1}`);
        return;
    }
    else {
        sessionStorage.setItem("Answers", JSON.stringify(updatedValue));
        navigate('/r');
        return;
    }
  };

  return (
    <div className='q-container'>
        <div className='progress'>
            <CircularProgressbar value={props.question.n / 5 * 100} text={`${props.question.n}/5`}/>
        </div>
        <div className='q-title'>
            <h1 id='question'>{props.question.q}</h1>
        </div>
        <div className='a-section'>
            {props.question.a.map((a, i) => (
            <button
                onClick={() => setAnswer(a)}
                className='answer-btn'
                key={i}
            >
                {a}
            </button>
            ))}
        </div>
        <div className='back-next-sec'>
            <Link to={props.question.n > 1 ? `/q${props.question.n - 1}` : '/'}>
            <button className='back-bt'>Back</button>
            </Link>
            <button onClick={(e) => updateAnswers(e)} className='next-btn'>
            Next question
            <img id='arrow' src='src\assets\arrow.svg' alt='arrow' />
            </button>
        </div>
    </div>
  );
}

export default Question;