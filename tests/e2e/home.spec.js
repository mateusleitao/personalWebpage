import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const responsiveViewports = [
  { width: 320, height: 700 },
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1280, height: 720 },
]

for (const viewport of responsiveViewports) {
  test(`has no horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    const consoleErrors = []
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    await page.setViewportSize(viewport)
    await page.goto('/')

    const pageWidth = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }))

    expect(pageWidth.scrollWidth).toBeLessThanOrEqual(pageWidth.clientWidth)
    expect(consoleErrors).toEqual([])
  })
}

test('uses the agreed content-first mobile composition', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const introduction = await page
    .getByRole('heading', { level: 1, name: "Hi, I'm Lange" })
    .boundingBox()
  const portrait = await page
    .getByRole('img', { name: 'Black-and-white portrait of Lange' })
    .boundingBox()

  expect(introduction).not.toBeNull()
  expect(portrait).not.toBeNull()
  expect(portrait.y).toBeGreaterThan(introduction.y)
  expect(portrait.width).toBeGreaterThan(300)
  expect(portrait.width / portrait.height).toBeCloseTo(4 / 3, 1)
})

test('gives social links keyboard focus and a useful target size', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.keyboard.press('Tab')

  const firstLink = page.getByRole('link', { name: 'GitHub profile' })
  const target = await firstLink.boundingBox()
  const focusStyle = await firstLink.evaluate((element) => {
    const style = getComputedStyle(element)
    return {
      outlineStyle: style.outlineStyle,
      outlineWidth: Number.parseFloat(style.outlineWidth),
    }
  })

  await expect(firstLink).toBeFocused()
  expect(target.width).toBeGreaterThanOrEqual(56)
  expect(target.height).toBeGreaterThanOrEqual(56)
  expect(focusStyle.outlineStyle).toBe('solid')
  expect(focusStyle.outlineWidth).toBeGreaterThanOrEqual(3)
})

for (const viewport of [
  { width: 390, height: 844 },
  { width: 1280, height: 720 },
]) {
  test(`has no automatically detectable accessibility violations at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)
    await page.goto('/')

    const results = await new AxeBuilder({ page }).analyze()

    expect(results.violations).toEqual([])
  })
}
