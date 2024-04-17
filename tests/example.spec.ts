import { test, expect } from '@playwright/test';
import { debug, log } from 'console';
test('get started link', async ({ page }) => {
  await page.goto('https://muasamcong.mpi.gov.vn/web/guest/contractor-selection?p_p_mode=view&_egpportalcontractorselectionv2_WAR_egpportalcontractorselectionv2_render=detail-v2&stepCode=notify-contractor-step-1-tbmt&p_p_lifecycle=0&bidOpenId=undefined&bidPreNotifyResultId=undefined&inputResultId=undefined&type=es-notify-contractor&bidPreOpenId=undefined&techReqId=undefined&pno=undefined&p_p_state=normal&caseKHKQ=undefined&notifyNo=IB2400073354&p_p_id=egpportalcontractorselectionv2_WAR_egpportalcontractorselectionv2&planNo=PL2400027713&bidMode=1_MTHS&processApply=LDT&notifyId=a9447b33-1a6d-4e0d-bb2a-b1139b219a4e&step=tbmt&id=a9447b33-1a6d-4e0d-bb2a-b1139b219a4e&isInternet=1');
  await page.waitForLoadState();
  await Promise.all([
    page.waitForResponse(resp => resp.url().includes('/services/lcnt_tbmt_ttc_ldt') && resp.status() === 200),
  ]);
  const infoGeneral = await page.locator("#info-general");
  const tbmt = await infoGeneral.locator('.card.border--none').first()
    .locator("div").nth(1)
    .locator("div").nth(0)
    .locator("div").nth(1)
    .innerText();
    console.log("MA THONG BAO CQQ GÌ ĐÓ:", tbmt);
  const publishDate = await infoGeneral.locator('.card.border--none').first()
    .locator("div").nth(1)
    .locator(">div").nth(1)
    .locator(">div").nth(1)
    .innerText();
  log("NGÀY PUBLISH:", publishDate);
  // Expects page to have a heading with the name of Installation.
});
