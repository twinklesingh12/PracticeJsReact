import React from 'react';
import { useState } from 'react';

export default function App() {
  // React state stores the current value of every form field.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    about: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  function clearForm() {
    setFormData({ name: '', email: '', course: '', about: '' });
  }

  return (
    <main className="page">
      <div className="intro">
        <span className="eyebrow">YOUR STORY, AS YOU TYPE</span>
        <h1>Make it yours<span className="sparkle">✳</span></h1>
        <p>Fill in the fields and watch your preview come to life.</p>
      </div>

      <div className="layout">
        <section className="panel form-panel" aria-labelledby="form-title">
          <div className="panel-heading">
            <span className="icon" aria-hidden="true">✎</span>
            <div><h2 id="form-title">Your details</h2><p>A little introduction goes a long way.</p></div>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange}
              placeholder="e.g. Twinkle Singh" autoComplete="name" />

            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" value={formData.email}
              onChange={handleChange} placeholder="you@example.com" autoComplete="email" />

            <label htmlFor="course">Course</label>
            <input id="course" name="course" value={formData.course} onChange={handleChange}
              placeholder="e.g. Master of Computer Applications" />

            <label htmlFor="about">About you</label>
            <textarea id="about" name="about" rows="4" value={formData.about}
              onChange={handleChange} placeholder="What are you curious about?" />

            <button type="button" onClick={clearForm}>Clear all fields ↺</button>
          </form>
        </section>

        <section className="panel preview-panel" aria-labelledby="preview-title">
          <div className="panel-heading">
            <span className="icon preview-icon" aria-hidden="true">✦</span>
            <div><h2 id="preview-title">Live preview</h2><p>Every change appears here instantly.</p></div>
          </div>

          <div className="preview-card">
            <div className="preview-banner"><span>HELLO THERE ✳</span></div>
            <div className="avatar" aria-hidden="true">{formData.name.trim().charAt(0).toUpperCase() || '?'}</div>
            <div className="preview-content">
              <span className="preview-label">NICE TO MEET YOU</span>
              <h3>{formData.name || 'Your name here'}</h3>
              <p className="course">{formData.course || 'Your course will appear here'}</p>
              <p className="about">{formData.about || 'A few words about you will appear here as you type.'}</p>
              <div className="email">✉ <span>{formData.email || 'your@email.com'}</span></div>
            </div>
          </div>
          <p className="preview-note">Preview only · Nothing is submitted or saved</p>
        </section>
      </div>
    </main>
  );
}
