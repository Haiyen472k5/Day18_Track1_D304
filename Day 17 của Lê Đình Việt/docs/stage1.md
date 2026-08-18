# Chặng 1: Đặt giả thuyết
# 1. Solution — Gỡ solution khỏi hình thức cụ thể

**Case đã chọn:** Case A — AI Tutor: Diagnostic Refresher

Ghi lại directive nguyên văn, sau đó diễn đạt lại dưới dạng một capability trung tính.

Câu hỏi dẫn dắt:

Câu nào trong directive đang mô tả giao diện, tên feature hoặc công nghệ?
Nếu bỏ tên nút, màn hình và AI action, khả năng cần tạo ra là gì?
Nhóm có đang mặc định cách triển khai được giao là cách duy nhất không?
Capability có thể được mô tả mà không dùng tên feature không?
## Solution directive

> Thêm nút “Tôi vẫn chưa hiểu” vào bài học. Khi học viên bấm nút, AI Tutor sử dụng nội dung bài hiện tại, các câu trả lời gần đây và lịch sử học tập để đặt 2–3 câu hỏi chẩn đoán ngắn, chọn một khái niệm nền để học viên ôn lại, tạo một phần giải thích ngắn và đưa học viên trở về bài đang học.

## Capability trung tính

Hệ thống có khả năng tiếp nhận nhu cầu hỗ trợ khi người học chưa hiểu nội dung hiện tại, xác định lỗ hổng kiến thức dựa trên ngữ cảnh và quá trình học tập, cung cấp nội dung củng cố phù hợp, sau đó hỗ trợ người học tiếp tục bài học đang thực hiện.

# 2. Change — Làm lộ chuỗi thay đổi được kỳ vọng

Đừng nhảy thẳng từ feature tới outcome. Viết các mắt xích mà team đang ngầm tin sẽ xảy ra.

Câu hỏi dẫn dắt:

User sẽ biết hoặc làm được điều gì khác?
Hành vi nào phải thay đổi để outcome xảy ra?
Trạng thái hoặc kết quả nào được kỳ vọng thay đổi?
Đâu là output team tạo ra, đâu là outcome team chỉ có thể ảnh hưởng?
Nếu user không thay đổi hành vi, solution còn tạo được outcome không?
## Chuỗi thay đổi

**Solution** → Người học nhận ra lỗ hổng kiến thức và ôn lại khái niệm nền phù hợp → Người học hiểu hơn, áp dụng được kiến thức và tiếp tục bài đang học → **Outcome: tăng khả năng hoàn thành bài học và cải thiện kết quả học tập**

## Các thay đổi được kỳ vọng

1. **Thay đổi về nhận thức:** Người học biết mình đang thiếu kiến thức nền nào và hiểu lại khái niệm đó sau phần ôn tập.
2. **Thay đổi về hành vi:** Thay vì dừng học hoặc đoán đáp án, người học chủ động yêu cầu hỗ trợ, tham gia phần ôn tập và áp dụng kiến thức vừa củng cố vào bài hiện tại.
3. **Thay đổi về trạng thái/kết quả:** Người học có thể tiếp tục và hoàn thành bài học với mức độ hiểu bài tốt hơn.

## Phân biệt output và outcome

- **Output team tạo ra:** Câu hỏi chẩn đoán, khái niệm nền được lựa chọn, phần giải thích ngắn và luồng đưa người học trở lại bài hiện tại.
- **Outcome team có thể ảnh hưởng:** Mức độ hiểu bài, khả năng hoàn thành bài học và kết quả học tập của người học.

Outcome chỉ có khả năng xảy ra khi người học thực sự tham gia phần hỗ trợ và áp dụng kiến thức được củng cố. Nếu hành vi của người học không thay đổi, solution vẫn tạo ra output nhưng không bảo đảm tạo ra outcome.

# 3. Actor — Xác định các nhóm người có liên quan

Một solution có thể liên quan đến nhiều nhóm user hoặc stakeholder khác nhau. Người trực tiếp sử dụng feature chưa chắc là người đang gặp pain chính, phải thay đổi hành vi hoặc chịu hậu quả.

Ví dụ với AI Support Radar trên VLearn: learner là người có hành vi học tập được phân tích; instructor là người xem Support Queue và quyết định can thiệp; coach là người có thể trực tiếp hỗ trợ learner. Cả ba đều là actor liên quan nhưng có job, pain và lợi ích khác nhau.

Câu hỏi dẫn dắt:

Ai trực tiếp sử dụng solution?
Ai trực tiếp trải nghiệm pain?
Ai phải thay đổi hành vi để outcome xảy ra?
Ai chịu hậu quả nếu problem không được giải quyết?
Ai hưởng lợi gián tiếp?
Người nhận feature có chắc là người sở hữu pain chính không?
| Actor | Họ đang làm gì? | Pain hoặc hậu quả có thể có | Họ hưởng lợi thế nào? |
|---|---|---|---|
| Người học | Học bài, trả lời câu hỏi và cố gắng hoàn thành nội dung hiện tại | Không hiểu do thiếu kiến thức nền, dễ đoán đáp án, mất động lực hoặc bỏ dở bài học | Được hỗ trợ đúng chỗ, hiểu bài hơn và có thể tiếp tục học |
| Giảng viên | Theo dõi tiến độ, giải đáp thắc mắc và hỗ trợ người học | Khó biết người học vướng ở đâu; phải hỗ trợ lặp lại cho nhiều người | Nhận biết nhu cầu hỗ trợ rõ hơn và tập trung vào trường hợp cần can thiệp |
| Người thiết kế nội dung | Xây dựng bài học và trình tự kiến thức | Không biết phần nào đang gây khó hiểu hoặc đòi hỏi kiến thức nền chưa được cung cấp | Có dữ liệu để cải thiện nội dung và thứ tự bài học |
| Đơn vị đào tạo | Quản lý chất lượng và hiệu quả chương trình | Tỷ lệ bỏ dở cao, kết quả học tập thấp và trải nghiệm học không tốt | Cải thiện tỷ lệ hoàn thành và chất lượng đào tạo |

**Actor nhóm chọn để điều tra trước:** Người học.

**Vì sao chọn nhánh này thay vì actor khác:** Người học là người trực tiếp gặp tình huống không hiểu bài, thực hiện hành vi yêu cầu hỗ trợ và phải thay đổi nhận thức hoặc hành vi để outcome xảy ra. Phỏng vấn người học trước giúp kiểm tra pain gốc thay vì chỉ quan sát gián tiếp qua giảng viên hoặc đơn vị đào tạo.

# 4. Situation & Job — User đang cố làm gì trong tình huống nào?

Chọn một khoảnh khắc cụ thể mà actor có thể đã trải qua. Mô tả hoàn cảnh và việc họ đang cố hoàn thành, chưa kết luận pain nằm ở đâu. Job phải còn tồn tại ngay cả khi bỏ AI và feature khỏi bối cảnh.

Câu hỏi dẫn dắt:

Tình huống bắt đầu khi chuyện gì xảy ra?
Lúc đó user đang cố hoàn thành việc gì?
Vì sao việc đó quan trọng với họ?
Hiện tại họ đang thực hiện việc đó như thế nào?
Họ bắt đầu gặp vướng mắc ở điểm nào?
Tình huống bắt đầu
→ User muốn hoàn thành việc gì
→ Hiện tại họ làm như thế nào
→ Điểm bắt đầu gặp vướng mắc

## Mô tả Situation & Job

Khi gặp một nội dung hoặc câu hỏi không hiểu trong bài học trực tuyến, người học đang cố hiểu kiến thức để hoàn thành bài và tiếp tục tiến trình học bằng cách đọc lại nội dung, xem lại ví dụ, thử trả lời hoặc tự tìm thêm tài liệu.

Tình huống bắt đầu tại thời điểm người học không thể giải thích nội dung hoặc liên tục trả lời sai. Vướng mắc xuất hiện khi các cách tự xử lý trên không giúp họ xác định chính xác phần kiến thức còn thiếu.

## JTBD Hypothesis

Khi gặp một phần kiến thức không hiểu trong lúc học, tôi muốn nhanh chóng xác định điều mình đang thiếu và củng cố kiến thức liên quan, để có thể hiểu nội dung hiện tại và tự tin tiếp tục hoàn thành bài học.

# 5. Pain — Viết các cách giải thích cạnh tranh

Pain là barrier cản actor hoàn thành job và consequence đi kèm; không phải sự vắng mặt của feature.

Câu hỏi dẫn dắt:

Barrier cụ thể nào đang cản actor hoàn thành job?
Actor thiếu thông tin, kỹ năng, thời gian hay sự hỗ trợ?
Họ có nhận ra mình đang gặp pain không?
Nếu không xử lý, hậu quả thực tế là gì?
Actor có thể sống chung với sự bất tiện này không?
Có cách giải thích nào khác cho cùng hành vi?
Pain có còn tồn tại nếu solution directive biến mất khỏi đầu nhóm không?
## Pain Hypothesis A

Khi gặp một nội dung không hiểu trong bài học, người học gặp khó khăn trong việc tiếp tục và hoàn thành bài vì không xác định được kiến thức nền mình còn thiếu, dẫn đến việc trả lời sai lặp lại, đoán đáp án hoặc bỏ dở bài học.

## Pain Hypothesis B — cách giải thích cạnh tranh

Khi gặp một nội dung không hiểu trong bài học, người học gặp khó khăn trong việc tiếp tục và hoàn thành bài vì cách trình bày hiện tại chưa phù hợp với họ, dẫn đến mất nhiều thời gian đọc lại, giảm tập trung hoặc bỏ qua nội dung dù có thể không thiếu kiến thức nền.

**Giả thuyết nhóm chọn để điều tra trước:** A.

**Lý do chọn:** Giả thuyết A liên hệ trực tiếp với nhu cầu chẩn đoán và ôn lại khái niệm nền trong directive, nhưng vẫn cần kiểm chứng bằng hành vi thực tế. Khi nghiên cứu, nhóm vẫn kiểm tra giả thuyết B để tránh kết luận sai rằng mọi trường hợp không hiểu bài đều do thiếu kiến thức nền.

# 6. Evidence — Xác định điều cần tìm trước khi viết câu hỏi

Evidence phải đến từ sự kiện, hành vi, workaround và hậu quả đã xảy ra; một problem statement nghe hợp lý chưa phải evidence.

Câu hỏi dẫn dắt:

User có kể được một sự kiện gần đây với trình tự cụ thể không?
Trong sự kiện đó, họ thực sự đã làm gì?
Họ đã dùng workaround nào và bỏ ra bao nhiêu công sức?
Tình huống có lặp lại không?
Hậu quả quan sát được là gì?
Họ đã chủ động tìm cách xử lý chưa?
Điều gì cho thấy pain không đủ quan trọng?
Evidence nào sẽ khiến nhóm sửa hoặc bác bỏ hypothesis?
| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
|---|---|---|
| Situation có thật | Người học kể được một lần gần đây họ không hiểu nội dung, kèm bài học, thời điểm và trình tự hành động cụ thể | Chỉ đưa ra nhận xét chung, không nhớ được trường hợp thực tế nào |
| Pain có ý nghĩa | Người học bị gián đoạn đáng kể, mất nhiều thời gian hoặc phải nhờ người khác mới tiếp tục được | Người học tự xử lý nhanh và cho rằng đây chỉ là bất tiện nhỏ |
| Workaround tồn tại | Người học đọc lại nhiều lần, đoán đáp án, tìm video/tài liệu khác hoặc hỏi bạn và giảng viên | Người học không cần làm thêm gì hoặc công cụ hiện tại đã giải quyết đủ tốt |
| Consequence tồn tại | Có câu trả lời sai lặp lại, thời gian hoàn thành tăng, bỏ qua kiến thức hoặc bỏ dở bài | Người học vẫn hiểu và hoàn thành bài bình thường, không có ảnh hưởng quan sát được |
| Pattern có lặp | Tình huống xuất hiện ở nhiều bài, nhiều lần hoặc với nhiều người học | Đây là sự cố hiếm, chỉ xảy ra với một nội dung bị lỗi hoặc một cá nhân |

## Chốt Problem Hypothesis và park solution

### Problem Hypothesis nhóm mang sang Chặng 2

Khi gặp nội dung không hiểu trong bài học trực tuyến, người học khó xác định kiến thức nền còn thiếu và không biết nên ôn lại nội dung nào, khiến họ trả lời sai lặp lại, mất thời gian tự tìm kiếm hoặc bỏ dở bài học.

### Điều gì phải đúng để giả thuyết đứng vững

- Tình huống không hiểu bài vì thiếu kiến thức nền thực sự xảy ra và có tính lặp lại.
- Người học không dễ dàng tự xác định phần kiến thức còn thiếu bằng công cụ hiện tại.
- Khó khăn này tạo ra hậu quả đáng kể như mất thời gian, trả lời sai hoặc bỏ dở.
- Việc củng cố đúng kiến thức nền giúp người học tiếp tục bài hiện tại tốt hơn.

### Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết

- Phần lớn trường hợp không hiểu đến từ cách trình bày, lỗi nội dung, thiếu động lực hoặc mất tập trung chứ không phải thiếu kiến thức nền.
- Người học đã có cách tự xử lý nhanh, hiệu quả và không coi đây là vấn đề quan trọng.
- Tình huống chỉ xảy ra hiếm khi hoặc không gây hậu quả đáng kể.
- Sau khi ôn lại đúng kiến thức nền, người học vẫn không thể tiếp tục bài học.

## Solution Parking Lot

| STT | Hướng giải quyết có thể có | AI / Không sử dụng AI |
|---:|---|---|
| 1 | AI đặt câu hỏi chẩn đoán và tạo phần ôn tập cá nhân hóa | AI |
| 2 | Hiển thị bản đồ kiến thức và gợi ý bài nền dựa trên các câu trả lời sai | AI |
| 3 | Cho phép người học chọn phần chưa hiểu để nhận một cách giải thích hoặc ví dụ khác | Không sử dụng AI |
| 4 | Tạo sẵn các bài ôn tập ngắn và liên kết chúng với từng lỗi sai phổ biến | Không sử dụng AI |
| 5 | Chuyển yêu cầu hỗ trợ kèm ngữ cảnh bài học cho giảng viên hoặc trợ giảng | Không sử dụng AI |
| 6 | Tổ chức nhóm học hoặc ghép người học với bạn học đã nắm vững khái niệm | Không sử dụng AI |

# Tự kiểm — CHECKPOINT 1: Problem Hypothesis

| Tiêu chí | Nội dung đã xác định | Kết quả |
|---|---|:---:|
| Solution | AI Tutor chẩn đoán phần chưa hiểu, cung cấp nội dung ôn tập và đưa người học trở lại bài hiện tại | Đạt |
| Change | Người học nhận ra lỗ hổng, ôn kiến thức nền, áp dụng kiến thức và tiếp tục bài học | Đạt |
| Actor | Chọn người học — người trực tiếp gặp khó khăn và phải thay đổi hành vi | Đạt |
| Situation & Job | Khi gặp nội dung không hiểu, người học muốn xác định điều còn thiếu để hiểu và hoàn thành bài | Đạt |
| Pain | Không xác định được kiến thức nền cần ôn, dẫn đến trả lời sai, mất thời gian hoặc bỏ dở | Đạt |
| Evidence | Đã xác định evidence cần tìm cho situation, pain, workaround, consequence và mức độ lặp lại | Đạt |
| Hai cách giải thích cạnh tranh | A: thiếu kiến thức nền; B: cách trình bày nội dung chưa phù hợp | Đạt |
| Điều có thể làm giả thuyết sai | Pain hiếm gặp hoặc không đáng kể; nguyên nhân chính không phải kiến thức nền; workaround hiện tại đã đủ tốt; ôn đúng kiến thức nền vẫn không giúp người học tiếp tục | Đạt |

## Kết luận checkpoint

**Nhóm đạt CHECKPOINT 1 về mặt cấu trúc giả thuyết.** Nhóm đã lần theo đủ chuỗi:

> **Solution → Change → Actor → Situation & Job → Pain → Evidence**

Problem Hypothesis được chọn để mang sang Chặng 2 là:

> Khi gặp nội dung không hiểu trong bài học trực tuyến, người học khó xác định kiến thức nền còn thiếu và không biết nên ôn lại nội dung nào, khiến họ trả lời sai lặp lại, mất thời gian tự tìm kiếm hoặc bỏ dở bài học.

Kết luận này mới xác nhận giả thuyết đã đủ rõ để kiểm chứng, không có nghĩa pain đã được chứng minh. Nhóm cần thu thập evidence thực tế ở Chặng 2 trước khi quyết định giải pháp.
