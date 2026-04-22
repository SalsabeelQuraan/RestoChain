import os
import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        path = os.path.abspath("foodsafe.html")
        await page.goto(f"file://{path}")

        # Capture dark mode (initial state)
        await page.screenshot(path="verification/screenshots/final_dark.png")

        # Toggle to light mode
        await page.get_by_role("button", name="Toggle dark mode").click()
        await page.wait_for_timeout(500) # Wait for transition

        # Capture light mode
        await page.screenshot(path="verification/screenshots/final_light.png")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
