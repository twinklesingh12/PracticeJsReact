import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard.jsx';
import ControlledForm from './ControlledForm.jsx';

const assignments = [
  ['Calculator', 'Functions & arithmetic', '+', 'calculator.html'],
  ['To-do list', 'Add, complete & delete tasks', '✓', 'todo.html'],
  ['Registration form', 'JavaScript input validation', '✎', 'registration.html'],
  ['Profile card', 'React components & props', '☺'],
  ['Controlled form', 'Live input preview', '✦'],
  ['Counter app', 'React useState hook', '↗']
];

function Counter() {
  const [count, setCount] = useState(0);
  return <section className="counter-card">
    <span className="mini-label">ONE CLICK AT A TIME</span>
    <h1>Make every click count.</h1>
    <p>A tiny counter with endless possibilities.</p>
    <output className="counter-value" aria-live="polite">{count}</output>
    <div className="counter-buttons">
      <button onClick={() => setCount(value => value - 1)}>− Decrement</button>
      <button onClick={() => setCount(value => value + 1)}>+ Increment</button>
    </div>
    <button className="reset" onClick={() => setCount(0)}>Reset to zero ↺</button>
  </section>;
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => { setHash(window.location.hash); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const match = /^#\/assignment\/([1-6])$/.exec(hash);
  const number = match ? Number(match[1]) : 0;
  useEffect(() => {
    document.title = number ? assignments[number - 1][0] + ' | Assignment Studio' : 'Assignment Studio';
  }, [number]);

  return <>
    <header className="site-header"><a className="brand" href="#/">✳ <span>Assignment Studio</span></a>
      <a href="#/">{number ? '← All assignments' : 'JavaScript + React'}</a></header>
    {!number ? <main className="dashboard">
      <div className="hero"><span className="mini-label">LEARN. BUILD. EXPLORE.</span>
        <h1>Six little projects.<br /><em>One creative space.</em></h1>
        <p>Choose an assignment to open its working demo.</p></div>
      <div className="assignment-grid">{assignments.map(([title, description, icon], index) =>
        <a className={'assignment-tile tile-' + index} href={'#/assignment/' + (index + 1)} key={title}>
          <div className="tile-top"><span className="tile-icon">{icon}</span><span className="tile-number">0{index + 1}</span></div>
          <span className="tile-label">Assignment {index + 1}</span><h2>{title}</h2>
          <p>{description}</p><span className="open-link">Open assignment ↗</span>
        </a>)}</div>
      <p className="dashboard-footer">Built with curiosity & a little creativity ✦</p>
    </main> : <main className="exercise-shell">
      {number <= 3 ? <iframe key={number} className="exercise-frame" title={assignments[number - 1][0]} src={assignments[number - 1][3]} /> :
       number === 4 ? <div className="profile-exercise"><div className="page"><div className="heading"><span>GET TO KNOW ME</span><p>A little card, a little personality.</p></div><ProfileCard name="Twinkle Singh" imageUrl="profile-avatar.svg" description="MCA student who enjoys building useful, friendly web experiences and learning something new every day." /></div></div> :
       number === 5 ? <div className="form-exercise"><ControlledForm /></div> : <div className="counter-page"><Counter /></div>}
    </main>}
  </>;
}
