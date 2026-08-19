document.addEventListener("DOMContentLoaded", () => {
  const option = document.body.dataset.option;

  const all = (selector) => Array.from(document.querySelectorAll(selector));
  const on = (action, handler) => {
    all("[data-action='" + action + "']").forEach((node) => node.addEventListener("click", handler));
  };
  const openModal = (selector) => document.querySelector(selector)?.classList.add("active");
  const closeModal = (selector) => document.querySelector(selector)?.classList.remove("active");
  const closeAll = () => all(".modal-backdrop").forEach((node) => node.classList.remove("active"));

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
    on("c-open", () => openModal("#cPreviewModal"));
    on("c-send", () => {
      closeModal("#cPreviewModal");
      openModal("#cSentModal");
    });
    on("c-cancel", () => closeModal("#cPreviewModal"));
    on("c-return", () => {
      closeModal("#cSentModal");
      toast("Đã quay lại slide. Câu hỏi đang chờ phản hồi.");
    });
  }
});
