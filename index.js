const pdf = 'document.pdf';

const pageNum = document.querySelector('#page_num');
const pageCount = document.querySelector('#page_count');
const currentPage = document.querySelector('#current_page');
const previousPage = document.querySelector('#prev_page');
const nextPage = document.querySelector('#next_page');
const zoomIn = document.querySelector('#zoom_in');
const zoomOut = document.querySelector('#zoom_out');

const initialState = {
    pdfDoc: null,
    currentPage: 1,
    pageCount: 0,
    zoom: 1
}