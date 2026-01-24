from playwright.sync_api import sync_playwright, expect
import time

def verify_ux():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")

            # 1. Verify Background aria-hidden
            # The background div is the first div in the main container usually, but let's find it by class or attributes
            # We look for the one with animate-pulse which is likely the one
            background = page.locator("div.animate-pulse[aria-hidden='true']")
            expect(background).to_be_visible()
            print("Verified: Background has aria-hidden='true'")

            # 2. Click Generate Attestation to see the signed manifest
            # Wait for the button to be enabled/visible
            generate_btn = page.get_by_role("button", name="Generate Epoch 1 Attestation")
            generate_btn.click()

            # Wait for generation to complete (it has a timeout in the code)
            # The code shows "Querying Quantum Core..." then finishes.
            # We look for the pre block
            pre_block = page.locator("pre[aria-label='Signed Manifest JSON']")
            expect(pre_block).to_be_visible(timeout=10000)

            # Check tabIndex
            tab_index = pre_block.get_attribute("tabindex")
            if tab_index == "0":
                print("Verified: Signed Manifest has tabIndex='0'")
            else:
                print(f"Failed: Signed Manifest tabIndex is {tab_index}")

            # Focus it to check ring
            pre_block.focus()
            page.screenshot(path="verification_manifest_focus.png")
            print("Screenshot taken: verification_manifest_focus.png")

            # 3. Verify Verification Logs in 'Verification' tab
            verification_tab = page.get_by_role("tab", name="Verification")
            verification_tab.click()

            logs_div = page.get_by_role("log", name="Verification Logs")
            expect(logs_div).to_be_visible()

            # Check tabIndex
            log_tab_index = logs_div.get_attribute("tabindex")
            if log_tab_index == "0":
                print("Verified: Verification Logs has tabIndex='0'")
            else:
                print(f"Failed: Verification Logs tabIndex is {log_tab_index}")

            # Focus it
            logs_div.focus()
            page.screenshot(path="verification_logs_focus.png")
            print("Screenshot taken: verification_logs_focus.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_ux()
