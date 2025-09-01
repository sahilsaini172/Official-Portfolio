const inputStyle =
  "p-2 rounded-lg bg-neutral-500/10 border border-neutral-700 w-full placeholder:text-neutral-500 focus:outline focus:outline-indigo-400 focus:ease-linear focus:duration-400  active:outline active:outline-indigo-400";

export default function Contact() {
  return (
    <section className="flex text-sm p-4 m-4 flex-col border border-neutral-700/50 rounded-2xl">
      <div className="flex items-center gap-2">
        <i class="fa-solid fa-envelope text-lg text-neutral-500"></i>
        <h2>Contact</h2>
      </div>
      <p className="my-4 text-neutral-400 ">
        Get in touch below and I'll get back to you as soon as possible
      </p>
      <form action="" className="flex flex-col gap-4 mt-2 ">
        <input
          type="text"
          name="clientName"
          id="clientName"
          placeholder="Name"
          className={inputStyle}
        />
        <input
          type="email"
          name="emailName"
          id="emailName"
          placeholder="Email"
          className={inputStyle}
        />
        <textarea
          name="query"
          id="query"
          placeholder="How can i help you?"
          cols={30}
          rows={5}
          className={inputStyle}
        ></textarea>
        <button
          type="submit"
          className="p-2 bg-indigo-400/75 rounded-xl hover:bg-indigo-400/80 focus:outline-offset-2 focus:outline focus:outline-indigo-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
