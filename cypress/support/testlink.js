const axios = require('axios');
const convert = require('xml-js');

// Konfiguracja TestLinka
const TESTLINK_API_URL = 'http://testlink:80/lib/api/xmlrpc/v1/xmlrpc.php'; // Adres IP kontenera TestLinka
const TESTLINK_API_KEY = 'b4486f7fffbfe0be0fbbd81af048f755';

// Funkcja do przesyłania wyników testu
async function reportTestResult(testCaseId, testPlanId, buildId, status, notes) {
  try {
    // Tworzysz strukturę XML jako obiekt JavaScript
    const xmlObject = {
      methodCall: {
        methodName: { _text: 'tl.reportTCResult' },
        params: {
          param: {
            value: {
              struct: {
                member: [
                  { name: { _text: 'devKey' }, value: { string: { _text: TESTLINK_API_KEY } } },
                  { name: { _text: 'testcaseid' }, value: { string: { _text: testCaseId } } },
                  { name: { _text: 'testplanid' }, value: { string: { _text: testPlanId } } },
                  { name: { _text: 'buildid' }, value: { string: { _text: buildId } } },
                  { name: { _text: 'status' }, value: { string: { _text: status } } },
                  { name: { _text: 'notes' }, value: { string: { _text: notes } } },
                  { name: { _text: 'guess' }, value: { boolean: { _text: 'true' } } }
                ]
              }
            }
          }
        }
      }
    };

    // Konwertujesz obiekt XML na tekst XML
    const xmlData = convert.js2xml(xmlObject, { compact: true, ignoreComment: true, spaces: 4 });

    // Wysyłasz żądanie POST z XML do TestLinka
    const response = await axios.post(TESTLINK_API_URL, xmlData, {
      headers: {
        'Content-Type': 'text/xml',
      }
    });

    // Obsługujesz odpowiedź
    if (response.data) {
      console.log('Wynik testu przesłany do TestLinka:', response.data);
    }
  } catch (error) {
    console.error('Błąd podczas przesyłania wyniku testu do TestLinka:', error);
  }
}

module.exports = { reportTestResult };
