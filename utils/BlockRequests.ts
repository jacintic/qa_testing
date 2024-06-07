import type { Page } from '@playwright/test';

export class BlockRequests {
  constructor(public readonly page: Page) {
    this.execute();
  }

  async execute() {
    await this.page.route('**/pagead2.googlesyndication.com/**', async route => {
      await route.abort();
    });
  }
}