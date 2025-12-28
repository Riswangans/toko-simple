import { useState } from 'react';
import {
  CreditCard, Download, Shield, Zap,
  Code, Server, Phone, Users,
  CheckCircle, ArrowRight, Star
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('script');

  const products = {
    script: {
      title: "Script Premium",
      description: "Script website & bot otomatis. Setelah bayar, langsung download!",
      features: ["Auto-update", "Dokumentasi lengkap", "Support 24/7"],
      price: "Rp 50.000 - 500.000"
    },
    panel: {
      title: "Panel Pterodactyl",
      description: "Panel hosting game & VPS. Integrasi Atlantic payment.",
      features: ["Auto-setup", "PLTA/PLTC included", "Atlantic payment"],
      price: "Rp 100.000 - 1.000.000"
    },
    nokos: {
      title: "Nomor Kosong (Nokos)",
      description: "Nomor virtual untuk OTP. API RumahOTP terintegrasi.",
      features: ["Auto-refill", "Multi-provider", "API ready"],
      price: "Rp 1.000 - 10.000/nomor"
    },
    medsos: {
      title: "Suntik Media Sosial",
      description: "Tambah followers/likes otomatis. API Fayupedia.",
      features: ["Instant process", "Real accounts", "No password needed"],
      price: "Rp 5.000 - 50.000"
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 1200, margin: '0 auto' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px 0', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Zap size={32} color="#3B82F6" />
          <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>DigitalStore</h1>
=======
    <div style={{ padding: 20 }}>
      <h1>Toko Online Gua</h1>
      <p>Website jualan online sederhana</p>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
          <h3>Produk 1</h3>
          <p>Rp 100.000</p>
          <button style={{ background: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: 4 }}>
            Beli
          </button>
>>>>>>> c94790be32032dbc0188b3b277da51ec814b4b32
        </div>
        <div style={{ display: 'flex', gap: 30 }}>
          <a href="#" style={{ fontWeight: 600 }}>Beranda</a>
          <a href="#" style={{ color: '#6B7280' }}>Produk</a>
          <a href="#" style={{ color: '#6B7280' }}>Cara Beli</a>
          <a href="#" style={{ color: '#6B7280' }}>Dashboard</a>
        </div>
        <button style={{ background: '#3B82F6', color: 'white', padding: '10px 20px', borderRadius: 8, fontWeight: 600 }}>
          Masuk/Daftar
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: 20, marginTop: 30 }}>
        <h1 style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 20 }}>Layanan Digital Premium</h1>
        <p style={{ fontSize: 20, marginBottom: 30, opacity: 0.9 }}>Bayar → Auto-download → Siap pakai!</p>
        <button style={{ background: 'white', color: '#3B82F6', padding: '15px 30px', borderRadius: 10, fontSize: 18, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 10, margin: '0 auto' }}>
          Mulai Belanja <ArrowRight size={20} />
        </button>
      </section>

      {/* Product Tabs */}
      <section style={{ marginTop: 50 }}>
        <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 }}>Kategori Produk</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          {['script', 'panel', 'nokos', 'medsos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 24px',
                borderRadius: 8,
                background: activeTab === tab ? '#3B82F6' : '#F3F4F6',
                color: activeTab === tab ? 'white' : '#4B5563',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {tab === 'script' && <Code size={18} style={{ display: 'inline', marginRight: 8 }} />}
              {tab === 'panel' && <Server size={18} style={{ display: 'inline', marginRight: 8 }} />}
              {tab === 'nokos' && <Phone size={18} style={{ display: 'inline', marginRight: 8 }} />}
              {tab === 'medsos' && <Users size={18} style={{ display: 'inline', marginRight: 8 }} />}
              {products[tab].title}
            </button>
          ))}
        </div>

        {/* Product Detail */}
        <div style={{ background: '#F9FAFB', padding: 40, borderRadius: 15 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
            {activeTab === 'script' && <Code size={40} color="#3B82F6" />}
            {activeTab === 'panel' && <Server size={40} color="#3B82F6" />}
            {activeTab === 'nokos' && <Phone size={40} color="#3B82F6" />}
            {activeTab === 'medsos' && <Users size={40} color="#3B82F6" />}
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 'bold' }}>{products[activeTab].title}</h3>
              <p style={{ color: '#6B7280', marginTop: 5 }}>{products[activeTab].description}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: 15 }}>Fitur:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {products[activeTab].features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={18} color="#10B981" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: 15 }}>Harga:</h4>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: '#3B82F6' }}>
                {products[activeTab].price}
              </div>
              <button style={{ marginTop: 20, background: '#10B981', color: 'white', padding: '12px 24px', borderRadius: 8, fontWeight: 600, border: 'none', cursor: 'pointer', width: '100%' }}>
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ marginTop: 80 }}>
        <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 }}>Cara Kerja</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
          {[
            { icon: CreditCard, title: "Bayar", desc: "Pilih produk & lakukan pembayaran via Atlantic/QRIS" },
            { icon: Download, title: "Auto-Download", desc: "File/link otomatis dikirim setelah payment verified" },
            { icon: Shield, title: "Support", desc: "Bantuan 24/7 via WhatsApp & Telegram" }
          ].map((step, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: 30, background: '#F9FAFB', borderRadius: 15 }}>
              <step.icon size={48} color="#3B82F6" style={{ marginBottom: 20 }} />
              <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: '#6B7280' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ marginTop: 80 }}>
        <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 }}>Testimoni</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30 }}>
          {[
            { name: "Rizki", comment: "Scriptnya work banget, auto-download bikin nggak ribet!" },
            { name: "Sandi", comment: "Panel Pterodactylnya auto-setup, pembayaran via Atlantic lancar." }
          ].map((testi, idx) => (
            <div key={idx} style={{ padding: 25, border: '1px solid #E5E7EB', borderRadius: 12 }}>
              <div style={{ display: 'flex', marginBottom: 15 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} color="#FBBF24" fill="#FBBF24" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: 15 }}>"{testi.comment}"</p>
              <p style={{ fontWeight: 600 }}>- {testi.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: 80, padding: '40px 0', borderTop: '1px solid #E5E7EB', textAlign: 'center', color: '#6B7280' }}>
        <p>© 2024 DigitalStore. Semua layanan digital otomatis.</p>
        <p style={{ marginTop: 10 }}>Support: WhatsApp 0812-XXXX-XXXX | Telegram @digitalstore</p>
      </footer>
    </div>
  );
}
