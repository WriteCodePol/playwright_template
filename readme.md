
ติดตั้ง Playwright ตัวเต็ม (รวม browser):
## npx playwright install


กรณีติดตั้งใหม่ตั้งแต่เริ่ม Project โดยไม่ได้ Clone จาก Git
## npm init -y
## npm i -D playwright
## npm install -D @playwright/test


คำสั่ง GenCode 
## npx playwright codegen https://demoqa.com/
คำสั่ง รัน Script 
## npx playwright test /tests/example.spec.ts
คำสั่ง รัน Script  + Report  รายงานจะอยู่ที่ ..\playwright-report\index.html
## npx playwright test /tests/example.spec.ts --reporter=html
คำสั่ง รัน Script โดยแสดงผ่าน UI
## npx playwright test /tests/example.spec.ts  --ui
