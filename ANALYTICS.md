# Google Tag Manager and GA4

The website loads container **GTM-WNMJ2GZM** after analytics consent. GA4 **G-WN5P40SDHF** is configured inside that container. The site no longer loads gtag.js directly or sends GA4 config/event commands. Its gtag function is used only to queue consent commands before GTM loads, following Google's basic consent mode example.

## Finish the setup in Google

The source changes do not publish your GTM workspace. Import the prepared configuration before deploying the website migration:

1. Open container **GTM-WNMJ2GZM**, then **Admin → Import Container**.
2. Select **analytics/GTM-WNMJ2GZM.json** and choose your workspace.
3. Choose **Merge**, review the preview, and import. The file contains two tags, one custom event trigger, and four data-layer variables. It contains no advertising tags. Avoid keeping another GA4 configuration or page-view tag for the same stream.
4. Inspect **Immunasina - Google tag**: ID **G-WN5P40SDHF**; configuration parameters **send_page_view = false**, **allow_google_signals = false**, **allow_ad_personalization_signals = false**. It is a setup tag, once per page, with no independent trigger.
5. Inspect **Immunasina - GA4 page view**: event **page_view**, measurement ID **G-WN5P40SDHF**; trigger **immunasina_page_view**. Its tag sequencing runs **Immunasina - Google tag** first and stops on setup failure. Parameters page_location, page_title, page_referrer, and language come from the matching data-layer variables.
6. In GA4: **Admin → Data streams → Immunasina Website → Enhanced measurement → settings → Page views → Show advanced settings**, turn off **Page changes based on browser history events**. Otherwise language changes can be counted twice.
7. Submit and publish the GTM workspace, then deploy the website changes. The old website does not load this container, so publishing it first will not duplicate the old direct integration.
8. Use GTM Preview/Tag Assistant and GA4 DebugView or Realtime to complete the checks below on the deployed site.

The JSON is prepared and checked locally; import and publication have not been validated in your Google account. If import reports a schema issue, the tag and trigger settings above provide the equivalent manual setup.

## Consent and environments

- Tracking runs only in production builds on immunasina.com or www.immunasina.com. Localhost and preview domains never load GTM.
- The EN/SR banner preserves existing choices. Before acceptance no GTM/GA4 scripts or events are sent.
- Consent defaults and the analytics grant are queued before the gtm.js startup event. Advertising consent remains denied. Native Google tags use their built-in consent checks; NOT_NEEDED in the import means no additional checks, not that consent is ignored.
- Cookie settings in the footer reopens the banner. Withdrawal disables GA4, clears GA cookies, and reloads to unload the container and its listeners.
- No unconditional noscript iframe is installed, since it would bypass this consent gate.
- Adding advertising tags later requires corresponding consent controls and tag checks; the existing banner grants analytics only.

## Application event contract

After consent and localized metadata updates, the website pushes immunasina_page_view with page_location, page_title, page_referrer, and language. It emits one event for the current page and one per subsequent EN/SR or Back/Forward navigation. Rerenders and section anchors do not emit extra page views. Query strings and fragments are omitted from these fields; this does not control other events enabled in GA4.

VITE_GTM_CONTAINER_ID overrides the container ID at build time. VITE_GA_MEASUREMENT_ID controls the GA4 opt-out flag only; if you change it, also update the measurement IDs in your GTM tags.

## Verification after deployment

1. Fresh session: no gtm.js, gtag.js, or analytics collection requests before acceptance or after rejection.
2. Accept: gtm.js loads once with GTM-WNMJ2GZM. In Preview, the Google setup tag precedes the first GA4 page-view tag.
3. Confirm analytics_storage is granted and all three advertising consent types remain denied.
4. Switch /sr → /en, then Back: each navigation creates one page_view with the matching URL and localized title. Anchor clicks create none.
5. Reject via Cookie settings: page reloads; no more tracking requests. Reload again to confirm the rejection persists.

References:
- https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic
- https://developers.google.com/tag-platform/tag-manager/datalayer
- https://developers.google.com/analytics/devguides/collection/ga4/views
