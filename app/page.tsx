export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Privacy Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chrome From Installing{" "}
          <span className="text-[#58a6ff]">Things You Never Asked For</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Chrome silently installs software, runs background AI models, and consumes your bandwidth.
          Chrome Bloat Monitor exposes every unauthorized action in real-time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Lightweight agent. Cancel anytime. Works on macOS &amp; Windows.</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e] space-y-2">
          <p><span className="text-[#f85149]">ALERT</span> <span className="text-[#58a6ff]">GoogleUpdate.exe</span> installed without prompt — 14:32:01</p>
          <p><span className="text-[#f85149]">ALERT</span> <span className="text-[#58a6ff]">chrome_elf.dll</span> modified system registry — 14:32:04</p>
          <p><span className="text-[#3fb950]">INFO</span>  Background data upload blocked — 2.4 MB saved — 14:32:09</p>
          <p><span className="text-[#f85149]">ALERT</span> <span className="text-[#58a6ff]">GeminiNano</span> model download attempted — 14:32:15</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time file &amp; registry monitoring",
              "Network traffic analysis",
              "Background AI model detection",
              "Unauthorized install alerts",
              "Data usage dashboard",
              "Email &amp; webhook notifications",
              "macOS + Windows agent"
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">What exactly does Chrome install without permission?</h3>
            <p className="text-[#8b949e] text-sm">Chrome regularly installs update helpers (GoogleUpdate), modifies system registries, and since 2024 has begun downloading on-device AI models like Gemini Nano — all without explicit user consent or clear disclosure.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the monitoring agent work?</h3>
            <p className="text-[#8b949e] text-sm">You install a lightweight background agent (&lt;5 MB) that watches file system events, registry changes, and network connections associated with Chrome processes. It reports findings to your secure dashboard in real-time.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Will this slow down my computer?</h3>
            <p className="text-[#8b949e] text-sm">No. The agent uses OS-native event APIs (FSEvents on macOS, ReadDirectoryChangesW on Windows) and consumes under 0.1% CPU and ~12 MB RAM during normal operation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Chrome Bloat Monitor. Not affiliated with Google.
      </footer>
    </main>
  );
}
