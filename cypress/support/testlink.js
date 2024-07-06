const axios = require('axios');

// Konfiguracja TestLinka
const TESTLINK_API_URL = 'http://testlink/lib/api/xmlrpc/v1/xmlrpc.php';
const TESTLINK_API_KEY = 'b4486f7fffbfe0be0fbbd81af048f755';

// Funkcja do przesyłania wyników testu
async function reportTestResult(testCaseId, testPlanId, buildId, status, notes) {
  try {
    const response = await axios.post(TESTLINK_API_URL, {
      method: 'tl.reportTCResult',
      params: {
        devKey: TESTLINK_API_KEY,
        testcaseid: testCaseId,
        testplanid: testPlanId,
        buildid: buildId,
        status: status, // 'p' dla pozytywnego, 'f' dla negatywnego
        notes: notes,
        guess: true
      }
    });

    if (response.data) {
      console.log('Wynik testu przesłany do TestLinka:', response.data);
    }
  } catch (error) {
    console.error('Błąd podczas przesyłania wyniku testu do TestLinka:', error);
  }
}

module.exports = { reportTestResult };
