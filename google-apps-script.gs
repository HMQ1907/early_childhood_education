/**
 * EDUBIZ MEDIA — Nhận dữ liệu form "Đăng ký tư vấn" và ghi vào Google Sheet.
 * Dán toàn bộ file này vào: Google Sheet → Extensions (Tiện ích mở rộng) → Apps Script.
 * Sau đó Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 */
const SHEET_NAME = 'Đăng ký tư vấn';
const HEADERS = ['Thời gian', 'Tên trường / trung tâm', 'Người liên hệ', 'SĐT / Zalo', 'Dịch vụ quan tâm', 'Ghi chú', 'Trang gửi', 'Thiết bị'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#24e5d5');
      sh.setFrozenRows(1);
    }
    const clean = (v) => String(v || '').slice(0, 2000).replace(/^[=+\-@]/, "'$&"); // chặn chèn công thức
    sh.appendRow([
      new Date(),
      clean(p.org), clean(p.name), clean(p.phone),
      clean(p.service), clean(p.note), clean(p.page), clean(p.ua)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/* Mở URL web app trên trình duyệt sẽ thấy dòng này — dùng để kiểm tra đã deploy đúng chưa */
function doGet() {
  return ContentService.createTextOutput('Edubiz form endpoint đang hoạt động.');
}
