# Track 1 - Day 17 — Finding and Validating Pain Points

## Thông tin cá nhân và nhóm

| Thông tin             | Chi tiết                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **Mã học viên (MHV)** | `2A202601901`                                                                                |
| **Họ và tên**         | Đồng Đại Huy                                                                                 |
| **Tên nhóm**          | Nhóm Case A — AI Tutor                                                                       |
| **Thành viên**        | Đồng Đại Huy —`2A202601901`Nguyễn Thị Hải Yến — `2A202601388`Hoàng Văn Thành — `2A202601428` |
| **Case đã chọn**      | Case A — AI Tutor: Diagnostic Refresher                                                      |
| **Ngày thực hiện**    | `17/08/2026`                                                                                 |

> **Trạng thái:** Hồ sơ đã được cập nhật bằng transcript interview thực tế và bản ghi âm trong repo. Trước khi nộp, chỉ cần kiểm tra lại thông tin cá nhân, tên nhóm và khả năng mở file ghi âm.

## 1. Problem Hypothesis Brief

### Solution directive

Thêm nút “Tôi vẫn chưa hiểu” vào bài học. Khi học viên bấm nút, AI Tutor sử dụng nội dung bài hiện tại, các câu trả lời gần đây và lịch sử học tập để:

- Đặt 2–3 câu hỏi chẩn đoán ngắn.
- Chọn một khái niệm nền để học viên ôn lại.
- Tạo một phần giải thích ngắn.
- Đưa học viên trở về bài đang học.

### Capability trung tính

Cung cấp cho người học một cách nhanh để xác định phần kiến thức nền mà họ đang thiếu trong bài học hiện tại, sau đó ôn lại phần đó bằng một giải thích ngắn trước khi quay lại bài học.

### Chuỗi thay đổi được kỳ vọng

```text
Gặp khó khăn trong bài học
→ Nhận ra phần chưa hiểu
→ Xác định lỗ hổng kiến thức nền
→ Ôn lại đúng khái niệm cần thiết
→ Tiếp tục bài học với mức tự tin cao hơn
```

### Actor

- **Actor chính:** học viên đang học bài.
- **Actor hỗ trợ:** AI Tutor.
- **Bên có thể hưởng lợi gián tiếp:** giảng viên hoặc người thiết kế khóa học.

### Situation & Job

Khi đang học một bài và gặp một khái niệm không hiểu, học viên cố xác định mình đang thiếu kiến thức nào để có thể hiểu phần hiện tại và tiếp tục bài học.

### Pain giả thuyết

Học viên khó biết chính xác mình không hiểu ở đâu hoặc đang thiếu kiến thức nền nào. Họ có thể phải đọc lại nhiều lần, tìm kiếm bên ngoài, hỏi người khác hoặc tiếp tục học dù chưa hiểu. Việc này có thể gây mất thời gian, gián đoạn mạch học, hình thành hiểu sai hoặc khiến họ bỏ cuộc.

### Các cách giải thích cạnh tranh

#### Pain Hypothesis A — mất track trong lớp học có nhịp độ nhanh

Khi gặp một thuật ngữ hoặc khái niệm chưa hiểu trong lớp học đang diễn ra, học viên phải tự tìm lời giải thích trong lúc giảng viên tiếp tục bài. Việc này làm họ mất thời gian và bỏ lỡ một phần nội dung tiếp theo.

#### Pain Hypothesis B — ngại hỏi và thiếu một kênh hỏi ít áp lực

Khi gặp câu hỏi mà họ cho là đơn giản, học viên ngại hỏi giảng viên nên trì hoãn việc làm rõ. Rào cản chính có thể là tâm lý khi hỏi, chứ không phải thiếu khả năng giải thích hoặc thiếu công cụ chẩn đoán.

**Giả thuyết ưu tiên:** A, vì interview P01 ghi nhận việc tự tìm hiểu kéo dài khoảng 3–5 phút và làm người tham gia bị lỡ nội dung giảng tiếp theo.

**Điều có thể bác bỏ hoặc làm yếu giả thuyết:** Nếu các interview tiếp theo cho thấy học viên thường dễ dàng quay lại recording/slide sau buổi học, không bị ảnh hưởng đáng kể khi dừng lại tìm hiểu, hoặc vấn đề chủ yếu là ngại hỏi mà không phải mất track bài giảng, nhóm cần chuyển trọng tâm sang Hypothesis B.

### Evidence cần kiểm chứng

- Một tình huống gần đây, cụ thể, trong đó học viên không hiểu một phần bài.
- Học viên đã thực sự làm gì ngay sau đó, theo đúng thứ tự.
- Workaround hoặc công cụ đã sử dụng.
- Thời gian, công sức và hậu quả của tình huống.
- Học viên có tiếp tục, bỏ qua hay dừng học không.

### Problem Hypothesis

> Khi gặp một phần bài học không hiểu, học viên không thể nhanh chóng xác định lỗ hổng kiến thức nền và cách xử lý phù hợp, nên phải đọc lại, tìm kiếm hoặc bỏ qua. Nếu có một cách chẩn đoán ngắn dựa trên ngữ cảnh học tập hiện tại, họ có thể ôn đúng phần còn thiếu và tiếp tục bài học hiệu quả hơn.

> Đây là giả thuyết trước interview, chưa phải kết luận đã được validated.

### Evidence từ Interview P01

- P01 gặp một khái niệm khó hiểu trong lớp lý thuyết khoảng hai tiếng trước interview.
- Giảng viên đã chuyển sang slide khác trước khi P01 kịp hiểu khái niệm.
- P01 copy thuật ngữ, gửi cho ChatGPT, đọc phần giải thích và tự đọc slide để cố theo kịp.
- P01 mất khoảng 3–5 phút và bị lỡ nội dung giảng viên đang trình bày.
- P01 khá ngại hỏi những câu hỏi mà mình cho là đơn giản và thường muốn tự tìm hiểu trước.

### Problem Hypothesis sau Interview P01

> Trong lớp học có nhịp độ nhanh, khi gặp một thuật ngữ hoặc khái niệm chưa hiểu, học viên phải dừng lại để tự search và tìm lời giải thích. Việc này có thể giúp họ hiểu khái niệm nhưng đồng thời khiến họ bỏ lỡ phần giảng tiếp theo, đặc biệt khi họ ngại hỏi những câu hỏi mà họ cho là đơn giản.

### Solution Parking Lot — các hướng có thể thử sau khi kiểm chứng

Các hướng dưới đây chỉ là ý tưởng để park sau bước problem interview, chưa phải kết luận solution đã được validate.

| Hướng giải quyết có thể có                                                 | AI / Không sử dụng AI |
| -------------------------------------------------------------------------- | --------------------- |
| 1. Thêm glossary hoặc liên kết tới khái niệm nền ngay trên slide/bài học.  | Không sử dụng AI      |
| 2. Cho phép đánh dấu “Chưa hiểu” để quay lại sau buổi học.                 | Không sử dụng AI      |
| 3. Cho phép tua lại recording hoặc quay lại slide trước kèm mốc thời gian. | Không sử dụng AI      |
| 4. Tạo kênh đặt câu hỏi ẩn danh hoặc hàng đợi câu hỏi cho giảng viên.      | Không sử dụng AI      |
| 5. Cung cấp luồng chẩn đoán và ôn lại khái niệm nền theo ngữ cảnh bài học. | AI                    |

### Điều cần kiểm chứng tiếp

- Pain này có lặp lại trong nhiều lớp hoặc chủ đề khác không?
- Nó chỉ xảy ra trong lớp học đồng bộ hay cũng xảy ra khi tự học?
- Việc mất track bài giảng gây hậu quả gì cho bài tập, điểm số hoặc sự tự tin?

## 2. Conversation Guide — phiên bản cuối

### Nguyên tắc

- Không cho interviewee xem solution directive.
- Hỏi về một sự kiện đã xảy ra, ưu tiên “lần gần nhất”.
- Hỏi về hành vi thực tế, workaround và hậu quả.
- Không pitch AI Tutor.
- Không hỏi interviewee có muốn dùng feature hay không.
- Xin phép trước khi ghi âm.

### Mở đầu

> Mình đang tìm hiểu cách học viên xử lý những lúc gặp khó khăn khi học. Mình muốn nghe về một tình huống cụ thể đã xảy ra gần đây, không phải đánh giá một sản phẩm hay ý tưởng nào.

Nếu ghi âm:

> Mình xin phép ghi âm để xem lại sau buổi nói chuyện. Bản ghi chỉ dùng cho bài học và không chia sẻ công khai. Bạn có đồng ý không?

### Câu hỏi khởi động

> Gần đây bạn đang học môn hoặc chủ đề gì?

### Big 3 Questions và probe

#### Câu 1 — Tình huống gần nhất

> Kể cho mình nghe về lần gần nhất bạn không hiểu một phần trong bài học. Khi đó bạn đang ở đâu, đang học nội dung gì và đang cố hoàn thành việc gì?

Probes:

- Điều gì khiến bạn nhận ra mình chưa hiểu?
- Bạn đang ở phần nào của bài?
- Bạn đã cố làm gì ngay trước đó?

#### Câu 2 — Hành vi và workaround

> Sau đó bạn đã làm gì để xử lý tình huống đó? Hãy kể theo đúng thứ tự những gì bạn đã thử.

Probes:

- Bạn thử cách nào đầu tiên? Vì sao?
- Bạn đã dùng công cụ hoặc hỏi ai?
- Cách đó có hiệu quả không?
- Bạn mất khoảng bao lâu?
- Cuối cùng bạn tiếp tục, quay lại hay bỏ qua phần đó?

#### Câu 3 — Hậu quả và mức độ nghiêm trọng

> Điều gì xảy ra nếu bạn không xử lý được phần chưa hiểu đó?

Probes:

- Tình huống đó ảnh hưởng thế nào đến việc học tiếp?
- Bạn có từng tiếp tục dù vẫn chưa hiểu không?
- Bạn có từng bỏ qua hoặc dừng học không?
- Điều gì làm bạn thấy khó chịu, mất thời gian hoặc lo lắng nhất?

### Kết thúc

> Có điều gì về tình huống này mà mình chưa hỏi nhưng bạn cho là quan trọng không?

> Nếu cần làm rõ một chi tiết sau buổi nói chuyện, mình có thể liên hệ lại với bạn không?

## 3. Practice Reflection

### 1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?

Câu hỏi “Kể cho mình nghe về lần gần nhất bạn không hiểu một phần trong bài học?” đã giúp cuộc trò chuyện bắt đầu từ một sự kiện cụ thể thay vì ý kiến chung.

### 2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?

Mình cần cải thiện việc follow-up theo đúng trình tự hành động. Ở một số đoạn, mình có xu hướng chuyển sang câu hỏi tiếp theo quá sớm thay vì hỏi rõ người tham gia đã lỡ nội dung nào, có thể quay lại recording/slide không và hậu quả sau buổi học ra sao.

### 3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?

Nhóm bổ sung các probe về hành vi thực tế, workaround, thời gian và hậu quả; đồng thời loại bỏ các câu hỏi có thể khiến người tham gia đánh giá hoặc khen solution.

## 4. AI Support Log

| Hoạt động                     | AI đã hỗ trợ gì                                                                        | Kiểm tra và chỉnh sửa của người học                                                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hình thành Problem Hypothesis | Gợi ý cách diễn đạt capability, actor, situation/job và pain                           | Người học rà soát để bảo đảm đây chỉ là giả thuyết, không phải evidence                                                                               |
| Rà soát Conversation Guide    | Phát hiện câu hỏi có nguy cơ dẫn dắt hoặc làm lộ solution                              | Người học giữ các câu hỏi về quá khứ, hành vi, workaround và hậu quả                                                                                  |
| Phân tích interview           | AI giúp chuẩn hóa transcript, tách facts khỏi diễn giải và cập nhật Problem Hypothesis | Người học đối chiếu lại với transcript/audio, bỏ các hậu quả chưa có evidence và chỉ giữ dữ liệu, quote do mình cung cấp; AI không tạo interview data |

**Điểm cần tự kiểm:** Các diễn đạt ban đầu như “hình thành hiểu sai” hoặc “bỏ cuộc” chưa xuất hiện trong interview P01, nên không được ghi như evidence. Evidence hiện có chỉ là workaround bằng search/ChatGPT, mất khoảng 3–5 phút và bị lỡ nội dung giảng tiếp theo.

## 5. Cấu trúc tệp nộp

```text
Track1_Day17_DongDaiHuy_2A202601901/
├── README.md
└── interview/
    ├── notes.md
    ├── recording.m4a
    └── transcript.md
```

File ghi âm được nộp trực tiếp tại `interview/recording.m4a`. Transcript chỉ dùng để hỗ trợ review; bản ghi âm là nguồn cần đối chiếu khi kiểm tra quote.
