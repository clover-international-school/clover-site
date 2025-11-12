export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "system-ui",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        Clover International School
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        岡崎市周辺の0歳児〜小学生向け
        インターナショナルスクール・アフタースクールです。
      </p>
      <p style={{ fontSize: "18px", marginBottom: "24px" }}>
        まずは説明会のご予約からスタートしましょう。
      </p>

      {/* 説明会予約ボタン */}
      <a
        href="#"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          borderRadius: "999px",
          backgroundColor: "#10B981", // Cloverグリーン
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        説明会を予約する
      </a>
    </main>
  );
}
