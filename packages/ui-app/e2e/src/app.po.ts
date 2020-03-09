import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHomeAppText(): Promise<string> {
    return element(by.css('app-root app-home .row.name')).getText() as Promise<string>;
  }
}
