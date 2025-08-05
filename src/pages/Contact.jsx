import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xgvznzdn");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h2>

      {state.succeeded ? (
        <p className="text-green-600 text-center text-lg font-semibold">Merci pour votre message !</p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="border border-gray-300 p-3 rounded"
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="border border-gray-300 p-3 rounded"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            className="border border-gray-300 p-3 rounded"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};
