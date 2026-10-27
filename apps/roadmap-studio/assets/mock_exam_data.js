const EXAM_QUESTIONS = [
  {
    "id": 1,
    "part": 1,
    "section": "",
    "question": "Working at different times every day makes it difficult for me to ______, so I now start and finish work at the same time each day.",
    "options": [
      {
        "key": "a",
        "text": "meet the deadline"
      },
      {
        "key": "b",
        "text": "keep to a routine"
      },
      {
        "key": "c",
        "text": "lose concentration"
      },
      {
        "key": "d",
        "text": "get something out of the way"
      }
    ],
    "answer": "b",
    "explanation": "คำบอกใบ้สำคัญคือ 'start and finish work at the same time each day' (เริ่มและเลิกงานเวลาเดิมทุกวัน) ซึ่งตรงกับ collocation 'keep to a routine' (ทำตามกิจวัตรประจำวันที่วางไว้)\n• meet the deadline = ส่งงานทันกำหนด\n• lose concentration = เสียสมาธิ\n• get something out of the way = สะสางงานให้เสร็จพ้นไป"
  },
  {
    "id": 2,
    "part": 1,
    "section": "",
    "question": "The mistake was mine, so I need to ______ for what happened rather than blame my colleagues.",
    "options": [
      {
        "key": "a",
        "text": "take responsibility"
      },
      {
        "key": "b",
        "text": "get experience"
      },
      {
        "key": "c",
        "text": "have an opportunity"
      },
      {
        "key": "d",
        "text": "take charge"
      }
    ],
    "answer": "a",
    "explanation": "บริบทระบุว่า 'The mistake was mine' (ความผิดเป็นของฉันเอง) จึงต้อง 'take responsibility for' (รับผิดชอบต่อสิ่งที่เกิดขึ้น) แทนที่จะไปกล่าวโทษเพื่อนร่วมงาน\n• take responsibility = รับผิดชอบ (คู่กับ for)\n• get experience = หาประสบการณ์\n• have an opportunity = มีโอกาส\n• take charge = เข้าควบคุมสั่งการ"
  },
  {
    "id": 3,
    "part": 1,
    "section": "",
    "question": "Clara has worked in hotels for ten years, so she has a strong ______ in the tourism industry.",
    "options": [
      {
        "key": "a",
        "text": "contract"
      },
      {
        "key": "b",
        "text": "chance"
      },
      {
        "key": "c",
        "text": "background"
      },
      {
        "key": "d",
        "text": "responsibility"
      }
    ],
    "answer": "c",
    "explanation": "Clara ทำงานโรงแรมมานานถึง 10 ปี จึงมี 'strong background' (ภูมิหลัง/ประสบการณ์ทำงานเดิมที่แน่น) ในอุตสาหกรรมการท่องเที่ยว\n• background = ประสบการณ์/ภูมิหลังเดิม\n• contract = สัญญาจ้าง\n• chance = โอกาส/ความบังเอิญ\n• responsibility = ความรับผิดชอบ"
  },
  {
    "id": 4,
    "part": 1,
    "section": "",
    "question": "The company needs an assistant for only three months while a member of staff is away, so the position is ______.",
    "options": [
      {
        "key": "a",
        "text": "permanent"
      },
      {
        "key": "b",
        "text": "long-term"
      },
      {
        "key": "c",
        "text": "experienced"
      },
      {
        "key": "d",
        "text": "temporary"
      }
    ],
    "answer": "d",
    "explanation": "ตำแหน่งต้องการผู้ช่วยเพียง 'only three months' (แค่ 3 เดือนช่วงพนักงานลา) แสดงว่าเป็นตำแหน่งงานชั่วคราว จึงใช้คำว่า 'temporary' (ชั่วคราว)\n• permanent = ประจำ/ถาวร\n• long-term = ระยะยาว\n• experienced = มีประสบการณ์"
  },
  {
    "id": 5,
    "part": 1,
    "section": "",
    "question": "I usually work best in the morning because I can ______ before the office becomes busy.",
    "options": [
      {
        "key": "a",
        "text": "get a lot done"
      },
      {
        "key": "b",
        "text": "lose concentration"
      },
      {
        "key": "c",
        "text": "fall behind schedule"
      },
      {
        "key": "d",
        "text": "keep to a routine"
      }
    ],
    "answer": "a",
    "explanation": "บริบทบอกว่าทำงานได้ดีที่สุดในตอนเช้าเพราะสามารถ 'get a lot done' (ทำงานเสร็จได้ปริมาณมาก/มีผลงานเยอะ) ก่อนที่ออฟฟิศจะเริ่มวุ่นวาย\n• get a lot done = สะสางงานได้ปริมาณมาก\n• lose concentration = เสียสมาธิ\n• fall behind schedule = ล่าช้ากว่ากำหนด\n• keep to a routine = ทำตามกิจวัตร"
  },
  {
    "id": 6,
    "part": 1,
    "section": "",
    "question": "Elena is ______ of the new project, so all important decisions must go through her.",
    "options": [
      {
        "key": "a",
        "text": "treated unfairly"
      },
      {
        "key": "b",
        "text": "in background"
      },
      {
        "key": "c",
        "text": "exploited"
      },
      {
        "key": "d",
        "text": "in charge"
      }
    ],
    "answer": "d",
    "explanation": "โครงสร้าง collocation: 'be in charge of + Noun' แปลว่า เป็นผู้รับผิดชอบ/ดูแลโครงการ จึงสอดคล้องกับที่ระบุว่าการตัดสินใจสำคัญทั้งหมดต้องผ่านเธอ\n• in charge = ดูแลรับผิดชอบ (คู่กับ of)\n• in background = อยู่เบื้องหลัง\n• treated unfairly = ได้รับการปฏิบัติอย่างไม่เป็นธรรม\n• exploited = ถูกเอารัดเอาเปรียบ"
  },
  {
    "id": 7,
    "part": 1,
    "section": "",
    "question": "We lost two working days because of computer problems, so we have started to ______.",
    "options": [
      {
        "key": "a",
        "text": "meet the deadline"
      },
      {
        "key": "b",
        "text": "get the project out of the way"
      },
      {
        "key": "c",
        "text": "fall behind schedule"
      },
      {
        "key": "d",
        "text": "avoid distractions"
      }
    ],
    "answer": "c",
    "explanation": "เสียเวลาทำงานไป 2 วันเพราะระบบคอมพิวเตอร์ขัดข้อง ทำให้เริ่ม 'fall behind schedule' (ทำงานล่าช้ากว่ากำหนดการที่วางไว้)\n• fall behind schedule = ล่าช้ากว่ากำหนดการ\n• meet the deadline = ส่งงานทันกำหนด\n• get the project out of the way = สะสางงานให้เสร็จพ้นไป\n• avoid distractions = หลีกเลี่ยงสิ่งรบกวน"
  },
  {
    "id": 8,
    "part": 1,
    "section": "",
    "question": "This job can be stressful. Do you think you can ______ several difficult tasks at the same time?",
    "options": [
      {
        "key": "a",
        "text": "organise"
      },
      {
        "key": "b",
        "text": "experience"
      },
      {
        "key": "c",
        "text": "exploit"
      },
      {
        "key": "d",
        "text": "handle"
      }
    ],
    "answer": "d",
    "explanation": "คำบอกใบ้คือ 'several difficult tasks at the same time' (จัดการงานยากหลายงานพร้อมกันในเวลาเดียว) Collocation คือ 'handle difficult tasks' (รับมือ/จัดการกับงานยาก)\n• handle = รับมือ/จัดการ\n• organise = จัดระเบียบ\n• experience = ประสบกับ\n• exploit = เอาเปรียบ/แสวงประโยชน์"
  },
  {
    "id": 9,
    "part": 1,
    "section": "",
    "question": "My ______ goal is to become a department manager within the next five years.",
    "options": [
      {
        "key": "a",
        "text": "temporary"
      },
      {
        "key": "b",
        "text": "background"
      },
      {
        "key": "c",
        "text": "long-term"
      },
      {
        "key": "d",
        "text": "permanent"
      }
    ],
    "answer": "c",
    "explanation": "การตั้งเป้าเป็นผู้จัดการแผนกภายใน 5 ปีข้างหน้า คือ 'long-term goal' (เป้าหมายระยะยาว)\n• long-term = ระยะยาว (long-term goal = เป้าหมายระยะยาว)\n• temporary = ชั่วคราว\n• background = ภูมิหลัง\n• permanent = ถาวร"
  },
  {
    "id": 10,
    "part": 1,
    "section": "",
    "question": "The internship gives students several ______ to learn new skills and work with experienced staff.",
    "options": [
      {
        "key": "a",
        "text": "experiences"
      },
      {
        "key": "b",
        "text": "charges"
      },
      {
        "key": "c",
        "text": "responsibilities"
      },
      {
        "key": "d",
        "text": "opportunities"
      }
    ],
    "answer": "d",
    "explanation": "การฝึกงานให้ 'opportunities' (โอกาส) แก่นักศึกษาในการเรียนรู้ทักษะใหม่ๆ และทำงานร่วมกับบุคลากรที่มีประสบการณ์\n• opportunities = โอกาส (opportunities to learn)\n• experiences = ประสบการณ์\n• charges = หน้าที่/ค่าใช้จ่าย\n• responsibilities = ภาระหน้าที่รับผิดชอบ"
  },
  {
    "id": 11,
    "part": 1,
    "section": "",
    "question": "Leo told everyone he had won a national competition, but later we discovered that he had ______ the whole story.",
    "options": [
      {
        "key": "a",
        "text": "doubted"
      },
      {
        "key": "b",
        "text": "deceived"
      },
      {
        "key": "c",
        "text": "made up"
      },
      {
        "key": "d",
        "text": "come clean"
      }
    ],
    "answer": "c",
    "explanation": "Leo อ้างว่าตนชนะการแข่งขันระดับชาติ แต่ความจริงไม่ได้ชนะ แสดงว่าเขา 'made up the whole story' (กุเรื่อง/แต่งเรื่องขึ้นมาทั้งหมด)\n• made up = กุเรื่อง/แต่งเรื่อง (รูปอดีตของ make up)\n• doubted = สงสัย\n• deceived = หลอกลวง\n• come clean = สารภาพความจริง"
  },
  {
    "id": 12,
    "part": 1,
    "section": "",
    "question": "After keeping the secret for months, Sara finally decided to ______ and explain what had really happened.",
    "options": [
      {
        "key": "a",
        "text": "come clean"
      },
      {
        "key": "b",
        "text": "pretend"
      },
      {
        "key": "c",
        "text": "doubt"
      },
      {
        "key": "d",
        "text": "live a lie"
      }
    ],
    "answer": "a",
    "explanation": "สำนวน 'come clean' แปลว่า สารภาพความจริง/เปิดเผยสิ่งที่ปิดบังมานาน บริบทบอกว่า Sara เก็บความลับไว้หลายเดือนก่อนจะตัดสินใจสารภาพความจริง\n• come clean = สารภาพความจริง\n• pretend = เสแสร้ง\n• doubt = สงสัย\n• live a lie = ใช้ชีวิตอยู่บนการหลอกลวง"
  },
  {
    "id": 13,
    "part": 1,
    "section": "",
    "question": "The documentary showed how the group created a complicated ______ to persuade people to send them money.",
    "options": [
      {
        "key": "a",
        "text": "footage"
      },
      {
        "key": "b",
        "text": "scheme"
      },
      {
        "key": "c",
        "text": "location"
      },
      {
        "key": "d",
        "text": "soundtrack"
      }
    ],
    "answer": "b",
    "explanation": "สารคดีแสดงให้เห็นว่ากลุ่มนี้สร้าง 'scheme' (แผนการต้มตุ๋น/กลอุบายที่ซับซ้อน) เพื่อเกลี้ยกล่อมให้ผู้คนโอนเงินให้พวกเขา\n• scheme = แผนการ/กลอุบายหลอกลวง\n• footage = ฟุตเทจวิดีโอ\n• location = สถานที่ถ่ายทำ\n• soundtrack = เพลงประกอบ"
  },
  {
    "id": 14,
    "part": 1,
    "section": "",
    "question": "The film deals with a serious social issue and leaves you thinking about it long after it ends. It is very ______.",
    "options": [
      {
        "key": "a",
        "text": "slow"
      },
      {
        "key": "b",
        "text": "disappointing"
      },
      {
        "key": "c",
        "text": "enjoyable"
      },
      {
        "key": "d",
        "text": "powerful"
      }
    ],
    "answer": "d",
    "explanation": "คำบอกใบ้คือ 'leaves you thinking about it long after it ends' (ทำให้เราขบคิดตามอยู่นานหลังจากหนังจบ) ตรงกับคุณศัพท์ 'powerful' (ทรงพลัง/กินใจลึกซึ้ง)\n• powerful = ทรงพลัง/มีพลังกระทบใจ\n• slow = ดำเนินเรื่องช้า\n• disappointing = น่าผิดหวัง\n• enjoyable = น่าเพลิดเพลิน"
  },
  {
    "id": 15,
    "part": 1,
    "section": "",
    "question": "I expected the documentary to be fascinating, but it repeated the same ideas for two hours. I found it rather ______.",
    "options": [
      {
        "key": "a",
        "text": "extraordinary"
      },
      {
        "key": "b",
        "text": "dramatic"
      },
      {
        "key": "c",
        "text": "slow"
      },
      {
        "key": "d",
        "text": "shocking"
      }
    ],
    "answer": "c",
    "explanation": "ผู้พูดคาดหวังว่าสารคดีจะน่าตื่นเต้น (fascinating) แต่กลับฉายซ้ำเรื่องเดิมถึง 2 ชั่วโมง จึงรู้สึกว่าหนังค่อนข้าง 'slow' (ดำเนินเรื่องช้า/น่าเบื่อ)\n• slow = ดำเนินเรื่องช้า/อืดอาด\n• extraordinary = พิเศษยอดเยี่ยม\n• dramatic = ตื่นเต้นเร้าใจ\n• shocking = น่าตกใจ"
  },
  {
    "id": 16,
    "part": 1,
    "section": "",
    "question": "Before filming starts, every actor receives a copy of the ______ containing all the dialogue.",
    "options": [
      {
        "key": "a",
        "text": "script"
      },
      {
        "key": "b",
        "text": "footage"
      },
      {
        "key": "c",
        "text": "soundtrack"
      },
      {
        "key": "d",
        "text": "location"
      }
    ],
    "answer": "a",
    "explanation": "เอกสารที่นักแสดงทุกคนได้รับก่อนเริ่มถ่ายทำซึ่งมีบทพูดทั้งหมด (containing all the dialogue) คือ 'script' (บทภาพยนตร์/บทละคร)\n• script = บทภาพยนตร์\n• footage = เทปวิดีโอที่ถ่ายทำไว้\n• soundtrack = เพลงประกอบ\n• location = สถานที่ถ่ายทำ"
  },
  {
    "id": 17,
    "part": 1,
    "section": "",
    "question": "The director chose a small village by the coast as the main ______ for the new film.",
    "options": [
      {
        "key": "a",
        "text": "footage"
      },
      {
        "key": "b",
        "text": "soundtrack"
      },
      {
        "key": "c",
        "text": "location"
      },
      {
        "key": "d",
        "text": "industry"
      }
    ],
    "answer": "c",
    "explanation": "ผู้กำกับเลือกหมู่บ้านริมทะเลเป็น 'location' (สถานที่ถ่ายทำ) หลักสำหรับภาพยนตร์เรื่องใหม่\n• location = สถานที่ถ่ายทำ\n• footage = ฟุตเทจวิดีโอ\n• soundtrack = เพลงประกอบ\n• industry = อุตสาหกรรม"
  },
  {
    "id": 18,
    "part": 1,
    "section": "",
    "question": "‘Airport workers begin three-day ______ over pay’ would most likely appear as a news headline about workers refusing to work.",
    "options": [
      {
        "key": "a",
        "text": "rescue"
      },
      {
        "key": "b",
        "text": "scandal"
      },
      {
        "key": "c",
        "text": "march"
      },
      {
        "key": "d",
        "text": "strike"
      }
    ],
    "answer": "d",
    "explanation": "พนักงานสนามบินปฏิเสธที่จะทำงานเพื่อประท้วงเรื่องค่าจ้าง หัวข้อข่าวใช้คำว่า 'strike' (การนัดหยุดงานประท้วง)\n• strike = การนัดหยุดงานประท้วง\n• rescue = การช่วยเหลือ\n• scandal = เรื่องอื้อฉาว\n• march = การเดินขบวน"
  },
  {
    "id": 19,
    "part": 1,
    "section": "",
    "question": "In the headline ‘Two prisoners ______ from city jail,’ which word best completes the sentence?",
    "options": [
      {
        "key": "a",
        "text": "escape"
      },
      {
        "key": "b",
        "text": "quit"
      },
      {
        "key": "c",
        "text": "protest"
      },
      {
        "key": "d",
        "text": "arrest"
      }
    ],
    "answer": "a",
    "explanation": "พาดหัวข่าวภาษาอังกฤษ (Newspaper headlines) นิยมใช้กริยารูป Present Simple เพื่อบอกเหตุการณ์ที่เพิ่งเกิดขึ้น: 'Two prisoners escape from city jail' (นักโทษสองคนหลบหนีออกจากเรือนจำ)\n• escape = หลบหนี\n• quit = ลาออก/เลิก\n• protest = ประท้วง\n• arrest = จับกุม"
  },
  {
    "id": 20,
    "part": 1,
    "section": "",
    "question": "After the financial ______ became public, several senior managers were questioned by reporters.",
    "options": [
      {
        "key": "a",
        "text": "celebrity"
      },
      {
        "key": "b",
        "text": "scandal"
      },
      {
        "key": "c",
        "text": "rescue"
      },
      {
        "key": "d",
        "text": "march"
      }
    ],
    "answer": "b",
    "explanation": "เรื่องอื้อฉาวทางการเงินที่ถูกเปิดเผยต่อสาธารณะจนผู้บริหารระดับสูงถูกนักข่าวซักถาม เรียกว่า 'financial scandal' (เรื่องอื้อฉาวทางการเงิน)\n• scandal = เรื่องอื้อฉาว\n• celebrity = คนดัง\n• rescue = การช่วยเหลือ\n• march = การเดินขบวน"
  },
  {
    "id": 21,
    "part": 2,
    "section": "",
    "question": "Take a copy of the presentation on a USB drive ______ the internet connection stops working.",
    "options": [
      {
        "key": "a",
        "text": "unless"
      },
      {
        "key": "b",
        "text": "even if"
      },
      {
        "key": "c",
        "text": "in case"
      },
      {
        "key": "d",
        "text": "in case of"
      }
    ],
    "answer": "c",
    "explanation": "การเซฟไฟล์ใส่ USB ไว้ล่วงหน้าเป็นการเตรียมพร้อมรับมือเหตุการณ์ที่อาจเกิดขึ้น ใช้ 'in case + Clause (S + V)' (in case the internet connection stops working = เผื่อว่าเน็ตหลุด)\n• in case of ต้องตามด้วยคำนาม (เช่น in case of emergency)"
  },
  {
    "id": 22,
    "part": 2,
    "section": "",
    "question": "We won’t be able to complete the project today ______ everyone helps with the final section.",
    "options": [
      {
        "key": "a",
        "text": "even if"
      },
      {
        "key": "b",
        "text": "in case of"
      },
      {
        "key": "c",
        "text": "in case"
      },
      {
        "key": "d",
        "text": "unless"
      }
    ],
    "answer": "d",
    "explanation": "'unless' มีความหมายเท่ากับ 'if not' (เว้นแต่ว่า / ถ้า...ไม่) ประโยคหมายถึง 'เราจะไม่สามารถทำงานเสร็จได้ เว้นแต่ว่าทุกคนจะช่วยกัน' หลัง unless ต้องเป็นประโยคบอกเล่า (everyone helps)"
  },
  {
    "id": 23,
    "part": 2,
    "section": "",
    "question": "______ the company offers Daniel a higher salary, he still plans to change jobs.",
    "options": [
      {
        "key": "a",
        "text": "In case"
      },
      {
        "key": "b",
        "text": "Unless"
      },
      {
        "key": "c",
        "text": "In case of"
      },
      {
        "key": "d",
        "text": "Even if"
      }
    ],
    "answer": "d",
    "explanation": "'Even if' ใช้บอกว่า ต่อให้เงื่อนไขเกิดขึ้น ผลลัพธ์ก็ไม่เปลี่ยนแปลง: 'Even if the company offers Daniel a higher salary, he still plans to change jobs.' (ต่อให้บริษัทขึ้นเงินเดือนให้ เขาก็ยังวางแผนย้ายงานอยู่ดี)"
  },
  {
    "id": 24,
    "part": 2,
    "section": "",
    "question": "______ an emergency, employees should leave the building through the nearest exit.",
    "options": [
      {
        "key": "a",
        "text": "In case of"
      },
      {
        "key": "b",
        "text": "Unless"
      },
      {
        "key": "c",
        "text": "Even if"
      },
      {
        "key": "d",
        "text": "In case"
      }
    ],
    "answer": "a",
    "explanation": "ด้านหลังช่องว่างตามด้วยกลุ่มคำนาม 'an emergency' (เหตุฉุกเฉิน) โครงสร้างทางการในป้ายประกาศความปลอดภัยต้องใช้ 'In case of + Noun' (ในกรณีเกิดเหตุฉุกเฉิน)"
  },
  {
    "id": 25,
    "part": 2,
    "section": "",
    "question": "Before the agreement becomes official, it ______ by both managers.",
    "options": [
      {
        "key": "a",
        "text": "is supposed sign"
      },
      {
        "key": "b",
        "text": "needs to be signed"
      },
      {
        "key": "c",
        "text": "has got signing"
      },
      {
        "key": "d",
        "text": "needs sign"
      }
    ],
    "answer": "b",
    "explanation": "ประธานคือ 'it' (ข้อตกลง) เป็นสิ่งของที่ต้อง 'ถูกลงนาม' โครงสร้าง Passive Voice แสดงความจำเป็นคือ: 'needs to be + V.3' (needs to be signed = จำเป็นต้องได้รับการลงนาม)"
  },
  {
    "id": 26,
    "part": 2,
    "section": "",
    "question": "Visitors are ______ enter the laboratory without a member of staff.",
    "options": [
      {
        "key": "a",
        "text": "essential to"
      },
      {
        "key": "b",
        "text": "supposed"
      },
      {
        "key": "c",
        "text": "allowed"
      },
      {
        "key": "d",
        "text": "not permitted to"
      }
    ],
    "answer": "d",
    "explanation": "กฎข้อห้ามสำหรับผู้มาเยือน: 'Visitors are not permitted to enter the laboratory without a member of staff.' โครงสร้างข้อห้ามคือ 'be not permitted to + V.inf' (ไม่ได้รับอนุญาตให้เข้าไป)"
  },
  {
    "id": 27,
    "part": 2,
    "section": "",
    "question": "We ______ meet the client at ten yesterday, but the meeting was cancelled.",
    "options": [
      {
        "key": "a",
        "text": "had to"
      },
      {
        "key": "b",
        "text": "were permitted to"
      },
      {
        "key": "c",
        "text": "were supposed to"
      },
      {
        "key": "d",
        "text": "needed to be"
      }
    ],
    "answer": "c",
    "explanation": "ประโยคบอกเล่าแผนการหรือหน้าที่ตามกำหนดการในอดีตที่ไม่ได้เกิดขึ้นจริง (มี but the meeting was cancelled ขัดแย้ง) ใช้ 'were supposed to + V.inf' (มีหน้าที่/ต้องไปพบลูกค้าตามนัด)"
  },
  {
    "id": 28,
    "part": 2,
    "section": "",
    "question": "The train was cancelled this morning, so I ______ take a taxi to the office.",
    "options": [
      {
        "key": "a",
        "text": "had to"
      },
      {
        "key": "b",
        "text": "have got to"
      },
      {
        "key": "c",
        "text": "am supposed to"
      },
      {
        "key": "d",
        "text": "need to"
      }
    ],
    "answer": "a",
    "explanation": "เหตุการณ์เกิดขึ้นเมื่อเช้านี้และจบไปแล้วในอดีต (this morning / was cancelled) รูปอดีตของ must/have to คือ 'had to + V.inf' (had to take a taxi = จำเป็นต้องนั่งแท็กซี่)"
  },
  {
    "id": 29,
    "part": 2,
    "section": "",
    "question": "I ______ work in a quiet room than sit in the busy open-plan office today.",
    "options": [
      {
        "key": "a",
        "text": "prefer"
      },
      {
        "key": "b",
        "text": "would rather"
      },
      {
        "key": "c",
        "text": "would prefer"
      },
      {
        "key": "d",
        "text": "definitely prefer"
      }
    ],
    "answer": "b",
    "explanation": "โครงสร้างบอกความชอบเปรียบเทียบที่มีกริยา bare infinitive (work) และเชื่อมด้วย 'than' (sit) คือ 'would rather + V.inf (work) ... than + V.inf (sit)'\n• ถ้าใช้ prefer ต้องเป็น prefer working to sitting"
  },
  {
    "id": 30,
    "part": 2,
    "section": "",
    "question": "In general, Maria ______ working with a small team to working alone.",
    "options": [
      {
        "key": "a",
        "text": "would rather"
      },
      {
        "key": "b",
        "text": "would prefer"
      },
      {
        "key": "c",
        "text": "prefers"
      },
      {
        "key": "d",
        "text": "would go for"
      }
    ],
    "answer": "c",
    "explanation": "สังเกตโครงสร้าง 'prefer + V-ing + TO + V-ing' (working with... to working alone) ประธาน Maria เป็นเอกพจน์ กริยาจึงเติม s เป็น 'prefers'"
  },
  {
    "id": 31,
    "part": 2,
    "section": "",
    "question": "We ______ visit the outdoor exhibition on Saturday, but heavy rain changed our plans.",
    "options": [
      {
        "key": "a",
        "text": "have planned to"
      },
      {
        "key": "b",
        "text": "are planning"
      },
      {
        "key": "c",
        "text": "planned"
      },
      {
        "key": "d",
        "text": "were planning to"
      }
    ],
    "answer": "d",
    "explanation": "แผนการในอดีตที่วางแผนไว้แต่ไม่ได้เกิดขึ้นจริงเพราะฝนตกหนัก ประธาน We ใช้รูป Past Continuous สำหรับแผนในอดีต: 'were planning to + V.inf' (were planning to visit)"
  },
  {
    "id": 32,
    "part": 2,
    "section": "",
    "question": "Nina ______ apply for the job, but she changed her mind after reading the working conditions.",
    "options": [
      {
        "key": "a",
        "text": "was expecting"
      },
      {
        "key": "b",
        "text": "is going to"
      },
      {
        "key": "c",
        "text": "was meaning"
      },
      {
        "key": "d",
        "text": "intended to"
      }
    ],
    "answer": "d",
    "explanation": "Nina ตั้งใจว่าจะสมัครงานแต่เปลี่ยนใจในภายหลัง โครงสร้างความตั้งใจในอดีตคือ 'intended to + V.inf' (intended to apply)"
  },
  {
    "id": 33,
    "part": 2,
    "section": "",
    "question": "I ______ send you the wrong attachment. I clicked on the wrong file by mistake.",
    "options": [
      {
        "key": "a",
        "text": "didn’t mean to"
      },
      {
        "key": "b",
        "text": "wasn’t planning"
      },
      {
        "key": "c",
        "text": "didn’t intend"
      },
      {
        "key": "d",
        "text": "hadn’t expected"
      }
    ],
    "answer": "a",
    "explanation": "คำบอกใบ้สำคัญคือ 'by mistake' (ทำผิดพลาดโดยไม่ตั้งใจ) สำนวนปฏิเสธความตั้งใจคือ 'didn’t mean to + V.inf' (ไม่ได้ตั้งใจจะส่งไฟล์ผิด)"
  },
  {
    "id": 34,
    "part": 2,
    "section": "",
    "question": "The reporters ______ receive a statement from the actor yesterday, but his manager cancelled the interview.",
    "options": [
      {
        "key": "a",
        "text": "are expecting to"
      },
      {
        "key": "b",
        "text": "were expecting to"
      },
      {
        "key": "c",
        "text": "expect"
      },
      {
        "key": "d",
        "text": "intended"
      }
    ],
    "answer": "b",
    "explanation": "เหตุการณ์ในอดีตเมื่อวานนี้ (yesterday) ประธานพหูพจน์ The reporters คาดหมายว่าจะได้รับแถลงการณ์ ใช้ Past Continuous expectation: 'were expecting to + V.inf' (were expecting to receive)"
  },
  {
    "id": 35,
    "part": 2,
    "section": "",
    "question": "We thought ______ interesting to make a short documentary about local businesses.",
    "options": [
      {
        "key": "a",
        "text": "would be"
      },
      {
        "key": "b",
        "text": "it would be"
      },
      {
        "key": "c",
        "text": "it will be"
      },
      {
        "key": "d",
        "text": "would it be"
      }
    ],
    "answer": "b",
    "explanation": "โครงสร้างกรรมและคุณศัพท์สำหรับความคิดเห็นในอดีต: thought + 'it would be' + interesting + to make... (คิดว่ามันน่าจะน่าสนใจที่จะทำสารคดี)"
  },
  {
    "id": 36,
    "part": 2,
    "section": "",
    "question": "Could you tell me why ______ the interview before it finished?",
    "options": [
      {
        "key": "a",
        "text": "did she leave"
      },
      {
        "key": "b",
        "text": "she left"
      },
      {
        "key": "c",
        "text": "has she left"
      },
      {
        "key": "d",
        "text": "she did leave"
      }
    ],
    "answer": "b",
    "explanation": "Indirect Question (คำถามทางอ้อม): หลัง Question Word (why) ต้องเรียงประโยคแบบบอกเล่าคือ 'Subject + Verb' เสมอ -> 'why she left' (ห้ามสลับเป็นรูปคำถาม did she leave)"
  },
  {
    "id": 37,
    "part": 2,
    "section": "",
    "question": "Do you know where ______ the original video?",
    "options": [
      {
        "key": "a",
        "text": "can we find"
      },
      {
        "key": "b",
        "text": "do we find"
      },
      {
        "key": "c",
        "text": "we can find"
      },
      {
        "key": "d",
        "text": "can find we"
      }
    ],
    "answer": "c",
    "explanation": "Indirect Question (คำถามทางอ้อม): หลัง 'where' ต้องเรียงประธานตามด้วยกริยาบอกเล่า -> 'where we can find the original video' (ห้ามสลับเป็น can we find)"
  },
  {
    "id": 38,
    "part": 2,
    "section": "",
    "question": "Can I ask ______ about the story before publishing it?",
    "options": [
      {
        "key": "a",
        "text": "what should we check"
      },
      {
        "key": "b",
        "text": "what we should check"
      },
      {
        "key": "c",
        "text": "what do we check"
      },
      {
        "key": "d",
        "text": "what should check we"
      }
    ],
    "answer": "b",
    "explanation": "Indirect Question (คำถามทางอ้อม): หลัง 'what' ต้องเรียงประธานตามด้วย modal verb ในรูปบอกเล่า -> 'what we should check' (ห้ามสลับเป็น what should we check หรือ what do we check)"
  },
  {
    "id": 39,
    "part": 2,
    "section": "",
    "question": "______ surprised that the story became so popular online?",
    "options": [
      {
        "key": "a",
        "text": "You aren’t"
      },
      {
        "key": "b",
        "text": "Aren’t you"
      },
      {
        "key": "c",
        "text": "Don’t you"
      },
      {
        "key": "d",
        "text": "Would you"
      }
    ],
    "answer": "b",
    "explanation": "Negative Question ใช้ถามเพื่อแสดงความประหลาดใจหรือถามย้ำสำหรับคุณศัพท์ surprised: 'Aren’t you surprised that...?' (คุณไม่ประหลาดใจหรอกหรือที่เรื่องนี้กลายเป็นไวรัล?)"
  },
  {
    "id": 40,
    "part": 2,
    "section": "",
    "question": "______ think we should check the source before sharing this post?",
    "options": [
      {
        "key": "a",
        "text": "Don’t you"
      },
      {
        "key": "b",
        "text": "Aren’t you"
      },
      {
        "key": "c",
        "text": "Wouldn’t"
      },
      {
        "key": "d",
        "text": "You don’t"
      }
    ],
    "answer": "a",
    "explanation": "Negative Question เพื่อชักชวนให้อีกฝ่ายเห็นพ้องด้วย: 'Don’t you think (that)...?' (คุณไม่คิดหรือว่าเราควรตรวจสอบแหล่งข่าวก่อนแชร์?)"
  },
  {
    "id": 41,
    "part": 3,
    "section": "Conversation 1: Work Routine & Deadlines",
    "question": "Manager: The client needs the report by Friday afternoon. (41) ______",
    "options": [
      {
        "key": "a",
        "text": "Are we permitted to change the report?"
      },
      {
        "key": "b",
        "text": "Would you prefer a different office?"
      },
      {
        "key": "c",
        "text": "Are you supposed to work from home?"
      },
      {
        "key": "d",
        "text": "Do you think we’ll meet the deadline?"
      }
    ],
    "answer": "d",
    "context": "Conversation 1: Working from Home and Meeting a Deadline (Questions 41–45)\nManager: The client needs the report by Friday afternoon. (41) ______\nTom: I think so, but we need to work faster. I’m beginning to (42) ______.\nManager: What’s causing the problem?\nTom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.\nManager: Good idea. Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.\nManager: No problem, but you (45) ______ send me your draft before four.",
    "explanation": "ผู้จัดการพูดถึงกำหนดส่งงานวันศุกร์ และ Tom ตอบว่า 'I think so, but we need to work faster...' แสดงว่าคำถามต้องถามว่า 'คิดว่าเราจะทันกำหนดส่งไหม?' -> 'Do you think we’ll meet the deadline?'"
  },
  {
    "id": 42,
    "part": 3,
    "section": "Conversation 1: Work Routine & Deadlines",
    "question": "Tom: I think so, but we need to work faster. I’m beginning to (42) ______.",
    "options": [
      {
        "key": "a",
        "text": "keep to a routine"
      },
      {
        "key": "b",
        "text": "fall behind schedule"
      },
      {
        "key": "c",
        "text": "avoid distractions"
      },
      {
        "key": "d",
        "text": "get a lot done"
      }
    ],
    "answer": "b",
    "context": "Conversation 1: Working from Home and Meeting a Deadline (Questions 41–45)\nManager: The client needs the report by Friday afternoon. (41) ______\nTom: I think so, but we need to work faster. I’m beginning to (42) ______.\nManager: What’s causing the problem?\nTom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.\nManager: Good idea. Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.\nManager: No problem, but you (45) ______ send me your draft before four.",
    "explanation": "Tom บอกว่าต้องเร่งทำงานเร็วขึ้นเพราะเริ่ม 'fall behind schedule' (ทำงานล่าช้ากว่ากำหนดการที่วางไว้)"
  },
  {
    "id": 43,
    "part": 3,
    "section": "Conversation 1: Work Routine & Deadlines",
    "question": "Tom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.",
    "options": [
      {
        "key": "a",
        "text": "to meet the deadline"
      },
      {
        "key": "b",
        "text": "to keep to a routine"
      },
      {
        "key": "c",
        "text": "to avoid distractions"
      },
      {
        "key": "d",
        "text": "to lose concentration"
      }
    ],
    "answer": "c",
    "context": "Conversation 1: Working from Home and Meeting a Deadline (Questions 41–45)\nManager: The client needs the report by Friday afternoon. (41) ______\nTom: I think so, but we need to work faster. I’m beginning to (42) ______.\nManager: What’s causing the problem?\nTom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.\nManager: Good idea. Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.\nManager: No problem, but you (45) ______ send me your draft before four.",
    "explanation": "Tom บอกว่าคอยเช็กข้อความตลอดเวลา จึงจะปิดการแจ้งเตือนเพื่อ 'to avoid distractions' (เพื่อหลีกเลี่ยงสิ่งรบกวนสมาธิ)"
  },
  {
    "id": 44,
    "part": 3,
    "section": "Conversation 1: Work Routine & Deadlines",
    "question": "Manager: Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.",
    "options": [
      {
        "key": "a",
        "text": "I’d rather finish this section first than attend the training now."
      },
      {
        "key": "b",
        "text": "I prefer attending training than completing the report."
      },
      {
        "key": "c",
        "text": "I’m not permitted to finish the report."
      },
      {
        "key": "d",
        "text": "I’d rather to join the training session."
      }
    ],
    "answer": "a",
    "context": "Conversation 1: Working from Home and Meeting a Deadline (Questions 41–45)\nManager: The client needs the report by Friday afternoon. (41) ______\nTom: I think so, but we need to work faster. I’m beginning to (42) ______.\nManager: What’s causing the problem?\nTom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.\nManager: Good idea. Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.\nManager: No problem, but you (45) ______ send me your draft before four.",
    "explanation": "ผู้จัดการชวนไปอบรมตอน 14:00 น. แต่ Tom ปฏิเสธอย่างสุภาพเพราะอยากทำงานส่วนนี้ให้เสร็จก่อน โครงสร้าง preference ที่ถูกต้องคือ 'I’d rather finish this section first than attend the training now.' (ข้อ b ผิดเพราะ prefer ห้ามใช้คู่กับ than)"
  },
  {
    "id": 45,
    "part": 3,
    "section": "Conversation 1: Work Routine & Deadlines",
    "question": "Manager: No problem, but you (45) ______ send me your draft before four.",
    "options": [
      {
        "key": "a",
        "text": "would rather"
      },
      {
        "key": "b",
        "text": "are permitted to"
      },
      {
        "key": "c",
        "text": "would prefer"
      },
      {
        "key": "d",
        "text": "have got to"
      }
    ],
    "answer": "d",
    "context": "Conversation 1: Working from Home and Meeting a Deadline (Questions 41–45)\nManager: The client needs the report by Friday afternoon. (41) ______\nTom: I think so, but we need to work faster. I’m beginning to (42) ______.\nManager: What’s causing the problem?\nTom: I keep checking messages while I’m writing. I’m going to switch off my notifications (43) ______.\nManager: Good idea. Would you like to join our online training session at two?\nTom: (44) ______ I need to finish this section first.\nManager: No problem, but you (45) ______ send me your draft before four.",
    "explanation": "ผู้จัดการย้ำว่าต้องส่งฉบับร่างก่อน 16:00 น. สำนวนแสดงความจำเป็น/หน้าที่ที่ต้องทำคือ 'have got to + V.inf' (= must/have to)"
  },
  {
    "id": 46,
    "part": 3,
    "section": "Conversation 2: Gig Work",
    "question": "Interviewer: (46) ______\nMia: Given the choice, (47) ______.",
    "options": [
      {
        "key": "a",
        "text": "Are temporary workers permitted to have experience?"
      },
      {
        "key": "b",
        "text": "Have you fallen behind schedule?"
      },
      {
        "key": "c",
        "text": "Would you prefer a permanent contract or several short-term contracts?"
      },
      {
        "key": "d",
        "text": "Are you in charge of the company?"
      }
    ],
    "answer": "c",
    "context": "Conversation 2: Gig Work (Questions 46–50)\nInterviewer: You’ve been doing project-based work for nearly two years. What do you think of it?\nMia: I enjoy the flexibility, although most of my contracts are short-term.\nInterviewer: (46) ______\nMia: Given the choice, (47) ______.\nInterviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.\nInterviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "explanation": "Mia ตอบว่า 'Given the choice...' (ถ้าให้เลือก) แสดงว่าคำถามก่อนหน้าเป็นการถามให้เลือกระหว่างสัญญาระยะยาวกับสัญญาระยะสั้น -> 'Would you prefer a permanent contract or several short-term contracts?'"
  },
  {
    "id": 47,
    "part": 3,
    "section": "Conversation 2: Gig Work",
    "question": "Mia: Given the choice, (47) ______.",
    "options": [
      {
        "key": "a",
        "text": "I prefer permanent work than short-term work."
      },
      {
        "key": "b",
        "text": "I’d far rather have a long-term contract than several short-term ones."
      },
      {
        "key": "c",
        "text": "I’d rather having a temporary contract."
      },
      {
        "key": "d",
        "text": "I’m supposed to prefer short-term work."
      }
    ],
    "answer": "b",
    "context": "Conversation 2: Gig Work (Questions 46–50)\nInterviewer: You’ve been doing project-based work for nearly two years. What do you think of it?\nMia: I enjoy the flexibility, although most of my contracts are short-term.\nInterviewer: (46) ______\nMia: Given the choice, (47) ______.\nInterviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.\nInterviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "explanation": "โครงสร้าง preference ที่ถูกต้องตามไวยากรณ์: 'I’d far rather + V.inf (have) ... than ...' (ข้อ a ผิดเพราะ prefer ห้ามใช้คู่กับ than)"
  },
  {
    "id": 48,
    "part": 3,
    "section": "Conversation 2: Gig Work",
    "question": "Interviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes.",
    "options": [
      {
        "key": "a",
        "text": "Are you supposed choosing your own hours?"
      },
      {
        "key": "b",
        "text": "Have you got to choose your hours?"
      },
      {
        "key": "c",
        "text": "Is choosing your hours essential to?"
      },
      {
        "key": "d",
        "text": "Are you allowed to choose when you work?"
      }
    ],
    "answer": "d",
    "context": "Conversation 2: Gig Work (Questions 46–50)\nInterviewer: You’ve been doing project-based work for nearly two years. What do you think of it?\nMia: I enjoy the flexibility, although most of my contracts are short-term.\nInterviewer: (46) ______\nMia: Given the choice, (47) ______.\nInterviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.\nInterviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "explanation": "ผู้สัมภาษณ์ถามถึงความยืดหยุ่นและการมีสิทธิ์เลือกเวลาทำงานเอง: 'Are you allowed to choose when you work?' (คุณได้รับอนุญาตให้เลือกเวลาทำงานเองได้ใช่ไหม?)"
  },
  {
    "id": 49,
    "part": 3,
    "section": "Conversation 2: Gig Work",
    "question": "Mia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.",
    "options": [
      {
        "key": "a",
        "text": "supposed to"
      },
      {
        "key": "b",
        "text": "allowed"
      },
      {
        "key": "c",
        "text": "rather"
      },
      {
        "key": "d",
        "text": "in case"
      }
    ],
    "answer": "a",
    "context": "Conversation 2: Gig Work (Questions 46–50)\nInterviewer: You’ve been doing project-based work for nearly two years. What do you think of it?\nMia: I enjoy the flexibility, although most of my contracts are short-term.\nInterviewer: (46) ______\nMia: Given the choice, (47) ______.\nInterviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.\nInterviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "explanation": "Mia มีข้อผูกพันตามสัญญาที่ต้องส่งงานตามวันนัดหมาย: 'be supposed to + V.inf' (I’m supposed to finish = มีหน้าที่/ถูกคาดหวังให้ส่งงานเสร็จ)"
  },
  {
    "id": 50,
    "part": 3,
    "section": "Conversation 2: Gig Work",
    "question": "Interviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "options": [
      {
        "key": "a",
        "text": "Unless it was permanent, I would choose it."
      },
      {
        "key": "b",
        "text": "In case the salary was good, I might refuse it."
      },
      {
        "key": "c",
        "text": "Even if gig work paid a little more, I’d go for the permanent job."
      },
      {
        "key": "d",
        "text": "I’m not permitted to choose a permanent job."
      }
    ],
    "answer": "c",
    "context": "Conversation 2: Gig Work (Questions 46–50)\nInterviewer: You’ve been doing project-based work for nearly two years. What do you think of it?\nMia: I enjoy the flexibility, although most of my contracts are short-term.\nInterviewer: (46) ______\nMia: Given the choice, (47) ______.\nInterviewer: One advantage of gig work is having more control over your schedule. (48) ______\nMia: Usually, yes. However, I’m (49) ______ finish each project by the agreed date.\nInterviewer: If a company offered you a permanent position tomorrow, what would you do?\nMia: (50) ______",
    "explanation": "Mia บอกจุดยืนว่าแม้จะได้เงินจากฟรีแลนซ์มากกว่า เธอก็ยังเลือกงานประจำ: 'Even if gig work paid a little more, I’d go for the permanent job.'"
  },
  {
    "id": 51,
    "part": 3,
    "section": "Conversation 3: Exploring a Hoax",
    "question": "Maya: Some people say it escaped from a private zoo.\nDan: I’m not sure. (51) ______",
    "options": [
      {
        "key": "a",
        "text": "I doubt that the story is true."
      },
      {
        "key": "b",
        "text": "I came clean yesterday."
      },
      {
        "key": "c",
        "text": "I’d like to direct the film."
      },
      {
        "key": "d",
        "text": "It was very enjoyable."
      }
    ],
    "answer": "a",
    "context": "Conversation 3: Exploring a Hoax (Questions 51–54)\nMaya: Have you seen that video of a strange animal walking through the city centre?\nDan: Yes. It’s all over social media.\nMaya: Some people say it escaped from a private zoo.\nDan: I’m not sure. (51) ______\nMaya: Why?\nDan: The person who posted it won’t say where the video was filmed.\nMaya: That is strange. Perhaps someone (52) ______ the story.\nDan: Exactly. I think we should check other sources (53) ______.\nMaya: Good idea. If it turns out to be fake, the person who posted it should (54) ______.",
    "explanation": "Dan รู้สึกไม่แน่ใจกับคลิปวิดีโอสัตว์ประหลาด จึงพูดแสดงความเคลือบแคลงสงสัย: 'I doubt that the story is true.' (ฉันสงสัยว่าเรื่องนี้ไม่น่าจะจริง)"
  },
  {
    "id": 52,
    "part": 3,
    "section": "Conversation 3: Exploring a Hoax",
    "question": "Maya: That is strange. Perhaps someone (52) ______ the story.",
    "options": [
      {
        "key": "a",
        "text": "shot"
      },
      {
        "key": "b",
        "text": "made up"
      },
      {
        "key": "c",
        "text": "rescued"
      },
      {
        "key": "d",
        "text": "directed"
      }
    ],
    "answer": "b",
    "context": "Conversation 3: Exploring a Hoax (Questions 51–54)\nMaya: Have you seen that video of a strange animal walking through the city centre?\nDan: Yes. It’s all over social media.\nMaya: Some people say it escaped from a private zoo.\nDan: I’m not sure. (51) ______\nMaya: Why?\nDan: The person who posted it won’t say where the video was filmed.\nMaya: That is strange. Perhaps someone (52) ______ the story.\nDan: Exactly. I think we should check other sources (53) ______.\nMaya: Good idea. If it turns out to be fake, the person who posted it should (54) ______.",
    "explanation": "Maya สงสัยว่าอาจมีคนกุเรื่องขึ้นมา คำศัพท์ที่แปลว่ากุเรื่องคือ 'made up' (someone made up the story)"
  },
  {
    "id": 53,
    "part": 3,
    "section": "Conversation 3: Exploring a Hoax",
    "question": "Dan: Exactly. I think we should check other sources (53) ______.",
    "options": [
      {
        "key": "a",
        "text": "before we share it"
      },
      {
        "key": "b",
        "text": "before did we share it"
      },
      {
        "key": "c",
        "text": "where should we share it"
      },
      {
        "key": "d",
        "text": "before can we share it"
      }
    ],
    "answer": "a",
    "context": "Conversation 3: Exploring a Hoax (Questions 51–54)\nMaya: Have you seen that video of a strange animal walking through the city centre?\nDan: Yes. It’s all over social media.\nMaya: Some people say it escaped from a private zoo.\nDan: I’m not sure. (51) ______\nMaya: Why?\nDan: The person who posted it won’t say where the video was filmed.\nMaya: That is strange. Perhaps someone (52) ______ the story.\nDan: Exactly. I think we should check other sources (53) ______.\nMaya: Good idea. If it turns out to be fake, the person who posted it should (54) ______.",
    "explanation": "Dan แนะนำว่าควรตรวจสอบแหล่งข่าวอื่นก่อนที่จะแชร์ ประโยคหลังคำเชื่อมเวลา 'before' เรียงแบบบอกเล่า S + V: 'before we share it'"
  },
  {
    "id": 54,
    "part": 3,
    "section": "Conversation 3: Exploring a Hoax",
    "question": "Maya: Good idea. If it turns out to be fake, the person who posted it should (54) ______.",
    "options": [
      {
        "key": "a",
        "text": "live a lie"
      },
      {
        "key": "b",
        "text": "pretend"
      },
      {
        "key": "c",
        "text": "come clean"
      },
      {
        "key": "d",
        "text": "deceive"
      }
    ],
    "answer": "c",
    "context": "Conversation 3: Exploring a Hoax (Questions 51–54)\nMaya: Have you seen that video of a strange animal walking through the city centre?\nDan: Yes. It’s all over social media.\nMaya: Some people say it escaped from a private zoo.\nDan: I’m not sure. (51) ______\nMaya: Why?\nDan: The person who posted it won’t say where the video was filmed.\nMaya: That is strange. Perhaps someone (52) ______ the story.\nDan: Exactly. I think we should check other sources (53) ______.\nMaya: Good idea. If it turns out to be fake, the person who posted it should (54) ______.",
    "explanation": "Maya กล่าวว่าหากคลิปนี้เป็นเรื่องปลอม คนโพสต์ควรจะ 'come clean' (สารภาพความจริงออกมา)"
  },
  {
    "id": 55,
    "part": 3,
    "section": "Conversation 4: Making the News",
    "question": "A: (55) ______ the protest in the city centre?\nB: No. What happened?",
    "options": [
      {
        "key": "a",
        "text": "Could you tell me"
      },
      {
        "key": "b",
        "text": "Have you heard about"
      },
      {
        "key": "c",
        "text": "Wouldn’t you"
      },
      {
        "key": "d",
        "text": "Do you doubt"
      }
    ],
    "answer": "b",
    "context": "Conversation 4: Making the News (Questions 55–57)\nA: (55) ______ the protest in the city centre?\nB: No. What happened?\nA: Apparently, hundreds of people joined a march about public transport.\nB: Really? (56) ______\nA: Yes. It’s on all the news channels. The police said the event was peaceful.\nB: That’s good. Do you know (57) ______?\nA: Near the railway station.",
    "explanation": "สำนวนเปิดบทสนทนาถามข่าวสารเหตุการณ์ปัจจุบัน: 'Have you heard about the protest in the city centre?' (ได้ยินข่าวเรื่องการประท้วงหรือยัง?) รับกับคำตอบ 'No. What happened?'"
  },
  {
    "id": 56,
    "part": 3,
    "section": "Conversation 4: Making the News",
    "question": "A: Apparently, hundreds of people joined a march about public transport.\nB: Really? (56) ______",
    "options": [
      {
        "key": "a",
        "text": "I had no idea."
      },
      {
        "key": "b",
        "text": "I made it up."
      },
      {
        "key": "c",
        "text": "I’m going to direct it."
      },
      {
        "key": "d",
        "text": "I meant to protest."
      }
    ],
    "answer": "a",
    "context": "Conversation 4: Making the News (Questions 55–57)\nA: (55) ______ the protest in the city centre?\nB: No. What happened?\nA: Apparently, hundreds of people joined a march about public transport.\nB: Really? (56) ______\nA: Yes. It’s on all the news channels. The police said the event was peaceful.\nB: That’s good. Do you know (57) ______?\nA: Near the railway station.",
    "explanation": "เมื่อได้ยินข่าวที่ไม่เคยรู้มาก่อน ตอบรับด้วยสำนวนแสดงความประหลาดใจ: 'Really? I had no idea.' (จริงเหรอ ฉันไม่รู้เรื่องมาก่อนเลย)"
  },
  {
    "id": 57,
    "part": 3,
    "section": "Conversation 4: Making the News",
    "question": "B: That’s good. Do you know (57) ______?\nA: Near the railway station.",
    "options": [
      {
        "key": "a",
        "text": "where did it happen"
      },
      {
        "key": "b",
        "text": "where does it happen"
      },
      {
        "key": "c",
        "text": "where was happening"
      },
      {
        "key": "d",
        "text": "where it happened"
      }
    ],
    "answer": "d",
    "context": "Conversation 4: Making the News (Questions 55–57)\nA: (55) ______ the protest in the city centre?\nB: No. What happened?\nA: Apparently, hundreds of people joined a march about public transport.\nB: Really? (56) ______\nA: Yes. It’s on all the news channels. The police said the event was peaceful.\nB: That’s good. Do you know (57) ______?\nA: Near the railway station.",
    "explanation": "Indirect Question: 'Do you know where it happened?' เรียงประโยคแบบ S + V (where it happened) สอดคล้องกับคำตอบ 'Near the railway station.'"
  },
  {
    "id": 58,
    "part": 3,
    "section": "Conversation 5: Describing Films & Documentaries",
    "question": "Lena: What did you think of the documentary last night?\nChris: (58) ______ It really made me think about the issue.",
    "options": [
      {
        "key": "a",
        "text": "I thought it was powerful."
      },
      {
        "key": "b",
        "text": "I thought it was made up."
      },
      {
        "key": "c",
        "text": "I thought it was a location."
      },
      {
        "key": "d",
        "text": "I thought it was footage."
      }
    ],
    "answer": "a",
    "context": "Conversation 5: Describing Films and Documentaries (Questions 58–60)\nLena: What did you think of the documentary last night?\nChris: (58) ______ It really made me think about the issue.\nLena: I agree, although some parts were a little slow.\nChris: The interviews were excellent, though. Do you know (59) ______?\nLena: I think they filmed most of it in South America.\nChris: I loved the music too.\nLena: Me too. The (60) ______ was one of the best things about it.",
    "explanation": "Chris ชมสารคดีว่าสร้างความประทับใจและทำให้ได้ฉุกคิด: 'I thought it was powerful.' (ฉันคิดว่ามันทรงพลังมาก) สอดคล้องกับ 'It really made me think about the issue.'"
  },
  {
    "id": 59,
    "part": 3,
    "section": "Conversation 5: Describing Films & Documentaries",
    "question": "Chris: The interviews were excellent, though. Do you know (59) ______?\nLena: I think they filmed most of it in South America.",
    "options": [
      {
        "key": "a",
        "text": "where did they shoot it"
      },
      {
        "key": "b",
        "text": "where they shot it"
      },
      {
        "key": "c",
        "text": "where have they shot it"
      },
      {
        "key": "d",
        "text": "where do they shoot it"
      }
    ],
    "answer": "b",
    "context": "Conversation 5: Describing Films and Documentaries (Questions 58–60)\nLena: What did you think of the documentary last night?\nChris: (58) ______ It really made me think about the issue.\nLena: I agree, although some parts were a little slow.\nChris: The interviews were excellent, though. Do you know (59) ______?\nLena: I think they filmed most of it in South America.\nChris: I loved the music too.\nLena: Me too. The (60) ______ was one of the best things about it.",
    "explanation": "Indirect Question: 'Do you know where they shot it?' เรียงประธานตามด้วยกริยา (where they shot it)"
  },
  {
    "id": 60,
    "part": 3,
    "section": "Conversation 5: Describing Films & Documentaries",
    "question": "Chris: I loved the music too.\nLena: Me too. The (60) ______ was one of the best things about it.",
    "options": [
      {
        "key": "a",
        "text": "script"
      },
      {
        "key": "b",
        "text": "location"
      },
      {
        "key": "c",
        "text": "soundtrack"
      },
      {
        "key": "d",
        "text": "footage"
      }
    ],
    "answer": "c",
    "context": "Conversation 5: Describing Films and Documentaries (Questions 58–60)\nLena: What did you think of the documentary last night?\nChris: (58) ______ It really made me think about the issue.\nLena: I agree, although some parts were a little slow.\nChris: The interviews were excellent, though. Do you know (59) ______?\nLena: I think they filmed most of it in South America.\nChris: I loved the music too.\nLena: Me too. The (60) ______ was one of the best things about it.",
    "explanation": "Chris พูดชมเรื่องดนตรี ('loved the music') Lena จึงเห็นด้วยว่า 'soundtrack' (เพลงประกอบภาพยนตร์) เป็นหนึ่งในส่วนที่ดีที่สุด"
  },
  {
    "id": 61,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "What is the main purpose of the article?",
    "options": [
      {
        "key": "a",
        "text": "To explain why professional writers earn more at home"
      },
      {
        "key": "b",
        "text": "To describe how writers organise their work and deal with distractions"
      },
      {
        "key": "c",
        "text": "To compare permanent and temporary writing jobs"
      },
      {
        "key": "d",
        "text": "To explain why writers should stop using the internet"
      }
    ],
    "answer": "b",
    "explanation": "วัตถุประสงค์หลักของบทความคือ เล่าถึงวิธีการจัดระเบียบการทำงานของเหล่านักเขียนและการรับมือกับสิ่งรบกวนเมื่อต้องทำงานที่บ้าน (To describe how writers organise their work and deal with distractions)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 62,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "According to the advice in the article, why can starting work early be useful?",
    "options": [
      {
        "key": "a",
        "text": "It allows writers to use social media before work."
      },
      {
        "key": "b",
        "text": "It gives writers more time to exercise in the evening."
      },
      {
        "key": "c",
        "text": "Difficult tasks can be finished early, making the rest of the day easier."
      },
      {
        "key": "d",
        "text": "Writers are required to work before other people wake up."
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 2 ระบุชัดเจนว่า การเริ่มทำงานแต่เช้าช่วยให้สะสางงานยากๆ ให้เสร็จพ้นไปก่อนที่วันจะเริ่มวุ่นวาย ทำให้ช่วงเวลาที่เหลือของวันง่ายขึ้น (Difficult tasks can be finished early, making the rest of the day easier.)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 63,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "Which writer spent about forty-five minutes in bed thinking before beginning work?",
    "options": [
      {
        "key": "a",
        "text": "Ian Fleming"
      },
      {
        "key": "b",
        "text": "Haruki Murakami"
      },
      {
        "key": "c",
        "text": "Maya Angelou"
      },
      {
        "key": "d",
        "text": "Ursula K. Le Guin"
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 2 ระบุว่า Ursula K. Le Guin ตื่นนอนตอน 5:30 น. และใช้เวลานอนคิดทบทวนบนเตียงประมาณ 45 นาทีก่อนจะลุกไปเริ่มเขียนงาน",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 64,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "What daily writing goal did Ian Fleming have?",
    "options": [
      {
        "key": "a",
        "text": "About 500 words"
      },
      {
        "key": "b",
        "text": "About 1,000 words"
      },
      {
        "key": "c",
        "text": "Four hours of writing"
      },
      {
        "key": "d",
        "text": "Two finished pages"
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 2 ระบุว่า Ian Fleming ตั้งเป้าหมายการเขียนงานประจำวันอย่างเคร่งครัดที่วันละ 500 คำ (About 500 words)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 65,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "What does the article say about Haruki Murakami and social media?",
    "options": [
      {
        "key": "a",
        "text": "He checks it only once a day."
      },
      {
        "key": "b",
        "text": "He uses it after exercising."
      },
      {
        "key": "c",
        "text": "He uses it mainly for work."
      },
      {
        "key": "d",
        "text": "He does not use it."
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 3 ระบุชัดเจนเกี่ยวกับ Haruki Murakami ว่า: 'He does not use social media at all.' (เขาไม่ใช้โซเชียลมีเดียเลย)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 66,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "Why does Zadie Smith use software that blocks the internet?",
    "options": [
      {
        "key": "a",
        "text": "She wants to finish work before breakfast."
      },
      {
        "key": "b",
        "text": "She wants to avoid reacting to news and messages while working."
      },
      {
        "key": "c",
        "text": "She needs to communicate with readers."
      },
      {
        "key": "d",
        "text": "She is not permitted to use a smartphone."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 3 ระบุว่า Zadie Smith ใช้โปรแกรมบล็อกอินเทอร์เน็ตบนแล็ปท็อปเพื่อป้องกันไม่ให้ตนเองคอยเช็กอีเมลและข้อความขณะทำงาน (She wants to avoid reacting to news and messages while working.)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 67,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "What does the app recommended by Benjamin Law do?",
    "options": [
      {
        "key": "a",
        "text": "It switches off access to social media and the internet for a period of time."
      },
      {
        "key": "b",
        "text": "It counts how many words a writer produces."
      },
      {
        "key": "c",
        "text": "It creates a daily writing schedule automatically."
      },
      {
        "key": "d",
        "text": "It reminds writers to exercise every hour."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 3 ระบุว่า แอปที่ Benjamin Law แนะนำช่วยตัดการเชื่อมต่ออินเทอร์เน็ตเป็นช่วงเวลาที่กำหนดไว้ เพื่อให้นักเขียนไม่เสียสมาธิ (It switches off access to social media and the internet for a period of time.)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 68,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "How is Bernardine Evaristo’s routine different from writers who avoid the internet?",
    "options": [
      {
        "key": "a",
        "text": "She writes only in the evening."
      },
      {
        "key": "b",
        "text": "She works in a hotel instead of at home."
      },
      {
        "key": "c",
        "text": "She never takes breaks during the day."
      },
      {
        "key": "d",
        "text": "She goes online to catch up on news and opinions before starting work."
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 4 ระบุว่า กิจวัตรของ Bernardine Evaristo ต่างจากคนอื่นตรงที่เธอเริ่มวันทำงานด้วยการดื่มกาแฟและเปิดเน็ตอ่านข่าวและความคิดเห็นก่อนเริ่มเขียน (She goes online to catch up on news and opinions before starting work.)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 69,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "Why did Maya Angelou use a hotel room for writing?",
    "options": [
      {
        "key": "a",
        "text": "She travelled too often to work at home."
      },
      {
        "key": "b",
        "text": "She found it difficult to work effectively at home."
      },
      {
        "key": "c",
        "text": "She needed internet access provided by hotels."
      },
      {
        "key": "d",
        "text": "Her publisher required her to work there."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 4 ระบุว่า Maya Angelou พบว่าการทำงานที่บ้านเป็นไปไม่ได้เลย จึงไปเช่าห้องโรงแรมเล็กๆ เพื่อหลีกเลี่ยงสิ่งรบกวนในบ้าน (She found it difficult to work effectively at home.)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 70,
    "part": 4,
    "section": "Section A: Seen Reading – Unit 3",
    "question": "In the article, to ‘get difficult tasks out of the way’ most nearly means ______.",
    "options": [
      {
        "key": "a",
        "text": "give difficult work to someone else"
      },
      {
        "key": "b",
        "text": "avoid difficult work until later"
      },
      {
        "key": "c",
        "text": "finish difficult work so it no longer needs attention"
      },
      {
        "key": "d",
        "text": "remove difficult work from the schedule"
      }
    ],
    "answer": "c",
    "explanation": "สำนวน 'get difficult tasks out of the way' หมายถึง ทำงานยากๆ ให้เสร็จเรียบร้อยพ้นไป เพื่อจะได้ไม่ต้องกังวลหรือใส่ใจกับมันอีก (finish difficult work so it no longer needs attention)",
    "context": "Section A: Seen Reading – Unit 3 (Questions 61–70)\nWorking from home: How the great writers do it\n\nMany of us are now working from home, but writers have been doing it for centuries. How do they deal with the challenge of working alone, keeping to a routine and meeting deadlines without a manager watching them? Here are some of their habits and tips.\n\nWriters often advise starting early. When you begin work early in the morning, you can get difficult tasks out of the way before the day becomes busy and full of interruptions. Ernest Hemingway famously began writing at first light, around 6:00 a.m., because there was no one to disturb him and it was cool or quiet. Ursula K. Le Guin woke up at 5:30 a.m. and spent about forty-five minutes in bed thinking before having breakfast and sitting down to write at 7:15 a.m., working until midday. Ian Fleming, the creator of James Bond, also stuck to a disciplined routine. He began his day with a swim in the sea, wrote from 9:00 a.m. to midday, took a rest in the afternoon, and returned to his desk at 5:00 p.m. Fleming set himself a strict daily writing goal of 500 words.\n\nThen came the internet, which created endless distractions for anyone working at home. Different writers have adopted different strategies to keep their concentration. Japanese author Haruki Murakami maintains an extraordinarily strict lifestyle: he wakes at 4:00 a.m., writes for five to six hours, runs or swims, and goes to bed early at 9:00 p.m. He does not use social media at all. Zadie Smith does not own a smartphone and uses software on her laptop that blocks internet access to stop herself from checking emails and messages. Australian author Benjamin Law recommends apps that turn off the internet for set periods so that writers cannot lose concentration while working.\n\nHowever, not every writer shuts out the digital world. Bernardine Evaristo has a different routine: she starts her working day with two cups of coffee while reading online newspapers and commentary before she begins writing. She stays online throughout the day and takes exercise and power naps to stay fresh. Meanwhile, Maya Angelou found working from home completely impossible. To avoid all domestic distractions, she rented a modest hotel room, asked the staff not to clean it while she was there, and worked completely alone with just a dictionary, a Bible, and a deck of cards.\n\nUltimately, these routines show that there is no single formula for working from home. Whether you start at dawn or check the news first, the key is to find a routine that helps you avoid distractions and meet your deadlines."
  },
  {
    "id": 71,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "What is the main idea of the passage?",
    "options": [
      {
        "key": "a",
        "text": "A company uses AI to support employees while keeping people responsible for the final work."
      },
      {
        "key": "b",
        "text": "AI has completely replaced several employees in a design company."
      },
      {
        "key": "c",
        "text": "Working from home is impossible without AI."
      },
      {
        "key": "d",
        "text": "Temporary workers benefit from AI more than permanent workers."
      }
    ],
    "answer": "a",
    "explanation": "ใจความสำคัญของบทความคือ บริษัทนำ AI มาช่วยสนับสนุนการทำงานของพนักงาน แต่ยังคงกำหนดให้มนุษย์เป็นผู้รับผิดชอบผลงานขั้นสุดท้าย (A company uses AI to support employees while keeping people responsible for the final work.)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 72,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "What are employees NOT permitted to do?",
    "options": [
      {
        "key": "a",
        "text": "Use AI to organise meeting notes"
      },
      {
        "key": "b",
        "text": "Ask AI to prepare a first draft"
      },
      {
        "key": "c",
        "text": "Use AI while working from home"
      },
      {
        "key": "d",
        "text": "Send AI-generated work to clients without checking it"
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 2 ระบุชัดเจนเกี่ยวกับข้อห้ามของพนักงาน: 'they are not permitted to send its work directly to clients without checking it.' (ห้ามส่งงานของ AI ให้ลูกค้าโดยตรงโดยไม่ตรวจก่อน)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 73,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "In paragraph 3, what does ‘This’ in ‘This helps her…’ refer to?",
    "options": [
      {
        "key": "a",
        "text": "Working for a permanent company"
      },
      {
        "key": "b",
        "text": "Nina’s routine of doing important work first and using AI later"
      },
      {
        "key": "c",
        "text": "Writing every email without AI"
      },
      {
        "key": "d",
        "text": "Working from home three days a week"
      }
    ],
    "answer": "b",
    "explanation": "ในย่อหน้าที่ 3 คำว่า 'This' ในประโยค 'This helps her...' อ้างอิงถึงกิจวัตรของ Nina ที่ทำงานสำคัญที่สุดก่อนแล้วจึงใช้ AI ช่วยทำงานซ้ำซาก (Nina’s routine of doing important work first and using AI later)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 74,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "Why was Nina initially concerned about using the AI assistant?",
    "options": [
      {
        "key": "a",
        "text": "She believed it would make deadlines shorter."
      },
      {
        "key": "b",
        "text": "She did not have enough experience to use it."
      },
      {
        "key": "c",
        "text": "Her manager did not permit permanent staff to use AI."
      },
      {
        "key": "d",
        "text": "She thought using too many programs could affect her concentration."
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 3 ระบุความกังวลแรกเริ่มของ Nina: 'She was also worried that moving between too many programs might make her lose concentration.' (กังวลว่าการสลับหลายโปรแกรมอาจทำให้เสียสมาธิ)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 75,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "In paragraph 4, ‘in charge of the final decisions’ is closest in meaning to ______.",
    "options": [
      {
        "key": "a",
        "text": "unable to make decisions"
      },
      {
        "key": "b",
        "text": "interested in changing jobs"
      },
      {
        "key": "c",
        "text": "responsible for making the final decisions"
      },
      {
        "key": "d",
        "text": "permitted to avoid decisions"
      }
    ],
    "answer": "c",
    "explanation": "ในย่อหน้าที่ 4 สำนวน 'in charge of the final decisions' มีความหมายตรงกับ 'responsible for making the final decisions' (รับผิดชอบในการตัดสินใจขั้นสุดท้าย)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 76,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "Why did the team check every section of the AI-generated draft?",
    "options": [
      {
        "key": "a",
        "text": "The client had requested a longer document."
      },
      {
        "key": "b",
        "text": "Marco did not understand the proposal."
      },
      {
        "key": "c",
        "text": "They wanted to make the deadline later."
      },
      {
        "key": "d",
        "text": "One part contained information that was not in their original notes."
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 4 ระบุเหตุผลที่ทีมตรวจสอบทุกส่วนของเอกสารร่างอย่างละเอียด: 'one section included information that was not in the team’s original notes.' (มีส่วนหนึ่งที่มีข้อมูลที่ไม่ได้อยู่ในบันทึกการประชุมดั้งเดิม)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 77,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "What helped the team meet the deadline?",
    "options": [
      {
        "key": "a",
        "text": "AI saved time on the first draft, while the employees checked the content."
      },
      {
        "key": "b",
        "text": "The manager allowed them to send the AI draft without checking it."
      },
      {
        "key": "c",
        "text": "They removed several sections from the proposal."
      },
      {
        "key": "d",
        "text": "Marco completed the entire proposal alone."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 4 ระบุสิ่งที่ช่วยให้ทีมส่งงานทันกำหนด: เครื่องมือ AI ช่วยประหยัดเวลาในการร่างฉบับแรก ขณะที่พนักงานช่วยกันตรวจสอบความถูกต้องของเนื้อหา (AI saved time on the first draft, while the employees checked the content.)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 78,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "Why does Marco find the AI assistant useful?",
    "options": [
      {
        "key": "a",
        "text": "He has no background in design."
      },
      {
        "key": "b",
        "text": "It gives him a starting point for routine business messages."
      },
      {
        "key": "c",
        "text": "It allows him to avoid working with colleagues."
      },
      {
        "key": "d",
        "text": "It gives him a permanent contract."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 5 ระบุว่า Marco พบว่าผู้ช่วย AI มีประโยชน์เพราะช่วยสร้างจุดเริ่มต้นสำหรับข้อความธุรกิจประจำวัน (It gives him a starting point for routine business messages.)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 79,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "What would Nina prefer to use AI for?",
    "options": [
      {
        "key": "a",
        "text": "Sensitive complaints from important clients"
      },
      {
        "key": "b",
        "text": "All final decisions about projects"
      },
      {
        "key": "c",
        "text": "Messages that have not been checked"
      },
      {
        "key": "d",
        "text": "Routine summaries rather than sensitive client messages"
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 6 ระบุความชอบของ Nina: 'She would rather use AI for routine summaries than for sensitive messages to clients.' (ชอบใช้ AI สรุปเอกสารประจำวันมากกว่าข้อความสำคัญถึงลูกค้า)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 80,
    "part": 4,
    "section": "Section B: Unseen Reading – Unit 3",
    "question": "Which statement best represents Nina’s view of future AI use?",
    "options": [
      {
        "key": "a",
        "text": "Even if AI improves, people should remain responsible for final decisions."
      },
      {
        "key": "b",
        "text": "AI should eventually make all workplace decisions."
      },
      {
        "key": "c",
        "text": "Employees should stop using AI if they work from home."
      },
      {
        "key": "d",
        "text": "Only temporary staff should be allowed to use AI."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 6 ระบุทัศนะของ Nina ต่อการใช้ AI ในอนาคต: ต่อให้เครื่องมือ AI ก้าวหน้าขึ้นเพียงใด มนุษย์ก็ยังคงต้องเป็นผู้รับผิดชอบการตัดสินใจขั้นสุดท้าย (Even if AI improves, people should remain responsible for final decisions.)",
    "context": "Section B: Unseen Reading – Unit 3 (Questions 71–80)\nAI as a Workplace Assistant\n\nNina works for a small design company. She has a permanent contract and works from home three days a week. Her team often has several projects at the same time, so meeting deadlines and keeping to a routine are important.\n\nRecently, the company introduced an AI assistant. It can prepare first drafts of routine emails, organise notes from meetings and suggest short summaries of documents. Employees are allowed to use the tool, but they are not permitted to send its work directly to clients without checking it. The manager regularly reminds everyone that each employee must take responsibility for the final version.\n\nAt first, Nina was not sure whether the new tool would improve her work. She already had several years of experience and was comfortable writing her own emails. She was also worried that moving between too many programs might make her lose concentration. She therefore developed a simple routine. She does her most important work first and uses the AI assistant later for repetitive tasks. This helps her get routine jobs out of the way without changing her whole working style.\n\nOne Wednesday, Nina’s team began to fall behind schedule on an important proposal. They used the AI assistant to organise their meeting notes and prepare a first draft. However, one section included information that was not in the team’s original notes. Because accuracy was essential, Nina and her colleagues checked every section before using it. They still managed to meet the deadline because the tool saved time on the first draft.\n\nThe company also employs Marco, a temporary designer. He has a strong background in illustration but less experience in business writing. He finds the AI assistant useful for producing a starting point for routine messages. However, he still asks an experienced colleague to check important emails.\n\nNina now has a clear preference. She would rather use AI for routine summaries than for sensitive messages to clients. Even if AI tools become more advanced, she believes people should remain in charge of the final decisions."
  },
  {
    "id": 81,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "Why were Gavin Bain and Billy Boyd disappointed after meeting record company executives in London?",
    "options": [
      {
        "key": "a",
        "text": "The executives did not like rap music."
      },
      {
        "key": "b",
        "text": "They were told that their Scottish accents did not sound like ‘real’ rappers."
      },
      {
        "key": "c",
        "text": "They had forgotten to bring their music."
      },
      {
        "key": "d",
        "text": "The executives wanted them to become film actors."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 1 ระบุว่า Gavin Bain และ Billy Boyd ผิดหวังจากการพบผู้บริหารค่ายเพลงในลอนดอนเพราะถูกบอกว่าสำเนียงสกอตติชไม่เหมือนแร็ปเปอร์ของจริง (They were told that their Scottish accents did not sound like ‘real’ rappers.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 82,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "What did Bain and Boyd decide to do after their unsuccessful meeting?",
    "options": [
      {
        "key": "a",
        "text": "Stop performing rap music completely"
      },
      {
        "key": "b",
        "text": "Move permanently to California"
      },
      {
        "key": "c",
        "text": "Pretend to be American rappers"
      },
      {
        "key": "d",
        "text": "Start their own record company"
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 2 ระบุว่า หลังจากการถูกปฏิเสธ ทั้งสองจึงตัดสินใจเสแสร้งสร้างตัวตนเป็นแร็ปเปอร์ชาวอเมริกันจากแคลิฟอร์เนีย (Pretend to be American rappers)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 83,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "Why did they create the identities ‘Silibil’ and ‘Brains’?",
    "options": [
      {
        "key": "a",
        "text": "They believed American identities would improve their chances of success."
      },
      {
        "key": "b",
        "text": "They wanted to make a documentary about California."
      },
      {
        "key": "c",
        "text": "Their manager asked them to change their names."
      },
      {
        "key": "d",
        "text": "They had already become famous in America."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 2 ระบุว่า พวกเขาสร้างตัวตน 'Silibil' และ 'Brains' ขึ้นมาเพราะเชื่อว่าการเป็นชาวอเมริกันจะเพิ่มโอกาสประสบความสำเร็จในวงการเพลง (They believed American identities would improve their chances of success.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 84,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "What shows that their scheme became highly successful?",
    "options": [
      {
        "key": "a",
        "text": "They returned to college in Scotland."
      },
      {
        "key": "b",
        "text": "They opened their own music studio."
      },
      {
        "key": "c",
        "text": "They stopped speaking with American accents."
      },
      {
        "key": "d",
        "text": "They obtained a record deal and appeared on MTV."
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 3 ระบุหลักฐานความสำเร็จของแผนการ: พวกเขาได้เซ็นสัญญากับค่ายเพลง Sony ได้สัญญาบันทึกเสียง และได้ไปออกรายการ MTV ในนิวยอร์ก (They obtained a record deal and appeared on MTV.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 85,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "Who was one of the few people who knew the truth about their identities?",
    "options": [
      {
        "key": "a",
        "text": "Bain’s American girlfriend"
      },
      {
        "key": "b",
        "text": "Eminem"
      },
      {
        "key": "c",
        "text": "A Sony executive"
      },
      {
        "key": "d",
        "text": "Boyd’s girlfriend in Dundee"
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 3 ระบุชัดเจนว่า หนึ่งในไม่กี่คนที่รู้ความจริงเรื่องตัวตนของพวกเขาคือ แฟนสาวของ Boyd ที่เมือง Dundee สกอตแลนด์ (Boyd’s girlfriend in Dundee)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 86,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "What problem did the two men experience as time passed?",
    "options": [
      {
        "key": "a",
        "text": "Maintaining their false identities became increasingly difficult."
      },
      {
        "key": "b",
        "text": "They forgot how to rap."
      },
      {
        "key": "c",
        "text": "They could no longer find a record company."
      },
      {
        "key": "d",
        "text": "Their American fans stopped listening to them."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 4 ระบุปัญหาที่ทั้งคู่ประสบเมื่อเวลาผ่านไป: การรักษาตัวตนปลอมตลอด 24 ชั่วโมงกลายเป็นเรื่องยากลำบากและสร้างความเครียดอย่างรุนแรง (Maintaining their false identities became increasingly difficult.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 87,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "Why was Bain’s relationship with his girlfriend from Texas especially difficult?",
    "options": [
      {
        "key": "a",
        "text": "She knew about the scheme from the beginning."
      },
      {
        "key": "b",
        "text": "She wanted him to return to Scotland."
      },
      {
        "key": "c",
        "text": "He had to continue pretending to be someone he was not."
      },
      {
        "key": "d",
        "text": "She worked for their record company."
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 3 ระบุว่า ความสัมพันธ์ของ Bain กับแฟนสาวชาวเท็กซัสยากลำบากเป็นพิเศษเพราะเธอไม่เคยสงสัยเลย ทำให้เขาต้องเสแสร้งแกล้งเป็นคนอื่นตลอดเวลา (He had to continue pretending to be someone he was not.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 88,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "In the passage, the idea that things ‘got out of control’ suggests that ______.",
    "options": [
      {
        "key": "a",
        "text": "the plan continued much further than they originally expected"
      },
      {
        "key": "b",
        "text": "they were unable to perform on stage"
      },
      {
        "key": "c",
        "text": "their record company ended their contract immediately"
      },
      {
        "key": "d",
        "text": "the public discovered their secret very quickly"
      }
    ],
    "answer": "a",
    "explanation": "สำนวน 'got out of control' ในย่อหน้าที่ 4 หมายถึง แผนการนี้เลยเถิดและดำเนินไปยาวนานเกินกว่าที่พวกเขาตั้งใจไว้แต่แรกมาก (the plan continued much further than they originally expected)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 89,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "What did Bain and Boyd eventually do because of the pressure of maintaining the lie?",
    "options": [
      {
        "key": "a",
        "text": "They moved permanently to America."
      },
      {
        "key": "b",
        "text": "They created another false identity."
      },
      {
        "key": "c",
        "text": "They told the truth and ended the band."
      },
      {
        "key": "d",
        "text": "They asked their manager to explain everything."
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 4 ระบุว่า ในที่สุดเนื่องจากทนแรงกดดันทางจิตใจไม่ไหว ทั้งสองจึงตัดสินใจสารภาพความจริงและยุบวงดนตรี (They told the truth and ended the band.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 90,
    "part": 4,
    "section": "Section C: Seen Reading – Unit 4",
    "question": "Which statement best expresses the main idea of the passage?",
    "options": [
      {
        "key": "a",
        "text": "Two musicians accidentally became famous after moving to America."
      },
      {
        "key": "b",
        "text": "Two Scottish rappers created false identities, achieved success, and eventually revealed the truth."
      },
      {
        "key": "c",
        "text": "Record companies usually prefer American musicians."
      },
      {
        "key": "d",
        "text": "A documentary helped two unknown musicians become famous."
      }
    ],
    "answer": "b",
    "explanation": "ใจความสำคัญของบทความ: แร็ปเปอร์ชาวสกอตแลนด์สองคนสร้างตัวตนปลอม ประสบความสำเร็จในวงการ และสุดท้ายเปิดเผยความจริง (Two Scottish rappers created false identities, achieved success, and eventually revealed the truth.)",
    "context": "Section C: Seen Reading – Unit 4 (Questions 81–90)\nThe Great Hip Hop Hoax\n\nIn the early 2000s, Scottish musicians Gavin Bain and Billy Boyd dreamed of becoming rap stars. They traveled from their hometown of Dundee to London to perform for major record company executives. However, when the executives heard them perform, they were laughed out of the room. The executives told them that their strong Scottish accents sounded ridiculous and that no one would ever take a Scottish rap duo seriously.\n\nFurious and disappointed, Bain and Boyd decided to deceive the music industry. They created false American identities, renaming themselves 'Brains' (Bain) and 'Silibil' (Boyd), two rappers from California. In reality, Bain had never even visited the United States. To pull off the hoax, they spent hours watching MTV, learning American slang, adopting West Coast accents, and inventing elaborate backstories about growing up in California.\n\nWhen they returned to London as Silibil 'n' Brains, record executives were completely convinced. The duo was signed by Sony Music, given a substantial record deal, and invited to appear on MTV in New York. They partied with celebrities like Madonna and supported Eminem on his UK tour. For three years, they lived a complete lie, speaking in American accents constantly in public and with their management. One of the few people who knew their true identity was Boyd's girlfriend back in Dundee, while Bain's American girlfriend from Texas never suspected he was Scottish.\n\nHowever, living a lie 24 hours a day began to take a severe emotional toll. The pressure of maintaining their accents and preventing anyone from discovering their real past created extreme paranoia and stress. As things got completely out of control, Bain and Boyd found themselves constantly arguing and unable to live normal lives. Finally, unable to bear the psychological burden any longer, the two men decided to come clean. They revealed the truth about their Scottish origins and ended the band. Their astonishing story was later told in Gavin Bain's book and adapted into the acclaimed documentary film 'The Great Hip Hop Hoax'."
  },
  {
    "id": 91,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "What is the main purpose of the passage?",
    "options": [
      {
        "key": "a",
        "text": "To explain how a false story spread and how it was checked"
      },
      {
        "key": "b",
        "text": "To describe why schools should close more often"
      },
      {
        "key": "c",
        "text": "To show how local governments create websites"
      },
      {
        "key": "d",
        "text": "To explain why journalists should avoid social media"
      }
    ],
    "answer": "a",
    "explanation": "จุดประสงค์หลักของบทความคือ อธิบายว่าเรื่องราวข่าวปลอมแพร่กระจายได้อย่างไร และนักข่าวตรวจสอบข้อเท็จจริงอย่างไร (To explain how a false story spread and how it was checked)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 92,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "Why did many people initially believe the post?",
    "options": [
      {
        "key": "a",
        "text": "It had been reported on television."
      },
      {
        "key": "b",
        "text": "Teachers had already closed the schools."
      },
      {
        "key": "c",
        "text": "It looked official and contained the city logo."
      },
      {
        "key": "d",
        "text": "The education department had shared it."
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 2 ระบุว่า ผู้ปกครองจำนวนมากเชื่อโพสต์ดังกล่าวตั้งแต่แรกเพราะประกาศมีโลโก้ของเมืองและใช้ภาษาที่เป็นทางการ (It looked official and contained the city logo.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 93,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "What first made Priya suspicious of the story?",
    "options": [
      {
        "key": "a",
        "text": "Parents had stopped sharing it."
      },
      {
        "key": "b",
        "text": "She could not find the announcement on the official government website."
      },
      {
        "key": "c",
        "text": "The photograph did not include a city logo."
      },
      {
        "key": "d",
        "text": "The schools had already opened."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 3 ระบุสิ่งที่ทำให้นักข่าว Priya สงสัยเป็นอย่างแรก: บนเว็บไซต์ทางการของหน่วยงานรัฐไม่มีการประกาศเรื่องการปิดโรงเรียนเลย (She could not find the announcement on the official government website.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 94,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "Why did Priya contact the government and education department?",
    "options": [
      {
        "key": "a",
        "text": "She wanted them to close the schools."
      },
      {
        "key": "b",
        "text": "She planned to create another notice."
      },
      {
        "key": "c",
        "text": "She wanted to verify the information before reporting it."
      },
      {
        "key": "d",
        "text": "She needed permission to use social media."
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 3 ระบุว่า Priya ติดต่อหน่วยงานรัฐและกรมการศึกษาเพราะเธอต้องการตรวจสอบยืนยันข้อมูลให้แน่ชัดก่อนที่จะรายงานข่าว (She wanted to verify the information before reporting it.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 95,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "What had happened to the photograph in the false post?",
    "options": [
      {
        "key": "a",
        "text": "It was genuine but several years old."
      },
      {
        "key": "b",
        "text": "It had been edited from an older official document."
      },
      {
        "key": "c",
        "text": "A journalist had created it for an article."
      },
      {
        "key": "d",
        "text": "The government had accidentally published it."
      }
    ],
    "answer": "b",
    "explanation": "ย่อหน้าที่ 4 ระบุว่า ภาพในโพสต์ปลอมนั้นถูกสร้างขึ้นโดยการนำเอกสารประกาศฉบับเก่าของทางราชการมาตัดต่อแก้ไข (It had been edited from an older official document.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 96,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "According to the person who first created the post, what was its original purpose?",
    "options": [
      {
        "key": "a",
        "text": "To deceive journalists"
      },
      {
        "key": "b",
        "text": "To close the schools"
      },
      {
        "key": "c",
        "text": "To advertise a local business"
      },
      {
        "key": "d",
        "text": "To make a joke among friends"
      }
    ],
    "answer": "d",
    "explanation": "ย่อหน้าที่ 4 ระบุว่า เจตนาดั้งเดิมของคนที่สร้างโพสต์ขึ้นมาคือ ต้องการทำเป็นเรื่องล้อเล่นในกลุ่มเพื่อนสนิทเท่านั้น (To make a joke among friends)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 97,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "In paragraph 4, ‘it’ in ‘it had originally been intended as a joke’ refers to ______.",
    "options": [
      {
        "key": "a",
        "text": "the education department"
      },
      {
        "key": "b",
        "text": "the photograph/post"
      },
      {
        "key": "c",
        "text": "the government website"
      },
      {
        "key": "d",
        "text": "the school closure"
      }
    ],
    "answer": "b",
    "explanation": "ในย่อหน้าที่ 4 คำสรรพนาม 'it' ใน 'it had originally been intended as a joke' อ้างอิงถึง ภาพประกาศหรือโพสต์ปลอมดังกล่าว (the photograph/post)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 98,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "Which action does Priya recommend when checking an online story?",
    "options": [
      {
        "key": "a",
        "text": "Sharing it first and checking it later"
      },
      {
        "key": "b",
        "text": "Believing it if the image looks professional"
      },
      {
        "key": "c",
        "text": "Comparing it with official and reliable sources"
      },
      {
        "key": "d",
        "text": "Ignoring all stories on social media"
      }
    ],
    "answer": "c",
    "explanation": "ย่อหน้าที่ 5 ระบุคำแนะนำของ Priya ในการเช็กข่าวออนไลน์: ควรนำข้อมูลไปเปรียบเทียบตรวจสอบกับเว็บไซต์ทางการและสำนักข่าวที่น่าเชื่อถือ (Comparing it with official and reliable sources)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 99,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "What can be inferred from the final paragraph?",
    "options": [
      {
        "key": "a",
        "text": "False information may continue spreading even after it has been corrected."
      },
      {
        "key": "b",
        "text": "Most people stopped using social media that afternoon."
      },
      {
        "key": "c",
        "text": "The schools eventually closed because of the post."
      },
      {
        "key": "d",
        "text": "The journalist removed her article after several days."
      }
    ],
    "answer": "a",
    "explanation": "ย่อหน้าที่ 6 ระบุสิ่งที่สรุปได้คือ ข้อมูลเท็จอาจยังคงแพร่กระจายต่อไปได้อีกหลายวันแม้ว่าจะมีการแถลงแก้ไขความจริงแล้วก็ตาม (False information may continue spreading even after it has been corrected.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  },
  {
    "id": 100,
    "part": 4,
    "section": "Section D: Unseen Reading – Unit 4",
    "question": "Which statement best represents the lesson of the passage?",
    "options": [
      {
        "key": "a",
        "text": "Professional-looking posts are always reliable."
      },
      {
        "key": "b",
        "text": "News should be shared quickly before it disappears."
      },
      {
        "key": "c",
        "text": "Information should be checked before people believe or share it."
      },
      {
        "key": "d",
        "text": "Only government employees can identify fake news."
      }
    ],
    "answer": "c",
    "explanation": "บทเรียนสำคัญที่สุดของบทความคือ ข้อมูลข่าวสารควรได้รับการตรวจสอบข้อเท็จจริงก่อนที่ผู้คนจะปักใจเชื่อหรือแชร์ต่อไป (Information should be checked before people believe or share it.)",
    "context": "Section D: Unseen Reading – Unit 4 (Questions 91–100)\nThe Story That Spread Too Fast\n\nOn Monday morning, thousands of people began sharing a social-media post claiming that all schools in a large city would close for a week because of unsafe drinking water. The message included a photograph of what appeared to be an official notice and said that the information had come from the local government.\n\nWithin two hours, the story had been shared more than 20,000 times. Many parents believed it because the notice contained the city logo and used formal language. Some local businesses even changed their plans because they expected parents to stay home with their children.\n\nHowever, one local journalist, Priya Shah, doubted the story. She noticed that the government website contained no announcement about school closures. She also saw that one word in the supposed official notice was spelled incorrectly. Instead of immediately publishing an article, Priya contacted both the local government and the education department.\n\nBoth organisations confirmed that the notice was fake. The photograph had been created by changing an older public-information document. The person who first posted it later admitted that it had originally been intended as a joke for a small group of friends. However, someone copied the image without the original explanation and shared it publicly.\n\nPriya then published an article explaining what had happened. She showed readers how to check whether similar stories were reliable. First, she suggested looking for the same information on official websites. Second, she recommended checking whether reliable news organisations were reporting the story. Finally, she advised readers to examine photographs and screenshots carefully because professional-looking images can still contain false information.\n\nBy the afternoon, the local government had posted a message saying that schools would remain open. Nevertheless, the false story continued to appear online for several days. Priya said this showed an important problem with social media: correcting false information can take much longer than spreading it."
  }
];
