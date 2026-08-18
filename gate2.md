# Day 18 — Chặng 2: Gate 2 — Meaningful Options

## Thông tin nhóm

| Thông tin | Chi tiết |
|---|---|
| Case | Case A — AI Tutor: Diagnostic Refresher |
| Hypothesis Problem | Học viên gặp khó khăn khi xử lý khái niệm chưa rõ trong lớp học có nhịp độ nhanh |
| Thành viên | Đồng Đại Huy, Lê Đình Việt, Nguyễn Thị Hải Yến |
| Mục tiêu report | Tổng hợp ba solution options và kiểm tra Gate 2 |

## 1. Hypothesis Problem nhóm tiếp tục

Khi đang học một lớp có nhịp độ nhanh, học viên gặp khó khăn trong việc hiểu khái niệm chưa rõ và tiếp tục theo dõi bài giảng vì phải dừng lại để tự tìm kiếm hoặc hỏi người khác nhưng thường ngại hỏi, dẫn đến mất mạch học và bỏ lỡ nội dung giảng tiếp theo.

### Evidence nền

- Người học đã gặp một khái niệm khó trong một lớp học gần thời điểm phỏng vấn.
- Người học phải copy thuật ngữ, tự tìm kiếm hoặc dùng ChatGPT để hiểu thêm.
- Quá trình xử lý mất khoảng 3–5 phút trong một interview; một interview khác ghi nhận 15–20 phút khi phải chuẩn bị context để hỏi công cụ bên ngoài.
- Người học có thể bị lỡ phần giảng tiếp theo hoặc bỏ qua nội dung chưa hiểu.
- Người học có xu hướng ngại hỏi những câu hỏi mà họ cho là đơn giản.

Các evidence trên hỗ trợ problem về việc xử lý phần chưa hiểu trong lúc bài học vẫn đang tiếp diễn. Tuy nhiên, nhóm chưa kết luận rằng mọi trường hợp đều do thiếu kiến thức nền.

## 2. Phân tích hai đề xuất ban đầu

### Đề xuất của Lê Đình Việt

Lê đề xuất:

> Cung cấp cơ chế chẩn đoán phần kiến thức nền còn thiếu và nội dung ôn tập phù hợp ngay tại thời điểm người học không hiểu bài.

Đây là cơ chế **AI Diagnostic Refresher**.

### Đề xuất của Nguyễn Thị Hải Yến

Yến đề xuất:

> Nút ghi chú hoặc tooltip thông minh gắn trực tiếp vào các khái niệm khó, cho phép người học xem định nghĩa và ví dụ trong khoảng 5–10 giây.

Đây là cơ chế **Smart Tooltip / Contextual Concept Note**.

### Vấn đề trùng lặp cần xử lý

Đề xuất của Lê và Option A trong report cá nhân của Đồng đều dùng AI để chẩn đoán phần chưa hiểu và tạo giải thích cá nhân hóa. Nếu tách thành hai options, chúng chỉ khác wording hoặc chi tiết giao diện, chưa đạt yêu cầu “meaningful options”.

Vì vậy, nhóm quyết định:

- Gộp đề xuất của Lê và Option A của Đồng thành một Option A duy nhất.
- Giữ đề xuất tooltip của Yến thành Option B.
- Bổ sung Option C từ Solution Parking Lot: AI hỗ trợ chuyển câu hỏi tới giảng viên, trợ giảng hoặc LabCoach qua kênh ít áp lực.

## 3. Comparison Contract — những thứ phải giữ nguyên

| Thành phần | Quyết định chung cho A/B/C |
|---|---|
| Target user | Học viên đang tham gia một lớp học có nhịp độ nhanh |
| Situation | Học viên gặp một thuật ngữ hoặc khái niệm chưa rõ trong lúc giảng viên vẫn tiếp tục bài |
| Task | Dùng từng option để xử lý cùng một khái niệm chưa hiểu và tiếp tục theo dõi bài học |
| Desired outcome | Hiểu đủ phần cần thiết hoặc có một recovery path rõ ràng để không mất mạch học và không phải đoán |
| Content/data fixture | Cùng một slide, cùng thuật ngữ khó, cùng phần nội dung trước/sau và cùng context bài học |
| Thời gian test | Cùng một khoảng thời gian ngắn, dự kiến khoảng 3–4 phút cho mỗi option |

## 4. Ba Solution Options được chốt

### Option A — AI Diagnostic Refresher

**Người phụ trách chính:** Đồng Đại Huy  
**Insight đóng góp:** Lê Đình Việt và Đồng Đại Huy

#### Solution mechanism

AI sử dụng slide hiện tại, nội dung liên quan và câu trả lời gần đây của người học để chẩn đoán phần kiến thức nền còn thiếu, sau đó tạo một phần ôn tập ngắn và đưa người học quay lại bài hiện tại.

#### User làm gì?

- Chọn “Tôi vẫn chưa hiểu” khi gặp khái niệm khó.
- Trả lời 1–3 câu hỏi chẩn đoán ngắn.
- Xem phần giải thích hoặc ôn tập.
- Quyết định tiếp tục bài, xem thêm, đánh dấu để xem sau hoặc từ chối giải thích.

#### AI làm gì?

- Phân tích context bài học.
- Đặt câu hỏi chẩn đoán.
- Xác định khái niệm nền có khả năng liên quan.
- Tạo giải thích ngắn và nêu giới hạn nếu không chắc chắn.

#### Trigger

Người học chủ động chọn “Tôi vẫn chưa hiểu” trong lúc đang học.

#### Trade-off chính

Option A có thể cá nhân hóa và hỗ trợ ngay tại thời điểm gặp khó khăn, nhưng phụ thuộc vào độ chính xác của AI. Nếu AI chẩn đoán sai, người học có thể ôn một nội dung không liên quan hoặc bị gián đoạn lâu hơn.

---

### Option B — Smart Tooltip / Contextual Concept Note

**Người phụ trách chính:** Nguyễn Thị Hải Yến

#### Solution mechanism

Các thuật ngữ hoặc khái niệm khó được gắn với tooltip, glossary hoặc concept note ngay trên slide. Nội dung giải thích được chuẩn bị trước, có thể có AI hỗ trợ tạo bản nháp nhưng không chẩn đoán động trong lúc người học đang học.

#### User làm gì?

- Nhìn thấy icon hoặc dấu hiệu cạnh thuật ngữ khó.
- Click hoặc hover vào thuật ngữ.
- Đọc định nghĩa và ví dụ ngắn trong khoảng 5–10 giây.
- Đóng tooltip và tiếp tục bài học.

#### AI làm gì?

- Phân tích nội dung slide trước buổi học để gợi ý các khái niệm khó.
- Hỗ trợ tạo bản nháp định nghĩa và ví dụ ngắn cho người biên soạn kiểm tra.
- Không tự suy luận lỗ hổng kiến thức của từng người học trong lúc test.

#### Trigger

Người học chủ động click hoặc hover vào icon cạnh thuật ngữ chưa hiểu.

#### Trade-off chính

Option B rất nhanh, ít làm mất mạch học và không yêu cầu người học phải gõ câu hỏi. Tuy nhiên, nó chỉ giải thích được các khái niệm đã được chuẩn bị sẵn và có thể không xử lý được thắc mắc phát sinh ngoài nội dung tooltip.

---

### Option C — Anonymous Question Queue / Human Escalation

**Người phụ trách chính:** Lê Đình Việt — cần xác nhận lại với nhóm

#### Solution mechanism

AI hỗ trợ đóng gói context gồm slide, thuật ngữ, vị trí trong bài và câu hỏi của người học. Người học duyệt nội dung rồi gửi tới giảng viên, trợ giảng hoặc LabCoach qua một kênh hỏi ẩn danh. Người hỗ trợ chịu trách nhiệm đưa ra câu trả lời.

#### User làm gì?

- Chọn “Hỏi người hỗ trợ” hoặc “Đánh dấu để hỏi”.
- Kiểm tra context và câu hỏi mà hệ thống chuẩn bị.
- Xác nhận gửi ẩn danh.
- Quay lại bài học hoặc xem trạng thái/câu trả lời sau đó.

#### AI làm gì?

- Tóm tắt slide và khái niệm người học đang gặp khó khăn.
- Đề xuất cách diễn đạt câu hỏi.
- Hiển thị rõ nội dung nào sẽ được gửi.
- Không tự đưa ra kết luận cuối cùng thay cho người hỗ trợ.

#### Trigger

Người học nhận ra mình cần hỏi người khác hoặc không muốn tự tin tưởng vào lời giải thích của AI.

#### Trade-off chính

Option C phù hợp với câu hỏi mơ hồ, câu hỏi ngoài nội dung đã chuẩn bị và người học ngại hỏi công khai. Đổi lại, người học có thể phải chờ phản hồi và giải pháp phụ thuộc vào khả năng hỗ trợ của giảng viên/trợ giảng/LabCoach.

## 5. Phân biệt cơ chế giữa A/B/C

| Thành phần | Option A | Option B | Option C |
|---|---|---|---|
| Cơ chế chính | AI chẩn đoán lỗ hổng và ôn tập | User chọn thuật ngữ, xem giải thích có sẵn | AI đóng gói câu hỏi, con người hỗ trợ |
| Ai chủ động xác định nội dung cần xử lý? | AI hỗ trợ suy luận | User | User và người hỗ trợ |
| AI có hành động trong lúc học? | Có, chẩn đoán và giải thích | Chỉ cung cấp nội dung được gọi | Chuẩn bị context và câu hỏi |
| Người hỗ trợ con người tham gia? | Không bắt buộc | Không | Có |
| Tốc độ | Nhanh nhưng phụ thuộc AI | Rất nhanh | Có thể chậm hơn |
| Rủi ro chính | Chẩn đoán sai | Không có đúng khái niệm cần tìm | Phải chờ phản hồi |

## 6. Distance Check

- **A khác B vì** Option A để AI chẩn đoán phần kiến thức có khả năng còn thiếu, trong khi Option B chỉ hiển thị giải thích cho thuật ngữ mà user chủ động chọn.
- **B khác C vì** Option B là self-service ngay trong nội dung khóa học, còn Option C chuyển câu hỏi tới một người hỗ trợ thông qua kênh ẩn danh.
- **A khác C vì** Option A để AI trực tiếp tạo phần ôn tập, còn Option C dùng AI để chuẩn bị context nhưng người hỗ trợ con người giữ quyền đưa ra câu trả lời.

Ba options khác nhau về mechanism, agency, tốc độ phản hồi và nơi giữ quyền quyết định. Khác biệt không dựa trên màu sắc, layout hoặc wording.

## 7. Tự kiểm — GATE 2: Meaningful Options

- [x] A/B/C cùng xuất phát từ một Hypothesis Problem.
- [x] A/B/C cùng target user.
- [x] A/B/C cùng situation.
- [x] A/B/C cùng task.
- [x] A/B/C cùng desired outcome.
- [x] A/B/C có solution mechanism khác nhau có ý nghĩa.
- [x] Mỗi option thể hiện một cách phân chia công việc khác nhau giữa user, AI và người hỗ trợ.
- [x] Các option không chỉ khác về màu, layout hoặc wording.
- [x] Mỗi option có thể build thành 2–3 trạng thái để test.

### Kết luận Gate 2

**Nhóm đạt GATE 2 — Meaningful Options**, với điều kiện nhóm chính thức giữ cách phân công sau:

- Đồng Đại Huy: Option A — AI Diagnostic Refresher.
- Nguyễn Thị Hải Yến: Option B — Smart Tooltip / Contextual Concept Note.
- Lê Đình Việt: Option C — Anonymous Question Queue / Human Escalation.

Đề xuất AI Diagnostic Refresher của Lê được ghi nhận là insight hỗ trợ cho Option A, không tách thành một option thứ tư hoặc một option trùng với Option A.

## 8. Việc cần hoàn tất sau Gate 2

- Lê Đình Việt cập nhật report cá nhân từ AI Diagnostic Refresher sang Option C, hoặc xác nhận người khác sẽ phụ trách Option C.
- Nguyễn Thị Hải Yến bổ sung rõ content fixture và giới hạn của tooltip.
- Đồng Đại Huy giữ report cá nhân cho Option A và chuẩn bị chuyển sang Human–AI Design ở Chặng 3.
- Cả nhóm thống nhất cùng một slide, thuật ngữ và task test.
- Không được build Option A và đề xuất ban đầu của Lê thành hai prototype riêng vì chúng chưa đủ khác biệt.

## 9. AI Support Log của report nhóm

AI được sử dụng để:

- So sánh hai đề xuất ban đầu và phát hiện sự trùng lặp cơ chế.
- Nhóm các đề xuất thành ba solution hypotheses có khác biệt về mechanism.
- Rà soát Distance Check và điều kiện Gate 2.

Nhóm tự chịu trách nhiệm xác nhận context, phân công option và nội dung prototype. AI không tạo quote, observation hoặc feedback mới.
