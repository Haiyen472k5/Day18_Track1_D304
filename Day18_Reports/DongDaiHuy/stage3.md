# Day 18 — Chặng 3: Human–AI Design Pass

## Thông tin cá nhân

| Thông tin | Chi tiết |
|---|---|
| Họ và tên | Đồng Đại Huy |
| Mã học viên | 2A202601901 |
| Case | Case A — AI Tutor: Diagnostic Refresher |
| Option phụ trách | Option A — AI Diagnostic Refresher |

> Report này là phần đóng góp cá nhân cho Option A. Human–AI Decision Table cuối cùng của nhóm cần được ghép với report của Option B và Option C.

## 1. Critical interaction cần thiết kế

Critical interaction của Option A là:

> Người học gặp một khái niệm chưa rõ → chủ động yêu cầu hỗ trợ → AI hỏi ngắn để chẩn đoán → AI đưa ra phần ôn tập → người học quyết định tiếp tục, xem thêm, lưu lại hoặc từ chối.

Option A chỉ cần thiết kế quanh interaction này. Không cần xây toàn bộ sản phẩm học trực tuyến.

## 2. Bốn quyết định thiết kế

### 2.1 Expectation

#### Người học cần hiểu gì trước khi AI hoạt động?

Người học cần biết:

- AI sẽ sử dụng context của bài học hiện tại để hỗ trợ.
- AI có thể hỏi 1–3 câu hỏi ngắn để xác định phần người học đang vướng.
- AI tạo một phần giải thích/ôn tập ngắn, không thay thế toàn bộ bài giảng.
- Người học vẫn là người quyết định có tiếp tục theo phần giải thích hay quay lại bài.

#### Capability và limit cần nói rõ

AI có thể:

- Đọc slide hoặc nội dung bài học hiện tại.
- Sử dụng câu trả lời chẩn đoán do người học cung cấp.
- Gợi ý một khái niệm nền có khả năng liên quan.
- Tạo giải thích ngắn và ví dụ.

AI không chắc chắn khi:

- Câu hỏi của người học quá ngắn hoặc mơ hồ.
- Có nhiều khái niệm nền có thể giải thích cùng một lỗi.
- Nội dung bài học không đủ context.
- AI không có quyền hoặc không được phép sử dụng lịch sử học tập.

Thông điệp cần tránh là “AI đã xác định chính xác bạn đang thiếu gì”. Nên dùng cách diễn đạt như “Có thể bạn đang cần xem lại…” hoặc “Dựa trên câu trả lời hiện tại…”.

### 2.2 Role and Agency

#### User làm gì?

- Nhận ra mình chưa hiểu.
- Chủ động bấm “Tôi vẫn chưa hiểu”.
- Trả lời câu hỏi chẩn đoán hoặc bỏ qua câu hỏi.
- Đọc, đánh giá và kiểm tra phần giải thích.
- Quyết định tiếp tục bài, xem thêm, lưu lại để xem sau, thử lại hoặc đóng hỗ trợ.

#### AI làm gì?

- Hỏi tối đa 1–3 câu hỏi chẩn đoán ngắn.
- Đề xuất một hoặc hai khái niệm nền có khả năng liên quan.
- Tạo phần giải thích ngắn dựa trên context bài học.
- Hiển thị evidence và mức độ không chắc chắn.

#### AI nên Act, Ask hay Don't Act?

**AI nên Ask, sau khi user chủ động yêu cầu hỗ trợ.**

AI không nên tự động mở hộp thoại giải thích hoặc tự ngắt bài học khi người học chưa yêu cầu. Việc AI tự động can thiệp có thể làm người học mất mạch nhiều hơn.

#### Nếu AI sai, user mất gì?

- Mất thêm thời gian đọc phần ôn tập không liên quan.
- Có thể hiểu sai khái niệm.
- Có thể tin rằng mình đã hiểu trong khi lỗ hổng thật sự vẫn còn.
- Có thể bỏ lỡ thêm nội dung bài giảng.

Vì vậy, phần giải thích phải ngắn, có nguồn context và có cách quay lại bài ngay lập tức.

### 2.3 Evidence and Uncertainty

#### AI dựa vào evidence nào?

Trong prototype, AI chỉ nên sử dụng:

- Slide hoặc đoạn bài học hiện tại.
- Thuật ngữ người học đã chọn.
- Câu trả lời của người học cho câu hỏi chẩn đoán.
- Ví dụ hoặc nội dung liên quan trong cùng bài học.

Lịch sử học tập chỉ được sử dụng nếu nhóm có dữ liệu mẫu rõ ràng và người học đã đồng ý.

#### Hiển thị evidence như thế nào?

Phần giải thích nên có một khu vực ngắn:

> Dựa trên: slide hiện tại, thuật ngữ người học chọn và câu trả lời chẩn đoán.

Nếu có thể, hiển thị:

- Khái niệm AI đang giả định.
- Lý do AI đề xuất khái niệm đó.
- Link hoặc mốc nội dung liên quan trong bài.

#### Hiển thị uncertainty như thế nào?

Ví dụ:

> “Có khả năng bạn đang cần xem lại khái niệm X. Tuy nhiên, câu trả lời hiện tại cũng có thể liên quan đến Y. Bạn muốn xem X, Y hay quay lại bài?”

Không hiển thị mức confidence dạng phần trăm nếu con số đó không có ý nghĩa rõ ràng với người học.

### 2.4 Control and Recovery

Người học cần có các quyền kiểm soát sau:

- Xem trước phần giải thích trước khi áp dụng.
- Bỏ qua câu hỏi chẩn đoán.
- Dừng luồng hỗ trợ.
- Đóng phần giải thích.
- Chọn khái niệm khác.
- Thử lại với câu trả lời mới.
- Đánh dấu để xem sau.
- Quay lại đúng slide hoặc context ban đầu.

#### Recovery path

Nếu AI giải thích sai hoặc không hữu ích:

1. Người học bấm “Không đúng phần mình đang vướng”.
2. Người học chọn khái niệm khác hoặc nhập câu hỏi ngắn.
3. Người học có thể lưu câu hỏi để hỏi người hỗ trợ sau.
4. Người học quay lại slide ban đầu mà không mất vị trí trong bài.

AI không được khóa người học trong luồng chẩn đoán hoặc buộc họ phải đọc hết phần ôn tập.

## 3. Human–AI Decision Table — Option A

| Human–AI decision | Option A — AI Diagnostic Refresher |
|---|---|
| User làm gì? AI làm gì? | User yêu cầu hỗ trợ, trả lời câu hỏi ngắn, đánh giá giải thích và quyết định tiếp tục. AI chẩn đoán, đề xuất khái niệm nền và tạo phần ôn tập ngắn. |
| AI Act / Ask / Don't Act? Vì sao? | AI **Ask** sau khi user chủ động yêu cầu. Không tự động ngắt bài vì có thể làm mất mạch học. |
| User hiểu capability/limit bằng gì? | Intro ngắn trước khi bắt đầu; thông báo AI chỉ đưa ra gợi ý dựa trên context hiện tại và có thể sai. |
| Evidence/uncertainty được thể hiện thế nào? | Hiển thị context được sử dụng, khái niệm đang được giả định và câu “có thể”; cho phép xem alternative concept hoặc quay lại bài. |
| User kiểm soát và recovery thế nào? | User có thể bỏ qua, dừng, đóng, chọn khái niệm khác, đánh dấu xem sau, thử lại và quay về đúng slide ban đầu. |

## 4. Dữ liệu và feedback

Nếu prototype dùng learning history hoặc câu trả lời trước đây:

- Phải nói rõ dữ liệu nào đang được dùng.
- Không dùng dữ liệu cá nhân không cần thiết cho test.
- Người học có thể từ chối dùng learning history.
- Feedback trong phiên hiện tại không mặc định được ghi nhớ cho lần sau.
- Người học có thể xóa hoặc không gửi câu trả lời chẩn đoán.

Trong prototype đầu tiên, nên chỉ dùng slide hiện tại và câu trả lời chẩn đoán để giảm rủi ro dữ liệu và giúp tester hiểu AI đang dựa vào đâu.

## 5. Scope prototype đề xuất

Option A chỉ cần ba trạng thái:

### State 1 — Common context

- Hiển thị cùng một slide có thuật ngữ khó.
- Người học đang ở đúng vị trí bài học.
- Có nút “Tôi vẫn chưa hiểu”.

### State 2 — Diagnostic and explanation

- AI hỏi 1–2 câu ngắn.
- Hiển thị khái niệm được đề xuất.
- Hiển thị giải thích ngắn, evidence và uncertainty.

### State 3 — User decision and recovery

- Tiếp tục bài.
- Xem thêm.
- Đánh dấu để xem sau.
- Chọn khái niệm khác.
- Đóng và quay lại slide ban đầu.

## 6. Tự kiểm — GATE 3: Human control

- [x] User chủ động quyết định khi nào yêu cầu AI hỗ trợ.
- [x] AI chỉ chẩn đoán sau khi user yêu cầu.
- [x] Có giới hạn rõ ràng về capability của AI.
- [x] AI hiển thị evidence và uncertainty.
- [x] User giữ quyền quyết định cuối cùng.
- [x] User có thể reject, stop, retry và return.
- [x] Có recovery path khi AI chẩn đoán sai.
- [x] Prototype có thể giới hạn trong 2–3 trạng thái.

**Kết luận cá nhân:** Option A đạt yêu cầu chuẩn bị cho GATE 3 — Human control. Nhóm cần ghép các quyết định này với Option B và Option C để hoàn thiện Human–AI Decision Table chung.

## 7. Đóng góp cá nhân và AI Support Log

### Đóng góp cá nhân

- Xác định critical interaction của Option A.
- Phân định vai trò và agency giữa user và AI.
- Chọn cơ chế AI Ask thay vì AI tự động Act.
- Thiết kế evidence, uncertainty, control và recovery.
- Xác định ba state tối thiểu cho prototype.

### AI Support Log

AI được sử dụng để hỗ trợ sắp xếp Human–AI Decision Table, rà soát các điểm rủi ro khi AI chẩn đoán sai và đề xuất recovery path. Các quyết định về context, evidence, quyền user và giới hạn AI được đối chiếu với Hypothesis Problem và Gate 3 của bài lab.
