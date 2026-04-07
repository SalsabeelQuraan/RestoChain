import asyncio
import os
from playwright.async_api import async_playwright

async def verify_submit_page():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Load the file
        file_path = f"file://{os.path.abspath('submit.html')}"
        await page.goto(file_path)

        # Set input files
        file_input = page.locator("#file-upload")
        await file_input.set_input_files({
            "name": "medical_report.pdf",
            "mimeType": "application/pdf",
            "buffer": b"test content"
        })

        # Click submit
        submit_btn = page.locator("#submit-btn")
        await submit_btn.click()

        # Wait for completion
        await page.wait_for_timeout(3000)

        # Final screenshot
        await page.screenshot(path="verification/final_verification.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_submit_page())
