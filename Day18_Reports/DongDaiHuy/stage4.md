# Day 18 — Chặng 4: Build Micro-prototype của Đồng Đại Huy

## Thông tin cá nhân

| Thông tin | Chi tiết |
|---|---|
| Họ và tên | Đồng Đại Huy |
| Mã học viên | 2A202601901 |
| Option phụ trách | Option A — AI Diagnostic Refresher |
| Prototype | **Day18_Prototypes/option-a.html** |

## 1. Mục tiêu prototype

Kiểm tra xem một học viên có thể chủ động yêu cầu AI chẩn đoán nhanh phần chưa hiểu, đọc một giải thích ngắn và quay lại bài học mà không cần facilitator giải thích hay không.

## 2. Flow đã xây dựng

### State 1 — Common context

- Hiển thị Slide 12/24.
- Hiển thị thuật ngữ khó **G-T-B-D-Hypothesis**.
- Có nút “Tôi vẫn chưa hiểu”.
- Có recovery path “Đánh dấu để xem sau”.

### State 2 — Diagnostic

- AI nói rõ sẽ hỏi tối đa hai câu ngắn.
- Người học chọn loại khó khăn đang gặp.
- Hiển thị evidence đang dùng: slide hiện tại và lựa chọn của người học.
- Người học có thể dừng và quay lại bài.

### State 3 — Result and recovery

- AI đưa ra gợi ý ôn tập ngắn.
- Hiển thị evidence.
- Nêu rõ đây là gợi ý, không phải kết luận chắc chắn.
- Người học có thể quay lại bài, lưu để xem sau hoặc chọn lại.

## 3. Annotation

- **We expect the tester to:** Bấm nút hỗ trợ, chọn một khó khăn, đọc gợi ý và quyết định quay lại bài.
- **Watch for:** First action, thời gian đọc, mức độ hiểu câu “có thể bạn cần xem lại”, việc tester có tìm recovery path hay không.
- **Do not explain:** Cách AI chẩn đoán hoặc ý nghĩa của các nút trước khi tester tự thao tác.

## 4. Tự kiểm cá nhân — GATE 4: Test-ready

- [x] Prototype có 2–3 trạng thái.
- [x] User chủ động khởi động luồng AI.
- [x] Có evidence và uncertainty.
- [x] Có stop, retry, save và return path.
- [x] Không cần model/API thật.
- [x] Có thể mở trực tiếp bằng trình duyệt.
- [ ] Cần thành viên khác thử độc lập trước khi chốt.

## 5. Kết luận

Prototype Option A đã đủ để kiểm thử critical interaction của AI Diagnostic Refresher. Bước tiếp theo là nhờ một thành viên không build Option A thao tác thử, ghi lại điểm dừng hoặc chỗ hiểu sai, rồi sửa trước khi chuẩn bị test với tester ngoài nhóm.
