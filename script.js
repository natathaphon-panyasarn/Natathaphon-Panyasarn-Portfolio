// 1. ระบบเปลี่ยนภาษา
// เก็บคำแปลทั้งหมดไว้ในตัวแปร Object
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-works": "Works",
        "nav-contact": "Contact & Connect",
        "welcome-text": "Hello, I'm Natathaphon Panyasarn",
        "myintend-text": "I intend to join the Nara Institute of Science and Technology through the MEXT Scholarship to conduct research on Evaluating Browser-Based WebXR for Serverless AR Task Support: Performance and Usability Compared to Native Apps.",
        "view-works": "View Works",
        "about-title": "About Me",
        "profile-name": "Natathaphon Panyasarn",
        "profile-dob": "Date of Birth: 05 / November / 2007",
        "edu-heading": "Education History",
        "th-emblem": "Emblem",
        "th-level": "Level",
        "th-school": "Institution",
        "th-year": "Academic Year",
        "edu-level-1": "Kindergarten 1 - Grade 1",
        "edu-school-1": "Jatuporn Wittaya School",
        "edu-level-2": "Grade 2",
        "edu-school-2": "Nuannoi Pittaya School",
        "edu-level-3": "Grade 3 - Grade 6",
        "edu-school-3" : "Nong No Wittayakarn School",
        "edu-level-4": "Grade 7 - Grade 9",
        "edu-school-4": "Srikranuanwittayakom School",
        "edu-level-5": "Vocational Certificate 1",
        "edu-school-5": "Kranuan Industrial and Community Education College",
        "edu-level-6": "Vocational Certificate 2-3",
        "edu-school-6": "Dusit commercial College",
        "edu-level-7": "Bachelor's Degree",
        "edu-school-7": "Sripratum University",
        "edu-year-7":"2026 - Present",
        "skills-heading": "Skills & Competencies",
        "skill-lang-title": "Languages Skills",
        "lang-th": "thai",
        "lang-th-desc": "Native",
        "lang-en": "English",
        "lang-en-desc": "Conversational",
        "lang-jp": "Japanese",
        "lang-jp-desc": "Currently studying",
        "skill-tech-title": "Technologies",
        "skill-other-title": "Goals & Other Competencies",
        "other-desc-1": "Interested in WebXR and Augmented Reality (AR) technology for Web Browser applications.",
        "other-desc-2": "Apply my knowledge and skills to create positive change in society.",
        "other-desc-3": "Committed to preparing for the MEXT Scholarship at Nara Institute of Science and Technology.",
        "works-title": "My Works",
        "research-heading": "Research",
        "research-placeholder": "Currently, there is no research data available. Future research works will be displayed here.",
        "project-heading": "Projects",
        "project-placeholder": "Currently, there are no past projects available. Future projects will be displayed here.",
        "contact-title": "Contact & Connect",
        "contact-desc": "Feel free to reach out to me or check out my code repositories through the platforms below!"
    },
    th: {
        "nav-home": "หน้าแรก",
        "nav-about": "เกี่ยวกับผม",
        "nav-works": "ผลงาน",
        "nav-contact": "ช่องทางการติดต่อ",
        "welcome-text": "สวัสดีครับ ผมณฏฐพล ปัญญาสาร",
        "myintend-text": "ผมมีความตั้งใจที่จะเข้าศึกษาต่อที่สถาบันวิทยาศาสตร์และเทคโนโลยีนาระ (Nara Institute of Science and Technology) โดยได้รับทุนรัฐบาลญี่ปุ่น (MEXT) เพื่อทำวิจัยในหัวข้อ Evaluating Browser-Based WebXR for Serverless AR Task Support: Performance and Usability Compared to Native Apps.",
        "view-works": "ดูผลงาน",
        "about-title": "เกี่ยวกับผม",
        "profile-name": "ณฏฐพล ปัญญาสาร",
        "profile-dob": "วันเกิด: 05 / พฤศจิกายน / 2007",
        "edu-heading": "ประวัติการศึกษา",
        "th-emblem": "ตราสัญลักษณ์",
        "th-level": "ระดับการศึกษา",
        "th-school": "สถาบันการศึกษา",
        "th-year": "ปีการศึกษา",
        "edu-level-1": "อนุบาล 1 - ประถมศึกษาปีที่ 1",
        "edu-school-1": "โรงเรียนจตุพรวิทยา",
        "edu-level-2": "ประถมศึกษาปีที่ 2",
        "edu-school-2": "โรงเรียนนวลน้อยพิทยา",
        "edu-level-3": "ประถมศึกษาปีที่ 3 - ประถมศึกษาปีที่ 6",
        "edu-school-3" : "โรงเรียนนงโนวิทยาคาร",
        "edu-level-4": "มัธยมศึกษาปีที่ 1 - มัธยมศึกษาปีที่ 3",
        "edu-school-4": "โรงเรียนศรีกระนวนวิทยาคม",
        "edu-level-5": "ประกาศนียบัตรวิชาชีพ (ปวช.) ปีที่ 1",
        "edu-school-5": "วิทยาลัยอการอาชีพกระนวน",
        "edu-level-6": "ประกาศนียบัตรวิชาชีพ (ปวช.) ปีที่ 2-3",
        "edu-school-6": "วิทยาลัยอาชีวศึกษาดุสิตพณิชยการ",
        "edu-level-7": "ปริญญาตรี",
        "edu-school-7": "มหาวิทยาลัยศรีปทุม",
        "skills-heading": "ทักษะและความสามารถ",
        "edu-year-7":"2026 - ปัจจุบัน",
        "skill-lang-title": "ทักษะด้านภาษา",
        "lang-th": "ไทย",
        "lang-th-desc": "ภาษาหลัก",
        "lang-en": "อังกฤษ",
        "lang-en-desc": "สื่อสารได้",
        "lang-jp": "ญี่ปุ่น",
        "lang-jp-desc": "กำลังศึกษา",
        "skill-tech-title": "Technologies",
        "skill-other-title": "เป้าหมาย & ทักษะอื่นๆ",
        "other-desc-1": "สนใจในเทคโนโลยี WebXR และ Augmented Reality (AR) สำหรับแอปพลิเคชันเบราว์เซอร์",
        "other-desc-2": "นำไปใช้ความรู้และทักษะของตนเพื่อสร้างการเปลี่ยนแปลงเชิงบวกในสังคม",
        "other-desc-3": "มีความมุ่งมั่นที่จะเตรียมตัวสำหรับทุนการศึกษา MEXT ที่สถาบันวิทยาศาสตร์และเทคโนโลยีนาระ",
        "works-title": "ผลงาน",
        "research-heading": "การวิจัย",
        "research-placeholder": "ปัจจุบันยังไม่มีการวิจัย ผลงานวิจัยจะนำมาแสดงในอนาคต",
        "project-heading": "โปรเจค",
        "project-placeholder": "ปัจจุบันยังไม่มีโปรเจค โปรเจคจะนำมาแสดงในอนาคต",
        "contact-title": "ช่องทางการติดต่อ",
        "contact-desc": "ติดต่อพูดคุย หรือดูผลงานโค้ดของผมได้ตามช่องทางด้านล่างนี้เลยครับ!"
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "私について",
        "nav-works": "作品",
        "nav-contact": "連絡先とリンク",
        "welcome-text": "こんにちは、ナタタポン パンヤサーンです",
        "myintend-text": "私は文部科学省の奨学金を得て奈良先端科学技術大学院大学に進学し、Evaluating Browser-Based WebXR for Serverless AR Task Support: Performance and Usability Compared to Native Apps というテーマで研究を行う予定です。",
        "view-works": "作品を見る",
        "about-title": "私について",
        "profile-name": "ナタタポン パンヤサーン",  
        "profile-dob": "生年月日: 2007年11月5日",
        "edu-heading": "学歴",
        "th-emblem": "エンブレム",
        "th-level": "学年",
        "th-school": "学校",
        "th-year": "学年",
        "edu-level-1": "幼稚園1 - 小学校1年生",
        "edu-school-1": "ジャトゥポン ウィッタヤー スクール",
        "edu-level-2": "小学校2年生",
        "edu-school-2": "ヌアンノイ ピッタヤ スクール",
        "edu-level-3": "小学校3年生 - 小学校6年生",
        "edu-school-3" : "ノンノー ウィッタヤカーン スクール", 
        "edu-level-4": "中学校1年生 - 中学校3年生",
        "edu-school-4": "シー・クラヌアン・ウィッタヤーコム・スクール",
        "edu-level-5": "職業高校1年生",
        "edu-school-5": "クラヌアン・インダストリアル・アンド・コミュニティ・エデュケーション・カレッジ",
        "edu-level-6": "職業高校2-3年生",
        "edu-school-6": "ドゥシット・コマーシャル・ヴォケーショナル・カレッジ",
        "edu-level-7": "学士号",
        "edu-school-7": "スィーパトゥム大学",
        "edu-year-7":"2026年 - 現在",
        "skills-heading": "スキル・能力",
        "skill-lang-title": "言語スキル",
        "lang-th": "タイ語",
        "lang-th-desc": "ネイティブレベル",
        "lang-en": "英語",
        "lang-en-desc": "コミュニケーション可能",
        "lang-jp": "日本語",
        "lang-jp-desc": "勉強中",
        "skill-tech-title": "Technologies",
        "skill-other-title": "将来の目標とその他のスキル",
        "other-desc-1": "WebXR と Augmented Reality (AR) 技術に興味があります。Web ブラウザアプリケーション向けです。",
        "other-desc-2": "私の知識とスキルを活用して、社会に良い変化をもたらします。",
        "other-desc-3": "奈良先端科学技術大学院大学の MEXT 奨学金の準備に専念しています。",
        "works-title": "私の作品",
        "research-heading": "研究データ",
        "research-placeholder": "現在、研究データはありません。今後の研究成果はここに表示されます。",
        "project-heading": "過去のプロジェクト",
        "project-placeholder": "現在、過去のプロジェクトはありません。今後のプロジェクトはここに表示されます。",
        "contact-title": "連絡先とリンク",
        "contact-desc": "以下のプラットフォームからお気軽にご連絡いただくか、私のコードリポジトリをご覧ください！"
    }
};

const langSwitch = document.getElementById('lang-switch');

// ฟังก์ชันสำหรับอัปเดตภาษาบนหน้าเว็บ
function updateLanguage(lang) {
    // วนลูปอัปเดตข้อความตาม ID ที่มีอยู่ในแปลภาษา
    for (let key in translations[lang]) {
        const element = document.getElementById(key);
        
        if (element) {
            element.innerText = translations[lang][key];
        }
    }
    // ปรับ Dropdown ให้แสดงภาษาที่ถูกต้อง
    if (langSwitch) {
        langSwitch.value = lang;
    }
}

// โหลดภาษาจาก localStorage ตอนเปิดหน้าเว็บ (ถ้าไม่มีให้ใช้ 'en' เป็นค่าเริ่มต้น)
const savedLang = localStorage.getItem('selectedLang') || 'en';
updateLanguage(savedLang);

// ดักจับเมื่อมีการเลือกภาษาใหม่ที่ Dropdown
if (langSwitch) {
    langSwitch.addEventListener('change', (e) => {
        const lang = e.target.value; 
        localStorage.setItem('selectedLang', lang); // บันทึกค่าลงเบราว์เซอร์
        updateLanguage(lang);
    });
}

// 2. ระบบ Dark / Light Mode
const themeToggle = document.getElementById('theme-toggle');

// ฟังก์ชันตั้งค่าธีม
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerText = 'Light';
    } else {
        document.body.removeAttribute('data-theme');
        if (themeToggle) themeToggle.innerText = 'Dark';
    }
}

// โหลดธีมจาก localStorage ตอนเปิดหน้าเว็บ (ถ้าไม่มีให้ใช้ 'light' เป็นค่าเริ่มต้น)
const savedTheme = localStorage.getItem('selectedTheme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            applyTheme('light');
            localStorage.setItem('selectedTheme', 'light'); // บันทึกค่าลงเบราว์เซอร์
        } else {
            applyTheme('dark');
            localStorage.setItem('selectedTheme', 'dark'); // บันทึกค่าลงเบราว์เซอร์
        }
    });
}