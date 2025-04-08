import { expect, test } from '@playwright/test'

test('sign up Successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John')
  await page.getByLabel('Seu e-mail').fill('test@gmail.com')
  await page.getByLabel('Seu celular').fill('77988257032')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()

  // page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
  await page.getByLabel('Seu nome').fill('John')
  await page.getByLabel('Seu e-mail').fill('test@gmail.com')
  await page.getByLabel('Seu celular').fill('77988257032')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante!')

  expect(toast).toBeVisible()

  // page.waitForTimeout(2000)
})
test('Navigate to sign-in', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  // page.waitForTimeout(2000)
})
