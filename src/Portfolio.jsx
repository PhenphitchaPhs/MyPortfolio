import { useState } from "react";
import myPhoto from "./assets/รูปนิสิต.jpg";
import {
  Mail,
  FileText,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

/* ไอคอนแบรนด์ (lucide เวอร์ชันใหม่ตัดออกแล้ว จึงใช้ SVG ในไฟล์แทน) */
function Github({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function Linkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* ============================================================
   แก้ข้อมูลทั้งหมดได้ที่ก้อน DATA ด้านล่างนี้ที่เดียว
   ส่วน UI ข้างล่างไม่ต้องแตะก็ได้
   ============================================================ */

const profile = {
  name: "Phenphitcha Phaisan", // เปลี่ยนเป็นชื่อภาษาไทยได้ตามต้องการ
  nameEn: "Phenphitcha Phaisan",
  initials: "PP", // ตัวย่อที่จะโชว์ในวงกลม ถ้าไม่ใส่รูป
  photo: myPhoto, // ใส่ path รูป เช่น "/me.jpg" (วางไฟล์ในโฟลเดอร์ public) เว้นว่างไว้จะโชว์ตัวย่อแทน
  role: "นักศึกษาวิศวกรรมซอฟต์แวร์ · Software Tester Intern",
  headlineTop: "ใช้ AI สร้างได้",
  headlineHighlight: "ทดสอบเป็น",
  tagline:
    "นักศึกษาวิศวกรรมซอฟต์แวร์ที่โฟกัสงานทดสอบซอฟต์แวร์ ชอบออกแบบ Test Case ให้อ่านแล้วทำตามได้จริง ใช้ AI ช่วยสร้างระบบและสคริปต์ทดสอบ แล้วลงมือทดสอบเองอย่างละเอียดก่อนสรุปผลทุกครั้ง",
  location: "พะเยา, ประเทศไทย",
  email: "phenphitcha4848@gmail.com",
  github: "https://github.com/PhenphitchaPhs",
  linkedin: "", // ปิดปุ่ม LinkedIn ไว้ชั่วคราว ใส่ลิงก์กลับเข้ามาได้เมื่อแก้ปัญหายืนยันตัวตนเสร็จ
  resume: "/resume.pdf", // วางไฟล์ resume.pdf ไว้ในโฟลเดอร์ public
  about: [
    "นักศึกษาสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยพะเยา สนใจงานประกันคุณภาพซอฟต์แวร์เป็นหลัก เคยออกแบบ Test Case ให้ระบบจัดการหอพักตั้งแต่ก่อนทีมเริ่มเขียนโค้ด และเขียนชุดทดสอบอัตโนมัติด้วย Playwright, Robot Framework และ Selenium",
    "ใช้ AI ช่วยเขียนโค้ดเป็นหลักในหลายภาษา ทั้ง TypeScript, Python และ Vue 3 แล้วโฟกัสความพยายามของตัวเองไปที่การออกแบบเคสทดสอบ รันทดสอบจริง และเปรียบเทียบผลลัพธ์กับสิ่งที่คาดหวังอย่างละเอียด กำลังมองหาที่ฝึกงานตำแหน่ง Software Tester / QA เพื่อเรียนรู้การทำงานของทีมจริง",
  ],
};

/* ข้อมูลสั้นๆ ที่บริษัทอยากรู้ก่อนรับนักศึกษาฝึกงาน */
const quickFacts = [
  { label: "สถานะ", value: "นักศึกษาวิศวกรรมซอฟต์แวร์" },
  { label: "มหาวิทยาลัย", value: "มหาวิทยาลัยพะเยา" },
  { label: "ช่วงที่ฝึกงานได้", value: "2 พ.ย. 2569 – 26 ก.พ. 2570" },
  { label: "ตำแหน่งที่สนใจ", value: "Software Tester / QA" },
];

/* แถบวิ่ง — ใส่คำสั้นๆ ที่อยากให้คนจำ */
const marquee = [
  "Manual Testing",
  "Test Case Design",
  "Playwright",
  "Robot Framework",
  "Selenium",
  "Postman",
  "E2E Testing",
  "API Testing",
  "CI/CD",
  "Bug Hunting",
];

const skills = [
  {
    group: "Testing",
    accent: "a",
    items: [
      "Manual Testing",
      "Test Case Design",
      "Equivalence Partitioning & BVA",
      "E2E Testing",
      "API Testing",
      "UI Testing",
    ],
  },
  {
    group: "Automation Tools (Basic)",
    accent: "b",
    items: ["Playwright", "Playwright Codegen", "Robot Framework", "Selenium", "Postman"],
  },
  {
    group: "Process & Concepts",
    accent: "d",
    items: ["SDLC & STLC", "Bug Tracking", "Version Control", "CI/CD"],
  },
  {
    group: "เครื่องมือที่เคยใช้งานร่วมกับ AI",
    note: "ใช้ AI ช่วยเขียนโค้ดเป็นหลัก แล้วโฟกัสที่การทดสอบและตรวจสอบผลลัพธ์เอง",
    accent: "c",
    items: [
      "TypeScript / JavaScript",
      "Python",
      "SQL",
      "Vue 3",
      "REST API",
      "GitHub · GitHub Actions",
    ],
  },
  {
    group: "Soft Skills",
    accent: "b",
    items: [
      "ใส่ใจรายละเอียด",
      "คิดวิเคราะห์และแก้ปัญหา",
      "สื่อสารชัดเจน",
      "ทำงานเป็นทีม",
    ],
  },
];

const projects = [
  {
    title: "E2E Testing with Playwright",
    subtitle: "SauceDemo & Coffee Shop · วิชาการทดสอบซอฟต์แวร์ขั้นสูง",
    type: "E2E Testing",
    summary:
      "เขียนสคริปต์ทดสอบอัตโนมัติด้วย Playwright แยกเป็นสองไฟล์ .spec.ts ตามระบบที่ทดสอบ ครอบคลุมเว็บ SauceDemo และเว็บ Coffee Shop",
    highlights: [
      "SauceDemo: ทำ flow Guest checkout และแปลง 3 Test Case จากชุดเอกสาร Test Case ให้เป็นสคริปต์อัตโนมัติ",
      "Coffee Shop: เขียนเพิ่มอีก 3 Test Case",
      "แยกไฟล์ทดสอบตามระบบเพื่อให้ดูแลและรันแยกกันได้",
    ],
    tags: ["Playwright", "TypeScript", "E2E"],
    link: "https://github.com/PhenphitchaPhs/assignment3-playwright",
  },
  {
    title: "Test Case Documentation",
    subtitle: "ระบบจัดการหอพัก · โปรเจคกลุ่ม",
    type: "Test Design",
    summary:
      "ออกแบบและเขียน Test Case 31 เคส ครอบคลุม 5 ฟีเจอร์หลัก ได้แก่ สมัคร/เข้าสู่ระบบ แจ้งเตือน ค่าใช้จ่าย แจ้งซ่อม และจัดการห้องพัก โดยอ้างอิงจากดีไซน์ใน Figma ตั้งแต่ก่อนทีมเริ่มเขียนโค้ด",
    highlights: [
      "ใช้ Equivalence Partitioning และ Boundary Value Analysis เตรียมข้อมูลทดสอบทั้งเคสถูกและเคสผิด",
      "ระบุ Pre-requisite และ Expected Result ให้ครบทุกเคส",
      "ปรับเอกสาร 3 เวอร์ชัน เพิ่มเคสที่ขาดและทำให้แต่ละขั้นตอนอ่านแล้วทำตามได้ทันที",
    ],
    tags: ["Test Case", "Figma", "EP & BVA"],
    link: "https://docs.google.com/spreadsheets/d/1_k7umJeTl0P58EGgXnr8k4JwhfIP-Z26jwurIzL3eqk/edit?usp=sharing",
  },
  {
    title: "Automated Testing with Robot Framework",
    subtitle: "ระบบลงทะเบียนเรียนของมหาวิทยาลัย",
    type: "Automation",
    summary:
      "ออกแบบ Test Scenario ว่าต้องทดสอบหน้าไหนและผู้ใช้ทำอะไรบ้าง แล้วใช้เครื่องมือ AI ช่วยสร้างสคริปต์ Robot Framework และ Selenium ก่อนรันจริงและตรวจผลด้วยตัวเอง",
    highlights: [
      "วางแผนว่าจะทดสอบหน้าไหนและ user action ใดบ้าง",
      "ใช้ AI ช่วยร่างสคริปต์ แล้วรีวิวและแก้เองก่อนนำไปรัน",
      "เก็บภาพหน้าจอผลการรันไว้เป็นหลักฐานประกอบ",
    ],
    tags: ["Robot Framework", "Selenium", "AI-assisted"],
    link: "https://github.com/PhenphitchaPhs/TestRF01",
  },
  {
    title: "Student API — สร้างและทดสอบ REST API",
    subtitle: "งานสอบกลางภาค",
    type: "API Testing",
    summary:
      "สร้าง REST API ด้วย Hono และ TypeScript แล้วทดสอบทุก endpoint ว่าคืนค่าตรงกับที่คาดหวังไหม ได้เข้าใจว่าเบื้องหลัง API ที่ต้องทดสอบทำงานอย่างไร",
    highlights: [
      "ทดสอบทีละ endpoint เทียบผลลัพธ์จริงกับผลลัพธ์ที่คาดหวัง",
      "ใช้เครื่องมือ AI ช่วยพัฒนา แล้วตรวจผลลัพธ์ด้วยตัวเอง",
      "เข้าใจโครงสร้าง REST API และ HTTP method ซึ่งต่อยอดกับงาน API Testing ได้โดยตรง",
    ],
    tags: ["Hono", "TypeScript", "REST API"],
    link: "https://github.com/PhenphitchaPhs/student-api-hono",
  },
  {
    title: "OR-Room — ระบบจัดคิวห้องผ่าตัด",
    subtitle: "โปรเจคกลุ่ม · กำลังพัฒนา",
    type: "Development + Manual Testing",
    summary:
      "ร่วมทีมพัฒนาเว็บแอปจัดคิวห้องผ่าตัด รับผิดชอบ Backend ทั้งหมดคนเดียวและทำ Frontend ประมาณ 30–40% แล้วทดสอบฟีเจอร์ใหม่บนระบบจริงด้วยตัวเองก่อนส่งงาน",
    highlights: [
      "ดูแล Backend ทั้งหมดด้วย Hono และ Cloudflare D1 รวมถึงการเข้าสู่ระบบแยกสิทธิ์และการจัดลำดับคิวผู้ป่วยอัตโนมัติ",
      "ทำ Frontend ราว 30–40% ด้วย Vue 3 และ TypeScript",
      "ทดสอบฟีเจอร์ใหม่บนระบบจริงแบบ Manual เพื่อหาและแก้บั๊ก แล้วตั้ง GitHub Actions ให้รันทุกครั้งที่ Push",
    ],
    tags: ["Hono", "Cloudflare D1", "Vue 3", "Manual Testing"],
    link: "https://project-or-room.vercel.app",
    repo: "https://github.com/USERNAME/or-room", // TODO: ใส่ลิงก์ repo จริงของโปรเจกต์นี้
    note: "ระบบต้องเข้าสู่ระบบก่อนถึงจะเห็นข้างใน ลองใช้บัญชีทดสอบ: อีเมล qa.test01@exmple.com / รหัสผ่าน 123456**",
  },
    {
    title: "E2E Testing — Practice Software Testing",
    subtitle: "งาน Quiz วิชาการทดสอบซอฟต์แวร์ · Playwright",
    type: "E2E Testing",
    summary:
      "เขียนสคริปต์ทดสอบอัตโนมัติด้วย Playwright ทดสอบเว็บ practicesoftwaretesting.com ครอบคลุม 3 Test Case ตั้งแต่การค้นหาสินค้า การจัดการตะกร้า ไปจนถึงการตรวจสอบ validation ตอนลงทะเบียน พร้อมแคปหน้าจอทุกขั้นตอนเป็นหลักฐาน",
        highlights: [
      "ใช้ Playwright Codegen บันทึกการกระทำเบื้องต้นบนเว็บ แล้วนำสคริปต์มาปรับแก้ เพิ่ม assertion และจัดโครงสร้างทดสอบเอง",
      "TC-01: ค้นหาสินค้าด้วยคำว่า Hammer แล้วตรวจสอบว่าผลลัพธ์ทั้ง 6 รายการมีคำค้นหาอยู่จริง",
      "TC-02: เพิ่มสินค้าลงตะกร้า ตรวจสอบจำนวนและยอดรวมในตะกร้าก่อนไปหน้า checkout",
      "TC-03: กรอกฟอร์มลงทะเบียนด้วยรหัสผ่านที่ไม่ตรงเงื่อนไข ตรวจสอบว่าระบบแสดงสถานะ Weak และข้อความ error ใต้ช่อง password ถูกต้อง",
    ],
    tags: ["Playwright", "Playwright Codegen", "TypeScript", "E2E"],
    link: "https://github.com/PhenphitchaPhs/-Quiz-Advance-Software-Testing",
  },
];

const education = [
  {
    period: "2567 — ปัจจุบัน (กำลังศึกษา)",
    title: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
    subtitle: "สาขาวิศวกรรมซอฟต์แวร์",
    org: "มหาวิทยาลัยพะเยา",
    points: ["เกรดเฉลี่ย 3.20"],
  },
];

/* ยังไม่มีใบรับรอง — เว้น array ว่างไว้ การ์ดนี้จะซ่อนอัตโนมัติ
   เมื่อมีแล้วเติมแบบนี้: { name: "ISTQB Foundation Level", issuer: "ISTQB", year: "2570" } */
const certificates = [];

const sections = [
  { id: "about", label: "เกี่ยวกับ" },
  { id: "projects", label: "ผลงาน" },
  { id: "skills", label: "ทักษะ" },
  { id: "experience", label: "การศึกษา" },
  { id: "contact", label: "ติดต่อ" },
];

/* ============================================================
   ชิ้นส่วน UI
   ============================================================ */

const accentMap = {
  a: "bg-brand-800",
  b: "bg-brand-500",
  c: "bg-brand-200",
  d: "bg-brand-400",
};

const dotPattern = {
  backgroundImage: "radial-gradient(#90caf9 1.2px, transparent 1.2px)",
  backgroundSize: "18px 18px",
};

function Squiggle({ className = "" }) {
  return (
    <svg
      className={className}
      width="148"
      height="24"
      viewBox="0 0 148 24"
      fill="none"
      overflow="visible"
      aria-hidden="true"
    >
      <path
        d="M4 12q16-8 32 0t32 0t32 0t32 0"
        stroke="#90caf9"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeading({ kicker, title, note }) {
  return (
    <div className="mb-12">
      <span className="inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-wide text-brand-800">
        <Sparkles size={13} /> {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-800 sm:text-4xl">
        {title}
      </h2>
      {note && <p className="mt-3 max-w-xl text-slate-500">{note}</p>}
      <Squiggle className="mt-3" />
    </div>
  );
}

function Pill({ children, tone = "soft" }) {
  const styles =
    tone === "solid"
      ? "bg-brand-600 text-white"
      : "bg-white text-slate-600 ring-2 ring-brand-100";
  return (
    <span
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${styles}`}
    >
      {children}
    </span>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="relative border-l-2 border-dashed border-brand-200 pb-9 pl-7 last:border-transparent last:pb-0">
      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-100" />
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
        {item.period}
      </p>
      <h4 className="mt-1.5 font-display text-lg font-semibold text-brand-800">
        {item.title}
      </h4>
      {item.subtitle && (
        <p className="mt-0.5 text-sm font-medium text-brand-600">
          {item.subtitle}
        </p>
      )}
      <p className="text-sm text-slate-500">{item.org}</p>
      <ul className="mt-3 space-y-2">
        {item.points.map((p) => (
          <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-200" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ปุ่มอีเมล — คลิกแล้วพยายามเปิดโปรแกรมเมลด้วย mailto ปกติ
   แต่ถ้าเครื่องคนดูไม่มีโปรแกรมเมลผูกไว้ (มักเกิดกับคนที่ใช้ Gmail ผ่านเว็บ)
   จะไม่มีอะไรเกิดขึ้นให้เห็นเลย ปุ่มนี้เลยคัดลอกอีเมลให้ด้วยเผื่อไว้
   แล้วโชว์ข้อความยืนยันเล็กๆ ให้รู้ว่ากดติดแล้ว ไม่ใช่ปุ่มพัง */
function EmailButton({ email, className, children }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <span className="relative inline-flex">
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        {children}
      </a>
      {copied && (
        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          คัดลอกอีเมลแล้ว ✓
        </span>
      )}
    </span>
  );
}

/* ปุ่มนี้เปิดหน้าเขียนอีเมลของ Gmail ในเว็บเบราว์เซอร์ตรงๆ (แท็บใหม่)
   ไม่ต้องพึ่งโปรแกรมเมลของเครื่อง ใช้ได้ทันทีถ้าคนดูล็อกอิน Gmail ค้างไว้ */
function GmailComposeLink({ email, className, children }) {
  const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;
  return (
    <a
      href={composeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/* ============================================================
   หน้าเว็บ
   ============================================================ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("ทั้งหมด");

  const types = ["ทั้งหมด", ...new Set(projects.map((p) => p.type))];
  const visible =
    filter === "ทั้งหมด" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-brand-50 text-slate-800 antialiased">
      <style>{`
        @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: slide 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>

      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-white/85 px-5 py-3 shadow-lg ring-1 ring-brand-100 backdrop-blur">
          <a href="#top" className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg,#2196f3,#0d47a1)" }}
            >
              {profile.initials}
            </span>
            <span className="font-display text-sm font-semibold text-brand-800">
              {profile.nameEn}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-500 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <EmailButton
            email={profile.email}
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 md:block"
          >
            ติดต่อฉัน
          </EmailButton>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-1.5 text-slate-500 md:hidden"
            aria-label="เมนู"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mx-auto mt-2 flex max-w-5xl flex-col rounded-3xl bg-white p-3 shadow-lg ring-1 ring-brand-100 md:hidden">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-50"
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* ---------- Hero ---------- */}
        <section className="relative pt-14 pb-16 sm:pt-20">
          <div
            className="pointer-events-none absolute right-0 top-6 hidden h-64 w-64 rounded-full opacity-60 blur-3xl sm:block"
            style={{ background: "radial-gradient(circle,#90caf9,transparent 70%)" }}
          />

          <div className="relative grid items-center gap-10 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-800 shadow-md ring-1 ring-brand-100">
                <span className="h-2 w-2 rounded-full bg-brand-200" />
                กำลังหาที่ฝึกงาน / Junior QA
              </span>

              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-800 sm:text-6xl">
                {profile.headlineTop}
                <br />
                <span className="relative inline-block">
                  <span
                    className="absolute inset-x-0 bottom-1.5 h-4 -rotate-1 rounded-full"
                    style={{ background: "#90caf9" }}
                  />
                  <span className="relative">{profile.headlineHighlight}</span>
                </span>
              </h1>

              <p className="mt-3 font-display text-lg font-medium text-brand-600">
                {profile.name} · {profile.role}
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-slate-600">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <EmailButton
                  email={profile.email}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-800"
                >
                  <Mail size={16} /> ติดต่อฉัน
                </EmailButton>
                <a
                  href={profile.resume}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-md ring-1 ring-brand-100 transition hover:-translate-y-0.5 hover:text-brand-600"
                >
                  <FileText size={16} /> Resume
                </a>
                <a
                  href={profile.github}
                  className="rounded-full bg-white p-3 text-slate-500 shadow-md ring-1 ring-brand-100 transition hover:-translate-y-0.5 hover:text-brand-600"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    className="rounded-full bg-white p-3 text-slate-500 shadow-md ring-1 ring-brand-100 transition hover:-translate-y-0.5 hover:text-brand-600"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>

              <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-400">
                <MapPin size={14} /> {profile.location}
              </p>
            </div>

            {/* การ์ดรูป */}
            <div className="sm:col-span-2">
              <div className="relative mx-auto max-w-[260px]">
                <div
                  className="absolute -inset-3 rotate-6 rounded-[2rem]"
                  style={dotPattern}
                />
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl ring-1 ring-brand-100">
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-64 w-full rounded-[1.5rem] object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-64 w-full items-center justify-center rounded-[1.5rem] font-display text-6xl font-bold text-white"
                      style={{ background: "linear-gradient(150deg,#2196f3,#0d47a1)" }}
                    >
                      {profile.initials}
                    </div>
                  )}
                </div>
                <span className="absolute -bottom-4 -left-4 rotate-[-8deg] rounded-2xl bg-white px-4 py-2 font-display text-sm font-semibold text-brand-600 shadow-lg ring-1 ring-brand-100">
                  QA in progress
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- แถบวิ่ง ---------- */}
        <div
          className="relative overflow-hidden rounded-full py-3.5 shadow-lg"
          style={{ background: "linear-gradient(90deg,#0d47a1,#2196f3)" }}
        >
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-display text-sm font-medium text-brand-50"
              >
                {m}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-200" />
              </span>
            ))}
          </div>
        </div>

        {/* ---------- About ---------- */}
        <section id="about" className="scroll-mt-28 py-20">
          <SectionHeading kicker="About me" title="สวัสดี ยินดีที่ได้รู้จัก" />

          <div className="grid gap-8 sm:grid-cols-5">
            <div className="space-y-4 sm:col-span-3">
              {profile.about.map((p, i) => (
                <p key={i} className="leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>

            <div className="sm:col-span-2">
              <div className="rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-brand-100">
                <p className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                  ข้อมูล
                </p>
                <dl className="space-y-3.5">
                  {quickFacts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-xs font-medium text-brand-500">
                        {f.label}
                      </dt>
                      <dd className="text-sm font-medium text-brand-800">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section id="projects" className="scroll-mt-28 py-20">
          <SectionHeading
            kicker="Projects"
            title="ผลงานที่ลงมือทำเอง"
            note="โปรเจคฝึกฝนที่ทำเองระหว่างเรียน กดเข้าไปดูเอกสารและโค้ดได้"
          />

          <div className="mb-9 flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={
                  filter === t
                    ? "rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-md"
                    : "rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-500 ring-1 ring-brand-100 transition hover:text-brand-600"
                }
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {visible.map((p, i) => (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white p-7 shadow-md ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span className="pointer-events-none absolute -right-4 -top-5 font-display text-8xl font-bold text-brand-50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  {p.type}
                </span>

                <h3 className="relative mt-4 font-display text-xl font-semibold leading-snug text-brand-800">
                  {p.title}
                </h3>
                <p className="relative text-sm font-medium text-brand-500">
                  {p.subtitle}
                </p>

                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {p.summary}
                </p>

                <ul className="relative mt-5 space-y-2.5 rounded-2xl bg-brand-50/70 p-4">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.note && (
                  <p className="relative mt-4 rounded-xl bg-amber-50 px-3.5 py-2.5 text-xs leading-relaxed text-amber-700 ring-1 ring-amber-100">
                    {p.note}
                  </p>
                )}

                <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={p.link}
                    className="inline-flex w-fit items-center gap-1.5 font-display text-sm font-semibold text-brand-600"
                  >
                    ดูรายละเอียด
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                  {p.repo && (
                    <a
                      href={p.repo}
                      className="inline-flex w-fit items-center gap-1.5 font-display text-sm font-semibold text-slate-500 transition hover:text-brand-600"
                    >
                      <Github size={15} /> ดูโค้ด
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="scroll-mt-28 py-20">
          <SectionHeading kicker="Skills" title="ทักษะและเครื่องมือที่ใช้ได้" />

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((g) => (
              <div
                key={g.group}
                className="rounded-[2rem] bg-white p-6 shadow-md ring-1 ring-brand-100"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className={`h-3 w-3 rounded-full ${accentMap[g.accent]}`}
                  />
                  <h3 className="font-display font-semibold text-brand-800">
                    {g.group}
                  </h3>
                </div>
                {g.note && (
                  <p className="-mt-2 mb-4 text-xs leading-relaxed text-slate-400">
                    {g.note}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Education ---------- */}
        <section id="experience" className="scroll-mt-28 py-20">
          <SectionHeading kicker="Learning" title="การศึกษา" />

          <div
            className={
              certificates.length > 0
                ? "grid gap-10 sm:grid-cols-2"
                : "grid gap-10"
            }
          >
            <div
              className={
                "rounded-[2rem] bg-white p-7 shadow-md ring-1 ring-brand-100" +
                (certificates.length > 0 ? "" : " w-full max-w-xl")
              }
            >
              <h3 className="mb-7 font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                การศึกษา
              </h3>
              {education.map((e) => (
                <TimelineItem key={e.title} item={e} />
              ))}
            </div>

            {certificates.length > 0 && (
              <div className="rounded-[2rem] bg-white p-7 shadow-md ring-1 ring-brand-100">
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                  คอร์สที่เรียน / ใบรับรอง
                </h3>
                <ul className="space-y-2.5">
                  {certificates.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-brand-50/70 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {c.name}
                      </span>
                      <span className="shrink-0 text-xs text-slate-400">
                        {c.issuer} · {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="scroll-mt-28 pb-20 pt-10">
          <div
            className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 text-center shadow-xl sm:px-16"
            style={{ background: "linear-gradient(140deg,#2196f3,#0d47a1)" }}
          >
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle,#90caf9,transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle,#2196f3,transparent 70%)" }}
            />

            <p className="relative font-display text-sm font-medium uppercase tracking-widest text-brand-200">
              Let's talk
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              รับนักศึกษาฝึกงาน QA อยู่ไหม
              <br />
              คุยกันได้เลย
            </h2>
            <p className="relative mx-auto mt-4 max-w-md leading-relaxed text-brand-100">
              กำลังมองหาที่ฝึกงานสาย QA ยินดีคุยและตอบทุกข้อความ
            </p>

            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <GmailComposeLink
                email={profile.email}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-lg transition hover:-translate-y-0.5"
              >
                <Mail size={16} /> {profile.email}
              </GmailComposeLink>
              <a
                href={profile.github}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-2 ring-white/40 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-2 ring-white/40 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-10">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {profile.name} · สร้างด้วย React + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}