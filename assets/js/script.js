'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// service section toggle
const serviceToggle = document.querySelector("[data-service-toggle]");
const serviceList = document.querySelector("[data-service-list]");
const serviceIcon = document.querySelector("[data-service-icon]");

if (serviceToggle && serviceList) {
  serviceList.classList.add("collapsed"); // Start collapsed
  serviceToggle.addEventListener("click", function () {
    serviceList.classList.toggle("collapsed");
    if (serviceIcon) {
      serviceIcon.classList.toggle("rotated");
    }
  });
}

// blog modal variables
const blogItems = document.querySelectorAll("[data-blog-item]");
const blogModalContainer = document.querySelector("[data-blog-modal-container]");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogOverlay = document.querySelector("[data-blog-overlay]");
const blogModalImg = document.querySelector("[data-blog-modal-img]");
const blogModalTitle = document.querySelector("[data-blog-modal-title]");
const blogModalMeta = document.querySelector("[data-blog-modal-meta]");
const blogModalText = document.querySelector("[data-blog-modal-text]");

// blog modal toggle function
const blogModalFunc = function () {
  blogModalContainer.classList.toggle("active");
  blogOverlay.classList.toggle("active");
}

// add click event to all blog items
blogItems.forEach(function(blogItem) {
  blogItem.addEventListener("click", function (e) {
    e.preventDefault();
    
    // Get the blog ID from the clicked item
    const blogId = this.getAttribute("data-blog-id");
    
    // Get the image, title, and text from the clicked blog item
    const blogImg = this.querySelector("[data-blog-img]");
    const blogTitle = this.querySelector("[data-blog-title]");
    
    // Get the content template for this blog post
    const blogContentTemplate = document.querySelector(`[data-blog-content="${blogId}"]`);
    
    if (blogContentTemplate) {
      // Update modal image
      if (blogModalImg && blogImg) {
        blogModalImg.src = blogImg.src;
        blogModalImg.alt = blogImg.alt;
      }
      
      // Update modal content from template
      const templateMeta = blogContentTemplate.querySelector(".blog-meta");
      const templateTitle = blogContentTemplate.querySelector("h2");
      const templateText = blogContentTemplate.querySelector("div[style*='color: var(--light-gray)']");
      
      if (blogModalMeta && templateMeta) {
        blogModalMeta.innerHTML = templateMeta.innerHTML;
      }
      
      if (blogModalTitle && templateTitle) {
        blogModalTitle.textContent = templateTitle.textContent;
      }
      
      if (blogModalText && templateText) {
        blogModalText.innerHTML = templateText.innerHTML;
      }
    }
    
    blogModalFunc();
  });
});

// add click event to blog modal close button
if (blogModalCloseBtn) {
  blogModalCloseBtn.addEventListener("click", blogModalFunc);
}
if (blogOverlay) {
  blogOverlay.addEventListener("click", blogModalFunc);
}

// portfolio project image preview (full-size)
const projectPreviewModal = document.querySelector("[data-project-preview-modal]");
const projectPreviewOverlay = document.querySelector("[data-project-preview-overlay]");
const projectPreviewClose = document.querySelector("[data-project-preview-close]");
const projectPreviewImg = document.querySelector("[data-project-preview-img]");
const projectPreviewTriggers = document.querySelectorAll("[data-project-preview]");

const openProjectPreviewModal = function (src, alt) {
  if (!projectPreviewModal || !projectPreviewOverlay || !projectPreviewImg) { return; }
  projectPreviewImg.src = src;
  projectPreviewImg.alt = alt || "";
  projectPreviewModal.classList.add("active");
  projectPreviewOverlay.classList.add("active");
};

const closeProjectPreviewModal = function () {
  if (!projectPreviewModal || !projectPreviewOverlay) { return; }
  projectPreviewModal.classList.remove("active");
  projectPreviewOverlay.classList.remove("active");
};

projectPreviewTriggers.forEach(function (fig) {
  const activate = function () {
    const img = fig.querySelector("img");
    if (!img || !img.src) { return; }
    openProjectPreviewModal(img.currentSrc || img.src, img.alt);
  };
  fig.addEventListener("click", activate);
  fig.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  });
});

if (projectPreviewClose) {
  projectPreviewClose.addEventListener("click", closeProjectPreviewModal);
}
if (projectPreviewOverlay) {
  projectPreviewOverlay.addEventListener("click", closeProjectPreviewModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && projectPreviewModal && projectPreviewModal.classList.contains("active")) {
    closeProjectPreviewModal();
  }
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}