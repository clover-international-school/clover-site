export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfdf8] text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* ヒーローセクション */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Clover International School
          </h1>
          <p className="text-lg leading-relaxed">
            岡崎市周辺の0歳児〜小学生向け
            インターナショナルスクール・アフタースクールです。
          </p>
          <p className="text-lg leading-relaxed">
            英語と中国語に楽しくふれながら、
            子どもたちが安心して過ごせる居場所づくりを大切にしています。
            まずは説明会のご予約からスタートしましょう。
          </p>

          {/* 説明会ボタン（あとで本物のURLに差し替え） */}
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-emerald-500 text-white text-lg font-bold hover:bg-emerald-600 transition"
          >
            説明会を予約する
          </a>
        </section>

        {/* Cloverの特徴 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cloverの３つの特徴</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">① たっぷり英語・中国語環境</h3>
              <p className="text-sm md:text-base">
                ネイティブ講師やバイリンガルスタッフとのやり取りを通して、
                日常のあいさつや遊びの中で自然にことばに親しみます。
              </p>
            </div>
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">② 少人数で一人ひとりをていねいに</h3>
              <p className="text-sm md:text-base">
                子どもの人数をしぼり、表情や気持ちの変化を細かく見守れる体制を整えています。
              </p>
            </div>
            <div className="border-l-4 border-emerald-400 pl-3">
              <h3 className="font-semibold">③ 保護者とのコミュニケーション</h3>
              <p className="text-sm md:text-base">
                連絡帳や面談などを通じて、ご家庭と園との情報共有を大切にしています。
              </p>
            </div>
          </div>
        </section>

        {/* 対象年齢・コース（幼児を最優先で表示） */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">対象年齢・クラス</h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li>
              <span className="font-semibold">● 0〜2歳（乳児クラス）：</span>
              生活リズムを大切にしながら、英語や中国語の歌・手遊び・絵本にふれる時間をとります。
            </li>
            <li>
              <span className="font-semibold">● 年少〜年長（幼児クラス）：</span>
              遊びと学びを組み合わせたカリキュラムで、ことばへの興味と自信を育てます。
            </li>
            <li>
              <span className="font-semibold">● 小学生（アフタースクール）：</span>
              学校後に通える英語学童。宿題サポートと英語・中国語のアクティビティを行います。
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
