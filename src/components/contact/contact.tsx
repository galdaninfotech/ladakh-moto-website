import { $, component$, useStore } from '@builder.io/qwik';

export const Contact = component$(() => {
    const state = useStore({ name: '', email: '', message: '', status: '' });

    const handleSubmit = $(async (event: { preventDefault: () => void; })=>{
        event.preventDefault();
        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                message: state.message
            })
        });
        const result = await response.json();
        state.status = result.message;
    })

  return (
    <div>
        <form preventdefault:submit onSubmit$={handleSubmit} class="mb-30">
            <input
                type="text"
                placeholder="Name"
                value={state.name}
                onInput$={(e) => (state.name = (e.target as HTMLInputElement).value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={state.email}
                onInput$={(e) => (state.email = (e.target as HTMLInputElement).value)}
            />
            <textarea
                placeholder="Message"
                value={state.message}
                onInput$={(e) => (state.message = (e.target as HTMLTextAreaElement).value)}
            />
            <button type="submit">Send</button>
            {state.status && <p>{state.status}</p>}
        </form>

     
    </div>
  );
});
