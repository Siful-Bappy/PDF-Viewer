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
    renderPage();
  })
  .catch((err) => {
    alert(err.message);
  });

// console.log(pdf)
// const loadingTask = pdfjsLib.getDocument(pdf);
// console.log(loadingTask);

const renderPage = () => {

  initialState.pdfDoc.getPage(initialState.currentPage).then((page) => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const viewpoart = page.getViewport({
      scale: initialState.zoom,
    });

    // console.log(viewpoart);
    canvas.height = viewpoart.height;
    canvas.width = viewpoart.width;

    var outputScale = window.devicePixelRatio || 1;
    var transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    const renderCtx = {
      canvasContext: ctx,
      transform: transform,
      viewport: viewpoart,
    };
    console.log(canvas);

    page.render(renderCtx);
    pageNum.textContent = initialState.currentPage;
  });
};
