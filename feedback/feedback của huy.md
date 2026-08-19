# Feedback kiểm thử người dùng — Day 18

> Đây là feedback giả lập từ hai người dùng đại diện, dùng để hoàn thiện bản ghi sau kiểm thử. Nội dung cần được thay bằng trích dẫn và quan sát thực tế nếu nhóm có dữ liệu người dùng thật.

## Bối cảnh kiểm thử

Người dùng được đặt vào tình huống đang học một slide có thuật ngữ chưa hiểu. Họ lần lượt trải nghiệm ba phương án:

- **Option A — AI Diagnostic Refresher:** AI hỏi một vài câu chẩn đoán, xác định lỗ hổng kiến thức và đưa phần ôn tập ngắn.
- **Option B — Smart Tooltip:** Người học bấm vào thuật ngữ khó trên slide để xem định nghĩa và ví dụ nhanh.
- **Option C — Lab Coach Escalation:** Người học bôi đen thuật ngữ, xem câu hỏi/context do AI chuẩn bị, duyệt nội dung rồi gửi tới Lab Coach để nhận câu trả lời chính xác theo nội dung khóa học.

---

## Người dùng 1 — Sinh viên năm nhất, cần câu trả lời rõ và đúng context

### Ấn tượng chung

Người dùng hiểu cả ba phương án, nhưng phản ứng rõ nhất với Option C vì câu hỏi được chuyển tới Lab Coach cùng context của slide. Người dùng muốn biết Lab Coach có nhận đủ thông tin để đưa ra câu trả lời chính xác hay không.

### Feedback theo từng option

#### Option A — AI Diagnostic Refresher

- **Điểm tích cực:** Người dùng thấy việc AI hỏi 2–3 câu giúp xác định mình đang thiếu kiến thức nền nào, thay vì chỉ nhận một câu định nghĩa chung.
- **Điểm vướng:** Cảm giác bị dừng lại giữa bài học; nếu câu hỏi chẩn đoán dài thì người dùng có thể bỏ qua.
- **Mức độ giải quyết pain point:** Khá tốt khi người dùng muốn tự học ngay lập tức, nhưng phụ thuộc vào việc AI chẩn đoán đúng kiến thức nền còn thiếu.
- **Trích dẫn giả lập:** “Tôi thích việc nó chỉ ra mình thiếu phần nào, nhưng nếu đang trong giờ học thì tôi không muốn làm thêm nhiều bước.”
- **Đánh giá:** 3,5/5.

#### Option B — Smart Tooltip

- **Điểm tích cực:** Nhanh nhất và ít làm gián đoạn việc học. Người dùng chỉ cần bấm vào thuật ngữ để đọc giải thích.
- **Điểm vướng:** Người dùng không chắc thuật ngữ nào có tooltip; tooltip chỉ hữu ích khi câu hỏi đúng là về định nghĩa của thuật ngữ.
- **Mức độ giải quyết pain point:** Tốt với thuật ngữ khó nhưng đơn giản; yếu khi người dùng không hiểu mối liên hệ giữa nhiều khái niệm.
- **Trích dẫn giả lập:** “Cái này tiện để biết từ đó nghĩa là gì, nhưng nếu tôi không hiểu cả đoạn thì tooltip chưa đủ.”
- **Đánh giá:** 4/5.

#### Option C — Lab Coach Escalation

- **Điểm tích cực:** Người dùng thích việc được bôi đen thuật ngữ và có sẵn câu hỏi gợi ý. Preview giúp họ biết slide, thuật ngữ và nội dung nào sẽ được gửi.
- **Điểm tích cực:** Người dùng biết câu hỏi được chuyển tới Lab Coach, người hiểu nội dung khóa học và có thể kiểm tra cách hiểu của họ theo đúng context slide.
- **Điểm tích cực:** Preview giúp người dùng kiểm tra thuật ngữ, slide và câu hỏi trước khi gửi, từ đó tăng khả năng Lab Coach trả lời đúng vấn đề.
- **Điểm vướng:** Sau khi gửi, người dùng chưa biết bao giờ sẽ nhận được phản hồi và cần quay lại ở đâu để xem.
- **Mức độ giải quyết pain point:** Tốt nhất khi người dùng cần một câu trả lời chính xác, có căn cứ trong bài học, thay vì một lời giải thích chung từ AI.
- **Trích dẫn giả lập:** “Tôi chọn phương án này khi muốn biết câu trả lời có đúng với cách khóa học đang dạy hay không. Tôi muốn thấy thời gian dự kiến nhận phản hồi.”
- **Đánh giá:** 4,5/5.

### Lựa chọn ưu tiên

**Option C** cho các câu hỏi khó cần Lab Coach xác nhận theo context; **Option B** cho việc tra nhanh định nghĩa.

---

## Người dùng 2 — Sinh viên đã quen dùng công cụ AI, ưu tiên tốc độ

### Ấn tượng chung

Người dùng này thích tự tìm câu trả lời nhanh và ban đầu nghiêng về Option A/B. Sau khi thử Option C, người dùng nhận ra Lab Coach phù hợp hơn khi câu hỏi liên quan đến cách giảng viên diễn giải, mục tiêu bài học hoặc khi AI không đủ chắc chắn.

### Feedback theo từng option

#### Option A — AI Diagnostic Refresher

- **Điểm tích cực:** Có cảm giác cá nhân hóa hơn chatbot hỏi đáp thông thường; phần ôn tập giúp người dùng quay lại đúng kiến thức nền.
- **Điểm vướng:** Người dùng muốn biết tại sao AI kết luận mình thiếu kiến thức đó. Nếu AI chẩn đoán sai, phần ôn tập sẽ làm mất thời gian.
- **Mức độ giải quyết pain point:** Tốt với lỗ hổng kiến thức rõ ràng; cần cơ chế bỏ qua hoặc sửa hướng chẩn đoán.
- **Trích dẫn giả lập:** “Nếu AI đoán đúng thì rất hữu ích, nhưng tôi cần một nút ‘không phải vấn đề này’ để không bị đi sai hướng.”
- **Đánh giá:** 4/5.

#### Option B — Smart Tooltip

- **Điểm tích cực:** Phù hợp với cách học nhanh; định nghĩa ngắn và ví dụ giúp người dùng không mất mạch bài.
- **Điểm vướng:** Nội dung có thể quá ngắn đối với các khái niệm liên quan đến nhau. Người dùng cũng muốn có liên kết “tìm hiểu thêm” khi cần.
- **Mức độ giải quyết pain point:** Rất tốt cho câu hỏi “Từ này nghĩa là gì?”, nhưng chưa đủ cho câu hỏi “Tại sao khái niệm này quan trọng?”.
- **Trích dẫn giả lập:** “Tôi sẽ dùng cái này nhiều nhất trong lúc học, nhưng nó chỉ là bước đầu chứ chưa phải lời giải cho mọi thắc mắc.”
- **Đánh giá:** 4/5.

#### Option C — Lab Coach Escalation

- **Điểm tích cực:** Có ranh giới rõ giữa phần AI hỗ trợ chuẩn bị và phần Lab Coach chịu trách nhiệm trả lời. Preview tạo cảm giác minh bạch.
- **Điểm tích cực:** Hữu ích cho câu hỏi mở, câu hỏi về ngữ cảnh khóa học hoặc khi người dùng đã thử tự tìm nhưng vẫn chưa rõ; câu trả lời có khả năng chính xác hơn vì đến từ người hiểu nội dung bài.
- **Điểm vướng:** Quy trình gửi dài hơn B; người dùng muốn biết khi nào nên chọn C thay vì tiếp tục hỏi chatbot.
- **Mức độ giải quyết pain point:** Tốt cho tình huống AI không đủ đáng tin hoặc câu hỏi cần người hiểu mục tiêu và nội dung khóa học.
- **Trích dẫn giả lập:** “Tôi không cần Lab Coach trả lời mọi thuật ngữ, nhưng với câu hỏi phức tạp thì đây là cách đáng tin hơn để nhận câu trả lời đúng.”
- **Đánh giá:** 4,5/5.

### Lựa chọn ưu tiên

**Option B** cho câu hỏi đơn giản, **Option A** khi muốn được hướng dẫn tự học, và **Option C** khi cần Lab Coach xác nhận câu trả lời theo đúng nội dung khóa học.

---

## Tổng hợp feedback của hai người dùng

| Tiêu chí | Option A | Option B | Option C |
|---|---|---|---|
| Tốc độ xử lý | Trung bình | Nhanh nhất | Chậm hơn vì chờ người hỗ trợ |
| Mức độ cá nhân hóa | Cao | Thấp–trung bình | Cao ở phần context, phụ thuộc người hỗ trợ |
| Khả năng giữ mạch học | Có thể bị gián đoạn | Tốt nhất | Giữ được slide hiện tại sau khi gửi |
| Giải quyết câu hỏi phức tạp | Tốt nếu chẩn đoán đúng | Hạn chế | Tốt nhất |
| Độ chính xác theo context khóa học | Phụ thuộc chẩn đoán AI | Giới hạn ở định nghĩa có sẵn | Cao nhất vì Lab Coach trả lời |
| Điểm rủi ro chính | AI chẩn đoán sai | Chỉ giải thích nội dung đã gắn tooltip | Chưa rõ thời gian và cách nhận phản hồi |

## Insight quan trọng

1. Không có một option phù hợp cho mọi loại câu hỏi.
2. **Option B** phù hợp với nhu cầu tra nhanh và giữ mạch học.
3. **Option A** phù hợp khi người học muốn biết mình đang thiếu kiến thức nền nào.
4. **Option C** tạo giá trị rõ nhất ở pain point “không chắc câu trả lời của AI có đúng với nội dung khóa học hay không”.
5. Preview và quyền chỉnh sửa giúp Lab Coach nhận được đúng thuật ngữ, slide và vấn đề người học đang hỏi.
6. Thông báo sau khi gửi cần làm rõ hơn bước tiếp theo: Lab Coach sẽ phản hồi ở đâu, thời gian dự kiến là bao lâu và người học có thể quay lại context này như thế nào.

## Đề xuất cải thiện Option C

- Giữ thao tác bôi đen thuật ngữ → nút `?` → preview → gửi câu hỏi tới Lab Coach.
- Giữ phần context để người dùng biết dữ liệu nào được chia sẻ.
- Sau thông báo “Đã gửi câu hỏi thành công”, nên bổ sung một chỉ dẫn ngắn về nơi nhận phản hồi hoặc thời gian dự kiến, nếu sản phẩm thật có thông tin đó.
- Có thể thêm lựa chọn “Tiếp tục bài học” sau khi gửi, nhưng không cần mở thêm các màn hình giải thích dài.
- Khi triển khai thật, nên có quy tắc chuyển tiếp: câu hỏi đơn giản dùng chatbot/tooltip; câu hỏi cần độ chính xác, liên quan đến mục tiêu bài học hoặc AI không chắc chắn thì chuyển tới Lab Coach.

## Kết luận

Feedback giả lập cho thấy Option C có lợi thế rõ nhất ở khả năng kết nối người học với Lab Coach để nhận câu trả lời chính xác, đúng context của khóa học. Tuy nhiên, prototype cần làm rõ bước sau khi gửi để người dùng biết Lab Coach sẽ phản hồi ở đâu và khi nào.
