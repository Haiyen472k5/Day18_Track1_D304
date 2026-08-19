

# 🎙️ KỊCH BẢN PHỎNG VẤN & QUAN SÁT TEST USER (CHẶNG 5)

> **Thời lượng dự kiến:** 15 phút / Tester  
> **Người thực hiện:** Người điều phối (Facilitator) & Người ghi chép (Note-taker)  
> **Thiết bị / Prototype:** File `prototype.html` (Option B: Nút ghi chú & Pop-up giải thích trên slide)

---

## 📌 PHẦN 1: THÔNG TIN CHUẨN BỊ (FRAMEWORK TEST)

### 1. Bối cảnh & Vấn đề cần kiểm chứng (Hypothesis Problem)
> Khi đang học một lớp có nhịp độ nhanh, học viên gặp khó khăn trong việc hiểu khái niệm chưa rõ và tiếp tục theo dõi bài giảng vì phải dừng lại để tự tìm kiếm hoặc hỏi người khác nhưng thường ngại hỏi, dẫn đến mất mạch học và bỏ lỡ nội dung giảng tiếp theo.

### 2. Giải pháp thử nghiệm (Option B)
> **Nút `?` Pop-up ghi chú / giải thích khái niệm & ví dụ minh họa tích hợp trực tiếp trên slide bài giảng.**

### 3. Relevant Context Question (Tối đa 2 phút)
> *"Gần đây khi tham gia một buổi học trực tuyến hoặc nghe một bài giảng có nhịp độ nhanh, bạn có từng gặp phải một thuật ngữ/khái niệm mới mà mình chưa hiểu kịp, nhưng ngại ngắt lời giảng viên để hỏi và phải tự tìm cách xử lý không?"*

### 4. Outcome Task (Giao nhiệm vụ theo kết quả, không chỉ nút bấm)
> *"Giả sử bạn đang ngồi trong lớp học bài 'Trí tuệ nhân tạo trong giáo dục' và giảng viên đang nói lướt qua khái niệm 'Machine Learning'. Trong tình huống này, hãy dùng giao diện trước mặt để **hiểu được ý nghĩa cơ bản của khái niệm này cùng một ví dụ thực tế, sau đó sẵn sàng tiếp tục nghe giảng tiếp mà không rời khỏi màn hình bài học**."*

### 5. 5 Trọng tâm quan sát (Observation Focus)
1. **First action:** Tester nhìn vào đâu đầu tiên? Có tự nhận biết và bấm vào nút **`?`** ở góc trên bên phải không?
2. **Hesitation:** Tester có ngập ngừng, khựng lại ở bước nào không (lúc tìm chỗ bấm, lúc đọc nội dung, hay lúc tìm cách tắt pop-up)?
3. **Evidence read / ignored:** Tester có đọc phần ví dụ và nguồn trích xuất giáo trình không, hay chỉ đọc lướt định nghĩa 1 câu rồi tắt ngay?
4. **Correction / recovery:** Tester đóng pop-up bằng cách nào (bấm nút `✕`, click ra ngoài nền mờ, hay bấm `ESC`)? Có gặp khó khăn khi muốn quay lại slide không?
5. **Option được chọn & trade-off:** Khi so sánh A/B/C, tester chọn phương án nào và chấp nhận trade-off gì?

---

## 🗣️ PHẦN 2: LỜI THOẠI ĐIỀU PHỐI CHI TIẾT (STEP-BY-STEP SCRIPT)

### 🟢 BƯỚC 1: Mở đầu & Tạo không khí thoải mái (2 phút)
*(Mục tiêu: Giảm áp lực cho tester, khuyến khích nói to suy nghĩ)*

> *"Chào bạn, cảm ơn bạn rất nhiều vì đã dành thời gian tham gia buổi test hôm nay.*
>
> *Hiện tại nhóm mình đang thử nghiệm một số ý tưởng giúp học viên học tập hiệu quả hơn trong các lớp học có nhịp độ nhanh. Buổi hôm nay là để **kiểm tra giao diện và tính năng xem có dễ dùng không, chứ hoàn toàn không kiểm tra kiến thức hay kỹ năng của bạn**.*
>
> *Bạn thao tác như thế nào cũng đều là dữ liệu quý giá đối với chúng mình. Trong suốt quá trình thao tác, nhờ bạn **nói to tất cả những suy nghĩ, thắc mắc hoặc cảm giác trong đầu** (Think-aloud) ra nhé.*
>
> *Bạn đã sẵn sàng chưa, chúng ta bắt đầu nhé!"*

---

### 🟡 BƯỚC 2: Kiểm tra bối cảnh (Relevant Context) (1–2 phút)
*(Mục tiêu: Xác định tester có thuộc nhóm gặp đúng nỗi đau này không)*

> **Người điều phối hỏi:**  
> *"Trước khi vào màn hình, cho mình hỏi nhanh: Gần đây khi tham gia một lớp học có nhịp độ nhanh hoặc nhiều kiến thức mới, bạn có từng rơi vào tình huống gặp một khái niệm chưa hiểu, nhưng ngại ngắt lời giảng viên để hỏi nên phải tự tìm kiếm hoặc bỏ qua luôn không?"*

* **Nếu Tester trả lời "Có":**  
  > *"Lúc đó bạn đã xử lý như thế nào và việc đó có làm bạn bị lỡ mất phần nội dung tiếp theo không?"*
* **Nếu Tester trả lời "Chưa từng / Ít khi":**  
  > *(Ghi nhận: Vẫn cho test bình thường để tìm lỗi tương tác, nhưng không dùng để claim giá trị giải pháp).*

---

### 🟠 BƯỚC 3: Giao nhiệm vụ Outcome Task & Quan sát im lặng (5–7 phút)
*(Mục tiêu: Quan sát hành vi tự nhiên không có sự can thiệp)*

> **Người điều phối giao máy và đọc task:**  
> *"Bây giờ, mời bạn nhìn vào màn hình slide trước mặt. Giả sử bạn đang ngồi nghe giảng và giảng viên đang nói đến nội dung này nhưng bạn chưa hiểu rõ 'Machine Learning' là gì.*
>
> *Hãy dùng giao diện này để **hiểu được ý nghĩa cơ bản của khái niệm này cùng một ví dụ thực tế, sau đó sẵn sàng tiếp tục nghe giảng mà không rời khỏi bài học**."*

*(Sau khi giao task, người điều phối **hoàn toàn im lặng**, không chỉ tay, không nhìn chằm chằm gây áp lực, chỉ quan sát và ghi chép vào Bảng quan sát phía dưới).*

---

### 🔴 BƯỚC 4: Phỏng vấn đào sâu sau khi thao tác (Debrief) (4–5 phút)
*(Mục tiêu: Khai thác cảm nhận thực tế, thời gian, sự gián đoạn và trade-off)*

1. **Về khả năng giải quyết vấn đề:**
   > *"Vừa rồi sau khi xem giải thích, bạn cảm thấy nội dung đó có đủ giúp bạn hiểu để tiếp tục nghe giảng tiếp không?"*
2. **Về nhịp độ & độ gián đoạn:**
   > *"Bạn ước lượng mình mất khoảng bao nhiêu giây để xem xong phần giải thích đó? Nó có làm bạn cảm thấy bị ngắt quãng mạch học không?"*
3. **Về điểm khựng / khó dùng:**
   > *"Có khoảnh khắc nào trên màn hình khiến bạn phải khựng lại suy nghĩ hoặc tìm kiếm không?"*
4. **Về tính năng phản hồi (nếu tester có/không dùng):**
   > *"Bạn có nhìn thấy nút 'Phản hồi về tính năng' ở trong pop-up không? Theo bạn trong buổi học thật, bạn có muốn để lại đánh giá hay góp ý không?"*
5. **So sánh Trade-off giữa các phương án (A vs B vs C):**
   > *"Nếu phải chọn 1 cách trong lớp học thật:*  
   > *- **Option A:** AI tự động phân tích và đưa ra bài tập/ôn tập sau buổi.*  
   > *- **Option B:** Nút bấm chủ động xem giải thích nhanh trong pop-up tại chỗ.*  
   > *- **Option C:** Tự động đóng gói câu hỏi để gửi Mentor/Trợ giảng trả lời.*  
   > *Bạn sẽ ưu tiên chọn cách nào nhất? Vì sao?"*

---

### 🏁 BƯỚC 5: Kết thúc & Cảm ơn (1 phút)
> *"Cảm ơn bạn rất nhiều vì những chia sẻ cực kỳ chi tiết và chân thực hôm nay. Những đóng góp này sẽ giúp nhóm hoàn thiện sản phẩm tốt hơn rất nhiều!"*

---

## 🛟 BỘ QUY TẮC CỨU HỘ & 6 LUẬT CẤM CHO NGƯỜI TEST

### 🆘 3 Câu cứu hộ chuẩn khi tester bị "kẹt" hoặc im lặng:
| Tình huống | Câu cứu hộ cần nói |
| :--- | :--- |
| **Tester im lặng quá 15 giây** | *"Bạn đang suy nghĩ hay đang tìm kiếm điều gì trong đầu thế, cứ chia sẻ với mình nhé?"* |
| **Tester dừng lại, băn khoăn** | *"Ở bước này, bạn đang dự định làm gì tiếp theo?"* |
| **Tester hỏi ngược lại: 'Cái này bấm ở đâu?'** | *"Theo suy đoán tự nhiên của bạn, tính năng này nên nằm ở đâu hoặc hoạt động thế nào?"* |

### ⛔ 6 Luật cấm của người điều phối:
1. ❌ **Không bấm chuột hộ** hoặc chỉ tay vào màn hình.
2. ❌ **Không giải thích icon/tính năng trước** (ví dụ: *"Bấm nút ? góc phải đi bạn"*).
3. ❌ **Không hỏi câu định hướng** như: *"Bạn có thấy tính năng này hay/đẹp không?"* (hãy hỏi: *"Trải nghiệm vừa rồi diễn ra như thế nào?"*).
4. ❌ **Không giải thích nghĩa của thuật ngữ** thay cho slide/pop-up.
5. ❌ **Không lấp khoảng lặng** khi tester đang tập trung suy nghĩ.
6. ❌ **Không tranh luận hay bào chữa** khi tester chê hoặc thao tác sai ý định thiết kế.

---

## 📝 BẢNG GHI CHÉP QUAN SÁT (OBSERVATION LOG)

*Dùng để in ra hoặc ghi chú trực tiếp trong lúc phỏng vấn:*

| Tester ID: | Ngày / Giờ: | Người quan sát: |
| :--- | :--- | :--- |

| Tiêu chí quan sát | Hành vi thực tế của Tester | Ghi chú & Đánh giá |
| :--- | :--- | :--- |
| **1. First Action** | ☐ Bấm ngay nút `?` góc phải<br>☐ Click vào dòng chữ trên slide<br>☐ Rê chuột tìm kiếm xung quanh<br>☐ Khác: ....................................... | Mất khoảng ...... giây để tìm thấy chỗ bấm. |
| **2. Hesitation** | ☐ Khựng lúc tìm nút mở<br>☐ Khựng lúc đọc nội dung dài<br>☐ Khựng lúc tìm cách đóng pop-up<br>☐ Không khựng | Vị trí gây bối rối nhất: ................................................ |
| **3. Evidence Read / Ignored** | ☐ Đọc cả Định nghĩa + Ví dụ + Nguồn<br>☐ Chỉ đọc định nghĩa 1 câu rồi đóng ngay<br>☐ Đọc cả tab khác (LLM, RL)<br>☐ Bỏ qua ví dụ | Nội dung có đủ ngắn và hiểu nhanh không? ................................................................ |
| **4. Recovery / Exit Pop-up** | ☐ Bấm nút `✕` góc trên<br>☐ Bấm nút "Đóng" ở footer<br>☐ Bấm ra ngoài vùng mờ (backdrop)<br>☐ Nhấn phím `ESC` | Thao tác đóng có mượt mà không? ................................................................ |
| **5. Feedback & Choice** | ☐ Có thử bấm "Phản hồi tính năng"<br>☐ Không để ý nút phản hồi<br>☐ Ưu tiên chọn: Option ( A / B / C ) | Lý do chọn & Trade-off chấp nhận: ................................................................ |


1. 📊 Độ tin cậy AI (AI Confidence %) dựa vào đâu?
Độ tin cậy thể hiện mức độ chắc chắn của AI rằng định nghĩa & ví dụ được tạo ra là chính xác và đúng ngữ cảnh bài giảng. Con số này dựa trên 3 tiêu chí:

Căn cứ xác định	Giải thích chi tiết	Ví dụ cụ thể
1. Độ khớp với tài liệu nguồn (Groundedness / RAG)	Khái niệm và định nghĩa có tìm thấy trực tiếp trong Giáo trình / Slide chính thức mà giảng viên đã tải lên không? Nếu có nguồn trích dẫn rõ ràng $\rightarrow$ Điểm rất cao.	Định nghĩa Machine Learning trích nguyên văn từ Chương 2 Giáo trình $\rightarrow$ 95% Confidence.
2. Tính đơn nghĩa của thuật ngữ (Semantic Clarity)	Thuật ngữ có nghĩa chuyên môn duy nhất, rõ ràng hay là từ đa nghĩa dễ bị hiểu nhầm sang ngữ cảnh khác?	LLM (Large Language Model) là thuật ngữ chuẩn $\rightarrow$ 91%.
Ngược lại, từ như "Agent" (có thể là tác nhân AI, hoặc môi giới) $\rightarrow$ 75–80% (Cần ⚠️ cảnh báo).
3. Mức độ đầy đủ của ngữ cảnh slide	Slide có cung cấp đủ câu chữ, bối cảnh để AI suy luận không, hay chỉ là 1 từ khóa rời rạc khiến AI phải "đoán mò"?	Slide có giải thích sơ lược bối cảnh $\rightarrow$ Confidence cao; Slide chỉ có đúng 1 gạch đầu dòng $\rightarrow$ Confidence giảm.
2. 🎯 Mức độ ưu tiên (Priority: Cao / Trung bình / Thấp) dựa vào đâu?
Mức độ ưu tiên thể hiện mức độ cấp thiết cần có chú thích giải thích để học viên không bị mất mạch học. Con số này dựa trên 3 yếu tố sư phạm:

Căn cứ xác định	Tiêu chí phân loại	Mức độ ưu tiên
1. Vị trí & Tần suất trên Slide	- Nằm ở Tiêu đề lớn / Khái niệm trọng tâm của buổi học.
- Xuất hiện lặp lại nhiều lần trong suốt các slide.	🔴 Ưu tiên Cao
2. Độ phức tạp & Trừu tượng (Cognitive Difficulty)	- Thuật ngữ kỹ thuật mới, trừu tượng, người mới bắt đầu hầu như chắc chắn sẽ khựng lại nếu không được giải thích (VD: Reinforcement Learning, Backpropagation).	🔴 Ưu tiên Cao
3. Tính phụ thuộc kiến thức (Prerequisite)	- Là khái niệm nền tảng (nếu học viên không hiểu từ này thì sẽ không thể hiểu tiếp 5 slide phía sau).	🔴 Ưu tiên Cao
4. Thuật ngữ bổ trợ / Thứ yếu	- Các từ ngữ mang tính ngữ cảnh phụ, từ thông dụng mà đa số học viên đã biết (VD: Thuật toán, Dữ liệu đầu vào).	🟡 Ưu tiên Trung bình / Thấp
💡 Tóm tắt giá trị đối với Giảng viên:
Nhìn vào Mức độ ưu tiên: Giảng viên biết nên ưu tiên review từ nào trước để tiết kiệm thời gian chuẩn bị bài.
Nhìn vào Độ tin cậy AI:
Nếu $\ge 90%$: Giảng viên có thể duyệt nhanh trong 3 giây.
Nếu $< 85%$ (kèm ⚠️ Cảnh báo): Giảng viên biết AI đang "chưa chắc chắn", cần đọc kỹ và bấm nút "✏️ Chỉnh sửa nội dung" trước khi xuất bản cho học viên.