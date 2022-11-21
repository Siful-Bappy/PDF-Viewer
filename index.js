const pdf = "document.pdf";

const pageNum = document.querySelector("#page_num");
const pageCount = document.querySelector("#page_count");
const currentPage = document.querySelector("#current_page");
const previousPage = document.querySelector("#prev_page");
const nextPage = document.querySelector("#next_page");
const zoomIn = document.querySelector("#zoom_in");
const zoomOut = document.querySelector("#zoom_out");

const initialState = {
  pdfDoc: null,
  currentPage: 1,
  pageCount: 0,
  zoom: 1,
};

pdfjsLib
  .getDocument(pdf)
  .promise.then((data) => {
    initialState.pdfDoc = data;
    // console.log("pdfDocument", initialState.pdfDoc);

    pageCount.textContent = initialState.pdfDoc.numPages;
    // console.log(pageCount.textContent);
    //   renderPage();
  })
  .catch((err) => {
    alert(err.message);
  });

// console.log(pdf)
// const loadingTask = pdfjsLib.getDocument(pdf);
// console.log(loadingTask);
