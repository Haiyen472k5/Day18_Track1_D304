# 📊 BÁO CÁO KẾT QUẢ QUAN SÁT & ĐÁNH GIÁ KIỂM THỬ (OPTION B)

> **Dự án:** VLearn Lab · Hệ thống Chú thích AI trong Bài giảng  
> **Phương án kiểm thử:** OPTION B — Smart Tooltip & Modal Pop-up (Nguyễn Thị Hải Yến)  
> **Đối tượng quan sát:** Học viên tham gia lớp học có nhịp độ nhanh  
> **Mục tiêu kiểm thử:** Đánh giá khả năng hiểu khái niệm nhanh tại chỗ và khả năng tiếp tục theo dõi bài giảng mà không bị mất mạch học.

---

## 1. BẢNG TỔNG HỢP 5 TIÊU CHÍ QUAN SÁT CỐT LÕI

| STT | Tiêu chí quan sát (Observation Focus) | Quan sát thực tế & Dữ liệu từ Feedback | Đánh giá & Hàm ý thiết kế (Design Implications) |
| :---: | :--- | :--- | :--- |
| **1** | **First action** *(Hành động đầu tiên)* | Tester nhìn lướt qua văn bản slide nhưng **không bấm ngay vào nút `?` ở góc phải trên**; có xu hướng tìm kiếm công cụ hoặc chờ đợi giảng viên nói tiếp. | Cần tăng tính trực quan (Affordance) cho nút `?` hoặc thêm hiệu ứng viền/nhắc nhở nhẹ lần đầu để tester nhận ra ngay điểm tương tác. |
| **2** | **Hesitation & Help needed** *(Ngập ngừng & Cần hỗ trợ)* | **Người dùng chưa tự hiểu luồng ban đầu:** Phải có người giải thích/mớm lời trước thì tester mới biết nút `?` dùng để mở pop-up giải thích thuật ngữ trong bài. | Cần thêm cơ chế Onboarding 1 chạm hoặc Tooltip tự động gợi ý ngắn trong 3 giây đầu để người học tự hiểu mà không cần hướng dẫn thủ công. |
| **3** | **Evidence read / ignored** *(Mức độ tiếp nhận nội dung)* | Khi mở pop-up, tester **đọc hiểu rất nhanh phần Định nghĩa (1 câu) và Ví dụ minh họa** trong khoảng 10–12 giây; hầu như bỏ qua phần nguồn trích dẫn giáo trình. | Nội dung cô đọng đạt mục tiêu giúp học viên hiểu nhanh tại chỗ mà không bị phân tâm hay quá tải nhận thức trong lúc nghe giảng. |
| **4** | **Correction / recovery** *(Khả năng kiểm soát & thoát)* | Tester dễ dàng đóng pop-up (bằng cách click ra ngoài hoặc bấm phím `ESC`) và **lập tức quay lại nghe giảng** mà không bị mất dấu hay chuyển tab. | Cơ chế Pop-up overlay hoàn thành tốt mục tiêu không làm đứt gãy mạch bài học (zero-context switching). |
| **5** | **Option được chọn & Trade-off** *(Lựa chọn & Đánh đổi)* | **Tester đánh giá Option B phù hợp nhất với việc nghe giảng** (nhanh, tiện, không bị gián đoạn).<br><br>👉 **Trade-off cốt lõi:**<br>• *Về phía Học viên:* Trải nghiệm rất mượt mà, tiện lợi.<br>• *Về phía Giảng viên:* **Hơi nặng việc** vì giảng viên phải tốn thêm thời gian vào dashboard để review và phê duyệt các đề xuất của AI trước buổi học. | • Giữ nguyên trải nghiệm On-demand Pop-up cho học viên.<br>• Ở luồng Giảng viên: Cần tối ưu thêm tính năng *"1-Click Phê duyệt hàng loạt"* hoặc AI tự động duyệt trước các khái niệm có độ tin cậy $\ge 95\%$ để giảm tải việc cho giảng viên. |

---

## 2. PHÂN TÍCH ƯU ĐIỂM & ĐIỂM NGHẼN (INSIGHTS)

### ✅ Điểm mạnh nổi bật (Strengths)
1. **Rất phù hợp với ngữ cảnh nghe giảng trực tiếp:** Không chuyển trang, không làm xao nhãng slide, người học chỉ mất dưới 15 giây để nắm bắt thuật ngữ rồi tiếp tục nghe giảng.
2. **Quyền kiểm soát hoàn toàn thuộc về người học:** Người học tự quyết định khi nào cần xem (`Pull model`), không bị AI tự động ngắt lời hay chen ngang.
3. **Nội dung đáng tin cậy:** Nhờ cơ chế Human-in-the-loop (giảng viên đã kiểm duyệt trước), học viên hoàn toàn an tâm vào tính chính xác của định nghĩa và ví dụ.

---

### ⚠️ Điểm nghẽn phát hiện (Breakdowns & Friction Points)
1. **Vấn đề Onboarding (Khám phá tính năng ban đầu):**
   * *Hiện tượng:* Người dùng mới vào slide chưa hiểu ngay nút `?` dùng để làm gì nếu không có người thuyết minh.
   * *Giải pháp đề xuất:* Thêm một tooltip gợi ý nhẹ xuất hiện 3s đầu: *"💡 Bấm vào đây để xem chú thích thuật ngữ"* hoặc làm nổi bật nút `?` trong lần đầu mở slide.
2. **Khối lượng công việc của Giảng viên (Instructor Workload):**
   * *Hiện tượng:* Nếu một bài giảng có nhiều slide và hàng chục thuật ngữ, việc giảng viên phải ngồi review từng thẻ sẽ tốn nhiều thời gian chuẩn bị bài.
   * *Giải pháp đề xuất:*
     * Cung cấp nút **"✓ Phê duyệt tất cả các thẻ có độ tin cậy $\ge 90\%$"** chỉ với 1 click.
     * Chỉ yêu cầu giảng viên tập trung xem xét các thẻ có cảnh báo bất định ⚠️ hoặc độ tin cậy thấp.

---

## 3. KẾ HOẠCH HÀNH ĐỘNG (NEXT STEPS)

- [x] Tích hợp Option B hoàn chỉnh vào luồng chung `Day18_Prototypes/index.html`.
- [x] Xây dựng đầy đủ 2 luồng: **Học viên** (Xem chú thích & Feedback) và **Giảng viên** (Dashboard Review & Phê duyệt).
- [ ] Bổ sung gợi ý Onboarding tự động ngắn để người dùng không cần hướng dẫn vẫn tự thao tác được.
- [ ] Bổ sung cơ chế duyệt tự động thông minh cho các thuật ngữ chuẩn để tối ưu hóa thời gian cho giảng viên.
