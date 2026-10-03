import { useState } from "react";

const BLUE = "#1d4ed8";
const INK = "#0f172a";

const features = [
  { eyebrow: "Bookkeeping", title: "A ledger that reconciles itself overnight", bg: "#1d4ed8", fg: "#fff" },
  { eyebrow: "Ledgerly Assist", title: "Questions in, answers out", bg: "#ccfbf1", fg: INK },
  { eyebrow: "Invoicing", title: "Invoices customers can pay in one tap", bg: "#1e293b", fg: "#fff" },
  { eyebrow: "Tax", title: "No surprises at tax time", bg: "#ccfbf1", fg: INK },
  { eyebrow: "Expenses", title: "Receipts captured, spend under control", bg: "#1e293b", fg: "#fff" },
  { eyebrow: "Reporting", title: "Reports you'll actually read", bg: "#1d4ed8", fg: "#fff" },
];

const tools = [
  { name: "Get paid", body: "Send branded invoices, accept cards and bank transfers, and let automatic reminders chase late payers." },
  { name: "Track spending", body: "Snap receipts on your phone and Ledgerly matches them to bank transactions and the right category." },
  { name: "See cash flow", body: "A rolling 90-day forecast shows what's coming in and going out, so you can plan with confidence." },
  { name: "Stay tax-ready", body: "Sales tax is calculated as you go and year-end summaries are ready to hand to your accountant." },
];

const plans = [
  { name: "Solo", price: 18, for: "Freelancers and sole traders", items: ["Income & expense tracking", "Unlimited invoices", "Receipt capture", "1 user + accountant"] },
  { name: "Studio", price: 32, for: "Small teams getting organised", items: ["Everything in Solo", "Bills & recurring payments", "Project tracking", "3 users + accountant"], popular: true },
  { name: "Growth", price: 54, for: "Growing businesses", items: ["Everything in Studio", "Inventory tracking", "Budgets & forecasts", "10 users + accountant"] },
  { name: "Scale", price: 96, for: "Multi-entity teams", items: ["Everything in Growth", "Multiple entities", "Custom roles & approvals", "25 users + priority support"] },
];

const apps = ["Payments", "Storefront", "Payroll", "Receipts", "CRM", "Time tracking", "Inventory", "Banking"];

const faqs = [
  { q: "What does Ledgerly do?", a: "Ledgerly is an online workspace for small-business finances. It connects to your bank, keeps your ledger reconciled, lets you send invoices and track spending, and turns it all into reports you can actually read." },
  { q: "How much does it cost?", a: "Every plan starts with a free 14-day trial and runs month to month. Plans range from Solo for freelancers to Scale for multi-entity teams." },
  { q: "Which plan should I choose?", a: "Start with the number of people who need access and whether you track projects or stock. You can switch plans at any time and your data comes with you." },
  { q: "Can I connect other apps?", a: "Yes. Ledgerly links with payment processors, e-commerce stores, payroll providers and receipt tools." },
  { q: "What is Ledgerly Assist?", a: "Assist is a built-in helper that answers questions about your numbers in plain language and suggests next steps. Always review its suggestions before acting on them." },
  { q: "Is my data secure?", a: "Data is encrypted in transit and at rest, access is controlled per user, and you can export everything at any time." },
  { q: "Can my accountant join?", a: "Yes. Every plan includes a free seat for your accountant or bookkeeper, with permissions you control." },
];

const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
    <span style={{ width: 32, height: 32, borderRadius: 8, background: BLUE, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>L</span>
    <span style={{ fontWeight: 700, fontSize: 22, color: light ? "#fff" : INK }}>ledgerly</span>
  </a>
);

const Button = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) => (
  <a
    href="#plans"
    className="transition-colors"
    style={{
      display: "inline-block", padding: "12px 24px", borderRadius: 999, fontWeight: 600, textDecoration: "none",
      background: variant === "primary" ? BLUE : "transparent", color: variant === "primary" ? "#fff" : BLUE,
      border: `2px solid ${BLUE}`,
    }}
  >
    {children}
  </a>
);

const container = { maxWidth: 1200, margin: "0 auto", padding: "0 24px" };

function HeroCard() {
  return (
    <div style={{ background: "#eff6ff", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "0 8px 24px rgba(15,23,42,.08)" }}>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Cash on hand</p>
        <p style={{ fontSize: 32, fontWeight: 700, margin: "4px 0 12px", color: INK }}>$48,210</p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
          {[40, 55, 35, 65, 50, 75, 90].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i === 6 ? BLUE : "#bfdbfe" }} />
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: 16 }}>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Ledgerly Assist</p>
          <p style={{ fontSize: 14, margin: "6px 0 0", color: INK }}>Margins rose 4% this month, mainly from lower supplier costs.</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 16, padding: 16 }}>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Estimated tax set aside</p>
          <p style={{ fontSize: 22, fontWeight: 700, margin: "6px 0 0", color: "#0f766e" }}>$3,940</p>
        </div>
      </div>
    </div>
  );
}

export function Ledgerly() {
  const [tool, setTool] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <div style={{ fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif", color: INK, background: "#fff" }}>
      <div style={{ background: INK, color: "#fff", textAlign: "center", padding: "10px 16px", fontSize: 14 }}>
        Limited offer: <strong>50% off</strong> any plan for 3 months. <a href="#plans" style={{ color: "#93c5fd" }}>See plans</a>
      </div>

      <header style={{ borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, background: "#fff", zIndex: 10 }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Logo />
          <nav className="hidden md:flex" style={{ gap: 32, fontWeight: 500 }}>
            {["Features", "Plans & pricing", "Apps", "Learn"].map((n) => (
              <a key={n} href="#" className="hover:text-blue-700" style={{ textDecoration: "none", color: "inherit" }}>{n}</a>
            ))}
          </nav>
          <div className="hidden md:flex" style={{ gap: 16, alignItems: "center" }}>
            <a href="#" style={{ color: INK, textDecoration: "none", fontWeight: 500 }}>Sign in</a>
            <Button>Start free trial</Button>
          </div>
          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Menu" style={{ fontSize: 24, background: "none", border: 0 }}>☰</button>
        </div>
        {menu && (
          <div className="md:hidden" style={{ ...container, display: "flex", flexDirection: "column", gap: 16, paddingBottom: 16 }}>
            {["Features", "Plans & pricing", "Apps", "Learn", "Sign in"].map((n) => <a key={n} href="#" style={{ color: INK }}>{n}</a>)}
          </div>
        )}
      </header>

      <section style={{ ...container, padding: "64px 24px" }}>
        <div className="grid md:grid-cols-2" style={{ gap: 48, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h1 style={{ fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.1, fontWeight: 800, margin: 0 }}>Your numbers, sorted. Your time, back.</h1>
            <p style={{ fontSize: 20, color: "#475569", margin: 0 }}>Ledgerly brings bookkeeping, invoicing and cash-flow insight together so you can focus on running the business.</p>
            <div><Button>Compare plans</Button></div>
            <p style={{ fontSize: 14, color: "#475569", margin: 0 }}><span style={{ color: "#f59e0b" }}>★★★★★</span> <strong>4.6</strong> · Sample rating, replace before launch</p>
          </div>
          <HeroCard />
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 16px" }}>One workspace for the whole money side</h2>
            <p style={{ fontSize: 18, color: "#475569", margin: 0 }}>From the first quote to the year-end return, every step lives in Ledgerly and updates the rest automatically.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: f.bg, color: f.fg, borderRadius: 24, padding: 32, minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ textTransform: "uppercase", letterSpacing: 1, fontSize: 12, fontWeight: 700, margin: 0, opacity: 0.8 }}>{f.eyebrow}</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...container, padding: "80px 24px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 32px", textAlign: "center" }}>Tools for every part of the day</h2>
        <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 32 }}>
          {tools.map((t, i) => (
            <button key={t.name} role="tab" aria-selected={tool === i} onClick={() => setTool(i)}
              style={{ padding: "10px 20px", borderRadius: 999, border: `1px solid ${tool === i ? BLUE : "#cbd5e1"}`, background: tool === i ? BLUE : "#fff", color: tool === i ? "#fff" : INK, fontWeight: 600, cursor: "pointer" }}>
              {t.name}
            </button>
          ))}
        </div>
        <div style={{ background: "#eff6ff", borderRadius: 24, padding: 48, textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <h3 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 12px" }}>{tools[tool].name}</h3>
          <p style={{ fontSize: 18, color: "#475569", margin: 0 }}>{tools[tool].body}</p>
        </div>
      </section>

      <section id="plans" style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 12px" }}>Pick the plan that fits today</h2>
            <p style={{ color: "#475569", margin: 0 }}>Free 14-day trial · Cancel anytime · 50% off for 3 months</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
            {plans.map((p) => (
              <div key={p.name} style={{ background: "#fff", borderRadius: 20, padding: 28, border: p.popular ? `2px solid ${BLUE}` : "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{p.name}</h3>
                  {p.popular && <span style={{ fontSize: 12, fontWeight: 700, background: "#dbeafe", color: BLUE, padding: "4px 10px", borderRadius: 999 }}>Popular</span>}
                </div>
                <p style={{ color: "#475569", margin: 0, fontSize: 14 }}>{p.for}</p>
                <div>
                  <span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: 8 }}>${p.price}</span>
                  <span style={{ fontSize: 36, fontWeight: 800 }}>${(p.price / 2).toFixed(0)}</span>
                  <span style={{ color: "#475569" }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, flex: 1 }}>
                  {p.items.map((it) => <li key={it}><span style={{ color: "#0f766e", marginRight: 8 }}>✓</span>{it}</li>)}
                </ul>
                <Button variant={p.popular ? "primary" : "outline"}>Start free trial</Button>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#64748b", textAlign: "center", marginTop: 24 }}>Discounted price applies for the first 3 months, then the standard monthly price applies. Taxes may apply.</p>
        </div>
      </section>

      <section style={{ ...container, padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 12px" }}>Connect the apps you already use</h2>
        <p style={{ color: "#475569", margin: "0 0 32px" }}>Bring payments, sales and payroll data straight into your books.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 16, maxWidth: 800, margin: "0 auto" }}>
          {apps.map((a) => (
            <div key={a} style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 12px", fontWeight: 600, color: "#334155" }}>{a}</div>
          ))}
        </div>
      </section>

      <section style={{ background: BLUE, color: "#fff", padding: "80px 0" }}>
        <div className="grid md:grid-cols-3" style={{ ...container, gap: 48, alignItems: "center" }}>
          <blockquote className="md:col-span-2" style={{ margin: 0 }}>
            <p style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.3, margin: "0 0 16px" }}>"Month-end used to take a weekend. Now it's a coffee and a quick review."</p>
            <footer style={{ opacity: 0.8 }}>Sample testimonial, replace before launch</footer>
          </blockquote>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div><p style={{ fontSize: 44, fontWeight: 800, margin: 0 }}>8 hrs</p><p style={{ margin: 0, opacity: 0.8 }}>saved per month (illustrative figure)</p></div>
            <div><p style={{ fontSize: 44, fontWeight: 800, margin: 0 }}>2x</p><p style={{ margin: 0, opacity: 0.8 }}>faster payments (illustrative figure)</p></div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3" style={{ ...container, padding: "80px 24px", gap: 32 }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>FAQs</h2>
        <div className="md:col-span-2">
          {faqs.map((f) => (
            <details key={f.q} style={{ borderBottom: "1px solid #e2e8f0", padding: "20px 0" }}>
              <summary style={{ fontSize: 18, fontWeight: 600, cursor: "pointer" }}>{f.q}</summary>
              <p style={{ color: "#475569", margin: "12px 0 0", lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer style={{ background: INK, color: "#cbd5e1", padding: "56px 0 32px" }}>
        <div style={container}>
          <div className="grid sm:grid-cols-2 md:grid-cols-4" style={{ gap: 32, marginBottom: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Logo light />
              <p style={{ fontSize: 14, margin: 0 }}>Small-business finances, sorted.</p>
            </div>
            {[["Product", ["Features", "Pricing", "Apps", "Assist"]], ["Company", ["About", "Careers", "Press", "Contact"]], ["Support", ["Help centre", "Guides", "Status", "Security"]]].map(([h, ls]) => (
              <div key={h as string} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ color: "#fff", fontWeight: 700, margin: 0 }}>{h as string}</p>
                {(ls as string[]).map((l) => <a key={l} href="#" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: 14 }}>{l}</a>)}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, borderTop: "1px solid #334155", paddingTop: 24, margin: 0 }}>© 2026 Ledgerly. All rights reserved. · Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}
