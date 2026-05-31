// Samurai Cleaning Constants

export const COMPANY = {
  name: '株式会社士',
  nameEn: 'SAMURAI CORPORATION',
  tagline: '清潔は、信頼のかたち。',
  phone: '080-5706-1234',
  address: '〒556-0022 大阪府大阪市浪速区元町3丁目1-3 第6辻本ビル201号',
  founded: '2023年11月15日',
  ceo: '代表取締役社長 西田 秀士',
  instagram: 'https://www.instagram.com/osaka.cleaning.samurai/',
};

export const SERVICES = [
  {
    id: 'accommodation',
    number: '01',
    tag: 'ACCOMMODATION',
    title: '民泊清掃・ホテル清掃',
    description: '客室清掃、ベッドメイク、アメニティ補充、ゴミ回収、写真報告まで一貫して対応。ゲストの満足度を高めます。',
    image: 'https://www.samurai-cleaning.osaka.jp/S__62431261.jpg',
    items: [
      '客室清掃・ベッドメイク',
      'アメニティ補充・ゴミ回収',
      'リアルタイムな写真報告',
      'レビュー・評価向上対策',
    ],
  },
  {
    id: 'house',
    number: '02',
    tag: 'HOUSE CLEANING',
    title: 'ハウスクリーニング',
    description: '定期清掃から退去後の空室クリーニングまで。水回りやエアコンなど、専門技術で丁寧に仕上げます。',
    image: 'https://www.samurai-cleaning.osaka.jp/S_Cleaning_002.jpg',
    items: [
      '定期清掃・日常清掃',
      '退去後の空室クリーニング',
      '水回り（キッチン・浴室・トイレ）',
      'エアコン等の専門清掃',
    ],
  },
  {
    id: 'commercial',
    number: '03',
    tag: 'COMMERCIAL',
    title: '店舗清掃・オフィス清掃',
    description: '飲食店やオフィスなど、業種に合わせたプラン。営業時間外の対応も可能で、清潔な環境を維持します。',
    image: 'https://www.samurai-cleaning.osaka.jp/S_bank_cleaning_01.jpg',
    items: [
      '飲食店・オフィスの定期清掃',
      '柔軟なスケジュール調整',
      'スポット清掃・床ワックス',
      '厨房清掃・ダクト清掃',
    ],
  },
];

export const REASONS = [
  {
    id: 'quality',
    icon: 'fa-medal',
    number: 'REASON 01',
    title: 'ホテル基準の高品質な清掃技術',
    description: '一流ホテルでの実績に基づいた、細部まで妥協のない清掃品質をお約束します。',
  },
  {
    id: 'sincerity',
    icon: 'fa-user-check',
    number: 'REASON 02',
    title: '誠実で丁寧なスタッフ対応',
    description: '「士」の名に恥じぬよう、マナーを徹底し、誠実なコミュニケーションを大切にします。',
  },
  {
    id: 'flexibility',
    icon: 'fa-calendar-check',
    number: 'REASON 03',
    title: '急な依頼にも対応柔軟な体制',
    description: '民泊特有の急な予約変動や当日依頼にも、可能な限り柔軟に対応いたします。',
  },
  {
    id: 'support',
    icon: 'fa-concierge-bell',
    number: 'REASON 04',
    title: '民泊運営を総合的にサポート',
    description: '清掃だけでなく、消耗品の管理や写真報告など、運営者さまの負担を軽減します。',
  },
  {
    id: 'onestop',
    icon: 'fa-truck-loading',
    number: 'REASON 05',
    title: '不用品回収までワンストップ対応',
    description: '清掃とセットで残置物回収も依頼可能。退去時などの手間を大幅にカットします。',
  },
];

export const FLOW = [
  {
    step: 'STEP 01',
    icon: 'fa-comments',
    title: 'お問い合わせ',
    description: 'お電話またはメールフォームよりお気軽にご相談ください。',
  },
  {
    step: 'STEP 02',
    icon: 'fa-search-location',
    title: '現地調査・見積もり',
    description: '状況を確認し、明確な料金をご提示します。相談・見積もりは無料です。',
  },
  {
    step: 'STEP 03',
    icon: 'fa-file-contract',
    title: 'ご契約・日程調整',
    description: '内容にご納得いただければご契約。作業日程を確定します。',
  },
  {
    step: 'STEP 04',
    icon: 'fa-broom',
    title: '清掃作業',
    description: '専門スタッフが丁寧に作業。完了後は写真報告も可能です。',
  },
  {
    step: 'STEP 05',
    icon: 'fa-clipboard-check',
    title: '完了確認・お支払い',
    description: '作業完了を確認いただき、お支払いとなります。アフターケアも万全です。',
  },
];

export const PARTNERS = [
  'ハイアットリージェンシー',
  'インターコンチネンタル',
  'グランドプリンスホテル',
  'リーガロイヤルホテル',
];

export const STATS = [
  { label: '大阪での契約実績', value: 300, unit: '室以上' },
  { label: '365日受付体制', value: 24, unit: '時間' },
  { label: '誠実・丁寧な対応', value: 100, unit: '%' },
  { label: '見積もり・相談無料', value: 0, unit: '円' },
];
