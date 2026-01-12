
from playwright.sync_api import sync_playwright, expect

def verify_accessibility_log(page):
    print("Navigating to homepage...")
    page.goto("http://localhost:3000")

    print("Waiting for page load...")
    # Wait for the header to be visible
    expect(page.get_by_role("heading", name="ValorAiEngine+")).to_be_visible()

    # Click on the "Verification" tab to reveal the log
    # Note: Memory says the tab might be obscured, so using force=True
    print("Clicking Verification tab...")
    page.get_by_role("tab", name="Verification").click(force=True)

    # Wait for the log container to be visible
    # We look for the container with the aria-label we added
    log_container = page.get_by_label("Verification logs")
    expect(log_container).to_be_visible()

    # Verify the attributes we added
    print("Verifying ARIA attributes...")
    role = log_container.get_attribute("role")
    aria_live = log_container.get_attribute("aria-live")
    tab_index = log_container.get_attribute("tabindex")

    assert role == "log", f"Expected role='log', got '{role}'"
    assert aria_live == "polite", f"Expected aria-live='polite', got '{aria_live}'"
    assert tab_index == "0", f"Expected tabindex='0', got '{tab_index}'"

    print("ARIA attributes verified.")

    # Test focus state
    print("Testing focus...")
    log_container.focus()

    # Take a screenshot
    print("Taking screenshot...")
    page.screenshot(path="verification/verification_log.png")
    print("Verification complete.")

if __name__ == "__main__":
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_accessibility_log(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise
        finally:
            browser.close()
