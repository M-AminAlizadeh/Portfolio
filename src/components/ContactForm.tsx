const ContactForm = () => {
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

  return (
    <form
      action={formspreeUrl}
      method="POST"
      className="flex-1 flex flex-col p-4 w-full max-w-md"
    >
      <div className="mb-4">
        <label
          className="dark:text-white block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="dark:text-white block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="dark:text-white block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="bg-transparent shadow appearance-none border rounded min-h-36 max-h-60 w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          placeholder="Message"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-transparent border-2 border-black dark:border-white dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
