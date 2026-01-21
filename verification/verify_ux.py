
from playwright.sync_api import sync_playwright

def verify_terminal_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        page.goto("http://localhost:3000")

        # Wait for the main content to load
        page.wait_for_selector("text=ValorAiEngine+")

        # Click the "Verification" tab to reveal the terminal
        page.get_by_role("tab", name="Verification").click()

        # Locate the terminal container
        terminal = page.get_by_role("log", name="Verification Logs")

        # Verify accessibility attributes
        log_role = terminal.get_attribute("role")
        aria_live = terminal.get_attribute("aria-live")
        tab_index = terminal.get_attribute("tabindex")
        aria_label = terminal.get_attribute("aria-label")

        print(f"Role: {log_role}")
        print(f"Aria-Live: {aria_live}")
        print(f"TabIndex: {tab_index}")
        print(f"Aria-Label: {aria_label}")

        if log_role == "log" and aria_live == "polite" and tab_index == "0" and aria_label == "Verification Logs":
            print("SUCCESS: Terminal has correct accessibility attributes")
        else:
            print("FAILURE: Terminal missing attributes")

        # Focus the terminal to verify focus ring styles (screenshot will capture this)
        terminal.focus()

        # Take a screenshot
        page.screenshot(path="verification/terminal_access.png")

        browser.close()

if __name__ == "__main__":
    verify_terminal_accessibility()
