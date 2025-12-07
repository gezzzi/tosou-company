import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WorkItem = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

export type FeatureItem = {
  title: string;
  sub: string;
  desc: string;
  icon: LucideIcon;
};

export type ServiceItem = {
  en: string;
  jp: string;
  desc: string;
};

export type FlowStep = {
  step: string;
  title: string;
  text: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  detail: string;
  features: string[];
  tag?: string;
};

export type AreaItem = {
  title: string;
  desc: string;
  coverage: string[];
};

export const works: WorkItem[] = [
  {
    id: 1,
    title: "富士市 K様邸",
    category: "外壁 / 無機塗料・高耐久仕上げ",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-e32870533ed2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "沼津市 S様邸",
    category: "屋根 / 遮熱フッ素塗装",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "静岡市 Oマンション",
    category: "大規模修繕 / 防水工事",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "富士宮市 T様邸",
    category: "木部再生 / 特殊塗装",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const features: FeatureItem[] = [
  {
    title: "自社職人による責任施工",
    sub: "CRAFT",
    desc: "30年以上の経験を持つ代表が現場を統括。下地処理から仕上げまで外注に出さず、品質を徹底します。",
    icon: ShieldCheck,
  },
  {
    title: "3社相見積もり歓迎",
    sub: "FAIR",
    desc: "他社の見積もりとの違いを丁寧にご説明。塗料のグレードや工程を明示し、納得感のある提案をお約束します。",
    icon: Layers,
  },
  {
    title: "最長10年保証と定期点検",
    sub: "TRUST",
    desc: "保証書を発行し、施工後の点検も実施。劣化サインが出る前に手当てし、塗膜の寿命を守ります。",
    icon: CheckCircle2,
  },
];

export const services: ServiceItem[] = [
  { en: "Exterior", jp: "外壁塗装", desc: "美観と保護を両立する、建物のアンチエイジング。" },
  { en: "Roof", jp: "屋根塗装", desc: "遮熱・断熱機能で、暮らしの快適性を向上。" },
  { en: "Waterproof", jp: "防水工事", desc: "雨水の浸入を防ぎ、ベランダ・屋上の寿命を守る。" },
  { en: "Repair", jp: "付帯・改修", desc: "雨樋・木部・鉄部、内装リフォームまで一括対応。" },
];

export const flowSteps: FlowStep[] = [
  { step: "01", title: "現地調査・診断", text: "外壁・屋根の状態をチェック。ドローン調査も可能です。" },
  { step: "02", title: "プラン提案・お見積り", text: "塗料と工程を明細化。3社相見積もり歓迎で比較も安心。" },
  { step: "03", title: "ご契約・色決め", text: "カラーシミュレーションで完成イメージを共有します。" },
  { step: "04", title: "ご近隣挨拶・着工", text: "養生・足場・近隣挨拶を徹底し、安全に着工します。" },
  { step: "05", title: "完了検査・保証", text: "お引き渡し後に保証書を発行。お手入れも丁寧にご説明。" },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "外壁塗装 スタンダード",
    price: "総額 62〜78万円 / 30坪目安",
    detail: "ラジカル制御シリコン塗料で、美観とコストのバランスを重視したプラン。",
    features: [
      "高圧洗浄 + 下塗り2回 + 上塗り2回",
      "付帯部・シーリング補修込み",
      "5〜7年の色艶をキープ",
    ],
  },
  {
    name: "プレミアム長寿命",
    price: "総額 82〜110万円 / 30坪目安",
    detail: "無機・フッ素グレードで、紫外線に強く最長10年保証を付帯。",
    features: [
      "無機/フッ素上塗りで高耐候",
      "ドローン含む詳細診断レポート",
      "10年保証 + 年1回点検",
    ],
    tag: "人気",
  },
  {
    name: "屋根 + 外壁セット",
    price: "総額 118〜145万円 / 30坪目安",
    detail: "屋根遮熱塗装と外壁を同時施工。足場を1回で組むからお得。",
    features: [
      "屋根遮熱フッ素 + 外壁ラジカル",
      "雨樋・鉄部など付帯も一括",
      "カラーシミュレーション付き",
    ],
    tag: "おすすめ",
  },
];

export const areaItems: AreaItem[] = [
  {
    title: "富士・富士宮・沼津",
    desc: "海風と火山灰の環境を考慮し、塩害・汚れに強い塗料を選定。",
    coverage: ["富士市", "富士宮市", "沼津市", "三島市"],
  },
  {
    title: "静岡市・清水区",
    desc: "潮風エリアの屋根・外壁に遮熱・防錆仕様で長寿命化を提案。",
    coverage: ["静岡市", "清水区", "焼津市"],
  },
  {
    title: "御殿場・長泉・裾野",
    desc: "寒暖差が大きい地域は下地処理を丁寧に、ひび割れ対策を強化。",
    coverage: ["御殿場市", "裾野市", "長泉町", "清水町"],
  },
];
