document.addEventListener("DOMContentLoaded", () => {
  const option = document.body.dataset.option;

  const all = (selector) => Array.from(document.querySelectorAll(selector));
  const on = (action, handler) => {
    all("[data-action='" + action + "']").forEach((node) => node.addEventListener("click", handler));
  };
  const openModal = (selector) => document.querySelector(selector)?.classList.add("active");
  const closeModal = (selector) => document.querySelector(selector)?.classList.remove("active");
  const closeAll = () => all(".modal-backdrop").forEach((node) => node.classList.remove("active"));
  const selectionAction = document.querySelector("#selectionAction");
  let selectedTerm = "";

  function toast(message) {
    const node = document.querySelector("#toast");
    if (!node) return;
    node.textContent = message;
    node.classList.add("show");
    node.classList.remove("hidden");
    window.setTimeout(() => {
      node.classList.remove("show");
      node.classList.add("hidden");
    }, 2600);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });

  all(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) backdrop.classList.remove("active");
    });
  });

  function hideSelectionAction() {
    selectionAction?.classList.add("hidden");
  }

  function showSelectionAction() {
    if (option !== "c" || !selectionAction) return;
    const selection = window.getSelection();
    const rawText = selection?.toString().trim().replace(/\s+/g, " ") || "";
    const slideBody = document.querySelector(".slide-body, .lesson-slide");
    if (!selection || !slideBody || !rawText || rawText.length < 2 || rawText.length > 80 || selection.rangeCount === 0) {
      hideSelectionAction();
      return;
    }

    const range = selection.getRangeAt(0);
    const anchor = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
      ? range.commonAncestorContainer.parentElement
      : range.commonAncestorContainer;
    if (!slideBody.contains(anchor)) {
      hideSelectionAction();
      return;
    }

    const keyword = all(".concept-keyword").find((node) => {
      try {
        return range.intersectsNode(node);
      } catch {
        return false;
      }
    });
    const text = keyword?.textContent.trim() || rawText;
    selectedTerm = text;
    selectionAction.setAttribute("aria-label", `Hỏi người hỗ trợ về ${text}`);
    const rect = range.getBoundingClientRect();
    const width = 36;
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
    const top = rect.bottom + 10 < window.innerHeight - 54 ? rect.bottom + 10 : Math.max(12, rect.top - 54);
    selectionAction.style.left = `${left}px`;
    selectionAction.style.top = `${top}px`;
    selectionAction.classList.remove("hidden");
  }

  document.addEventListener("mouseup", showSelectionAction);
  document.addEventListener("keyup", (event) => {
    if (event.key === "Shift" || event.key === "ArrowLeft" || event.key === "ArrowRight") showSelectionAction();
  });
  document.addEventListener("mousedown", (event) => {
    if (!selectionAction?.contains(event.target)) hideSelectionAction();
  });

  if (option === "a") {
    on("a-start", () => openModal("#aDiagnosticModal"));
    on("a-diagnose", () => {
      closeModal("#aDiagnosticModal");
      openModal("#aResultModal");
    });
    on("a-close", () => {
      closeModal("#aDiagnosticModal");
      toast("Đã quay lại slide ban đầu.");
    });
    on("a-return", () => {
      closeModal("#aResultModal");
      toast("Đã quay lại đúng slide ban đầu.");
    });
    on("a-save", () => toast("Đã đánh dấu để xem sau. Bạn vẫn có thể tiếp tục bài."));
  }

  if (option === "b") {
    on("b-open", () => {
      const tooltip = document.querySelector("#b-tooltip");
      tooltip?.classList.remove("hidden");
      toast("Tooltip mở theo yêu cầu của bạn.");
    });
    on("b-close", () => document.querySelector("#b-tooltip")?.classList.add("hidden"));
    on("b-save", () => toast("Đã lưu thuật ngữ để xem sau."));
  }

  if (option === "c") {
    let pdfPages = [];
    let currentPdfPage = 0;

    const escapeHtml = (value) => String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const renderPdfPage = (pageIndex) => {
      if (!pdfPages.length) return;
      currentPdfPage = Math.max(0, Math.min(pageIndex, pdfPages.length - 1));
      const page = pdfPages[currentPdfPage];
      const image = document.querySelector("#pdfSlideImage");
      const textLayer = document.querySelector("#pdfTextLayer");
      const status = document.querySelector("#pdfLoadStatus");
      const number = document.querySelector("#slideNumber");
      const total = document.querySelector("#slideTotal");
      const previous = document.querySelector("#slidePrev");
      const next = document.querySelector("#slideNext");

      if (image) {
        image.src = page.image;
        image.alt = `Slide ${currentPdfPage + 1} trong bài AI & LLM Foundation`;
      }
      if (textLayer) {
        textLayer.innerHTML = page.words.map((word) => {
          const left = (word.x / page.width) * 100;
          const top = (word.y / page.height) * 100;
          const width = (word.w / page.width) * 100;
          const height = (word.h / page.height) * 100;
          const fontSize = Math.max(0.8, (word.size / page.width) * 100);
          return `<span class="pdf-word" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%;font-size:${fontSize}cqw" aria-label="${escapeHtml(word.text)}">${escapeHtml(word.text)}</span>`;
        }).join("");
      }
      if (status) status.classList.add("hidden");
      if (number) {
        number.max = String(pdfPages.length);
        number.value = String(currentPdfPage + 1);
      }
      if (total) total.textContent = String(pdfPages.length);
      if (previous) previous.disabled = currentPdfPage === 0;
      if (next) next.disabled = currentPdfPage === pdfPages.length - 1;
      hideSelectionAction();
      window.getSelection()?.removeAllRanges();
    };

    const loadPdfDeck = async () => {
      const status = document.querySelector("#pdfLoadStatus");
      try {
        let payload = window.LLM_FOUNDATION_PAGES;
        if (!payload?.pages?.length) {
          const response = await fetch("assets/llm-foundation/pages.json");
          if (!response.ok) throw new Error(`PDF metadata request failed: ${response.status}`);
          payload = await response.json();
        }
        pdfPages = payload.pages || [];
        renderPdfPage(0);
      } catch (error) {
        if (status) {
          status.textContent = "Không thể tải slide PDF. Vui lòng mở prototype qua local server.";
          status.classList.remove("hidden");
        }
        console.error(error);
      }
    };

    on("reader-prev", () => renderPdfPage(currentPdfPage - 1));
    on("reader-next", () => renderPdfPage(currentPdfPage + 1));
    document.querySelector("#slideNumber")?.addEventListener("change", (event) => {
      renderPdfPage(Number(event.target.value) - 1);
    });
    loadPdfDeck();

    const showReaderToast = (message) => toast(message);
    on("reader-back", () => showReaderToast("Đã quay lại danh sách bài học."));
    on("reader-close-sidebar", () => document.querySelector("#readerSidebar")?.classList.toggle("collapsed"));
    on("reader-notes", () => document.querySelector("#notesCard")?.classList.toggle("hidden"));
    on("reader-useful", () => showReaderToast("Cảm ơn bạn đã đánh giá bài học."));
    on("reader-not-useful", () => showReaderToast("Cảm ơn bạn đã gửi phản hồi."));
    on("reader-report", () => showReaderToast("Đã ghi nhận báo lỗi cho slide này."));
    on("reader-prev-lesson", () => showReaderToast("Đây là bài đầu tiên trong prototype."));
    on("reader-next-lesson", () => showReaderToast("Bài tiếp theo chưa có trong prototype."));
    on("reader-undo", () => showReaderToast("Không có chú thích nào để hoàn tác."));
    on("reader-clear", () => showReaderToast("Đã xoá chú thích trên slide."));
    on("reader-fullscreen", () => document.querySelector(".reader-app")?.classList.toggle("reader-fullscreen"));

    let readerZoom = 100;
    const updateReaderZoom = () => {
      const zoomValue = document.querySelector("#zoomValue");
      const slide = document.querySelector("#lessonSlide");
      if (zoomValue) zoomValue.textContent = `${readerZoom}%`;
      if (slide) slide.style.transform = `scale(${readerZoom / 100})`;
    };
    on("reader-zoom-in", () => { readerZoom = Math.min(130, readerZoom + 10); updateReaderZoom(); });
    on("reader-zoom-out", () => { readerZoom = Math.max(80, readerZoom - 10); updateReaderZoom(); });

    on("c-open", () => openModal("#cPreviewModal"));
    on("c-selection-help", () => {
      const question = document.querySelector("#c-question");
      if (question && selectedTerm) {
        question.value = `Mình chưa hiểu “${selectedTerm}” trong slide ${currentPdfPage + 1}. Khái niệm này liên quan thế nào đến các phần còn lại?`;
      }
      hideSelectionAction();
      openModal("#cPreviewModal");
    });
    on("c-send", () => {
      closeModal("#cPreviewModal");
      openModal("#cSentModal");
    });
    on("c-cancel", () => {
      closeModal("#cPreviewModal");
      hideSelectionAction();
      window.getSelection()?.removeAllRanges();
    });
    on("c-return", () => {
      closeModal("#cSentModal");
      toast("Đã quay lại slide. Câu hỏi đang chờ phản hồi.");
    });
  }
});
