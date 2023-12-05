export function blurWebPage(lat, lon, location) {
    const slider = document.querySelector('.sliderPanelWrapper.hidden');
    const headerWrapper = document.getElementsByClassName('headerWrapper')[0];
    const navigationWrapper = document.getElementsByClassName('navigationWrapper')[0];
    const mainPanels = document.getElementsByClassName('mainPanels')[0];

    if (slider !== null) {
        console.log("bol som tu 1");
        headerWrapper.className = "headerWrapper" + " overlay";
        navigationWrapper.className = "navigationWrapper" + " overlay";
        mainPanels.className = "mainPanels" + " overlay";
    } else {
        console.log("bol som tu 2");
        headerWrapper.className = "headerWrapper";
        navigationWrapper.className = "navigationWrapper";
        mainPanels.className = "mainPanels";
    }

}