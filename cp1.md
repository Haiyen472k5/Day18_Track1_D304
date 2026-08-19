# 2. Chốt Hypothesis Problem

Giữ đúng cấu trúc:
Khi đang học một lớp có nhịp độ nhanh, học viên gặp khó khăn trong việc hiểu khái niệm chưa rõ và tiếp tục theo dõi bài giảng vì phải dừng lại để tự tìm kiếm hoặc hỏi người khác nhưng thường ngại hỏi, dẫn đến mất mạch học và bỏ lỡ nội dung giảng tiếp theo.

Hypothesis Problem nhóm tiếp tục:
Khi đang học một lớp có nhịp độ nhanh, học viên gặp khó khăn trong việc hiểu khái niệm chưa rõ và tiếp tục theo dõi bài giảng vì phải dừng lại để tự tìm kiếm hoặc hỏi người khác nhưng thường ngại hỏi, dẫn đến mất mạch học và bỏ lỡ nội dung giảng tiếp theo.

Evidence ban đầu hỗ trợ giả thuyết:
Người học gặp một khái niệm chưa hiểu trong lớp học.
Người học đã copy thuật ngữ, gửi cho ChatGPT, đọc giải thích và tự tìm hiểu thêm.
Quá trình này mất khoảng 3–5 phút.
Người học bị lỡ phần nội dung giảng viên đang trình bày tiếp theo.
Người học nói rằng mình khá ngại hỏi những câu hỏi bị cho là đơn giản.

Điều vẫn chưa được chứng minh:
Tình huống này có lặp lại thường xuyên với nhiều học viên và nhiều lớp học hay không.
Barrier chính là nhịp độ bài giảng, việc ngại hỏi hay nội dung/slide chưa rõ.
Việc mất mạch học có ảnh hưởng đáng kể đến bài tập, điểm số hoặc khả năng hoàn thành khóa học hay không.
Một hình thức hỗ trợ nhanh trong lúc học có thực sự giúp học viên tiếp tục bài mà không bỏ lỡ nội dung.

# 3. Cách giải

## Comparison Contract — những thứ phải giữ nguyên

| Thành phần         | Quyết định chung cho A/B/C                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Target user          | Học viên đang tham gia một lớp học có nhịp độ nhanh                                                           |
| Situation            | Học viên gặp một thuật ngữ hoặc khái niệm chưa rõ trong lúc giảng viên vẫn tiếp tục bài               |
| Task                 | Dùng từng option để xử lý cùng một khái niệm chưa hiểu và tiếp tục theo dõi bài học                   |
| Desired outcome      | Hiểu đủ phần cần thiết hoặc có một recovery path rõ ràng để không mất mạch học và không phải đoán |
| Content/data fixture | Cùng một slide, cùng thuật ngữ khó, cùng phần nội dung trước/sau và cùng context bài học                 |
| Thời gian test      | Cùng một khoảng thời gian ngắn, dự kiến khoảng 3–4 phút cho mỗi option                                       |

## Phân biệt cơ chế giữa A/B/C

Option A:

Option B:  *Nút ghi chú/giải thích khái niệm & ví dụ tích hợp ngay trên slide bài giảng*

| Thành phần                                       | Option A                               | Option B                                          | Option C                                       |
| -------------------------------------------------- | -------------------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| Cơ chế chính                                    | AI chẩn đoán lỗ hổng và ôn tập | User chọn thuật ngữ, xem giải thích có sẵn | AI đóng gói câu hỏi, con người hỗ trợ |
| Ai chủ động xác định nội dung cần xử lý? | AI hỗ trợ suy luận                  | User                                              | User và người hỗ trợ                      |
| AI có hành động trong lúc học?               | Có, chẩn đoán và giải thích     | Chỉ cung cấp nội dung được gọi             | Chuẩn bị context và câu hỏi               |
| Người hỗ trợ con người tham gia?             | Không bắt buộc                      | Không                                            | Có                                            |
| Tốc độ                                          | Nhanh nhưng phụ thuộc AI            | Rất nhanh                                        | Có thể chậm hơn                            |
| Rủi ro chính                                     | Chẩn đoán sai                       | Không có đúng khái niệm cần tìm           | Phải chờ phản hồi                          |

# 5. Chặng 3: Human–AI Design pass

# Human–AI Design Pass – Nút ghi chú/giải thích khái niệm & ví dụ tích hợp trên slide bài giảng

| **Tiêu chí** | **Mô tả / Giải thích** |
| :--- | :--- |
| **Human–AI decision** | **Quyết định phân tầng cho 2 nhóm user:** <br> - **Với Giảng viên:** AI đề xuất danh sách khái niệm + định nghĩa + ví dụ. Giảng viên là người ra quyết định cuối cùng (phê duyệt/chỉnh sửa/từ chối). Mô hình **"Human-in-the-loop"**. <br> - **Với Học viên:** Chỉ tiếp nhận nội dung đã được giảng viên phê duyệt. Học viên chỉ quyết định xem hay không xem chú thích, và đánh giá hữu ích hay không. Mô hình **"Human-as-evaluator"**. |
| **User làm gì? AI làm gì?** | **AI làm gì:** <br> - **Trước buổi học:** Quét slide → tự động phát hiện khái niệm phức tạp, từ khóa quan trọng → tạo bản thảo định nghĩa ngắn gọn + ví dụ trực quan → tổng hợp danh sách đề xuất gửi giảng viên. <br> - **Sau khi được phê duyệt:** Lưu trữ và hiển thị nội dung dưới dạng pop-up/tooltip trên slide; ghi nhận tương tác của học viên. <br><br> **Giảng viên làm gì:** <br> 1. Review từng đề xuất trên dashboard quản trị. <br> 2. Phê duyệt (giữ nguyên) / Chỉnh sửa nội dung / Từ chối (nếu không phù hợp). <br> 3. Thêm thủ công các khái niệm AI bỏ sót. <br> 4. Kích hoạt tính năng sau khi hoàn tất review. <br><br> **Học viên làm gì:** <br> 1. Nhấn vào biểu tượng **?** để xem chú thích và ví dụ. <br> 2. Đọc định nghĩa, xem ví dụ trực quan. <br> 3. Bật/tắt chế độ hiển thị chú thích (toggle). <br> 4. Đánh giá "Hữu ích" / "Không hữu ích" và có thể viết góp ý. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Đối với Giảng viên: Act + Ask (Chủ động + Xin phê duyệt)** <br> - **Act:** AI chủ động phát hiện và tạo bản thảo để tiết kiệm thời gian. <br> - **Ask:** AI xin ý kiến phê duyệt trước khi hiển thị cho học viên. <br> - **Don't Act:** AI không tự động xuất bản vì có thể sai sót. <br> - **Vì sao:** Giảng viên là chuyên gia, nắm rõ mạch bài giảng; tránh rủi ro nội dung không phù hợp; đảm bảo chất lượng học thuật. <br><br> **Đối với Học viên: Act (Chủ động có kiểm soát)** <br> - **Act:** AI hiển thị chú thích ngay khi học viên nhấn vào → hỗ trợ học tập kịp thời. <br> - **Don't Act:** AI không tự động bật tất cả chú thích cùng lúc (tránh rối mắt). <br> - **Ask:** AI hỏi học viên thông qua toggle để học viên chọn chế độ xem phù hợp. <br> - **Vì sao:** Tôn trọng trải nghiệm cá nhân, cho học viên quyền kiểm soát cách tiếp nhận thông tin. |
| **User hiểu capability/limit bằng gì?** | **Giảng viên hiểu capability/limit qua:** <br> - **Capability:** Danh sách khái niệm kèm định nghĩa & ví dụ; hiển thị lý do AI phát hiện (VD: "Từ này xuất hiện 12 lần trong slide"); giao diện trực quan với các nút Phê duyệt/Chỉnh sửa/Từ chối; mỗi đề xuất có mức độ ưu tiên (Cao/Trung bình/Thấp). <br> - **Limit:** Banner đầu trang review: *"AI có thể bỏ sót khái niệm mới hoặc chuyên sâu. Mời giảng viên xem xét bổ sung."*; với khái niệm AI không chắc chắn: hiển thị ⚠️ kèm *"AI không đủ dữ liệu. Đề nghị giảng viên kiểm tra."* <br><br> **Học viên hiểu capability/limit qua:** <br> - **Capability:** Các từ khóa được đánh dấu rõ ràng (màu xanh + biểu tượng ?); pop-up hiển thị định nghĩa ngắn gọn, ví dụ, hình ảnh/video; giao diện thân thiện. <br> - **Limit:** Dòng chữ nhỏ cuối pop-up: *"Nội dung này đã được giảng viên phê duyệt. Nếu cần giải thích thêm, vui lòng hỏi trực tiếp giảng viên."* |
| **Evidence/uncertainty được thể hiện thế nào?** | **Đối với Giảng viên (giai đoạn review):** <br> - Mỗi khái niệm có **mức độ tin cậy (%)** dựa trên dữ liệu huấn luyện. <br> - **Lý do phát hiện:** tần suất/vị trí/vai trò trong slide. <br> - **Trích dẫn nguồn:** nếu ví dụ/định nghĩa lấy từ tài liệu tham khảo. <br> - **Cảnh báo:** ⚠️ nếu AI không chắc chắn hoặc có nhiều cách hiểu. <br><br> **Đối với Học viên (giai đoạn sử dụng):** <br> - Không hiển thị mức độ tin cậy hay lý do phát hiện (đã được lọc). <br> - Chỉ hiển thị định nghĩa và ví dụ đã được phê duyệt. <br> - Nếu có trích dẫn nguồn, hiển thị dạng tham khảo nhẹ (VD: "Nguồn: Giáo trình XYZ"). <br> - Nếu giảng viên có ghi chú riêng ("Lưu ý quan trọng"), sẽ hiển thị kèm để nhấn mạnh. |
| **User kiểm soát và recovery thế nào?** | **Giảng viên kiểm soát:** <br> - Phê duyệt từng đề xuất hoặc hàng loạt. <br> - Chỉnh sửa trực tiếp nội dung trên giao diện. <br> - Thêm mới / xóa khái niệm. <br> - Bật/tắt tính năng cho từng slide hoặc toàn bộ khóa học. <br> - Thiết lập chế độ hiển thị cho học viên (chỉ định nghĩa, hay cả ví dụ). <br><br> **Giảng viên recovery:** <br> - Lưu lịch sử phiên bản → khôi phục bản cũ nếu cần. <br> - Chỉnh sửa nội dung đã xuất bản → hệ thống tự động cập nhật cho tất cả học viên. <br> - Xem báo cáo phản hồi từ học viên → điều chỉnh phù hợp. <br><br> **Học viên kiểm soát:** <br> - Bật/tắt chế độ hiển thị chú thích (toggle). <br> - Đóng pop-up bằng nút × hoặc bấm ra ngoài. <br> - Đánh giá "Hữu ích" / "Không hữu ích". <br> - Viết góp ý ngắn (nếu được cho phép). <br><br> **Học viên recovery:** <br> - Báo cáo lỗi qua nút "Báo lỗi" / "Phản hồi". <br> - Refresh lại trang nếu pop-up không tải. <br> - Tắt chế độ hiển thị chú thích và học theo cách truyền thống nếu không hài lòng. |

# 4. Prototype Annotation

> *Đặt annotation ngoài frame, không hiện cho tester:*

**OPTION B: Nút ghi chú / Pop-up giải thích khái niệm & ví dụ tích hợp trên slide bài giảng**

- **We expect the tester to:**
  - Tự phát hiện và nhấp vào biểu tượng nút **`?`** ở góc trên bên phải màn hình khi gặp khái niệm/thuật ngữ chưa rõ trong nội dung slide.
  - Đọc nhanh phần định nghĩa ngắn gọn và ví dụ trực quan trong pop-up (mục tiêu hiểu được khái niệm trong vòng 10–15 giây).
  - Tự đóng pop-up (bằng nút `✕`, click ra ngoài vùng nền mờ, hoặc bấm phím `ESC`) để tiếp tục theo dõi mạch bài giảng mà không cần chuyển tab hay tra cứu ngoài.
  - (Tùy chọn) Thử chuyển đổi qua lại giữa các tab khái niệm hoặc bấm nút *"📝 Phản hồi về tính năng"* ở góc dưới bên trái pop-up để đánh giá độ hữu ích.

- **Watch for:**
  - **Khả năng tự nhận biết (Affordance):** Tester có tự phát hiện nút **`?`** ở góc phải trên không, mất bao nhiêu giây để nhận ra, hay có xu hướng bôi đen chữ / tìm công cụ tìm kiếm khác?
  - **Thời gian xử lý & Tải nhận thức:** Tester mất bao lâu để đọc và đóng pop-up (có vượt quá 15–20 giây làm gián đoạn bài giảng không)?
  - **Mức độ thỏa mãn nội dung:** Sau khi đọc định nghĩa + ví dụ trong pop-up, tester có biểu hiện hiểu bài và tiếp tục học không, hay vẫn còn phân vân/muốn tìm kiếm thêm?
  - **Hành vi đóng & Điều hướng:** Tester đóng pop-up bằng cách nào (bấm nút `✕`, click ra ngoài backdrop, hay dùng phím `ESC`)? Có gặp khó khăn khi muốn quay lại slide không?
  - **Tương tác phản hồi:** Tester có để ý và sử dụng nút đánh giá/phản hồi ở chân pop-up hay không?

- **Do not explain:**
  - **Không chỉ trước vị trí nút `?`** hoặc mớm lời rằng nút đó dùng để mở giải thích (để kiểm tra độ trực quan của giao diện).
  - **Không giải thích nghĩa của thuật ngữ trên slide thay cho tính năng** (để đo lường chính xác chất lượng nội dung do hệ thống cung cấp).
  - **Không hướng dẫn cách đóng pop-up** (để kiểm tra xem các cơ chế đóng có tự nhiên và thuận tay tester không).
  - **Không nhắc nhở hoặc yêu cầu tester phải bấm nút đánh giá/phản hồi**.