export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Toko Online Saya</h1>
      <p>Website jualan online sederhana</p>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
          <h3>Produk 1</h3>
          <p>Rp 100.000</p>
          <button style={{ background: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: 4 }}>
            Beli
          </button>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
          <h3>Produk 2</h3>
          <p>Rp 200.000</p>
          <button style={{ background: "blue", color: "white", padding: "10px 20px", border: "none", borderRadius: 4 }}>
            Beli
          </button>
        </div>
      </div>
    </div>
  )
}
