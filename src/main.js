import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector("input");

formEl.addEventListener("submit", handleSubmit);

hideLoadMoreButton();
let currentPage = 1;

function handleSubmit(event) {
    event.preventDefault();

    const query = inputEl.value.toLowerCase().trim();
    if (!query) return;
    currentPage = 1;
    clearGallery();
    showLoader();
    getImagesByQuery(query, currentPage)
        .then(data => {
            if (data.hits.length > 0) {
                createGallery(data.hits);
                inputEl.value = "";
                currentPage += 1;
                showLoadMoreButton();
            } else {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                });
            };
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please, try again!",
                position: "topRight",
            });
        })
        .finally(() => hideLoader()); 
};
