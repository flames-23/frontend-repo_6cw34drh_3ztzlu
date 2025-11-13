import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-white/70 backdrop-blur border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold">CR</span>
          <span className="font-semibold text-gray-900">CruiseRent</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#blog" className="hover:text-gray-900">Blog</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#auth" className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">Sign up</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
          <a href="#features" className="block py-2">Features</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#blog" className="block py-2">Blog</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#auth" className="block py-2">Sign up</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 opacity-100">
        <div className="h-[520px] w-full">
          <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Rent cars faster. Grow your fleet smarter.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            CruiseRent is the modern SaaS platform for car rental teams. Manage bookings, pricing, and fleet utilization with real‑time insights.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#auth" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Get Started Free
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">
              See Pricing
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-gray-600">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="h-8 w-8 rounded-full bg-gray-200 border border-white" />
              ))}
            </div>
            <p className="text-sm">Trusted by fast‑moving rental teams</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { title: 'Instant bookings', desc: 'Accept and manage reservations in real‑time with availability rules.' },
    { title: 'Dynamic pricing', desc: 'Auto‑adjust rates based on demand, seasonality, and utilization.' },
    { title: 'Fleet analytics', desc: 'Track mileage, maintenance, and ROI across your entire fleet.' },
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Built for car rental growth</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow transition bg-white">
              <div className="h-10 w-10 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-semibold">{f.title[0]}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Starter', price: 19, features: ['Up to 20 bookings/mo', 'Basic analytics', 'Email support'] },
    { name: 'Growth', price: 49, featured: true, features: ['Unlimited bookings', 'Dynamic pricing', 'Priority support'] },
    { name: 'Fleet', price: 129, features: ['Multi‑location', 'Advanced analytics', 'SLA support'] },
  ]
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Simple pricing</h2>
        <p className="text-center text-gray-600 mt-2">Start free, scale when you’re ready.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.featured ? 'border-blue-600 shadow-xl' : 'border-gray-200 shadow-sm'} bg-white p-6 flex flex-col`}>
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">${p.price}</span>
                <span className="ml-2 text-gray-600">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />{f}</li>
                ))}
              </ul>
              <a href="#auth" className={`mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md ${p.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function useBackendBaseUrl() {
  return useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
}

function AuthSection() {
  const baseUrl = useBackendBaseUrl()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [status, setStatus] = useState({ loading: false, msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, msg: 'Creating your account...' })
    try {
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to register')
      setStatus({ loading: false, msg: 'Welcome aboard! Account created.' })
      setForm({ name: '', email: '', password: '' })
    } catch (err) {
      setStatus({ loading: false, msg: `Error: ${err.message}` })
    }
  }

  return (
    <section id="auth" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Create your free account</h2>
            <p className="mt-2 text-gray-600">Start managing rentals in minutes. No credit card required.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/>Unlimited bookings</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/>Dynamic pricing engine</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/>Fleet analytics</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-gray-700">Full name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} type="text" placeholder="Jane Cooper" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} type="email" placeholder="jane@company.com" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Password</label>
                <input required value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} type="password" placeholder="••••••••" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <button disabled={status.loading} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
                {status.loading ? 'Creating...' : 'Create account'}
              </button>
              {status.msg && <p className="text-sm text-gray-700">{status.msg}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  const baseUrl = useBackendBaseUrl()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blog`)
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch {
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [baseUrl])

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">From our blog</h2>
        <p className="text-center text-gray-600 mt-2">Tips, stories, and product updates for car rental teams.</p>
        {loading ? (
          <p className="text-center text-gray-600 mt-10">Loading posts...</p>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.length === 0 && (
              <div className="col-span-full text-center text-gray-600">No posts yet. Be the first to create one via the API.</div>
            )}
            {posts.map((p) => (
              <article key={p.id} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <div className="text-xs text-blue-700 font-medium">{(p.tags && p.tags.join(' · ')) || 'Cars · Rentals'}</div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-3">{p.excerpt || p.content?.slice(0, 120) || 'Read more'}</p>
                <div className="mt-4 text-xs text-gray-500">By {p.author || 'Team CruiseRent'}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ContactSection() {
  const baseUrl = useBackendBaseUrl()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, msg: 'Sending your message...' })
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ loading: false, msg: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, msg: `Error: ${err.message}` })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s talk</h2>
            <p className="mt-2 text-gray-600">Questions about pricing, features, or onboarding? Send us a note.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="p-4 rounded-lg border border-gray-200 bg-white">24/7 email support</div>
              <div className="p-4 rounded-lg border border-gray-200 bg-white">Personalized onboarding</div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm w-full">
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Email</label>
                  <input required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700">Subject</label>
                <input required value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <button disabled={status.loading} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
                {status.loading ? 'Sending...' : 'Send message'}
              </button>
              {status.msg && <p className="text-sm text-gray-700">{status.msg}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} CruiseRent. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#blog" className="hover:text-gray-900">Blog</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <AuthSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
