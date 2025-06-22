import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector("input");
const loadBtn = document.querySelector(".load-btn");

formEl.addEventListener("submit", handleSubmit);
loadBtn.addEventListener("click", handleClick);

hideLoadMoreButton();
let currentPage = 1;
let currentQuery = "";
let totalPages;
const perPage = 15;

async function handleSubmit(event) {
    event.preventDefault();

    const query = inputEl.value.toLowerCase().trim();
    currentQuery = query;
    currentPage = 1;

    if (!query) {
        iziToast.warning({
            title:"Info",
            message: "Please, enter a searching word!",
            position:"topRight",
        })
        return;
    };

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage)
        console.log(data);
        if (data.hits.length > 0) {
            createGallery(data.hits);
            inputEl.value = "";
            totalPages = Math.ceil(data.totalHits / perPage);
            console.log(totalPages);
            showLoadMoreButton();
            if (currentPage > totalPages) {
                hideLoadMoreButton();
            }
        } else {
            hideLoadMoreButton();
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
        };
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please, try again!",
            position: "topRight",
        });
    } finally {
        hideLoader()
    };
};

async function handleClick() {
    currentPage += 1;
    
    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        totalPages = Math.ceil(data.totalHits / perPage);
        createGallery(data.hits);
        if (currentPage >= totalPages) {
            hideLoadMoreButton();
            iziToast.info({
                title: "Info",
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });
        }

        const imgCard = document.querySelector(".gallery-item");
        const imgCardHeight = imgCard.getBoundingClientRect().height;
        window.scrollBy({
            top: imgCardHeight * 2,
            behavior: "smooth",
        });

    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please, try again!",
            position: "topRight",
        });
    }
}