import createDom from "./domHandler";

// The module is responsible for extracting and displaying location data
const WeatherDataModule = (() => {
  function getIcon(code, isDay) {
    switch (code) {
      case 1000:
        if (isDay === 1) {
          return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M37,13.11A19.52,19.52,0,0,0,15.06,41.76a19,19,0,0,0,11.77,9,19.64,19.64,0,0,0,5.18.7,19.4,19.4,0,0,0,9.75-2.64,19.08,19.08,0,0,0,9-11.78A19.5,19.5,0,0,0,37,13.11ZM48.79,36.48a17.11,17.11,0,0,1-8,10.57,17.45,17.45,0,0,1-13.41,1.74,17.11,17.11,0,0,1-10.57-8A17.55,17.55,0,0,1,31.9,14.42a17.17,17.17,0,0,1,4.57.62A17.51,17.51,0,0,1,48.79,36.48Z"/><path d="M32,7.8a1,1,0,0,0,1-1V3.93a1,1,0,1,0-2,0V6.8A1,1,0,0,0,32,7.8Z"/><path d="M44.06,11.08a1.06,1.06,0,0,0,.45.11,1,1,0,0,0,.9-.55,27.84,27.84,0,0,1,1.47-2.45,1,1,0,0,0-.31-1.38,1,1,0,0,0-1.38.3,30.23,30.23,0,0,0-1.57,2.63A1,1,0,0,0,44.06,11.08Z"/><path d="M53.82,20.32a1,1,0,0,0,.55-.17s.52-.34,2.29-1.31a1,1,0,1,0-1-1.75c-1.84,1-2.38,1.36-2.44,1.39a1,1,0,0,0,.56,1.84Z"/><path d="M60.07,31H57.2a1,1,0,0,0,0,2h2.87a1,1,0,0,0,0-2Z"/><path d="M56.72,45.19c-1.83-1.16-2.34-1.5-2.35-1.51a1,1,0,1,0-1.11,1.67s.51.34,2.38,1.53a1.09,1.09,0,0,0,.54.16,1,1,0,0,0,.54-1.85Z"/><path d="M45.35,53.26a1,1,0,1,0-1.67,1.11s.35.52,1.51,2.35a1,1,0,0,0,.85.46.94.94,0,0,0,.53-.16,1,1,0,0,0,.31-1.38C45.69,53.77,45.35,53.26,45.35,53.26Z"/><path d="M32,56.2a1,1,0,0,0-1,1v2.87a1,1,0,0,0,2,0V57.2A1,1,0,0,0,32,56.2Z"/><path d="M18.48,53.26c0,.06-.39.6-1.39,2.44a1,1,0,1,0,1.75,1c1-1.77,1.31-2.29,1.31-2.29a1,1,0,0,0-1.67-1.11Z"/><path d="M9.74,43.62a30.23,30.23,0,0,0-2.63,1.57A1,1,0,0,0,7.65,47a1.09,1.09,0,0,0,.54-.16c1.76-1.13,2.44-1.47,2.44-1.47a1,1,0,0,0-.89-1.79Z"/><path d="M7.8,32a1,1,0,0,0-1-1H3.93a1,1,0,1,0,0,2H6.8A1,1,0,0,0,7.8,32Z"/><path d="M7.17,18.84c1.88,1,2.57,1.37,2.57,1.37a1,1,0,0,0,.89-1.79s-.68-.34-2.5-1.33a1,1,0,1,0-1,1.75Z"/><path d="M18.42,10.63a1,1,0,0,0,.9.56,1,1,0,0,0,.89-1.45s-.34-.69-1.37-2.57a1,1,0,1,0-1.75,1C18.08,10,18.42,10.62,18.42,10.63Z"/></svg>`;
        }
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M61.4326,33.3882a.9987.9987,0,0,0-1.16.1909,19.497,19.497,0,0,1-13.9512,5.8491h-.0234A19.5995,19.5995,0,0,1,35.0049,3.81a1,1,0,0,0-.4824-1.813,1.2507,1.2507,0,0,0-.4141-.0142A28.1186,28.1186,0,0,0,10.9712,46.0935a10.1276,10.1276,0,0,0-3.4038,6.0872c-.06.3877-.0986.749-.1172,1.0966a8.2092,8.2092,0,0,0-5.4346,7.7413,1,1,0,0,0,1,.999h.001l29-.0327a1,1,0,0,0,.999-1.0015,8.207,8.207,0,0,0-.4869-2.73c.54.0311,1.0771.0488,1.608.0488h.0352a28.3267,28.3267,0,0,0,27.8008-23.87A.999.999,0,0,0,61.4326,33.3882ZM4.0947,60.0166a6.2108,6.2108,0,0,1,4.6172-5.0352,1,1,0,0,0,.7549-.97.7283.7283,0,0,0-.03-.25,8.4488,8.4488,0,0,1,.1065-1.2729,8.0975,8.0975,0,0,1,3.36-5.3633,7.965,7.965,0,0,1,4.5947-1.4541h.01a8.0049,8.0049,0,0,1,7.13,4.3359,7.5061,7.5061,0,0,1,.8291,2.4546,9.4282,9.4282,0,0,1,.1143,1.2036,1.6892,1.6892,0,0,0-.0342.3252,1,1,0,0,0,.7558.97A6.1894,6.1894,0,0,1,30.04,57.6479a6.0983,6.0983,0,0,1,.8946,2.3379ZM34.17,56.3022h-.0332a26.4958,26.4958,0,0,1-2.6875-.1391c-.099-.137-.2183-.2548-.3251-.3847-.1136-.1381-.2233-.2784-.3452-.4083-.1808-.1925-.3764-.3669-.5744-.54-.1261-.1106-.2457-.2276-.3784-.33a8.1443,8.1443,0,0,0-.7175-.48c-.1216-.0749-.235-.1609-.3606-.2295a8.264,8.264,0,0,0-1.1855-.5354c-.02-.3423-.06-.7061-.12-1.103a9.4535,9.4535,0,0,0-1.044-3.0914,9.9837,9.9837,0,0,0-8.8906-5.3891h-.0117a10.1059,10.1059,0,0,0-1.165.0754c-.0672.0079-.1345.0141-.2014.0233a9.9663,9.9663,0,0,0-1.0927.2133c-.0664.0168-.1316.036-.1975.0542a9.8777,9.8777,0,0,0-1.09.3632l-.0224.01a9.9931,9.9931,0,0,0-1.0367.5012c-.0319.0176-.0663.0295-.0981.0475A26.1549,26.1549,0,0,1,31.4775,4.1162a21.6,21.6,0,0,0,14.82,37.312h.0253a21.45,21.45,0,0,0,13.06-4.4057A26.3516,26.3516,0,0,1,34.17,56.3022Z"/></svg>`;

      case 1003:
        if (isDay === 1) {
          return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M39,12.58a1,1,0,0,0,1-1V9.44a1,1,0,1,0-2,0v2.14A1,1,0,0,0,39,12.58Z"/><path d="M47.92,15a.91.91,0,0,0,.45.11,1,1,0,0,0,.89-.55s.26-.5,1.09-1.81a1,1,0,1,0-1.69-1.07,21.44,21.44,0,0,0-1.18,2A1,1,0,0,0,47.92,15Z"/><path d="M55.33,21.94a1,1,0,0,0,.54-.17s.4-.25,1.7-1a1,1,0,1,0-1-1.76c-1.39.76-1.8,1-1.84,1.06a1,1,0,0,0,.56,1.83Z"/><path d="M60,29.42H57.85a1,1,0,0,0,0,2H60a1,1,0,0,0,0-2Z"/><path d="M57.63,40.07l-1.75-1.13a1,1,0,1,0-1.11,1.67l1.79,1.15a1,1,0,0,0,1.38-.31A1,1,0,0,0,57.63,40.07Z"/><path d="M20.33,20.81c1.42.77,1.93,1,1.93,1a1.06,1.06,0,0,0,.45.11,1,1,0,0,0,.89-.55A1,1,0,0,0,23.16,20s-.52-.25-1.87-1a1,1,0,0,0-1.36.4A1,1,0,0,0,20.33,20.81Z"/><path d="M28.64,14.56a1,1,0,0,0,.9.55A1,1,0,0,0,30,15a1,1,0,0,0,.45-1.34s-.26-.52-1-1.93a1,1,0,1,0-1.75,1C28.38,14,28.63,14.55,28.64,14.56Z"/><path d="M50.36,42.88a10.65,10.65,0,0,0-.74-2.19,14.29,14.29,0,0,0,3.63-6.46A14.58,14.58,0,0,0,51.8,23a14.81,14.81,0,0,0-26.9,2.64A14.83,14.83,0,0,0,10.41,38.7a8.46,8.46,0,0,0,1.05,16.86H49.68a6.41,6.41,0,0,0,6.14-6.43A6.31,6.31,0,0,0,50.36,42.88ZM42.29,18a12.9,12.9,0,0,1,7.77,6,12.94,12.94,0,0,1-1.48,14.89,10.67,10.67,0,0,0-6-4.1l-.1,0c-.33-.08-.66-.14-1-.19l-.27,0A8.62,8.62,0,0,0,40,34.48c-.39,0-.75,0-1.13,0A14.63,14.63,0,0,0,27,25.72,12.74,12.74,0,0,1,42.29,18Zm7.34,35.58H11.46a6.46,6.46,0,0,1-.13-12.91h.95l.05-.93A13,13,0,0,1,25.24,27.63a12.1,12.1,0,0,1,1.21.06l.27,0c.35,0,.69.09,1,.16l.13,0A12.93,12.93,0,0,1,38.14,40.53a10.29,10.29,0,0,1-.56,3.8,1,1,0,0,0,.56,1.3,1,1,0,0,0,.37.07,1,1,0,0,0,.93-.62,12.39,12.39,0,0,0,.7-4.55,15.06,15.06,0,0,0-.57-4.05H40a7.17,7.17,0,0,1,1,.07l.2,0A8.57,8.57,0,0,1,47.49,41l.47.86A9,9,0,0,1,48.52,44l.11.87h.88a4.37,4.37,0,0,1,4.31,4.31A4.41,4.41,0,0,1,49.63,53.56Z"/></svg>`;
        }
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M60.79,31.69a1,1,0,0,0-1.1-.34,9.53,9.53,0,0,1-6.23-18,1,1,0,0,0,.64-1,1,1,0,0,0-.7-.92,13.69,13.69,0,0,0-8.74.14h0a14,14,0,0,0-9.44,12.18,15.55,15.55,0,0,0-5.78-2.25c-.25-.05-.49-.09-.74-.12l-.56-.06c-.47,0-.93-.07-1.41-.07a15.88,15.88,0,0,0-15.36,11.8.24.24,0,0,1,0,.08c-.1.4-.19.8-.26,1.22,0,.19-.06.38-.09.58s-.06.29-.07.43A8.92,8.92,0,0,0,12,53.18H52.83a6.63,6.63,0,0,0,6.55-6.68,6.78,6.78,0,0,0-5.83-6.76,11.33,11.33,0,0,0-.38-1.33l.67-.16a13.78,13.78,0,0,0,7-5.41A1,1,0,0,0,60.79,31.69ZM57.38,46.5a4.62,4.62,0,0,1-4.55,4.68H12a6.92,6.92,0,0,1-.13-13.83h.94l.05-.94c0-.3.06-.59.09-.89s0-.38.07-.57c0,0,0,0,0-.06a14,14,0,0,1,13.71-11.6c.42,0,.83,0,1.24.06l.53.06.61.1.73.14.13,0a13.82,13.82,0,0,1,5.52,2.79s.05.08.09.1a13.63,13.63,0,0,1,1.25,1.16l0,.05a12.17,12.17,0,0,1,1,1.23l.18.24a14.1,14.1,0,0,1,.87,1.39.54.54,0,0,1,0,.11,14.27,14.27,0,0,1,.66,1.43,14,14,0,0,1,1,5.11A11.81,11.81,0,0,1,40,41.42a1,1,0,0,0,.6,1.29,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66,13.6,13.6,0,0,0,.73-4.81A16,16,0,0,0,42,32.9h.57a8.11,8.11,0,0,1,1.21.09l.17,0a9.29,9.29,0,0,1,6.92,5.14,1,1,0,0,0,.17.25,8.93,8.93,0,0,1,.68,2.43l.12.86h.88A4.76,4.76,0,0,1,57.38,46.5ZM53.26,36.33l-.94.23A11.28,11.28,0,0,0,44.14,31l-.22,0a12.44,12.44,0,0,0-1.37-.09c-.44,0-.84,0-1.26,0-.1-.23-.22-.46-.33-.68a14.63,14.63,0,0,0-.75-1.35l0-.07a16.07,16.07,0,0,0-3-3.56,12.06,12.06,0,0,1,8.15-11.78,11.94,11.94,0,0,1,4.86-.64A11.52,11.52,0,0,0,45.93,26a11.68,11.68,0,0,0,11.54,7.78A11.93,11.93,0,0,1,53.26,36.33Z"/></svg>`;

      case 1006:
      case 1009:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,37.35a12.28,12.28,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.25-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.22-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.58,8.58,0,0,1,3,.81,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,18.09a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,22l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,37.32l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/></svg>`;

      case 1030:
      case 1135:
      case 1147:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,29.39a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.52,0-1.05,0-1.56.07a16.24,16.24,0,0,0-10.35,5l-.12.12c-.23.25-.45.51-.67.78l-.37.45c-.13.17-.25.34-.37.52s-.38.55-.56.83l-.13.23a15.9,15.9,0,0,0-2.05,5.6s0,.07,0,.1c0,.23-.08.46-.11.69a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.91a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.89,8.89,0,0,1,3,.82,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.42,16.42,0,0,0,33,10.13a6.73,6.73,0,0,1,4.82-2,7,7,0,0,1,6.83,5.9l.17,1.08,1.06-.26a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,29.36l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/><path d="M55.32,44.49a4.08,4.08,0,0,0-2.92,1.25,2.1,2.1,0,0,1-1.59.75,2.13,2.13,0,0,1-1.59-.75,4,4,0,0,0-5.83,0,2,2,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-2.91-1.25,4.1,4.1,0,0,0-2.92,1.25,2,2,0,0,1-3.16,0,4.1,4.1,0,0,0-2.92-1.25,1,1,0,0,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,0,0,0-2Z"/><path d="M55.32,49.16a4.12,4.12,0,0,0-2.92,1.25,2.1,2.1,0,0,1-1.59.75,2.13,2.13,0,0,1-1.59-.75,4,4,0,0,0-5.83,0,2,2,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.06,2.06,0,0,1-3.18,0,4,4,0,0,0-5.83,0,2.1,2.1,0,0,1-1.58.75,2.12,2.12,0,0,1-1.58-.74,4.06,4.06,0,0,0-2.92-1.26,1,1,0,1,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,0,0,0-2Z"/><path d="M55.32,53.83a4.08,4.08,0,0,0-2.92,1.26,2.09,2.09,0,0,1-1.59.74,2.12,2.12,0,0,1-1.59-.74,4,4,0,0,0-5.83,0,2.07,2.07,0,0,1-3.17,0,4,4,0,0,0-5.83,0,2.08,2.08,0,0,1-3.18,0,4,4,0,0,0-5.82,0,2.08,2.08,0,0,1-3.18,0,4,4,0,0,0-5.83,0,2.06,2.06,0,0,1-3.16,0,4.06,4.06,0,0,0-2.92-1.26,1,1,0,1,0,0,2,2.12,2.12,0,0,1,1.59.75,4,4,0,0,0,5.82,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2,2,0,0,1,3.17,0,4,4,0,0,0,5.83,0,2.06,2.06,0,0,1,3.18,0,4,4,0,0,0,5.83,0,2.13,2.13,0,0,1,1.59-.75,1,1,0,1,0,0-2Z"/></svg>`;

      case 1063:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1198:
      case 1201:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,33.09a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.25-.47.52-.69.79l-.35.43c-.14.18-.26.36-.39.54s-.37.54-.54.81l-.15.25a15.84,15.84,0,0,0-2,5.59s0,.07,0,.1c0,.23-.08.46-.11.69a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.46l.91,0,.06-.91a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.83,8.83,0,0,1,3,.82,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.43,16.43,0,0,0,33,13.83a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,33.06l-.39.86.83.44a4.93,4.93,0,0,1-2.25,9.25Z"/><path d="M26.47,48.16a1,1,0,0,0-1.27.61l-1.42,4a1,1,0,0,0,.61,1.28,1.26,1.26,0,0,0,.33.05,1,1,0,0,0,.94-.66l1.42-4A1,1,0,0,0,26.47,48.16Z"/><path d="M39.64,48.17a1,1,0,0,0-1.29.58l-1.54,4a1,1,0,0,0,.57,1.29,1.13,1.13,0,0,0,.36.06,1,1,0,0,0,.94-.64l1.53-4A1,1,0,0,0,39.64,48.17Z"/></svg>`;

      case 1066:
      case 1069:
      case 1204:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1255:
      case 1279:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.34,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M24.9,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,24.9,49.81Z"/><path d="M39.1,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,39.1,49.81Z"/></svg>`;

      case 1072:
      case 1150:
      case 1153:
      case 1240:
      case 1249:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.25a15.79,15.79,0,0,0-2,5.58s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.93,6.93,0,0,0,3.94-12.51Zm-4,10.51h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81,8,8,0,0,1,3.68,10.63,1,1,0,0,0,.47,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.08,1.06-.26a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M23.77,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.58,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.93-.65l1.54-4A1,1,0,0,0,23.77,46.4Z"/><path d="M42.36,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.58,1.29.91.91,0,0,0,.35.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.36,46.4Z"/><path d="M33.7,46.39a1,1,0,0,0-1.28.6L29.7,54.57a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l2.72-7.58A1,1,0,0,0,33.7,46.39Z"/></svg>`;

      case 1168:
      case 1192:
      case 1195:
      case 1243:
      case 1246:
      case 1252:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.27,16.27,0,0,0-10.36,5l-.11.1c-.23.26-.46.52-.67.79a4.94,4.94,0,0,0-.36.44A6.42,6.42,0,0,0,14,18c-.19.27-.38.54-.55.82,0,.08-.1.16-.14.24a15.71,15.71,0,0,0-2.05,5.6l0,.08c0,.24-.08.47-.11.7a9.23,9.23,0,0,0,1,18.39H54.24a6.93,6.93,0,0,0,3.94-12.51Zm-4,10.51h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.86,8.86,0,0,1,3,.81,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.09,1.06-.27a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M25.79,46.4A1,1,0,0,0,24.5,47L23,51a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.93-.65l1.54-4A1,1,0,0,0,25.79,46.4Z"/><path d="M42.6,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.6,46.4Z"/><path d="M34.54,46.4a1,1,0,0,0-1.29.58l-2.84,7.58A1,1,0,0,0,31,55.85a1,1,0,0,0,1.29-.59l2.84-7.58A1,1,0,0,0,34.54,46.4Z"/><path d="M17.36,46.39a1,1,0,0,0-1.28.6l-2.72,7.58a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66L18,47.67A1,1,0,0,0,17.36,46.39Z"/><path d="M50.05,46.4a1,1,0,0,0-1.29.58l-2.84,7.58a1,1,0,0,0,.59,1.29,1,1,0,0,0,.35.06,1,1,0,0,0,.93-.65l2.85-7.58A1,1,0,0,0,50.05,46.4Z"/></svg>`;

      case 1171:
      case 1273:
      case 1276:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,31.32a12.37,12.37,0,0,0,.93-4.59,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.7,8.7,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.27,16.27,0,0,0-10.36,5l-.11.1c-.23.26-.46.52-.67.79a4.94,4.94,0,0,0-.36.44A6.42,6.42,0,0,0,14,18c-.19.27-.38.54-.55.82,0,.08-.1.16-.14.24a15.71,15.71,0,0,0-2.05,5.6l0,.08c0,.24-.08.47-.11.7a9.23,9.23,0,0,0,1,18.39H22.23a1,1,0,1,0,0-2H12.17a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1,14.72,14.72,0,0,1-.66,4.32A1,1,0,0,0,41.83,33a1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.86,8.86,0,0,1,3,.81,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.34,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.29,10.28,10.28,0,0,0-4.3-1A16.45,16.45,0,0,0,33,12.05a6.77,6.77,0,0,1,4.83-2A7,7,0,0,1,44.69,16l.17,1.09,1.06-.27a4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,31.28l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24H31.94a1,1,0,1,0,0,2h22.3a6.93,6.93,0,0,0,3.94-12.51Z"/><path d="M42.6,46.4a1,1,0,0,0-1.29.57l-1.54,4a1,1,0,0,0,.57,1.29.92.92,0,0,0,.36.07,1,1,0,0,0,.94-.65l1.54-4A1,1,0,0,0,42.6,46.4Z"/><path d="M34.54,46.4a1,1,0,0,0-1.29.58l-2.84,7.58A1,1,0,0,0,31,55.85a1,1,0,0,0,1.29-.59l2.84-7.58A1,1,0,0,0,34.54,46.4Z"/><path d="M17.36,46.39a1,1,0,0,0-1.28.6l-2.72,7.58a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66L18,47.67A1,1,0,0,0,17.36,46.39Z"/><path d="M50.05,46.4a1,1,0,0,0-1.29.58l-2.84,7.58a1,1,0,0,0,.59,1.29,1,1,0,0,0,.35.06,1,1,0,0,0,.93-.65l2.85-7.58A1,1,0,0,0,50.05,46.4Z"/><path d="M30.83,36.54a1.07,1.07,0,0,0-1-1.08h-7l4.64-10.32a.93.93,0,0,0-.59-1.27,1,1,0,0,0-1.38.49l-5.3,11.79a1.08,1.08,0,0,0,.59,1.38,1,1,0,0,0,.39.07v0h7.1L23.17,51a1,1,0,0,0,.59,1.27,1.07,1.07,0,0,0,1.37-.59l5.56-14.62A1.11,1.11,0,0,0,30.83,36.54Z"/></svg>`;

      case 1087:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.13,32.45a12.22,12.22,0,0,0,.92-4.57,12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.58-6.63,8.65,8.65,0,0,0-6.91,3.3,16.53,16.53,0,0,0-3.49-.34c-.52,0-1.05,0-1.56.07a16.31,16.31,0,0,0-10.33,5l-.12.12c-.23.25-.45.51-.66.77l-.38.46-.36.51c-.2.28-.38.55-.56.84a2.53,2.53,0,0,0-.13.22,15.9,15.9,0,0,0-2.06,5.61v.07c0,.24-.08.46-.11.7a9.21,9.21,0,0,0,1,18.36h10a1,1,0,0,0,0-2h-10a7.22,7.22,0,0,1-.09-14.43l.91,0,.06-.9a14.38,14.38,0,0,1,28.72,1,14.65,14.65,0,0,1-.66,4.31,1,1,0,0,0,1,1.3,1,1,0,0,0,1-.71,16.61,16.61,0,0,0,.75-4.9,17.27,17.27,0,0,0-.19-2.4,8.84,8.84,0,0,1,3,.82,8,8,0,0,1,3.67,10.6,1,1,0,0,0,.47,1.33,1,1,0,0,0,.43.1,1,1,0,0,0,.9-.57A10,10,0,0,0,47.48,25.2a10.39,10.39,0,0,0-4.29-1A16.41,16.41,0,0,0,33,13.23a6.72,6.72,0,0,1,4.81-2,7,7,0,0,1,6.81,5.89l.17,1.08L45.89,18a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.62,10.62,0,0,1,56,32.42l-.39.86.83.44A4.92,4.92,0,0,1,54.15,43H31.94a1,1,0,1,0,0,2H54.19a6.93,6.93,0,0,0,3.94-12.5Z"/><path d="M31,36.54a1.07,1.07,0,0,0-1-1.08H23l4.64-10.32a.93.93,0,0,0-.59-1.27,1,1,0,0,0-1.38.49l-5.3,11.79A1.08,1.08,0,0,0,21,37.53a1,1,0,0,0,.39.07v0h7.1L23.34,51a1,1,0,0,0,.58,1.27,1.08,1.08,0,0,0,1.38-.59l5.56-14.62A1.11,1.11,0,0,0,31,36.54Z"/></svg>`;

      case 1114:
      case 1219:
        return `<?xml version="1.0" ?><svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.68,16.68,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.34,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.17,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M24.9,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,24.9,49.81Z"/><path d="M39.1,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,39.1,49.81Z"/><path d="M32,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,32,49.81Z"/></svg>`;

      case 1117:
        return `<?xml version="1.0" ?><svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34.53A12.28,12.28,0,0,0,59.11,30a12,12,0,0,0-12-12h-.63a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.3,16.4,16.4,0,0,0-3.49-.34c-.53,0-1.05,0-1.56.07a16.32,16.32,0,0,0-10.37,5l-.09.1c-.24.26-.47.52-.69.79s-.24.29-.35.44-.26.35-.39.53-.37.54-.54.82l-.15.24a15.91,15.91,0,0,0-2,5.59s0,.07,0,.11c0,.23-.08.45-.11.68a9.23,9.23,0,0,0,1,18.39H54.24a6.94,6.94,0,0,0,3.94-12.52Zm-4,10.52h-42a7.23,7.23,0,0,1-.09-14.45l.91,0,.06-.9a14.41,14.41,0,0,1,28.78,1A14.72,14.72,0,0,1,41.17,35a1,1,0,0,0,.66,1.25,1,1,0,0,0,.29.05,1,1,0,0,0,1-.71,16.73,16.73,0,0,0,.75-4.91,17.15,17.15,0,0,0-.19-2.4,8.8,8.8,0,0,1,3,.81A8,8,0,0,1,50.33,39.7,1,1,0,0,0,50.81,41a1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.41,10.41,0,0,0-4.3-1A16.45,16.45,0,0,0,33,15.27a6.77,6.77,0,0,1,4.83-2,7,7,0,0,1,6.83,5.9l.16,1.08L45.92,20a4.84,4.84,0,0,1,1.17-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34.5l-.39.86.83.45a4.93,4.93,0,0,1-2.25,9.24Z"/><path d="M15.72,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,15.72,49.81Z"/><path d="M23.86,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,23.86,49.81Z"/><path d="M32,49.81a1.44,1.44,0,1,0,1.44,1.44A1.43,1.43,0,0,0,32,49.81Z"/><path d="M40.14,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,40.14,49.81Z"/><path d="M48.28,49.81a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,48.28,49.81Z"/></svg>`;

      case 1222:
      case 1225:
      case 1237:
      case 1258:
      case 1261:
      case 1264:
      case 1282:
        return `<svg id="Expanded" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M58.18,34a12.32,12.32,0,0,0,.93-4.58,12,12,0,0,0-12-12h-.64a9,9,0,0,0-8.6-6.64,8.68,8.68,0,0,0-6.93,3.31,16.37,16.37,0,0,0-3.49-.35c-.53,0-1.05,0-1.56.08a16.21,16.21,0,0,0-10.36,5l-.11.11c-.23.25-.46.51-.67.78s-.25.29-.36.44-.26.35-.38.53-.38.54-.55.82c0,.08-.1.16-.14.24a15.83,15.83,0,0,0-2.05,5.61l0,.08c0,.23-.08.46-.11.7a9.23,9.23,0,0,0,1,18.39h.12a1,1,0,0,0,0-2h-.12A7.23,7.23,0,0,1,12.08,30l.15,0,.18,0,.18-.11.13-.08c.06-.06.1-.13.15-.19l.07-.11A.69.69,0,0,0,13,29.2a.32.32,0,0,0,0-.09,14.41,14.41,0,0,1,28.78,1,14.77,14.77,0,0,1-.66,4.32,1,1,0,0,0,.66,1.25,1,1,0,0,0,.29,0,1,1,0,0,0,1-.7,16.73,16.73,0,0,0,.75-4.91,17.41,17.41,0,0,0-.19-2.41,8.83,8.83,0,0,1,3,.82,8,8,0,0,1,3.67,10.63,1,1,0,0,0,.48,1.33.94.94,0,0,0,.43.1,1,1,0,0,0,.9-.57,10,10,0,0,0-4.63-13.3,10.55,10.55,0,0,0-4.3-1A16.42,16.42,0,0,0,33,14.72a6.7,6.7,0,0,1,4.82-2,7,7,0,0,1,6.83,5.91,1,1,0,0,0,1.23.81,4.88,4.88,0,0,1,1.18-.09,10,10,0,0,1,10,10A10.68,10.68,0,0,1,56,34a1,1,0,0,0,.44,1.3A4.93,4.93,0,0,1,54.2,44.5H51.83a1,1,0,0,0,0,2h2.41A6.94,6.94,0,0,0,58.18,34Z"/><path d="M29.93,44.5H25.59l3-3a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-3,3V38.75a1,1,0,0,0-2,0v4.33l-3-3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l3,3H16.43a1,1,0,0,0,0,2h4.34l-3,3a1,1,0,0,0,.7,1.7,1,1,0,0,0,.71-.29l3-3v4.34a1,1,0,0,0,2,0V47.91l3,3a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41l-3-3h4.34a1,1,0,1,0,0-2Z"/><path d="M47.57,44.5H43.23l3-3a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-3,3V38.75a1,1,0,0,0-2,0v4.33l-3-3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l3,3H34.07a1,1,0,1,0,0,2h4.34l-3,3a1,1,0,0,0,.7,1.7,1,1,0,0,0,.71-.29l3-3v4.34a1,1,0,0,0,2,0V47.91l3,3a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41l-3-3h4.34a1,1,0,0,0,0-2Z"/></svg>`;

      default:
        return null;
    }
  }

  // Call the API to extract the data in json
  async function loadJson(url) {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });

      if (!response.ok) {
        const error = new Error(`HTTP error! Status: ${response.status}`);
        error.originalError = await response.json();
        throw error;
      }
      const json = await response.json();
      return json;
    } catch (error) {
      const newError = new Error(
        `Error fetching or parsing JSON: ${error.message}`,
      );
      if (error.originalError) {
        newError.originalError = error.originalError;
      }
      throw newError;
    }
  }

  // Helper function processing json and parsing data
  function parseLocationData(url) {
    const loader = document.querySelector(".loader");
    loader.classList.add("shown");
    loadJson(url)
      .then((json) => {
        console.log(json);

        const todayWeather = {
          current: {
            city: json.location.name,
            country: json.location.country,
            conditionText: json.current.condition.text,
            conditionIcon: getIcon(
              json.current.condition.code,
              json.current.is_day,
            ),
            conditionCode: json.current.condition.code,
            feelsLikeC: json.current.feelslike_c,
            feelsLikeF: json.current.feelslike_f,
            tempC: json.current.temp_c,
            tempF: json.current.temp_f,
            localTime: json.location.localtime,
            humidity: json.current.humidity,
            visibility: json.current.vis_km,
            cloudiness: json.current.cloud,
            sunrise: json.forecast.forecastday[0].astro.sunrise,
            sunset: json.forecast.forecastday[0].astro.sunset,
            moonIllumination:
              json.forecast.forecastday[0].astro.moon_illumination,
            isDay: json.current.is_day,
          },
          forecast: [
            {
              day: "tomorrow",
              date: json.forecast.forecastday[1].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[1].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[1].day.condition.text,
              conditionCode: json.forecast.forecastday[1].day.condition.code,
              avgtemp_c: json.forecast.forecastday[1].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[1].day.avgtemp_f,
            },
            {
              day: "day after tomorrow",
              date: json.forecast.forecastday[2].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[2].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[2].day.condition.text,
              conditionCode: json.forecast.forecastday[2].day.condition.code,
              avgtemp_c: json.forecast.forecastday[2].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[2].day.avgtemp_f,
            },
            {
              day: "fourth day",
              date: json.forecast.forecastday[3].date,
              conditionIcon: getIcon(
                json.forecast.forecastday[3].day.condition.code,
                1,
              ),
              conditionText: json.forecast.forecastday[3].day.condition.text,
              conditionCode: json.forecast.forecastday[3].day.condition.code,
              avgtemp_c: json.forecast.forecastday[3].day.avgtemp_c,
              avgtemp_f: json.forecast.forecastday[3].day.avgtemp_f,
            },
          ],
        };

        console.log(todayWeather);

        createDom.deleteDynamicDomElements();
        createDom.createDynamicDomElements(
          createDom.defineDynamicDomTree(todayWeather),
          document.querySelector(".wrapper"),
        );
        loader.classList.remove("shown");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.originalError) {
          console.log("Original error object: ", error.originalError);
        }
        loader.classList.remove("shown");
      });
  }

  // Show data based on user location during page load
  function showDefaultLocationData() {
    const cityName = "London";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${cityName}&days=4`;
    parseLocationData(url);
  }

  // Show data based on user search
  function showSearchedLocationData() {
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const cityName = document.querySelector("#search");
      const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${cityName.value}&days=4`;
      parseLocationData(url);
    });
  }

  // Show data based on determiend user's location
  async function showUserLocationData() {
    let ipAddress;
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      showDefaultLocationData();
    }

    if (ipAddress) {
      try {
        const locationResponse = await fetch(
          `https://ipapi.co/${ipAddress}/json/`,
        );
        const locationData = await locationResponse.json();
        const { latitude, longitude } = locationData;
        const url = `https://api.weatherapi.com/v1/forecast.json?key=027eb181bc914763a0e140125232911&q=${latitude},${longitude}&days=4`;
        parseLocationData(url);
        return;
      } catch (error) {
        showDefaultLocationData();
      }
    }
    showDefaultLocationData();
  }

  return {
    showSearchedLocationData,
    showUserLocationData,
    showDefaultLocationData,
  };
})();

export default WeatherDataModule;
