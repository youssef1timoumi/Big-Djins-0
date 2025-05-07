'use client';
import React from 'react';
import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  console.log('were inside handle submit');
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    if (res.ok) {
      alert('✅ Message sent!');
      form.reset();
    } else {
      alert(`❌ Error: ${result.error}`);
    }
  } catch (err) {
    console.error(err);
    alert('❌ Submission failed');
  }
};

const Contact2 = ({ header, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ?? ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <Form
        {...form}
        onSubmit={handleSubmit} // ✅ pass it to the form component
        containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12"
        btnPosition="right"
      />
    </div>
  </WidgetWrapper>
);

export default Contact2;
