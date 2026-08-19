# Day 18 — Chặng 4: Build Micro-prototype của Đồng Đại Huy

## Thông tin cá nhân

| Thông tin | Chi tiết |
|---|---|
| Họ và tên | Đồng Đại Huy |
| Mã học viên | 2A202601901 |
| Option phụ trách | Option C — Anonymous Human Escalation |
| Prototype | **Day18_Prototypes/option-c.html** |
| Visual baseline | Prototype Smart Tooltip của Nguyễn Thị Hải Yến |

## 1. Mục tiêu prototype

Kiểm tra xem học viên có thể gửi một câu hỏi ít áp lực tới người hỗ trợ, hiểu rõ context nào sẽ được chia sẻ, nhận một lời giải thích theo đúng context, sau đó tiếp tục bài học hoặc hỏi tiếp hay không.

## 2. Flow đã xây dựng

### State 1 — Common context

- Hiển thị slide bài học và thuật ngữ khó.
- Giữ cùng slide, header, badge, card và spacing với prototype của Yến.
- Người học có thể bôi đen thuật ngữ; nút “Hỏi người hỗ trợ” xuất hiện cạnh vùng chọn.

### State 2 — Preview câu hỏi

- AI chuẩn bị câu hỏi dựa trên slide và thuật ngữ người học chọn; nếu khởi động từ nút nổi, thuật ngữ được điền sẵn vào câu hỏi.
- Người học có thể chỉnh sửa câu hỏi.
- Người học kiểm tra context sẽ được gửi.
- Người học chọn gửi ẩn danh hoặc hủy.

### State 3 — Sent, response and recovery

- Hiển thị trạng thái “đang chờ phản hồi”.
- Cho phép xem phản hồi mẫu theo đúng Slide 12 để minh họa kết quả giải quyết pain point.
- Phản hồi giải thích ngắn gọn, có ví dụ và phân biệt Machine Learning với LLM/Reinforcement Learning.
- User chọn “Đã hiểu — tiếp tục bài” hoặc “Vẫn chưa rõ — hỏi tiếp”.
- Nói rõ AI chỉ tóm tắt context, không trả lời thay người hỗ trợ.
- Người học quay lại bài và giữ được mốc slide.

## 3. Annotation

- **We expect the tester to:** Bôi đen thuật ngữ, bấm nút nổi, đọc preview, kiểm tra context, gửi ẩn danh, xem phản hồi và quyết định tiếp tục hoặc hỏi tiếp.
- **Watch for:** Tester có nhận ra nút nổi không; có hiểu dữ liệu nào sẽ được gửi không; phản hồi có đủ ngắn gọn và đúng context để giải quyết phần chưa hiểu không; tester có nhận ra quyền kiểm soát không.
- **Do not explain:** AI đang tóm tắt context như thế nào hoặc tại sao nên gửi câu hỏi.

## 4. Visual consistency

Option C dùng cùng style trình bày với prototype của Yến:

- Nền xám nhạt.
- Một slide-container màu trắng ở trung tâm.
- Header có tên chương và badge buổi học.
- Nút hỗ trợ hình tròn ở góc phải.
- Nội dung trong card có border và spacing đồng nhất.
- Modal popup bo góc cho critical interaction.
- Nút hành động dạng pill.
- Footer có gợi ý ngắn và action chính.

Khác biệt giữa các option chỉ nằm ở critical interaction và solution mechanism, không nằm ở màu sắc hoặc layout.

## 5. Tự kiểm cá nhân — GATE 4: Test-ready

- [x] Prototype có 2–3 trạng thái.
- [x] User chủ động khởi động luồng hỏi hỗ trợ.
- [x] AI chỉ chuẩn bị context, không tự trả lời thay người hỗ trợ.
- [x] User có thể sửa, duyệt hoặc hủy trước khi gửi.
- [x] Có trạng thái chờ phản hồi rõ ràng.
- [x] Có phản hồi mô phỏng theo context để minh họa cách giải quyết phần chưa hiểu.
- [x] User có thể tiếp tục bài hoặc hỏi tiếp sau khi xem phản hồi.
- [x] Có đường quay lại bài và giữ mốc slide.
- [x] Prototype dùng cùng visual style với Option B của Yến.
- [x] Không cần model/API thật.
- [ ] Cần thành viên khác thử độc lập trước khi chốt.

## 6. Kết luận

Prototype Option C hiện đã thể hiện trọn vẹn giả thuyết: hỏi ít áp lực, user duyệt dữ liệu, nhận giải thích theo context và có quyền tiếp tục hoặc hỏi lại. Bước tiếp theo là nhờ một thành viên không build Option C thao tác thử, ghi lại mức độ tin tưởng vào phản hồi, mức độ hiểu bài và quyết định tiếp tục/hỏi tiếp.
