# SportBike Mod Guide — Full Rubric Demo

โครงงานตัวอย่างนี้ปรับโครงสร้างให้รองรับรายการประเมินเว็บไซต์ 50 ข้อ โดยยังคงธีม Dark Automotive + Red Accent

## จุดที่ควรแก้ข้อมูลจริง
1. `index.html` — หน้าแรก/แบรนด์
2. `brands/*.html` — หน้าแต่ละยี่ห้อ
3. `models/r15-v3.html` — ตัวอย่างหน้า R15 V3
4. `media.html` — ลิงก์ สื่อ iframe video download
5. `form.html` — แบบฟอร์ม
6. `css/style.css` — สี ฟอนต์ ขนาด และ layout
7. `js/script.js` — JavaScript
8. `media/*.svg` — เปลี่ยนเป็นรูปมอเตอร์ไซค์จริงได้
9. `media/ambient-bike.wav` — เปลี่ยนเป็นเพลงพื้นหลังได้
10. `docs/r15-v3-mod-guide.pdf` — เอกสารดาวน์โหลด

## โครงสร้าง
index.html
brands/yamaha.html
brands/honda.html
brands/kawasaki.html
brands/suzuki.html
brands/bmw.html
models/r15-v3.html
form.html
media.html
frame-demo.html
css/style.css
js/script.js
media/*
docs/*

## หมายเหตุ
- ข้อ 36 "การสร้างเฟรม" ใช้ `frame-demo.html` แบบ legacy frameset เพราะ `<frame>/<frameset>` ไม่ใช่แนวทางของ HTML5 ปัจจุบัน
- ข้อ 37 ใช้ `<iframe>` ใน `media.html`
- ข้อ 49–50 เป็นส่วนของการนำเว็บขึ้นโฮสติ้งจริงและการอัปโหลด ซึ่งต้องทำหลังจากเว็บเสร็จ


## R15 V3 Template
หน้า `models/r15-v3.html` เป็นต้นแบบหน้ารุ่นรถที่ละเอียดขึ้น โดยประกอบด้วย:
- Model Overview
- Generation / Year
- แนวทางการเลือกพาร์ต
- Recommended Exterior Parts
- Part Categories
- Comparison Table
- Search JavaScript
- Link ไปหน้า Form
- Download PDF

เมื่อจะเพิ่มรุ่นใหม่ สามารถคัดลอก `r15-v3.html` แล้วเปลี่ยนชื่อรุ่น,
Generation, ปี และรายการพาร์ตได้


## R15 V3 Template
หน้า `models/r15-v3.html` ถูกทำเป็นต้นแบบหลักสำหรับหน้ารุ่นรถ:
Yamaha → YZF-R → R15 → V3 (2017–2021)

ส่วนที่ควรเปลี่ยนเมื่อสร้างรุ่นอื่น:
- ชื่อ Model / Generation / Year
- รูปภาพของรถ
- รายการพาร์ต
- ตารางเปรียบเทียบ
- ชุดคำแนะนำ
- PDF / เอกสารที่เกี่ยวข้อง

จากนั้นสามารถ Copy หน้า R15 V3 เป็น Template แล้วเปลี่ยนข้อมูลสำหรับ R25, R3, R6, R7, R1 และรุ่นของค่ายอื่นได้
