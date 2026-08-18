# Day 18 — Chặng 3: Human–AI Design Pass

## Thông tin nhóm

| Thông tin          | Chi tiết                                                                         |
| ------------------ | -------------------------------------------------------------------------------- |
| Case               | Case A — AI Tutor: Diagnostic Refresher                                          |
| Hypothesis Problem | Học viên gặp khó khăn khi xử lý khái niệm chưa rõ trong lớp học có nhịp độ nhanh |
| Thành viên         | Đồng Đại Huy, Nguyễn Thị Hải Yến, Lê Đình Việt                                   |
| Đầu ra             | Human–AI Decision Table cho Option A/B/C                                         |

> Bản report này là bản tổng hợp đề xuất sau Chặng 2. Nhóm cần review lại một lần trên prototype trước khi bắt đầu test.

## 1. Nguyên tắc chung của Human–AI Design

Ba options phải cùng giúp người học xử lý một khái niệm khó trong cùng một bài học, nhưng phân chia quyền chủ động khác nhau:

- **Option A:** AI chẩn đoán và đưa ra ôn tập cá nhân hóa.
- **Option B:** User chủ động chọn thuật ngữ; hệ thống cung cấp tooltip/context note ngắn.
- **Option C:** AI chuẩn bị context; người hỗ trợ con người đưa ra câu trả lời.

Nhóm chỉ thiết kế critical interaction, không thiết kế toàn bộ sản phẩm học tập.

## 2. Human–AI Decision Table

| Human–AI decision                           | Option A — AI Diagnostic Refresher                                                                                                        | Option B — Smart Tooltip                                                                                                                                    | Option C — Anonymous Human Escalation                                                                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| User làm gì? AI làm gì?                     | User bấm “Tôi vẫn chưa hiểu”, trả lời câu hỏi ngắn, xem giải thích và quyết định tiếp tục. AI chẩn đoán khái niệm nền và tạo ôn tập ngắn. | User click/hover thuật ngữ khó, đọc định nghĩa/ví dụ và tự quyết định tiếp tục. AI hỗ trợ chuẩn bị nội dung trước buổi học, không tự chẩn đoán trong phiên. | User chọn hỏi người hỗ trợ, duyệt context/câu hỏi và gửi ẩn danh. AI tóm tắt slide, thuật ngữ và chuẩn bị câu hỏi; người hỗ trợ trả lời. |
| AI Act / Ask / Don't Act? Vì sao?           | **Ask** sau khi user chủ động yêu cầu. AI không tự ngắt bài vì có thể làm mất mạch học.                                                   | **Don't Act** ngoài yêu cầu của user. Tooltip chỉ xuất hiện khi user click/hover; không tự bật lên.                                                         | AI**Ask** user xác nhận trước khi gửi. AI không tự gửi câu hỏi hoặc tự thay người hỗ trợ đưa ra kết luận.                                |
| User hiểu capability/limit bằng gì?         | Intro nói AI dựa trên context hiện tại, câu trả lời có thể sai và không thay thế bài giảng.                                               | Tooltip được giới hạn ở định nghĩa/ví dụ đã chuẩn bị; hệ thống nói rõ đây là giải thích ngắn, không phải chẩn đoán cá nhân.                                 | Màn hình gửi hiển thị rõ context nào sẽ được chia sẻ, AI chỉ hỗ trợ chuẩn bị câu hỏi và câu trả lời sẽ đến từ người hỗ trợ.              |
| Evidence/uncertainty được thể hiện thế nào? | Hiển thị slide/context được dùng, khái niệm AI đang giả định và alternative concept nếu không chắc chắn.                                  | Hiển thị nguồn bài học hoặc slide chứa thuật ngữ. Không đưa ra suy luận rằng user đang thiếu kiến thức nào.                                                 | Hiển thị slide, thuật ngữ và bản tóm tắt trước khi gửi; trạng thái “đang chờ phản hồi” được thể hiện rõ.                                 |
| User kiểm soát và recovery thế nào?         | Có thể bỏ qua, dừng, đóng, chọn khái niệm khác, thử lại, đánh dấu xem sau và quay về slide ban đầu.                                       | Có thể đóng tooltip, mở link liên quan, đánh dấu xem sau và quay về đúng vị trí bài.                                                                        | Có thể sửa câu hỏi, không gửi, hủy gửi, chọn gửi ẩn danh và quay lại bài trong khi chờ phản hồi.                                         |

## 3. Bốn quyết định thiết kế theo từng option

### Option A — AI Diagnostic Refresher

#### Expectation

Người học biết AI sẽ hỏi ngắn để gợi ý phần kiến thức nền có khả năng liên quan và tạo một phần ôn tập ngắn. AI không được tuyên bố chắc chắn khi evidence chưa đủ.

#### Role and Agency

User khởi động và giữ quyền quyết định. AI đóng vai trò hỏi, gợi ý và giải thích; không tự ngắt bài hoặc tự hành động khi user chưa yêu cầu.

#### Evidence and Uncertainty

AI hiển thị slide, thuật ngữ và câu trả lời đang dùng làm context. Các đề xuất cần dùng ngôn ngữ xác suất vừa phải như “có thể bạn cần xem lại…”.

#### Control and Recovery

User có thể skip, stop, reject, retry, chọn khái niệm khác, lưu để xem sau và quay lại đúng slide.

### Option B — Smart Tooltip / Contextual Concept Note

#### Expectation

Người học biết tooltip cung cấp một định nghĩa hoặc ví dụ ngắn cho thuật ngữ được chọn. Tooltip không tự đoán lỗ hổng và không thay thế phần giảng.

#### Role and Agency

User tự xác định thuật ngữ và quyết định có mở tooltip hay không. AI chủ yếu hỗ trợ người biên soạn chuẩn bị nội dung trước buổi học.

#### Evidence and Uncertainty

Tooltip dẫn về slide, glossary hoặc nguồn nội dung khóa học. Nếu khái niệm chưa được chuẩn bị, hệ thống không nên tạo câu trả lời ngoài phạm vi mà không báo rõ.

#### Control and Recovery

User đóng tooltip, mở nội dung liên quan, đánh dấu để xem sau hoặc quay lại bài ngay.

### Option C — Anonymous Question Queue / Human Escalation

#### Expectation

Người học biết AI không phải người trả lời cuối cùng. AI chỉ chuẩn bị context và câu hỏi; người hỗ trợ sẽ trả lời, có thể không ngay lập tức.

#### Role and Agency

User duyệt nội dung trước khi gửi. AI tóm tắt và đề xuất wording. Người hỗ trợ giữ quyền giải thích và xử lý câu hỏi.

#### Evidence and Uncertainty

Màn hình preview cho thấy slide, thuật ngữ và câu hỏi sẽ được gửi. Trạng thái chờ phản hồi phải rõ ràng; không tạo cảm giác câu hỏi đã được giải quyết.

#### Control and Recovery

User có thể sửa, hủy, không gửi, gửi ẩn danh, quay lại bài và xem lại câu hỏi sau.

## 4. Kiểm tra dữ liệu và feedback

| Vấn đề                       | Quyết định chung                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| Dữ liệu được dùng            | Ưu tiên slide hiện tại, thuật ngữ user chọn và câu trả lời trong phiên              |
| Lịch sử học tập              | Chỉ sử dụng khi có dữ liệu mẫu và user đồng ý                                       |
| Feedback phiên hiện tại      | Không mặc định ghi nhớ cho lần sau                                                  |
| Dữ liệu gửi cho người hỗ trợ | User xem và duyệt context trước khi gửi                                             |
| Quyền rút lại                | User có thể không gửi, hủy hoặc xóa câu hỏi đã chuẩn bị nếu công cụ hỗ trợ cho phép |

## 5. Scope prototype chung

Ba prototype nên dùng chung:

- Một màn hình context có cùng slide và thuật ngữ khó.
- Một task giống nhau.
- Cùng nội dung trước và sau thuật ngữ.
- Cùng style và component chính.
- Cùng đường reset về context ban đầu.

Chỉ critical interaction khác:

| State                   | Option A                           | Option B                        | Option C                             |
| ----------------------- | ---------------------------------- | ------------------------------- | ------------------------------------ |
| 1. Common context       | Slide có nút “Tôi vẫn chưa hiểu”   | Slide có tooltip cạnh thuật ngữ | Slide có nút “Hỏi người hỗ trợ”      |
| 2. Critical interaction | Câu hỏi chẩn đoán + ôn tập AI      | Tooltip định nghĩa/ví dụ        | Preview câu hỏi + gửi ẩn danh        |
| 3. User decision        | Tiếp tục, retry, lưu hoặc quay lại | Đóng, mở thêm hoặc lưu          | Gửi, hủy, chờ phản hồi hoặc quay lại |

## 6. Tự kiểm — GATE 3: Human control

- [x] Mỗi option nói rõ user làm gì và AI/người hỗ trợ làm gì.
- [x] Quyền chủ động và quyền quyết định được phân định.
- [x] Mỗi option có expectation và limit cần nói rõ.
- [x] Evidence và uncertainty có cách thể hiện riêng.
- [x] User có control và recovery path.
- [x] Ba prototype có thể giới hạn trong 2–3 trạng thái.
- [x] Cả ba thành viên đã review cùng một content fixture.
- [x] Lê Đình Việt đã xác nhận Option C và quyền chia sẻ context.

### Kết luận Chặng 3

Nhóm đã hoàn thành bản Human–AI Decision Table đề xuất cho ba options. Gate 3 đạt ở cấp độ thiết kế sơ bộ; trước khi build prototype, nhóm cần review chung content fixture, wording, quyền dữ liệu và recovery path.

## 7. Việc cần làm trước Chặng 4

- Đồng Đại Huy: build Option A với ba state gồm context, diagnostic/refresher và user decision/recovery.
- Nguyễn Thị Hải Yến: build Option B với tooltip ngắn, source rõ và đường đóng/lưu.
- Lê Đình Việt: xác nhận và build Option C với preview context, gửi ẩn danh và trạng thái chờ phản hồi.
- Cả nhóm: dùng chung slide, thuật ngữ, task, content fixture và reset path.
- Mỗi thành viên thử option do thành viên khác xây dựng trước khi chuẩn hóa A/B/C.
