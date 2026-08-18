document.addEventListener("DOMContentLoaded", () => {
  const option = document.body.dataset.option;
  const $ = (selector) => document.querySelector(selector);
  const show = (selector) => $(selector)?.classList.remove("hidden");
  const hide = (selector) => $(selector)?.classList.add("hidden");

  function toast(message) {
    const node = $("#toast");
    if (!node) return;
    node.textContent = message;
    node.classList.remove("hidden");
    window.setTimeout(() => node.classList.add("hidden"), 2800);
  }

  if (option === "a") {
    $("[data-action='a-start']")?.addEventListener("click", () => {
      hide("#a-context");
      show("#a-diagnostic");
    });
    $("[data-action='a-diagnose']")?.addEventListener("click", () => {
      hide("#a-diagnostic");
      show("#a-result");
    });
    $("[data-action='a-return']")?.addEventListener("click", () => {
      hide("#a-result");
      show("#a-context");
      toast("Đã quay lại đúng slide ban đầu.");
    });
    $("[data-action='a-save']")?.addEventListener("click", () => toast("Đã đánh dấu để xem sau. Bạn vẫn có thể tiếp tục bài."));
    $("[data-action='a-retry']")?.addEventListener("click", () => {
      hide("#a-result");
      show("#a-diagnostic");
    });
  }

  if (option === "b") {
    $("[data-action='b-open']")?.addEventListener("click", () => {
      show("#b-tooltip");
      toast("Tooltip mở theo yêu cầu của bạn.");
    });
    $("[data-action='b-close']")?.addEventListener("click", () => hide("#b-tooltip"));
    $("[data-action='b-save']")?.addEventListener("click", () => toast("Đã lưu thuật ngữ để xem sau."));
  }

  if (option === "c") {
    $("[data-action='c-open']")?.addEventListener("click", () => {
      hide("#c-context");
      show("#c-preview");
    });
    $("[data-action='c-send']")?.addEventListener("click", () => {
      hide("#c-preview");
      show("#c-sent");
    });
    $("[data-action='c-cancel']")?.addEventListener("click", () => {
      hide("#c-preview");
      show("#c-context");
    });
    $("[data-action='c-return']")?.addEventListener("click", () => {
      hide("#c-sent");
      show("#c-context");
      toast("Đã quay lại slide. Câu hỏi đang chờ phản hồi.");
    });
  }
});
