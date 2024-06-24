import type { Page } from '@playwright/test';
import { generateTestEmail } from './helpers';

export class Constants {
  public testEmail: string;

  constructor() {
    this.execute();
  }

  async execute() {
    this.testEmail = generateTestEmail();
  }
}