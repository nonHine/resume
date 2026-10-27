# 🛡️ Zero Unintended Impact & Mandatory Verification Guardrail

**Mode**: Strict Pre-Flight & Post-Flight Enforcement Gate (เข้มงวดสูงสุด)
**Scope**: All Projects, Workspaces, and Tool Executions

Whenever executing ANY code modification, script execution, file generation, or Git operations, the agent MUST strictly enforce these 5 invariant rules:

---

### 1. 🚫 Strict Asset Protection (Zero Asset Mutation)
- **ห้ามแตะต้อง ลบ แทนที่ หรือดัดแปลงไฟล์รูปภาพและสื่อส่วนตัวของผู้ใช้เด็ดขาด** (เช่น รูปพอร์ตเทรต, รูปถ่ายจริง, โลโก้, วิดีโอ, หรือเสียงใน `assets/`, `public/`, หรือ Root Directory)
- **ห้ามทำการ Anonymize หรือเปลี่ยนรูปจริงเป็น Avatar อัตโนมัติ** เว้นแต่ผู้ใช้จะระบุคำสั่งให้เปลี่ยนเป็นรายไฟล์อย่างชัดเจน
- หากผู้ใช้สั่งเปลี่ยนรูป ให้ตรวจสอบ Path เป้าหมายและยืนยันก่อนดำเนินการเสมอ

---

### 2. 🔍 Pre-Action Baseline Check
- ก่อนเริ่มแก้ไขไฟล์หรือรันสคริปต์ ให้ตรวจสอบสถานะเดิมของ Git หรือโฟลเดอร์เสมอ (`git status --short`) เพื่อทราบว่ามีไฟล์ใดที่กำลังถูกแก้ไขค้างอยู่หรือไม่

---

### 3. 🎯 Targeted & Scoped Operations Only
- **ห้ามใช้คำสั่ง Git กวาดแบบกว้างเด็ดขาด**:
  - ❌ ห้ามรัน `git checkout .`, `git checkout -- *`, `git reset --hard` หรือ `git clean -fd`
  - ❌ ห้ามรันคำสั่งลบหรือย้ายไฟล์แบบ Wildcard (`rm *`, `Remove-Item *`)
- **ต้องระบุชื่อไฟล์เป้าหมายอย่างเจาะจง 100%**:
  - ✔️ ใช้ `git checkout -- specific-file.ext` เฉพาะไฟล์ที่ต้องการรีเวิร์ต
  - ✔️ สคริปต์แก้ไขต้องกำหนด Scope เฉพาะไฟล์ที่เกี่ยวข้องกับงานที่สั่งเท่านั้น

---

### 4. 🧪 Mandatory Post-Action Diff Verification
- ทันทีที่ดำเนินการเสร็จในแต่ละ Turn ผู้ช่วย AI **ต้องรันคำสั่งตรวจสอบผลกระทบ (`git status --short` หรือ `git diff`)** เพื่อยืนยันว่า:
  1. มีเฉพาะไฟล์ที่ได้รับมอบหมายเท่านั้นที่เปลี่ยนแปลง
  2. ไม่มีไฟล์รูปภาพ, Assets, หรือโค้ดส่วนอื่นถูกแก้ไขหรือลบโดยไม่ตั้งใจ
- หากพบว่ามีไฟล์ที่ไม่เกี่ยวข้องถูกเปลี่ยนแปลง ให้ทำการ Restore กลับสู่สภาพเดิมทันที

---

### 5. 📋 Transparent Change Reporting
- ในทุกคำตอบที่ส่งให้ผู้ใช้ ให้สรุปรายงานอย่างโปร่งใสเสมอ:
  - ระบุรายชื่อไฟล์ที่ถูกแก้ไขจริง
  - ยืนยันความปลอดภัยว่าไฟล์อื่น ๆ และ Assets ส่วนตัวทั้งหมดยังคงสมบูรณ์ 100%
