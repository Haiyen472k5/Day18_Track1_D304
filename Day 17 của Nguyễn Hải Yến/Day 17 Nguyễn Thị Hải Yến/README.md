# Báo Cáo Thực Hành: Product Discovery & User Interview (Track 1 - Day 17)

## 1. Thông Tin Cá Nhân & Nhóm

* **Tên nhóm**:
* **Thành viên nhóm:**

  1. **Nguyễn Thị Hải Yến** - MSV: `2A202601388`
  2. **Văn Thanh** - MSV: `2A2026`
  3. **Huy** - MSV: `2A2026`
* **Case study đã chọn:** Case A — **AI Tutor: Diagnostic Refresher**

---

## 2. **Problem Hypothesis Brief**

### Chốt Problem Hypothesis và park solution

**Problem Hypothesis nhóm mang sang Chặng 2:**
Khi học viên đang học một bài và gặp một khái niệm nền mà bài giả định họ đã biết trước nhưng thực ra chưa vững, họ gặp khó khăn trong việc tự nhận diện chính xác mình đang thiếu kiến thức gì (không tự chẩn đoán được lỗ hổng cụ thể) — dẫn đến việc họ tiếp tục học trong tình trạng mơ hồ, ngày càng khó theo kịp, và có xu hướng học hời hợt hoặc bỏ dở bài/khóa học.

**Điều gì phải đúng để giả thuyết đứng vững:**

- User thực sự không tự biết chính xác mình đang thiếu khái niệm nền nào (không phải họ biết nhưng ngại xử lý).
- Tình trạng này lặp lại đủ thường xuyên để đáng để build một feature riêng, không phải sự cố hiếm gặp.
- Hậu quả đủ lớn (ảnh hưởng kết quả học/tỷ lệ hoàn thành khóa), chứ không chỉ là bất tiện nhỏ user có thể sống chung được.

**Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết:**

- Nếu đa số user phỏng vấn đều biết rõ mình thiếu gì (ủng hộ Pain B) → cần bỏ phần "AI chẩn đoán", chuyển hướng sang giải pháp "truy cập nhanh tới đúng tài nguyên ôn tập".
- Nếu user không coi đây là vấn đề đáng kể (đọc lại 1–2 lần là hiểu, không ảnh hưởng kết quả) → pain không đủ lớn để giải, cần tìm pain khác.
- Nếu workaround hiện tại của user đã đủ tốt (ví dụ họ dùng ChatGPT ngoài và hài lòng) → cần hiểu vì sao họ chưa chuyển sang dùng công cụ ngay trong app.

**Solution Parking Lot:**

| # | Hướng giải quyết có thể có                                                                                                                   | AI / Không sử dụng AI                                                  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | Nút "Tôi vẫn chưa hiểu" → AI chẩn đoán & ôn khái niệm nền*(directive gốc)*                                                          | AI                                                                        |
| 2 | Thanh tìm kiếm nhanh ngay trong bài học để tra cứu khái niệm liên quan mà không phải rời app                                          | Không dùng AI                                                           |
| 3 | Hiển thị sẵn "khái niệm nền cần biết trước" ở đầu mỗi bài, học viên tự chọn ôn trước khi học                                 | Không dùng AI (rule-based, do người biên soạn khóa học gắn sẵn) |
| 4 | AI Chat tự do có sẵn trong bài, học viên chủ động gõ câu hỏi thay vì chờ AI chẩn đoán                                              | AI                                                                        |
| 5 | Cộng đồng hỏi-đáp theo từng bài học (peer-to-peer), học viên đăng câu hỏi, học viên khác/mentor trả lời                         | Không dùng AI                                                           |
| 6 | Bài kiểm tra kiến thức nền ngắn ở đầu khóa học (prerequisite check), chẩn đoán lỗ hổng trước khi bắt đầu thay vì giữa chừng | AI                                                                        |

## 3. Conversation Guide

### Tiêu chí tuyển người

Chúng tôi cần nói chuyện với người đã **từng học một bài/khóa học (online hoặc trên lớp) và gặp một khái niệm không hiểu, khiến việc học bị vướng lại** trong vòng **7** ngày gần đây.

### Recruitment check

*(dùng để tuyển đúng người, không tính là evidence chính)*
"Trong khoảng 1 tuần gần đây, bạn có lần nào đang học mà gặp một chỗ không hiểu, phải dừng lại không?"

### Lời mở đầu

"Chào bạn, mình đang tìm hiểu về cách mọi người học và xử lý khi gặp chỗ khó trong lúc học — không phải để hỏi ý kiến về một sản phẩm cụ thể nào cả, mình chỉ muốn nghe câu chuyện thật của bạn để hiểu rõ hơn thôi. Mình xin phép ghi âm lại để sau này nghe lại cho chính xác, bạn đồng ý không?"

### Story opener

"Kể mình nghe về lần gần nhất bạn đang học một bài mà gặp phải một chỗ không hiểu, không biết mình đang thiếu kiến thức gì để hiểu tiếp?"

---

### Big 3 Questions

| Điều cần học                                               | Câu hỏi sẽ dùng                                                                                                                |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1. User có tự biết mình thiếu gì không?*(đáng sợ)* | "Lúc đó bạn có biết chính xác mình đang bị vướng ở chỗ nào không, hay chỉ thấy chung chung là 'không hiểu'?" |
| 2. Hậu quả có đủ lớn không?                             | "Sau lần đó, chuyện gì xảy ra tiếp — nó có ảnh hưởng gì đến việc học của bạn sau này không?"                 |
| 3. Workaround là gì?                                         | "Lúc gặp chỗ đó, bạn đã làm gì để xử lý?"                                                                            |

## 4. Practice Reflection

1. **Câu hỏi nào đã giúp user kể một tình huống cụ thể?**
   Câu hỏi: *"Bạn có thể nhớ lại cụ thể lần gần nhất bạn gặp một thuật ngữ/flowchart rắc rối là ở bài nào không? Trải nghiệm lúc đó diễn ra thế nào?"* kết hợp cùng câu đào sâu *"Bạn có thể mô tả chi tiết các bước bạn đã làm để ChatGPT hiểu được câu hỏi của bạn không?"* đã giúp người phỏng vấn bóc tách được toàn bộ hành vi chụp ảnh màn hình và tốn 15–20 phút chuẩn bị ngữ cảnh của học viên.
2. **Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?**
   Cần đào sâu hơn vào ví dụ cụ thể của bài học (ví dụ: hỏi rõ *"Đó là thuật ngữ/khái niệm gì trong bài nào?"* thay vì để user nói chung chung), đồng thời dành thêm vài giây khoảng lặng để lắng nghe phản ứng cảm xúc của user trước khi vội chuyển sang câu hỏi tiếp theo.
3. **Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?**
   **- Sửa câu mở đầu:** Thêm lời giới thiệu tên và xin phép phỏng vấn ngắn để tạo tâm lý thoải mái, chuyên nghiệp.
   **- Sửa câu hỏi khởi động (Screener):** Bỏ câu *"Trong 1-2 tuần qua có học module mới không?"* và đổi thành *"Dạo gần đây tiến độ học tập các slide/bài học mới trên VLearn của bạn diễn ra như thế nào, có suôn sẻ không?"* vì thực tế học viên vào học VLearn mỗi ngày, hỏi theo cách cũ sẽ bị gượng gạo và dư thừa.

## 5. AI Support Log

- Gợi ý hướng làm bài, và đề xuất các giải pháp tiếp cận bài toán
- Đôi khi giải pháp không thích hợp phải đọc lại và chỉnh sửa.
