export default function GraniteRidgeHardscapesWebsite() {
  const services = [
    {
      title: "Paver Patios",
      description:
        "Custom patios built for comfort, curb appeal, and long-term durability in New Hampshire weather.",
    },
    {
      title: "Walkways & Entry Paths",
      description:
        "Clean, welcoming walkways that improve access, safety, and the look of your home.",
    },
    {
      title: "Fire Pits & Outdoor Living",
      description:
        "Backyard spaces designed for relaxing, gathering, and getting more use out of your property.",
    },
    {
      title: "Hardscape Repairs",
      description:
        "Re-leveling, refreshes, and targeted upgrades for patios and walkways that need another shot.",
    },
  ];

  const gallery = [
    "Patio installation",
    "Front walkway refresh",
    "Backyard fire pit area",
    "Outdoor living upgrade",
  ];

  const towns = [
    "Nashua",
    "Hudson",
    "Merrimack",
    "Hollis",
    "Brookline",
    "Amherst",
    "Milford",
    "Tyngsborough",
    "Pepperell",
    "Greater Nashua Area",
  ];

  const highlights = [];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Owner-operated hardscaping in Nashua and surrounding towns
              </div>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                Hardscaping in Nashua, NH
                <span className="block text-slate-300">Granite Ridge Hardscapes</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                Paver patios, walkways, fire pit areas, and outdoor living spaces built to last in Nashua and surrounding towns.
                Owner-operated, detail-focused, and ready to quote your project without the usual hassle.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="tel:603-732-6712"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Call 603-732-6712
                </a>
              </div>
              <div className="mt-8 text-sm text-slate-400">
                Built to Last. Designed for Living.
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Owner Operated
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Free Estimates
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Built for NH Weather
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  Greater Nashua Area
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
                <div className="rounded-[1.5rem] bg-slate-900 p-6">
                  <div className="flex min-h-[420px] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-slate-900/80 p-6">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        Granite Ridge Hardscapes
                      </div>
                      <div className="mt-4 text-3xl font-bold leading-tight">
                        Outdoor spaces that feel like an upgrade the second you step outside.
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Paver Patios</div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Walkways</div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Fire Pits</div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Repairs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Services</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              What Granite Ridge Hardscapes does best
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Focused on the projects that make the biggest impact for homeowners: patios,
              walkways, fire pit areas, and outdoor living upgrades.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">About</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Solid work. Straight answers. Results you can see.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Granite Ridge Hardscapes is a locally owned hardscaping business focused on high-quality
              residential installs across the greater Nashua area. Every project is approached with an
              eye for detail, proper base preparation, and a finish that looks clean from every angle.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This is a hands-on operation built around craftsmanship and communication. You will not get
              shuffled between departments or lost in the mix.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <h3 className="text-2xl font-bold">Service Area</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              {towns.map((town) => (
                <div
                  key={town}
                  className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3"
                >
                  {town}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Gallery</div>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Work that sells the next job
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Swap these placeholders with real project photos as soon as you have them. Before-and-after
              shots will do serious heavy lifting here.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {gallery.map((item, idx) => (
              <div
                key={item}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <div className="bg-slate-900 p-4 transition duration-300 group-hover:scale-[1.02]">
                  <div className="flex min-h-[320px] items-end rounded-[1.5rem] border border-white/10 bg-slate-900/40 p-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        Project 0{idx + 1}
                      </div>
                      <div className="mt-2 text-lg font-bold">{item}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Request a Quote</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Let us talk about your project
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Whether you are planning a new patio, a front walkway refresh, or a backyard fire pit area,
              Granite Ridge Hardscapes is ready to take a look.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>
                <span className="font-semibold text-white">Phone:</span> 603-732-6712
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span> info@graniteridgehardscapes.com
              </div>
              <div>
                <span className="font-semibold text-white">Service Area:</span> Greater Nashua area
              </div>
            </div>
          </div>

          <form
  action="https://formspree.io/f/mojkngyw"
  method="POST"
  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl"
>
  <div className="grid gap-5 md:grid-cols-2">

    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
      <input
        name="name"
        type="text"
        required
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">Phone</span>
      <input
        name="phone"
        type="tel"
        required
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      />
    </label>

    <label className="block md:col-span-2">
      <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
      <input
        name="email"
        type="email"
        required
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">Town</span>
      <input
        name="town"
        type="text"
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      />
    </label>

    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">Project Type</span>
      <select
        name="projectType"
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      >
        <option>Patio</option>
        <option>Walkway</option>
        <option>Fire Pit Area</option>
        <option>Repair or Re-leveling</option>
        <option>Other</option>
      </select>
    </label>

    <label className="block md:col-span-2">
      <span className="mb-2 block text-sm font-medium text-slate-300">Project Details</span>
      <textarea
        name="details"
        rows={5}
        required
        className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
      />
    </label>

  </div>

  <input
    type="hidden"
    name="_subject"
    value="New estimate request from Granite Ridge Hardscapes website"
  />

  <button
    type="submit"
    className="mt-6 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950"
  >
    Send Request
  </button>

</form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <div>© 2026 Granite Ridge Hardscapes</div>
          <div>Patios • Walkways • Outdoor Living</div>
        </div>
      </footer>
    </div>
  );
}
