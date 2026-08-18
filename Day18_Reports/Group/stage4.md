# Day 18 — Chặng 4: Build ba Micro-prototype

## Thông tin nhóm

| Thông tin | Chi tiết |
|---|---|
| Case | Case A — AI Tutor: Diagnostic Refresher |
| Thành viên | Đồng Đại Huy, Nguyễn Thị Hải Yến, Lê Đình Việt |
| Common context | Học viên gặp thuật ngữ khó trong lớp học có nhịp độ nhanh |
| Task chung | Dùng từng option để xử lý phần chưa hiểu và tiếp tục theo dõi bài |
| Prototype folder | **Day18_Prototypes/** |

## 1. Scope chuẩn

Cả ba prototype dùng chung:

- Một slide có thuật ngữ **G-T-B-D-Hypothesis**.
- Cùng bối cảnh: giảng viên đã chuyển sang phần tiếp theo.
- Cùng task: xử lý phần chưa hiểu và tiếp tục bài.
- Cùng content fixture và visual components.
- Cùng đường quay lại common context.

Chỉ critical interaction khác nhau:

| Option | Critical interaction |
|---|---|
| A — AI Diagnostic Refresher | AI hỏi ngắn, đề xuất khái niệm nền và tạo ôn tập |
| B — Smart Tooltip | User click/hover thuật ngữ để xem định nghĩa và ví dụ |
| C — Anonymous Human Escalation | AI chuẩn bị context, user duyệt và gửi câu hỏi ẩn danh |

## 2. Ba micro-prototype

### Option A — AI Diagnostic Refresher

**Người phụ trách:** Đồng Đại Huy

Flow:

1. Common context: slide có thuật ngữ khó và nút “Tôi vẫn chưa hiểu”.
2. Diagnostic: AI hỏi tối đa hai câu ngắn.
3. Result/recovery: AI đưa giải thích, evidence và uncertainty; user có thể tiếp tục, lưu, thử lại hoặc quay lại slide.

[Mở Option A](../../Day18_Prototypes/option-a.html)

### Option B — Smart Tooltip

**Người phụ trách:** Nguyễn Thị Hải Yến

Flow:

1. Common context: thuật ngữ khó có icon [ ? ].
2. Tooltip: user click/hover để xem định nghĩa và ví dụ đã chuẩn bị.
3. Recovery: user đóng tooltip, lưu thuật ngữ hoặc tiếp tục bài.

[Mở Option B](../../Day18_Prototypes/option-b.html)

### Option C — Anonymous Human Escalation

**Người phụ trách:** Lê Đình Việt

Flow:

1. Common context: user gặp khó khăn và chọn “Hỏi người hỗ trợ ẩn danh”.
2. Preview: AI chuẩn bị câu hỏi và context; user có thể sửa, duyệt hoặc hủy.
3. Sent/recovery: câu hỏi ở trạng thái chờ phản hồi; user quay lại bài và giữ được mốc slide.

[Mở Option C](../../Day18_Prototypes/option-c.html)

### Trang mở cả bộ A/B/C

[Mở trang tổng hợp prototypes](../../Day18_Prototypes/index.html)

## 3. Definition of testable

Prototype được xem là test-ready khi:

- Tester có thể mở từng option mà không cần người build giải thích.
- Cả ba bắt đầu từ cùng một slide, task và desired outcome.
- Tester có thể tự thực hiện critical interaction.
- Nội dung đủ thật để tester đưa ra quyết định.
- Mỗi option thể hiện rõ vai trò của user, AI và/hoặc người hỗ trợ.
- Tester có thể quay lại common context.
- Các nút chính có feedback hoặc chuyển trạng thái rõ ràng.

## 4. Prototype annotation

### Option A

- **We expect the tester to:** Bấm “Tôi vẫn chưa hiểu”, trả lời một lựa chọn chẩn đoán, đọc phần giải thích và quyết định có quay lại bài hay không.
- **Watch for:** Tester có hiểu AI đang dựa vào evidence nào không; có đọc uncertainty không; có thấy câu hỏi chẩn đoán làm mất thời gian không.
- **Do not explain:** AI đang chẩn đoán như thế nào hoặc tester nên chọn câu trả lời nào.

### Option B

- **We expect the tester to:** Nhận ra icon [ ? ], mở tooltip, đọc định nghĩa/ví dụ và tự đóng để tiếp tục.
- **Watch for:** Tester có nhìn thấy icon không; tooltip có đủ rõ và ngắn không; tester có cần hỏi thêm ngoài nội dung được cung cấp không.
- **Do not explain:** Vị trí icon hoặc nội dung tooltip trước khi tester tự tìm.

### Option C

- **We expect the tester to:** Chọn hỏi người hỗ trợ, review context, chỉnh câu hỏi nếu cần và quyết định gửi ẩn danh hoặc quay lại.
- **Watch for:** Tester có tin tưởng nội dung AI chuẩn bị không; có hiểu dữ liệu nào sẽ được gửi không; trạng thái chờ phản hồi có khiến họ tiếp tục bài không.
- **Do not explain:** AI đang tóm tắt context hoặc tại sao nên gửi câu hỏi.

## 5. Build order

| Khoảng thời gian | Việc cần làm | Trạng thái |
|---:|---|---|
| 0–10 phút | Chuẩn hóa common context, slide, task và content fixture | Hoàn thành |
| 10–55 phút | Mỗi thành viên build một option | Hoàn thành bản prototype đầu |
| 55–65 phút | Bổ sung evidence, uncertainty, control và recovery | Hoàn thành bản prototype đầu |
| 65–75 phút | Thành viên thử option do người khác build | Cần thực hiện trong buổi review nhóm |
| 75–80 phút | Chuẩn hóa link, reset path và thứ tự A/B/C | Cần chốt trước khi test |

## 6. Tự kiểm — GATE 4: Test-ready

- [x] Có common context dùng chung.
- [x] Có cùng task và desired outcome.
- [x] Có ba option với mechanism khác nhau.
- [x] Mỗi option có flow 2–3 trạng thái.
- [x] Có control/recovery path.
- [x] Có annotation cho người facilitate.
- [x] Prototype chạy độc lập bằng HTML/CSS/JavaScript, không cần API thật.
- [ ] Cả ba thành viên đã thử option do người khác build.
- [ ] Nhóm đã kiểm tra trên cùng một thiết bị/trình duyệt và chốt thứ tự test.

### Kết luận Chặng 4

Nhóm đã có ba micro-prototype chạy được cho A/B/C. Bộ prototype đủ để bắt đầu peer review và chuẩn bị Chặng 5. Gate 4 sẽ được đóng chính thức sau khi cả ba thành viên thử prototype do người khác build và xác nhận tester có thể tự thao tác mà không cần giải thích.
