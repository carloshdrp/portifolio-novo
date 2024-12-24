export function initializeTypingEffect() {
  const commandWrapper = document.querySelector(".typing-command-wrapper");
  const commandCursor = document.querySelector(".command-cursor");
  const codeContent = document.querySelector(".code-content");
  const terminalPrompt = document.querySelector(".terminal-prompt");

  setTimeout(() => {
    commandWrapper?.classList.add("show");

    setTimeout(() => {
      commandWrapper?.classList.add("typing-active");

      setTimeout(() => {
        commandCursor?.classList.add("hide");
        codeContent?.classList.add("show");

        setTimeout(() => {
          terminalPrompt?.classList.add("show");
        }, 300);
      }, 1500);
    }, 100);
  }, 1000);
}
