import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    abs_path = os.path.abspath('index.html')
    url = f"file://{abs_path}"
    page.goto(url, wait_until="domcontentloaded")
    page.wait_for_timeout(2000)

    # 1. Search for a real album (After Hours)
    page.goto(f"file://{os.path.abspath('explore.html')}", wait_until="domcontentloaded")
    page.fill('#search-input', 'After Hours')
    page.click('#search-btn')
    page.wait_for_timeout(1000)

    # 2. Open it and check the tracklist
    page.click('text=After Hours')
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/v3_real_tracklist.png")

    # 3. Open "Blinding Lights" and check full lyrics
    page.click('text=Blinding Lights')
    page.wait_for_timeout(1500)
    page.screenshot(path="/home/jules/verification/screenshots/v3_full_lyrics.png")

    # 4. Check "Alone Again" interpretation
    page.click('#back-to-album')
    page.click('text=Alone Again')
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/v3_song_interpretation.png")

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
