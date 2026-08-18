# Track 1 — Day 17: Problem Interview

## 1. Thông tin cá nhân và nhóm

| Thông tin | Chi tiết |
|---|---|
| Mã học viên | 2A202601528 |
| Họ và tên | Lê Đình Việt |
| Hình thức thực hiện | Cá nhân |
| Thành viên | Lê Đình Việt |
| Case đã chọn | Case A — AI Tutor: Diagnostic Refresher |

Solution directive ban đầu yêu cầu thêm nút “Tôi vẫn chưa hiểu”, dùng ngữ cảnh học tập để chẩn đoán, củng cố kiến thức nền và đưa người học trở lại bài hiện tại. Nhóm không xem hình thức triển khai này là cách giải quyết duy nhất.

## 2. Problem Hypothesis Brief

| Mắt xích | Nội dung |
|---|---|
| Solution | Hỗ trợ chẩn đoán phần chưa hiểu và cung cấp nội dung củng cố |
| Change | Người học nhận ra lỗ hổng, củng cố kiến thức và có thể tiếp tục học |
| Actor | Người học trực tuyến đang trực tiếp gặp khó khăn |
| Situation & Job | Khi gặp nội dung không hiểu, người học muốn xác định điều còn thiếu để hiểu và hoàn thành bài |
| Pain | Không biết kiến thức nền nào cần ôn, dẫn đến thử–sai, mất thời gian hoặc bỏ dở |
| Evidence cần tìm | Sự kiện gần đây, hành vi thực tế, workaround, chi phí/hậu quả và mức độ lặp lại |

**Problem Hypothesis:**

> Khi gặp nội dung không hiểu trong bài học trực tuyến, người học khó xác định kiến thức nền còn thiếu và không biết nên ôn lại nội dung nào, khiến họ trả lời sai lặp lại, mất thời gian tự tìm kiếm hoặc bỏ dở bài học.

Giả thuyết cạnh tranh là nguyên nhân chính có thể nằm ở cách trình bày nội dung, lỗi kỹ thuật, mất tập trung hoặc động lực thay vì thiếu kiến thức nền. Giả thuyết được chọn sẽ yếu đi nếu pain hiếm gặp, workaround hiện tại đủ tốt, hậu quả không đáng kể hoặc ôn đúng kiến thức nền vẫn không giúp người học tiếp tục.

## 3. Conversation Guide — phiên bản sau luyện

**Tiêu chí tuyển:** Người đã gặp ít nhất một nội dung hoặc câu hỏi không hiểu khi học trực tuyến trong vòng 7 ngày gần đây.

**Recruitment check:** Trong 7 ngày gần đây, bạn có lần nào đang học trực tuyến nhưng gặp một nội dung hoặc câu hỏi mà bạn không hiểu và phải dừng lại để xử lý không?

**Lời mở đầu:** Cảm ơn bạn đã tham gia. Mình muốn tìm hiểu cách bạn xử lý những lúc gặp nội dung khó hiểu trong quá trình học trực tuyến. Không có câu trả lời đúng hay sai; mình quan tâm đến việc thực tế đã xảy ra.

**Story opener:** Kể mình nghe về lần gần nhất bạn gặp một nội dung hoặc câu hỏi không hiểu khi đang học trực tuyến. Hôm đó chuyện gì đã xảy ra?

| Big 3 | Câu hỏi chính |
|---|---|
| Situation và mức độ lặp lại | Bạn đang học nội dung gì và vướng ở thời điểm nào? |
| Barrier và workaround | Phần nào khiến bạn khó tiếp tục? Khi đó bạn đã làm gì? |
| Consequence và mức độ quan trọng | Việc đó ảnh hưởng thế nào đến việc tiếp tục hoặc hoàn thành bài học của bạn? |

Probe khi cần:

- Lúc đó chuyện gì xảy ra tiếp theo?
- Vì sao bạn chọn cách đó?
- Bạn đã thử cách nào khác chưa?
- Bạn dành khoảng bao nhiêu thời gian để xử lý?
- Lần gần nhất trước đó là khi nào?

Guide chỉ hỏi về trải nghiệm quá khứ và không nhắc AI Tutor, tên nút hoặc giải pháp ôn tập.

## 4. Practice Reflection

| Câu hỏi phản ánh | Trả lời |
|---|---|
| Câu hỏi nào mở được câu chuyện cụ thể? | Câu “Kể mình nghe về lần gần nhất…” neo người tham gia vào một sự kiện có thời điểm và diễn biến cụ thể. |
| Chỗ nào cần làm tốt hơn? | Cần hỏi từng ý một, nghe hết câu chuyện rồi mới probe; tránh mặc định nguyên nhân là thiếu kiến thức nền; đào thêm thời gian, mức độ lặp và hậu quả. |
| Guide đã được sửa ở đâu và vì sao? | Các câu hỏi kép được tách ngắn hơn; thêm câu trung tính về phần gây khó; chuyển câu hỏi thời gian và mức độ lặp lại sang probe bank để cuộc trò chuyện tự nhiên và ít dẫn dắt hơn. |

Reflection được cập nhật sau lượt phỏng vấn P01. Dữ liệu ban đầu làm giả thuyết A yếu đi và nghiêng về giả thuyết B: cách trình bày/hướng dẫn không đồng bộ có thể là barrier chính.

## 5. AI Support Log

| AI đã hỗ trợ | Điểm sai, hời hợt hoặc cần cảnh giác | Cách người học kiểm tra và tự sửa |
|---|---|---|
| Chuyển solution directive thành capability trung tính và chuỗi thay đổi | Ban đầu có nguy cơ coi AI và nút bấm là giải pháp duy nhất | Giữ capability ở mức tiếp nhận nhu cầu, xác định lỗ hổng và hỗ trợ tiếp tục học |
| Xây dựng actor, JTBD, hai Pain Hypothesis và Evidence Map | Các giả thuyết nghe hợp lý nhưng chưa phải evidence | Gắn nhãn hypothesis, viết điều kiện bác bỏ và yêu cầu dữ liệu từ sự kiện thật |
| Soạn Big 3, Conversation Guide và probe bank | Ban đầu dùng mốc tuyển 30 ngày và một số câu hỏi chứa nhiều ý | Sửa theo hướng dẫn thành 7 ngày, tách câu hỏi và thêm probe trung tính |
| Tạo bản luyện Interview Record | Nội dung giả lập có thể bị hiểu nhầm là kết quả phỏng vấn thật | Ban đầu gắn nhãn `SIM-01`; sau phỏng vấn đã thay bằng Interview Record P01 và chỉ giữ evidence thực tế |
| Rà soát cấu trúc repo và Markdown | AI không thể xác nhận consent hoặc nội dung phỏng vấn thật | Kiểm tra file thực tế; xác nhận `recording.m4a` có header M4A hợp lệ và dung lượng 1.57 MB |

## Trạng thái nộp bài

- [x] README có đủ năm phần yêu cầu.
- [x] Conversation Guide không làm lộ solution và đã có revision.
- [x] Có thư mục `interview/` và mẫu Interview Record.
- [x] `interview/notes.md` chứa Interview Record từ lượt phỏng vấn P01.
- [x] Người tham gia đã đồng ý ghi âm/ghi hình.
- [x] `interview/recording.m4a` là file M4A hợp lệ, dung lượng 1.57 MB và có thể đưa lên GitHub.

Repo đã có Interview Record, consent và bản ghi hợp lệ. Evidence hiện tại chưa đủ chi tiết để xác nhận giả thuyết A; kết quả sơ bộ nghiêng về giả thuyết B và các câu hỏi cần follow-up đã được ghi trong `interview/notes.md`.
