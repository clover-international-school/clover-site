// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfdf8] text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* ヒーロー（紹介文） */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Clover International School
          </h1>
          <p className="text-lg leading-relaxed">
            岡崎市周辺の0歳児〜小学生向け
            インターナショナルスクール・アフタースクールです。
          </p>
          <p className="text-lg leading-relaxed">
            英語と中国語に楽しくふれながら、子どもたちが安心して過ごせる
            居場所づくりを大切にしています。ご不明点や日程のご相談は、
            公式LINEからお気軽にお問い合わせください。
          </p>
        </section>

        {/* 公式LINE（QR表示） */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">公式LINEでお問い合わせ</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* QRコード画像（public/line-qr.png を配置） */}
            <Image
              src="/line-qr.png"                // ← public に置いたQR画像のパス
              alt="Clover公式LINEのQRコード"
              width={240}
              height={240}
              className="rounded-lg border bg-white"
              priority
            />

            {/* 説明＋スマホ直リンク */}
            <div className="space-y-3">
              <p className="text-sm md:text-base">
                スマホのカメラで左のQRを読み取り、Clover公式LINEを友だち追加してください。
                ご質問・日程のご相談もLINEで受け付けています。
              </p>

              {/* スマホ閲覧者向けの直リンク（任意） */}
              <a
                href="https://lin.ee/fMOHDla"     // ← 公式LINEの友だち追加URLに差し替え
                target="_blank"
                rel="noopener"
                className="inline-block w-fit px-4 py-2 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
              >
                スマホから友だち追加
              </a>

              <p className="text-xs text-slate-500">
                ※PCの方はスマホでQRを読み取ってください
              </p>
            </div>
          </div>
        </section>

        {/* Cloverの特徴 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cloverの３つの特徴</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">① たっぷり英語・中国語環境</h3>
              <p className="text-sm md:text-base">
                ネイティブ講師やバイリンガルスタッフとのやり取りを通して、
                遊びの中で自然にことばに親しみます。
              </p>
            </div>
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">② 少人数で一人ひとりをていねいに</h3>
              <p className="text-sm md:text-base">
                子どもの人数をしぼり、表情や気持ちの変化を細かく見守れる体制です。
              </p>
            </div>
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">③ 保護者とのコミュニケーション</h3>
              <p className="text-sm md:text-base">
                連絡帳や面談などを通じて、ご家庭と園の情報共有を大切にしています。
              </p>
            </div>
          </div>
        </section>

        {/* 対象年齢・クラス（幼児優先） */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">対象年齢・クラス</h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <span className="font-semibold">● 0〜2歳（乳児クラス）：</span>
              生活リズムを大切にしながら、歌・手遊び・絵本でことばにふれます。
            </li>
            <li>
              <span className="font-semibold">● 年少〜年長（幼児クラス）：</span>
              遊びと学びを組み合わせ、興味と自信を育てます。
            </li>
            <li>
              <span className="font-semibold">● 小学生（アフタースクール）：</span>
              宿題サポートと英語・中国語アクティビティを実施します。
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
