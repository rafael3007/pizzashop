import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('rafael.brito.1422@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu email!',
  )

  expect(toast).toBeVisible()

  // page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@gmail.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Não foi possível realizar o login. Tente novamente.',
  )

  expect(toast).toBeVisible()

  // page.waitForTimeout(2000)
})

test('Navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

  // page.waitForTimeout(2000)
})
