from playwright.sync_api import sync_playwright
import time
import sys

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            # Wait for server to be ready
            for i in range(30):
                try:
                    page.goto("http://localhost:3000")
                    break
                except:
                    time.sleep(1)

            page.wait_for_selector("main", timeout=10000)

            # Check for main role
            main_locator = page.locator("role=main")
            count = main_locator.count()

            if count == 1:
                print("SUCCESS: Found exactly one element with role='main'")
            else:
                print(f"FAILURE: Found {count} elements with role='main'")
                # Debug info
                print(page.content())
                sys.exit(1)

            page.screenshot(path="/home/jules/verification/main_landmark.png")
            print("Screenshot saved to /home/jules/verification/main_landmark.png")

        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run()
