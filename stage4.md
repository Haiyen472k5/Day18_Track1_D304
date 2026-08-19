# Day 18 — Chặng 4: Build ba Micro-prototype

## Phân công chính thức

| Option | Cơ chế | Người phụ trách | Prototype |
|---|---|---|---|
| A | AI Diagnostic Refresher | Lê Đình Việt | [option-a.html](Day18_Prototypes/option-a.html) |
| B | Smart Tooltip / Contextual Concept Note | Nguyễn Thị Hải Yến | [prototype.html](Day18_Prototypes/prototype.html) |
| C | Anonymous Human Escalation | Đồng Đại Huy | [option-c.html](Day18_Prototypes/option-c.html) |

## 1. Common context và task

Cả ba prototype dùng chung:

- Cùng slide bài học của prototype Yến, gồm Machine Learning, LLM và Reinforcement Learning.
- Cùng bối cảnh: giảng viên đã chuyển sang phần tiếp theo.
- Cùng task: xử lý phần chưa hiểu và tiếp tục theo dõi bài.
- Cùng content fixture, header, badge, spacing và visual language.
- Cùng đường quay lại context ban đầu.

Prototype của Nguyễn Thị Hải Yến được chọn làm chuẩn trình bày: slide-container trung tâm, nền xám nhạt, card trắng bo góc, header có badge, modal popup và nút hành động dạng pill.

## 2. Ba critical interaction

### Option A — AI Diagnostic Refresher

- User chủ động yêu cầu AI hỗ trợ.
- AI hỏi tối đa 1–2 câu ngắn.
- AI đưa ra gợi ý ôn tập, evidence và uncertainty.
- User quyết định tiếp tục, lưu, thử lại hoặc quay lại bài.

### Option B — Smart Tooltip

- User click/hover vào thuật ngữ khó.
- Hệ thống hiển thị định nghĩa, ví dụ và nguồn nội dung đã chuẩn bị.
- User đóng popup hoặc lưu thuật ngữ để tiếp tục.

### Option C — Anonymous Human Escalation

- User chọn hỏi người hỗ trợ.
- AI chuẩn bị context và câu hỏi.
- User duyệt, chỉnh sửa hoặc hủy trước khi gửi ẩn danh.
- User quay lại bài trong khi chờ phản hồi.

## 3. Prototype annotation

| Option | We expect the tester to | Watch for | Do not explain |
|---|---|---|---|
| A | Yêu cầu AI, trả lời câu hỏi ngắn, đọc gợi ý và quyết định quay lại bài | AI có được hiểu là gợi ý không; câu hỏi có làm mất thời gian không | Cách AI chẩn đoán |
| B | Tự nhận ra nút/thuật ngữ tương tác, mở popup và tiếp tục | Tester có nhìn thấy affordance và hiểu nội dung nhanh không | Vị trí nút và nội dung popup |
| C | Mở kênh hỏi, review context, rồi gửi hoặc hủy | Tester có hiểu dữ liệu sẽ gửi và trạng thái chờ phản hồi không | AI đang tóm tắt context thế nào |

## 4. Definition of testable

- Tester có thể tự mở cả A/B/C.
- Cả ba bắt đầu từ cùng context và task.
- Mỗi option có 2–3 trạng thái quanh critical interaction.
- Tester không cần facilitator giải thích cơ chế.
- Các nút chính có phản hồi rõ ràng.
- User luôn có đường đóng, quay lại hoặc recovery.
- Không cần model/API thật; prototype dùng canned content.
- A/C dùng cùng visual style trình bày với prototype B của Yến.

## 5. Tự kiểm — GATE 4: Test-ready

- [x] Có common context dùng chung.
- [x] Có cùng task và desired outcome.
- [x] Có ba option với mechanism khác nhau.
- [x] Mỗi option có flow 2–3 trạng thái.
- [x] A/C đã được chuẩn hóa theo visual style của Option B.
- [x] Có control/recovery path.
- [x] Có annotation cho người facilitate.
- [x] Prototype chạy bằng HTML/CSS/JavaScript, không cần API thật.
- [ ] Mỗi thành viên đã thử option do người khác build.
- [ ] Nhóm đã chốt thứ tự test và kiểm tra trên cùng thiết bị/trình duyệt.

### Kết luận

Bộ A/B/C đã được chuẩn hóa theo cùng một visual language và sẵn sàng cho peer review. Gate 4 sẽ được đóng chính thức sau khi ba thành viên thử chéo prototype và xác nhận tester có thể tự thao tác mà không cần giải thích.
