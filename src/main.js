import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector("input");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = inputEl.value.toLowerCase().trim();
    if (!query) return;
    
    clearGallery();
    showLoader();
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length > 0) {
                createGallery(data.hits);
                inputEl.value = "";
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
