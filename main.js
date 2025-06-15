const inputDocx = document.getElementById('inputDocx');
const textOutput = document.getElementById('textOutput');
const btnExportPdf = document.getElementById('btnExportPdf');

inputDocx.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);
  const docXml = await zip.file("word/document.xml").async("string");
  const text = extractTextFromDocxXml(docXml);

  textOutput.value = text;
});

btnExportPdf.addEventListener('click', () => {
  const opt = {
    margin: 1,
    filename: 'documento.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  const element = document.createElement('div');
  element.style.whiteSpace = "pre-wrap";
  element.textContent = textOutput.value;

  html2pdf().set(opt).from(element).save();
});

function extractTextFromDocxXml(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "application/xml");

  let fullText = "";
  const paragraphs = xmlDoc.getElementsByTagName("w:p");

  for (let p of paragraphs) {
    for (let node of p.childNodes) {
      if (node.nodeName === "w:r") {
        for (let child of node.childNodes) {
          if (child.nodeName === "w:t") {
            fullText += child.textContent;
          } else if (child.nodeName === "w:tab") {
            fullText += "\t";
          }
        }
      }
    }
    fullText += "\n"; 
  }

  return fullText.trim();
}
