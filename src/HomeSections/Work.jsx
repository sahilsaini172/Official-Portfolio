export default function Work() {
  return (
    <section className="flex text-sm p-4 m-4 flex-col border border-neutral-700/50 rounded-2xl md:mx-10">
      <div className="flex items-center gap-2">
        <i class="fa-solid fa-briefcase text-lg text-neutral-500"></i>
        <h2>Work</h2>
      </div>
      <table className="my-4">
        <tr>
          <td>
            Vomychat
            <br />
            <span className="text-xs text-neutral-400">Ui/Ux Designer</span>
          </td>
          <td className="text-xs text-right text-neutral-500 ">2025</td>
        </tr>
      </table>
      <button className="p-2 bg-indigo-400/75 rounded-xl hover:bg-indigo-400/80 focus:outline-offset-2 focus:outline focus:outline-indigo-400">
        <a href="https://www.linkedin.com/in/sahil-saini-866646318/">
          Connect on Linkedin
        </a>
      </button>
    </section>
  );
}
